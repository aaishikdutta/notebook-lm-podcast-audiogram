import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export type AudiogramCompositionSchemaType = z.infer<typeof AudioGramSchema>;

export const AudioGramSchema = z.object({
    durationInSeconds: z.number().positive(),
    audioOffsetInSeconds: z.number().min(0),
    subtitlesFileName: z.string().refine((s) => s.endsWith(".srt"), {
      message: "Subtitles file must be a .srt file",
    }),
    audioFileName: z.string().refine((s) => s.endsWith(".mp3") || s.endsWith(".wav"), {
      message: "Audio file must be a .mp3 file",
    }),
    coverImgFileName: z
      .string()
      .refine(
        (s) =>
          s.endsWith(".jpg") ||
          s.endsWith(".jpeg") ||
          s.endsWith(".png") ||
          s.endsWith(".bmp"),
        {
          message: "Image file must be a .jpg / .jpeg / .png / .bmp file",
        },
      ),
    backgroundColor: zColor(),
    titleText: z.string(),
    titleColor: zColor(),
    waveColor: zColor(),
    subtitlesTextColor: zColor(),
    subtitlesLinePerPage: z.number().int().min(0),
    subtitlesLineHeight: z.number().int().min(0),
    subtitlesZoomMeasurerSize: z.number().int().min(0),
    onlyDisplayCurrentSentence: z.boolean(),
    mirrorWave: z.boolean(),
    waveLinesToDisplay: z.number().int().min(0),
    waveFreqRangeStartIndex: z.number().int().min(0),
    waveNumberOfSamples: z.enum(["32", "64", "128", "256", "512"]),
  });