# How to use this Repo

This repo contains a remotion project that generates the said audiogram for the podcast and a python script that generates the audio subtitle available in the directory `subtitle-script/whisper_run.py`

## Installation

### 1. Clone the Repository

First, clone this repository to your local machine

### 2. Install Dependencies

Install the dependencies using npm:

```bash
npm install
```

### 3. Run Remotion Studio

Run the remotion studio using:

```bash
npm start
```

This will open up an interactive remotion studio with a sample audio and subtitle. From here you can configure most of the inputs for your video.
If you're new to remotion please check out their [official docs](https://www.remotion.dev/docs/) before proceeding. 

### 4. Add your own audio file

Once you've generated audio using notebook LM audio overview, download and add it to the `public` folder. This will ensure that the audio is available for remotion to use.

### 5. Run the subtitle generation script

1. Create your own virtual env and install openai's whisper:

```bash
pip install git+https://github.com/openai/whisper.git 
```
for more information follow the steps in the (official repo)[https://github.com/openai/whisper].

2. Then install (ffmpeg)[https://ffmpeg.org/] on your system. 

3. Modify the audio file name in the script (ideally the audio file should be inside public folder) and run:

```bash
python subtitle-script/whisper-run.py
```
this will create an srt file of the same name as the audio file in the public folder

### 6. Rendering the video

Once you have both the audio and the srt file, render using the remotion studio or remotion cli.
For more help to use the cli, follow the official (remotion docs)[https://www.remotion.dev/docs/renderer].
