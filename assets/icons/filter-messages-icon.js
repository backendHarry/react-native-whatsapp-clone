import Svg, { Path } from "react-native-svg";

export default FilterMessages = (props) => {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M4 6H20M7 12H17M9 18H15"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
