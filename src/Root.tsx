import './tailwind.css';
import { Composition, staticFile } from "remotion";
import { AudiogramComposition, fps } from "./components/root-composition";
import "./style.css";
import { AudioGramSchema } from './schema';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Audiogram"
        component={AudiogramComposition}
        fps={fps}
        width={1080}
        height={1080}
        schema={AudioGramSchema}
        defaultProps={{
          // Audio settings
          audioOffsetInSeconds: 0,

          // Title settings
          audioFileName: staticFile("audio.wav"),
          coverImgFileName: staticFile("cover.png"),
          titleText:
            "We talk frontend here #42 - Generative UI",
          titleColor: "#d1b2b9",

          // background
          backgroundColor: '#2a5148',

          // Subtitles settings
          subtitlesFileName: staticFile("audio.srt"),
          onlyDisplayCurrentSentence: true,
          subtitlesTextColor: "#d1b2b9",
          subtitlesLinePerPage: 2,
          subtitlesZoomMeasurerSize: 10,
          subtitlesLineHeight: 48,

          // Wave settings
          waveColor: "#d1b2b9",
          waveFreqRangeStartIndex: 7,
          waveLinesToDisplay: 60,
          waveNumberOfSamples: "256", // This is string for Remotion controls and will be converted to a number
          mirrorWave: true,
          durationInSeconds: 60,
        }}
        // Determine the length of the video based on the duration of the audio file
        calculateMetadata={({ props }) => {
          return {
            durationInFrames: props.durationInSeconds * fps,
            props,
          };
        }}
      />
    </>
  );
};
