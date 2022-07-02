import React from 'react';
import { View, ScrollView } from 'react-native';

export const Default = props => <View style={{
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  maxHeight: '100%',
  ...props.style
}}>{props.children}</View>

export const Scrollable = props => {
  return (
    <ScrollView style={{ maxHeight: '100%' }} {...props.scroll}>
      <Default>
        {props.children}
      </Default>
    </ScrollView>
  )
}