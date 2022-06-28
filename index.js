import React from "react";
import { Dimensions, View, Text } from 'react-native';

const lastCol = (col, id) => id + 1 >= col && (id + 1) % col === 0

const Grid = props => {
  const deviceWidth = Dimensions.get('window').width
  const col = props.col || props.template.length || 1
  const space = (((props.space || 0) / deviceWidth) * 100)
  const width = w => w - ((space * (col - 1)) / col)

  return <View style={{
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }}>
    {
      props.children?.length ?
        props.children?.flat().map((item, id) =>
          item &&
          <View key={id}
            style={{
              width: (
                props.template ?
                  width(
                    (100 / props.template.reduce((partialSum, a) => partialSum + a, 0))
                    * props.template[id % col]
                  ) :
                  width(100 / col)) + '%',
              marginBottom: space + '%',
              marginRight: lastCol(col, id) ? 0 : space + '%'
            }}
          >
            {item}
          </View>
        ) :
        <View>
          {props.children}
        </View>
    }
  </View>
}

export default Grid;