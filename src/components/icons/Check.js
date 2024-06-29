import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCheck =({color = 'gray', props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={color}
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480t93.5 226.5T480-160t226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197t-127 85.5T480-80m-56-216L254-466l56-56 114 114 400-401 56 56z" />
  </Svg>
);
export default SvgCheck;
