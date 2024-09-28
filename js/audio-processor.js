const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Funktion zum Laden und Dekodieren von Audiodaten
async function fetchAudio(file) {
  const response = await fetch(file);
  const arrayBuffer = await response.arrayBuffer();
  return await audioContext.decodeAudioData(arrayBuffer);
}

// Resample-Funktion
function resampleAudioBuffer(buffer, targetSampleRate) {
  if (buffer.sampleRate === targetSampleRate) {
    return buffer;  // Kein Resampling erforderlich
  }

  const durationInSeconds = buffer.duration;
  const lengthInSamples = Math.ceil(durationInSeconds * targetSampleRate);

  const offlineContext = new OfflineAudioContext(
    buffer.numberOfChannels,
    lengthInSamples,
    targetSampleRate
  );

  const bufferSource = offlineContext.createBufferSource();
  bufferSource.buffer = buffer;
  bufferSource.connect(offlineContext.destination);
  bufferSource.start();

  return offlineContext.startRendering();
}

// Audiodateien zusammenfügen und resamplen
async function stitchAudioFiles(files) {
  const targetSampleRate = audioContext.sampleRate; // Einheitliche Sample-Rate

  // Laden und Resamplen aller Audiodateien
  const audioBuffers = [];
  for (const file of files) {
    const buffer = await fetchAudio(file);
    const resampledBuffer = await resampleAudioBuffer(buffer, targetSampleRate);
    audioBuffers.push(resampledBuffer);
  }

  // Gesamtlänge berechnen
  const totalLength = audioBuffers.reduce((sum, buffer) => sum + buffer.length, 0);

  // Kombinierten AudioBuffer erstellen
  const numberOfChannels = audioBuffers[0].numberOfChannels;
  const combinedBuffer = audioContext.createBuffer(numberOfChannels, totalLength, targetSampleRate);

  // Audiodaten kopieren
  let offset = 0;
  for (const buffer of audioBuffers) {
    for (let channel = 0; channel < numberOfChannels; channel++) {
      combinedBuffer.getChannelData(channel).set(buffer.getChannelData(channel), offset);
    }
    offset += buffer.length;
  }

  return combinedBuffer;
}

// AudioBuffer in WAV konvertieren
function audioBufferToWav(audioBuffer) {
  const numOfChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;
  const blockAlign = numOfChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataLength = audioBuffer.length * blockAlign;

  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  let offset = 0;

  // RIFF Chunk
  writeString(view, offset, 'RIFF'); offset += 4;
  view.setUint32(offset, 36 + dataLength, true); offset += 4;
  writeString(view, offset, 'WAVE'); offset += 4;

  // fmt Chunk
  writeString(view, offset, 'fmt '); offset += 4;
  view.setUint32(offset, 16, true); offset += 4; // Subchunk1Size
  view.setUint16(offset, 1, true); offset += 2; // AudioFormat (PCM)
  view.setUint16(offset, numOfChannels, true); offset += 2; // NumChannels
  view.setUint32(offset, sampleRate, true); offset += 4; // SampleRate
  view.setUint32(offset, byteRate, true); offset += 4; // ByteRate
  view.setUint16(offset, blockAlign, true); offset += 2; // BlockAlign
  view.setUint16(offset, bitsPerSample, true); offset += 2; // BitsPerSample

  // data Chunk
  writeString(view, offset, 'data'); offset += 4;
  view.setUint32(offset, dataLength, true); offset += 4; // Subchunk2Size

  // PCM-Daten interleaven
  const channels = [];
  for (let i = 0; i < numOfChannels; i++) {
    channels.push(audioBuffer.getChannelData(i));
  }

  const sampleCount = audioBuffer.length;
  for (let i = 0; i < sampleCount; i++) {
    for (let channel = 0; channel < numOfChannels; channel++) {
      let sample = channels[channel][i];
      sample = Math.max(-1, Math.min(1, sample));
      sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
      view.setInt16(offset, sample, true);
      offset += 2;
    }
  }

  return new Blob([buffer], { type: 'audio/wav' });
}