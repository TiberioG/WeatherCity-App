import React from 'react';
import Svg, {Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
import dayGradients from '../../assets/gradientsDay.json';

const BackgroundCustom = (props) => {
  let gradientColor;

  dayGradients[props.id]
    ? (gradientColor = dayGradients[props.id])
    : //default in case there is not in assets
      (gradientColor = {
        left: '#5c7dea',
        right: '#79b1f5',
      });

  if (props.night) {
    gradientColor = {
      left: '#040614',
      right: '#1f3c7a',
    };
  }
  return (
    <Svg
      height={'100%'}
      width={'100%'}
      style={{position: 'absolute', zIndex: 0}}>
      <Defs>
        <LinearGradient id="grad" x1="1" y1="1" x2="0" y2="0">
          <Stop offset="0" stopColor={gradientColor.right} stopOpacity="1" />
          <Stop offset="1" stopColor={gradientColor.left} stopOpacity="1" />
        </LinearGradient>
      </Defs>

      <Rect width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
};
export default BackgroundCustom;
