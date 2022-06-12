import React from "react";
import { Dimensions, View } from 'react-native';

const Grid = props => {
  const win_width = Dimensions.get('window').width;
  const space = ((props.space || 0) / win_width) * 100;
  const width = `${((100 / props.col) - space) + (space / props.col)}%`;
  const marginRight = id => (id + 1) % props.col === 0 ? 0 : `${space}%`;
  return <View style={{
    width: "100%",
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }}>
    {
      props.children.length ?
        props.children?.map((item, id) => {
          return (
            <View key={id}
              style={{
                width,
                marginRight: marginRight(id)
              }}
            >{item}</View>
          )
        }) :
        <View style={{ width }}>
          {props.children}
        </View>
    }
  </View>
}

export default Grid;