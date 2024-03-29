import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../const/colors';
const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: COLORS.primary,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
