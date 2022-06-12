import React from "react";
import { Dimensions, View } from 'react-native';

const Grid = props => {
  const col = props.col || 1
  const win_width = Dimensions.get('window').width;
  const space = ((props.space || 0) / win_width) * 100;
  const width = `${((100 / col) - space) + (space / col)}%`;
  const marginRight = id => (id + 1) % col === 0 ? 0 : `${space}%`;
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