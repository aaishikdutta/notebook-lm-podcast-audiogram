import parseSRT, { SubtitleItem } from "parse-srt";
import { useMemo } from "react";
import { useVideoConfig } from "remotion";

export const useWindowedFrameSubs = (
    src: string,
    options: { windowStart: number; windowEnd: number },
  ) => {
    const { windowStart, windowEnd } = options;
    const config = useVideoConfig();
    const { fps } = config;
  
    const parsed = useMemo(() => parseSRT(src), [src]);
  
    return useMemo(() => {
      return parsed
        .map((item) => {
          const start = Math.floor(item.start * fps);
          const end = Math.floor(item.end * fps);
          return { item, start, end };
        })
        .filter(({ start }) => {
          return start >= windowStart && start <= windowEnd;
        })
        .map<SubtitleItem>(({ item, start, end }) => {
          return {
            ...item,
            start,
            end,
          };
        }, []);
    }, [fps, parsed, windowEnd, windowStart]);
  };