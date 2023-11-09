import Svg, { Path } from "react-native-svg";

export default DoubleMessage = (props) => {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M4 14L9 19L20 8M6 8.88889L9.07692 12L16 5"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
