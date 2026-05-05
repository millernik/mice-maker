import svgPaths from "../../imports/HomeDraft/svg-3ac51oel9l";

interface Props {
  width?: number;
  height?: number;
  dark?: boolean;
}

export function MiceMakerLogo({ width = 176, height = 27, dark = false }: Props) {
  const textColor = dark ? "#ffffff" : "#3F3F3F";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 352 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
    >
      <path d={svgPaths.p3d1f7880} fill="#C49201" />
      <path d={svgPaths.p3cd1a900} fill={textColor} />
      <path d={svgPaths.p12d30200} fill={textColor} />
      <path d={svgPaths.p32e2c400} fill={textColor} />
      <path d={svgPaths.p33074c00} fill={textColor} />
      <path d={svgPaths.p1b987500} fill={textColor} />
      <path d={svgPaths.p15311900} fill={textColor} />
      <path d={svgPaths.p24d11b80} fill={textColor} />
      <path d={svgPaths.p2f21a00} fill={textColor} />
      <path d={svgPaths.p3ac97f00} fill={textColor} />
    </svg>
  );
}
