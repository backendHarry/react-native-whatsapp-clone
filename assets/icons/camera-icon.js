import Svg, { Path } from "react-native-svg";

export default CameraIcon = (props) => {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M4 7.2C4 6.07989 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.0799 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V7.2Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#000000"
        {...props}
      />
      <Path
        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
        stroke-width={"2"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#000000"
        {...props}
      />
    </Svg>
  );
};
