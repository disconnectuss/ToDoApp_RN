import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgButton = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="#e8eaed"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M440-760v-160h80v160zm266 110-55-55 112-115 56 57zm54 210v-80h160v80zM440-40v-160h80v160zM254-652 140-763l57-56 113 113zm508 512L651-255l54-54 114 110zM40-440v-80h160v80zm157 300-56-57 112-112 29 27 29 28zm283-100q-100 0-170-70t-70-170 70-170 170-70 170 70 70 170-70 170-170 70m0-80q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47m0-160" />
  </Svg>
);
export default SvgButton;
