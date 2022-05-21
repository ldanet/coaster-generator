import { lineEngravingColor, Weights } from "./constants";
import Pattern from "./Pattern";

type CoasterProps = { seed: string; weights: Weights };
const Coaster = ({ seed, weights }: CoasterProps) => (
  <svg width="90.2mm" height="90.2mm" viewBox="0 0 90.2 90.2" id="coaster">
    <rect
      style={{
        fill: "#f1e4cd",
        stroke: lineEngravingColor,
        strokeWidth: "0.2"
      }}
      width="90"
      height="90"
      x="0.1"
      y="0.1"
      rx="18"
      ry="18"
    />
    <rect
      style={{
        fill: "none",
        stroke: lineEngravingColor,
        strokeWidth: "0.2"
      }}
      width="80"
      height="80"
      x="5.1"
      y="5.1"
      rx="13"
      ry="13"
    />
    <Pattern weights={weights} seed={seed} />
  </svg>
);

export default Coaster;
