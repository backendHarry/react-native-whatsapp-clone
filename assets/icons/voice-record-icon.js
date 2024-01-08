import Svg, { Path, Defs, G } from "react-native-svg";

export default VoiceRecord = (props) => {
  return (
    <Svg
      width="256px"
      height="256px"
      viewBox="-5 0 32 32"
      fill="#51a6fc"
      {...props}
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <G
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <G
            id="Icon-Set"
            transform="translate(-105.000000, -307.000000)"
            fill="#51a6fc"
          >
            <Path
              d="M111,314 C111,311.238 113.239,309 116,309 C118.761,309 121,311.238 121,314 L121,324 C121,326.762 118.761,329 116,329 C113.239,329 111,326.762 111,324 L111,314 L111,314 Z M116,331 C119.866,331 123,327.866 123,324 L123,314 C123,310.134 119.866,307 116,307 C112.134,307 109,310.134 109,314 L109,324 C109,327.866 112.134,331 116,331 L116,331 Z M127,326 L125,326 C124.089,330.007 120.282,333 116,333 C111.718,333 107.911,330.007 107,326 L105,326 C105.883,330.799 110.063,334.51 115,334.955 L115,337 L114,337 C113.448,337 113,337.448 113,338 C113,338.553 113.448,339 114,339 L118,339 C118.552,339 119,338.553 119,338 C119,337.448 118.552,337 118,337 L117,337 L117,334.955 C121.937,334.51 126.117,330.799 127,326 L127,326 Z"
              id="microphone"
            ></Path>
          </G>
        </G>
      </G>
    </Svg>
  );
};
