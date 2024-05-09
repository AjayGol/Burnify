// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import {Image, View} from "react-native";

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Image source={rest.name} style={[{ marginBottom: -3, height: 28, width: 28, tintColor: rest.focus ? '#42BEED' : '#B3B4B5' }]} />;
}
