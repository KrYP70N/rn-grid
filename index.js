import React from "react";
import { Dimensions, View } from 'react-native';
import * as Container from "./container";

const lastCol = (col, id) => id + 1 >= col && (id + 1) % col === 0

const Grid = props => {
  const deviceWidth = Dimensions.get('window').width
  const col = props.col || props.template?.length || 1
  const space = (((props.space || 0) / deviceWidth) * 100)
  const width = w => w - ((space * (col - 1)) / col)
  const partialOfTempalte = props.template ? props.template.reduce((partialSum, a) => partialSum + a, 0) : 0
  const Wrapper = Container[props.scroll ? "Scrollable" : "Default"]

  if (!props.children?.length) {
    return (
      <Wrapper {...props}>
        <View style={{
          width: (
            props.template ?
              width(
                (100 / partialOfTempalte)
                * props.template[0 % col]
              ) :
              width(100 / col)) + '%',
          marginBottom: space + '%',
          marginRight: lastCol(col, 0) ? 0 : space + '%'
        }}>
          {props.children}
        </View>
      </Wrapper>
    )
  }

  return <Wrapper {...props}>
    {
      props.children?.flat().map((item, id) =>
        item &&
        <View key={id}
          style={{
            width: width(
              props.template ?
                (100 / partialOfTempalte)
                * props.template[id % col]
                : 100 / col
            ) + '%',
            marginBottom: space + '%',
            marginRight: lastCol(col, id) ? 0 : space + '%'
          }}
        >
          {item}
        </View>
      )
    }
  </Wrapper>
}

export default Grid;