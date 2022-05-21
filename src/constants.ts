export const areaEngravingColor = "#e5c880";
export const lineEngravingColor = "#d8b571";

export type WaveProps = {
  transform?: string;
  type: WaveType;
};

export type WaveType =
  | "none"
  | "whole"
  | "topTopLeft"
  | "topTopRight"
  | "topLeft"
  | "topRight"
  | "leftLeft"
  | "rightRight"
  | "left"
  | "right"
  | "bottomLeft"
  | "bottomRight"
  | "bottomBottomLeft"
  | "bottomBottomRight";

export const kinds = ["a", "b", "c", "d"] as const;

export type Kind = typeof kinds[number];

export type Weights = {
  [K in Kind]: number;
};
