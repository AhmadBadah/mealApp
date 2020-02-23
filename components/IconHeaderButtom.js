import { Ionicons,AntDesign } from '@expo/vector-icons';
import React from 'react';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
const IoniconsHeaderButton = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color={Colors.accentColor} />
);

export default IoniconsHeaderButton;