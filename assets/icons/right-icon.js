import Svg, { Path } from "react-native-svg";

export default RightIcon = (props) => {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M9 6L15 12L9 18"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
    </Svg>
  );
};
