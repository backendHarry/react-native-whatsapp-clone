import Svg, { Path, G } from "react-native-svg";

export default CircleDot = (props) => {
  return (
    <Svg
      fill="#51a6fc"
      viewBox="0 0 256 256"
      id="Flat"
      stroke="#51a6fc"
      stroke-width="7.168000000000001"
      {...props}
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <Path
          {...props}
          d="M128,28A100,100,0,1,0,228,128,100.11332,100.11332,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.10416,92.10416,0,0,1,128,220Zm8-92a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,128Zm48,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,184,128Zm-96,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,88,128Z"
        ></Path>
      </G>
    </Svg>
  );
};
