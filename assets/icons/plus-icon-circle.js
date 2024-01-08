import Svg, { Path, G } from "react-native-svg";

export default PlusIconCircle = (props) => {
  return (
    <Svg
      width="256px"
      height="256px"
      viewBox="0 0 32 32"
      fill="#51a6fc"
      stroke="#51a6fc"
      {...props}
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <G id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd">
          <G
            id="Icon-Set-Filled"
            transform="translate(-466.000000, -1089.000000)"
            fill="#51a6fc"
          >
            <Path
              d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z"
              id="plus-circle"
            ></Path>
          </G>
        </G>
      </G>
    </Svg>
  );
};