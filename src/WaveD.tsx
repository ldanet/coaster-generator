import { WaveProps, lineEngravingColor } from "./constants";

const paths = {
  whole:
    "M 34.64386,10.000429 C 31.18437,4.023959 24.7267,0 17.32499,0 h 5e-5 C 9.92209,0 3.45805,4.022239 0,10.000429",
  topTopLeft:
    "M 40.657663,5.600669 C 40.53152,5.4299826 40.402065,5.2618922 40.269398,5.0964925 M 36.628964,6.9917889 C 35.971316,6.2749437 35.227688,5.6381834 34.414417,5.0979162",
  topTopRight:
    "M 49.938378,5.0965046 C 49.805436,5.2622301 49.675727,5.430657 49.54934,5.6016889",
  topLeft:
    "M 27.782334,15.100429 C 25.000456,10.29457 20.279878,6.7512538 14.688694,5.5475721",
  topRight:
    "M 75.514927,5.5483103 C 69.923352,6.7524727 65.200537,10.294381 62.420507,15.100429",
  leftLeft:
    "M 10.461828,25.100429 C 9.0986376,22.745438 7.2699183,20.693615 5.1013494,19.071697",
  rightRight:
    "m 85.098497,19.074046 c -2.167821,1.621358 -3.995727,3.672213 -5.357481,6.026383",
  left: "M 27.782334,35.100429 C 24.322846,29.12396 17.865176,25.1 10.463466,25.1 h 5e-5 c -1.8578969,0 -3.6566569,0.253338 -5.3636059,0.727354",
  right:
    "M 85.100156,25.825584 C 83.396115,25.352729 81.600452,25.1 79.745498,25.1 h 5e-5 c -7.402952,0 -13.86699,4.022237 -17.325041,10.000429",
  bottomLeft:
    "M 27.782334,75.100428 C 24.322846,69.123959 17.865176,65.099998 10.463466,65.099998 h 5e-5 c -1.8578985,0 -3.65666,0.253341 -5.3636101,0.727356",
  bottomRight:
    "m 85.100156,65.825583 c -1.704041,-0.472855 -3.499704,-0.725585 -5.354658,-0.725585 h 5e-5 c -7.402952,0 -13.86699,4.022241 -17.325041,10.00043",
  bottomBottomLeft:
    "m 45.102843,85.100429 c -3.459491,-5.976472 -9.91716,-10.00043 -17.318868,-10.00043 h 4.7e-5 c -6.660784,0 -12.561478,3.256185 -16.19645,8.263498",
  bottomBottomRight:
    "m 78.614211,83.362749 c -3.635044,-5.005679 -9.530069,-8.26275 -16.189222,-8.26275 h 5e-5 c -7.402949,0 -13.866989,4.022238 -17.32504,10.00043",
};
const WaveD = ({ transform, type }: WaveProps) => {
  if (type === "none" || type === "topTopLeft" || type === "topTopRight")
    return null;
  return (
    <path
      style={{
        fill: "none",
        stroke: lineEngravingColor,
        strokeWidth: "0.2",
      }}
      d={paths[type] || paths.whole}
      transform={transform}
    />
  );
};

export default WaveD;