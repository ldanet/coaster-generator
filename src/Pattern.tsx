import seedrandom from "seedrandom";
import { WaveType, Kind, Weights } from "./constants";
import { Waves } from "./Waves";

// It sits on a hexagonal grid with radius 20
export const stepX = 10 * Math.sqrt(3);
export const stepY = 10;

// 45.1 is the centre of the coaster
export const offsetX = 45.1 - 4 * stepX;
export const offsetY = 5.1 - stepY;

export const getTransform = (row: number, col: number, type: WaveType) => {
  let x: number = 0,
    y: number = 0;
  if (type === "leftLeft" || type === "rightRight") {
    y = (row - 2) * stepY;
  } else if (type === "left" || type === "right") {
    y = (row - 3) * stepY;
  } else if (type === "whole") {
    y = offsetY + row * stepY;
    x = offsetX + (row % 2) * stepX + col * 2 * stepX;
  }
  return `translate(${x},${y})`;
};

const pattern: WaveType[][] = [
  ["none", "topTopLeft", "topTopRight", "none"],
  ["topLeft", "whole", "topRight", "none"],
  ["leftLeft", "whole", "whole", "rightRight"],
  ["left", "whole", "right", "none"],
  ["leftLeft", "whole", "whole", "rightRight"],
  ["left", "whole", "right", "none"],
  ["leftLeft", "whole", "whole", "rightRight"],
  ["bottomLeft", "whole", "bottomRight", "none"],
  ["none", "bottomBottomLeft", "bottomBottomRight", "none"],
];

const Pattern = ({ weights, seed }: { weights: Weights; seed: string }) => {
  const rng = seedrandom(seed);

  const waveArray: Kind[] = [
    ...new Array<"a">(weights.a).fill("a"),
    ...new Array<"b">(weights.b).fill("b"),
    ...new Array<"c">(weights.c).fill("c"),
    ...new Array<"d">(weights.d).fill("d"),
  ];
  const grid = new Array(9)
    .fill(new Array(4).fill(0))
    .map((arr) => arr.map(() => Math.floor(rng() * waveArray.length)));
  return (
    <>
      {grid.map((gridRow: number[], row) => {
        return gridRow.map((wave, col) => {
          const waveType = pattern[row][col] || "none";
          const kind = waveArray[wave];
          const Wave = Waves[kind];
          const transform = getTransform(row, col, waveType);
          return (
            <Wave key={`${row},${col}`} type={waveType} transform={transform} />
          );
        });
      })}
    </>
  );
};

export default Pattern;
