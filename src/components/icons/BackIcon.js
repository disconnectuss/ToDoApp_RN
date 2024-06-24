import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBackIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="#e8eaed"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M400-80 0-480l400-400 71 71-329 329 329 329z" />
  </Svg>
);
export default SvgBackIcon;
