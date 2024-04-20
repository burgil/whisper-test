# Cloudflare Very High Quality Speech Recognition Solution with OpenAI Whisper running for free on a serverless cloudflare worker!

Simply create a new cloudflare worker, add the AI binding in the Settings > Functions > AI Bindings section

And run the script above to transcribe my voice super fast!

From tests on average it can tage 800ms but can go between 600ms and sometimes even 4000ms. not that noticable, in my opinion it is finally good (and cheap) enough to use STT in your applications!

On cloudflare you pay for each 1k neurons you use $0.011 (See updated pricing [here](https://developers.cloudflare.com/workers-ai/platform/pricing/))

And you also get 10k Neurons every day for free.

I tested this example 10 times and generated about 1.7K Neurons.
