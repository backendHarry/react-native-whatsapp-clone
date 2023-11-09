import Svg, { Path } from "react-native-svg";

export default PlusIcon = (props) => {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M6 12H18M12 6V18"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
    </Svg>
  );
};
