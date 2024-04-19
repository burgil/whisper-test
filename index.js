import { Ai } from './vendor/@cloudflare/ai.js';

export default {
  async fetch(request, env) {
    var t0 = performance.now()
    console.log("running...")
    const audioResponse = await fetch(
      'https://github.com/burgil/whisper-test/raw/main/test1.mp3'
    );
    // https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav
    const blob = await audioResponse.arrayBuffer();

    const ai = new Ai(env.AI);
    const inputs = {
      audio: [...new Uint8Array(blob)]
    };
    const response = await ai.run('@cf/openai/whisper', inputs);
    console.log("ok...", response.text)
    var t1 = performance.now()
    console.log("Call to speech recognition took " + (t1 - t0) + " milliseconds.")
    return Response.json({ text: response.text }); //Response.json({ inputs, response });
  }
};
