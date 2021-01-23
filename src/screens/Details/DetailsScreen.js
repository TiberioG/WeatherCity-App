import React, {useEffect} from 'react';

import {Text, Button} from 'react-native';
import {Container} from './StyledDetailsScreen';
import {useDispatch} from 'react-redux';
import CustomHeader from "../../components/header/CustomHeader";

const DetailsScreen = () => {
  const dispatch = useDispatch();


  return (
    <>

      <CustomHeader title={'ciaone'}/>
    <Container>
      <Text> Hello details</Text>
      <Button
        title={'get'}
        onPress={() => dispatch({type: 'CUR_WHT_REQ', payload: 272797})}
      />
    </Container>
    </>
  );
};

export default DetailsScreen;
