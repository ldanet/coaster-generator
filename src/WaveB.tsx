import { WaveProps, lineEngravingColor } from "./constants";

const paths = {
  whole:
    "M 34.64386,10.000429 C 31.18437,4.023959 24.7267,0 17.32499,0 h 5e-5 C 9.92209,0 3.45805,4.022239 0,10.000429 m 30.19868,0.50024 c -2.91414,-3.94313 -7.59423,-6.50091 -12.87364,-6.50091 -5.27972,0 -9.96161,2.55844 -12.8757,6.50193 m 21.72064,1.3901 c -2.19371,-2.39117 -5.34407,-3.89125 -8.84494,-3.89125 -3.49869,0 -6.64735,1.49732 -8.8408,3.88609 m 14.14797,2.1394 c -1.41287,-1.25628 -3.26767,-2.02572 -5.30717,-2.02572 -2.03505,0 -3.89222,0.7608 -5.30407,2.01228 m 7.64812,2.75126 c -0.6591,-0.47822 -1.4674,-0.76378 -2.34405,-0.76378 -0.87219,0 -1.67845,0.28064 -2.33577,0.75448",
  topTopLeft:
    "M 40.657663,5.600669 C 40.53152,5.4299826 40.402065,5.2618922 40.269398,5.0964925 M 36.628964,6.9917889 C 35.971316,6.2749437 35.227688,5.6381834 34.414417,5.0979162 m -13.261973,1.529e-4 c -0.811115,0.5388938 -1.552925,1.1738234 -2.20922,1.8885599 m 14.14797,2.1393999 C 31.678324,7.8697488 29.823523,7.100309 27.784022,7.100309 c -2.035048,0 -3.892218,0.7607999 -5.304068,2.0122798 m 7.648121,2.7512602 c -0.659101,-0.47822 -1.467401,-0.76378 -2.344053,-0.76378 -0.872188,0 -1.678448,0.28064 -2.335768,0.75448",
  topTopRight:
    "M 49.938378,5.0965046 C 49.805436,5.2622301 49.675727,5.430657 49.54934,5.6016889 m 21.720638,1.3901 C 70.612348,6.2749649 69.868747,5.6382213 69.055503,5.0979644 M 55.793459,5.0980691 C 54.982345,5.6369629 54.240535,6.2718925 53.584239,6.986629 M 67.732208,9.1260289 C 66.319338,7.8697488 64.46454,7.100309 62.425039,7.100309 c -2.03505,0 -3.892219,0.7607999 -5.30407,2.0122798 m 7.64812,2.7512602 c -0.659101,-0.47822 -1.4674,-0.76378 -2.34405,-0.76378 -0.872191,0 -1.67845,0.28064 -2.33577,0.75448",
  topLeft:
    "M 27.782334,15.100429 C 25.000456,10.29457 20.279878,6.7512538 14.688694,5.5475721 m 8.648462,10.0530969 c -2.91414,-3.94313 -7.59423,-6.5009101 -12.87364,-6.5009101 -0.6305303,0 -1.2525339,0.036489 -1.8640183,0.1074693 M 19.308456,16.991789 c -2.19371,-2.39117 -5.34407,-3.89125 -8.84494,-3.89125 -1.6809102,0 -3.2810255,0.345615 -4.733234,0.969656 m 10.040404,5.055834 c -1.41287,-1.25628 -3.26767,-2.02572 -5.30717,-2.02572 -2.0350502,0 -3.8922202,0.7608 -5.3040702,2.01228 m 7.6481202,2.75126 c -0.6591,-0.47822 -1.4674,-0.76378 -2.34405,-0.76378 -0.8721904,0 -1.6784504,0.28064 -2.3357704,0.75448",
  topRight:
    "M 75.514927,5.5483103 C 69.923352,6.7524727 65.200537,10.294381 62.420507,15.100429 M 81.600097,9.2061251 C 80.99168,9.1358698 80.372843,9.0997589 79.745548,9.0997589 c -5.279721,0 -9.96161,2.5584401 -12.875702,6.5019301 m 17.598443,-1.535595 c -1.449425,-0.621396 -3.045875,-0.965555 -4.722741,-0.965555 -3.498691,0 -6.647352,1.49732 -8.840801,3.88609 m 14.147969,2.1394 c -1.412869,-1.25628 -3.26767,-2.02572 -5.307168,-2.02572 -2.035051,0 -3.892222,0.7608 -5.30407,2.01228 m 7.64812,2.75126 c -0.659101,-0.47822 -1.467401,-0.76378 -2.34405,-0.76378 -0.872191,0 -1.678451,0.28064 -2.335771,0.75448",
  leftLeft:
    "M 10.461828,25.100429 C 9.0986376,22.745438 7.2699183,20.693615 5.1013494,19.071697 m 0.9152985,6.528972 C 5.7294607,25.212075 5.4251227,24.836936 5.1047504,24.476374",
  rightRight:
    "m 85.098497,19.074046 c -2.167821,1.621358 -3.995727,3.672213 -5.357481,6.026383 m 5.354351,-0.615355 c -0.317862,0.358214 -0.619897,0.730785 -0.905012,1.116615",
  left: "M 27.782334,35.100429 C 24.322846,29.12396 17.865176,25.1 10.463466,25.1 h 5e-5 c -1.8578969,0 -3.6566569,0.253338 -5.3636059,0.727354 m 18.2372459,9.773315 c -2.91414,-3.943131 -7.59423,-6.500911 -12.87364,-6.500911 -1.8824259,0 -3.6888553,0.325229 -5.3662621,0.922505 M 19.308456,36.99179 c -2.19371,-2.391172 -5.34407,-3.891251 -8.84494,-3.891251 -1.9284568,0 -3.7505691,0.454908 -5.3649931,1.263263 m 10.6721631,4.762225 c -1.41287,-1.256278 -3.26767,-2.025719 -5.30717,-2.025719 -2.0350502,0 -3.8922202,0.760799 -5.3040702,2.012281 m 7.6481202,2.751259 c -0.6591,-0.478218 -1.4674,-0.76378 -2.34405,-0.76378 -0.8721904,0 -1.6784504,0.28064 -2.3357704,0.75448",
  right:
    "M 85.100156,25.825584 C 83.396115,25.352729 81.600452,25.1 79.745498,25.1 h 5e-5 c -7.402952,0 -13.86699,4.022237 -17.325041,10.000429 m 22.682295,-5.081312 c -1.674741,-0.595281 -3.47803,-0.919359 -5.357254,-0.919359 -5.279721,0 -9.96161,2.558442 -12.875702,6.501929 m 18.231427,-1.242033 c -1.612133,-0.805675 -3.430953,-1.259115 -5.355725,-1.259115 -3.498691,0 -6.647352,1.497319 -8.840801,3.886089 m 14.147969,2.139399 c -1.412869,-1.256278 -3.26767,-2.025719 -5.307168,-2.025719 -2.035051,0 -3.892222,0.760799 -5.30407,2.012281 m 7.64812,2.751259 c -0.659101,-0.478218 -1.467401,-0.76378 -2.34405,-0.76378 -0.872191,0 -1.678451,0.28064 -2.335771,0.75448",
  bottomLeft:
    "M 27.782334,75.100428 C 24.322846,69.123959 17.865176,65.099998 10.463466,65.099998 h 5e-5 c -1.8578985,0 -3.65666,0.253341 -5.3636101,0.727356 m 18.2372501,9.773314 c -2.91414,-3.943131 -7.59423,-6.500911 -12.87364,-6.500911 -1.8823843,0 -3.6887757,0.325215 -5.3661509,0.922467 m 14.2110909,6.969564 c -2.19371,-2.391169 -5.34407,-3.89125 -8.84494,-3.89125 -1.8568293,0 -3.6150673,0.421743 -5.1842483,1.17466 m 10.4914183,4.850831 c -1.41287,-1.256282 -3.26767,-2.025722 -5.30717,-2.025722 -1.416243,0 -2.7463362,0.368464 -3.9001407,1.014352 m 6.2441907,3.749188 c -0.6591,-0.478218 -1.4674,-0.763778 -2.34405,-0.763778 -0.5225541,0 -1.0214424,0.100735 -1.4788122,0.283406",
  bottomRight:
    "m 85.100156,65.825583 c -1.704041,-0.472855 -3.499704,-0.725585 -5.354658,-0.725585 h 5e-5 c -7.402952,0 -13.86699,4.022241 -17.325041,10.00043 m 22.682295,-5.081313 c -1.674741,-0.595278 -3.47803,-0.919358 -5.357254,-0.919358 -5.279721,0 -9.96161,2.558442 -12.875702,6.501932 m 18.051306,-1.330172 c -1.566997,-0.75053 -3.322179,-1.170979 -5.175604,-1.170979 -3.498691,0 -6.647352,1.497319 -8.840801,3.886091 m 12.730549,1.128948 c -1.150673,-0.645459 -2.475825,-1.01527 -3.889748,-1.01527 -2.035051,0 -3.892222,0.760802 -5.30407,2.012281 m 6.7751,2.269532 c -0.455043,-0.18157 -0.95101,-0.282051 -1.47103,-0.282051 -0.872191,0 -1.678451,0.280638 -2.335771,0.754478",
  bottomBottomLeft:
    "m 45.102843,85.100429 c -3.459491,-5.976472 -9.91716,-10.00043 -17.318868,-10.00043 h 4.7e-5 c -6.660784,0 -12.561478,3.256185 -16.19645,8.263498 m 28.681905,1.733093 c -2.932171,-3.655656 -7.43453,-5.996832 -12.485455,-5.996832 -4.932487,0 -9.343195,2.232986 -12.27814,5.742183 m 18.908535,0.255974 c -1.899549,-1.261893 -4.179043,-1.997376 -6.630395,-1.997376 -2.451878,0 -4.731852,0.735361 -6.63163,1.997564",
  bottomBottomRight:
    "m 78.614211,83.362749 c -3.635044,-5.005679 -9.530069,-8.26275 -16.189222,-8.26275 h 5e-5 c -7.402949,0 -13.866989,4.022238 -17.32504,10.00043 m 29.600916,-0.259697 c -2.934777,-3.508676 -7.343799,-5.740974 -12.275876,-5.740974 -5.050779,0 -9.55445,2.341372 -12.48674,5.996842 m 19.117204,0.0013 c -1.89956,-1.261922 -4.179083,-1.997424 -6.630464,-1.997424 -2.45188,0 -4.731853,0.735362 -6.63163,1.997564",
};
const WaveB = ({ transform, type }: WaveProps) => {
  if (type === "none") return null;
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

export default WaveB;