import { FC } from "react";
import { WaveProps, Kind } from "./constants";
import WaveA from "./WaveA";
import WaveB from "./WaveB";
import WaveC from "./WaveC";
import WaveD from "./WaveD";

export const Waves: { [K in Kind]: FC<WaveProps> } = {
  a: WaveA,
  b: WaveB,
  c: WaveC,
  d: WaveD,
};
