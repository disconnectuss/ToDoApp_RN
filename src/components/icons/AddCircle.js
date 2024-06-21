import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAddCircle = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="#e5989b"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160zm40 200q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
  </Svg>
);
export default SvgAddCircle;
