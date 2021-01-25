import React from 'react';
import {FlatList, Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FormattedTime, FormattedMessage} from 'react-intl';
import Svg, {Circle, Line, LinearGradient, Stop, Defs} from 'react-native-svg';
import {
  TimeText,
  TempText,
  NowTimeText,
  NowTempText,
  StyledFlatList,
} from './StyledHourlyScroller';
import {getTempSymbol} from '../../common/utility';

const HourlyScroller = (props) => {
  const settings = useSelector((state) => state.settings);

  const N_HOURS_DISPLAY = 9;

  const _calcOpacity = (curIndex) => {
    const FINAL_I = 0; //end of scale opacity for last index

    return (curIndex * (FINAL_I - 1)) / N_HOURS_DISPLAY + 1;
  };

  const _renderItem = ({item}) => {
    let SPACING_PX = 65;
    let RADIUS = 8;
    let HEIGHT = 50;

    if (item[0] === '0') {
      RADIUS = 13;
      SPACING_PX = SPACING_PX + 5;
    }
    return (
      <>
        <View style={{display: 'flex', justifyContent: 'center'}}>
          {item[0] === '0' ? (
            <NowTimeText>
              <FormattedMessage id="now" />
            </NowTimeText>
          ) : (
            <TimeText>
              <FormattedTime
                value={new Date(item[1]?.dt * 1000)}
                hour="numeric"
              />
            </TimeText>
          )}

          <Svg height={HEIGHT} width={SPACING_PX}>
            <Line
              x1="0"
              y1={HEIGHT / 2}
              x2={SPACING_PX}
              y2={HEIGHT / 2}
              stroke="white"
              strokeOpacity={_calcOpacity(item[0])}
              strokeWidth="5"
            />
            <Circle cx={RADIUS} cy={HEIGHT / 2} r={RADIUS} fill="white" />
          </Svg>

          {item[0] === '0' ? (
            <NowTempText>
              {Math.round(item[1]?.temp) + getTempSymbol(settings.units)}
            </NowTempText>
          ) : (
            <TempText>
              {Math.round(item[1]?.temp) + getTempSymbol(settings.units)}
            </TempText>
          )}
        </View>
      </>
    );
  };
  const forecastWeather = useSelector((state) => state.forecastWeather);

  const dailyData = forecastWeather[props.cityId]?.hourly;

  let data = dailyData
    ? Object.entries(dailyData).slice(0, N_HOURS_DISPLAY)
    : null;

  console.log(data);
  return (
    <StyledFlatList
      showsVerticallScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      renderItem={_renderItem}
      keyExtractor={(item) => item[0]}
    />
  );
};

export default HourlyScroller;
