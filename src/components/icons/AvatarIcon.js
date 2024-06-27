import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAvatarIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="#e8eaed"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M234-276q51-39 114-61.5T480-360t132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800t-226.5 93.5T160-480q0 59 19.5 111t54.5 93m246-164q-59 0-99.5-40.5T340-580t40.5-99.5T480-720t99.5 40.5T620-580t-40.5 99.5T480-440m0 360q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280t-100 15.5-86 44.5q39 29 86 44.5T480-160m0-360q26 0 43-17t17-43-17-43-43-17-43 17-17 43 17 43 43 17m0 300" />
  </Svg>
);
export default SvgAvatarIcon;
