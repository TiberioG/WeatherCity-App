import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;


export const ContainerLoading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`;


export const TopContainer = styled.View`
  padding-top: 12%;

  flex-direction: column;
`;

export const ContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-bottom: 25%;
`;

export const CardContainer = styled.View`
  margin-bottom: 4%;
`;

export const WelcomeMessage = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: #061860;
`;

export const AddCityContainer = styled.TouchableOpacity`
  padding-top: 15%;
  padding-bottom: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddCityText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: #061860;
`;

export const AddIcon = styled(Icon).attrs((props) => ({
  size: 28,
  color: '#061860',
  name: 'pluscircleo',
}))`
  padding-left: 3%;
  padding-right: 3%;
`;
