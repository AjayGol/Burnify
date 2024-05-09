import type { PropsWithChildren, ReactElement } from 'react';
import {StyleSheet, Text, useColorScheme} from 'react-native';
type Props = PropsWithChildren<{
  text: string;
}>;

export default function TitleView({
                                    text,
                                           }: Props) {

  return (
      <Text style={{fontWeight:'600', fontSize: 26}}>{text}</Text>
  );
}
