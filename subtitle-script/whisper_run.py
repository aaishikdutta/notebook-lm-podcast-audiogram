import whisper
import os
from whisper.utils import get_writer

model = whisper.load_model('turbo')

whisper.DecodingOptions(language='en', fp16='false', task='transcribe')
# replace with your audio path
# ideally the audio should be the public path for remotion access 
audio = 'public/audio.wav'
result = model.transcribe(audio, word_timestamps=True, verbose=True)

# Ensure the public directory path is correctly resolved
script_dir = os.path.dirname(os.path.abspath(__file__))
output_directory = os.path.join(script_dir, '../public')

word_options = {
"highlight_words": False,
"max_line_count": 1,
"max_words_per_line": 5
}

srt_writer = get_writer("srt", output_directory)
srt_writer(result, audio, word_options)

