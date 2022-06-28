# react-native-grid

easy to use grid layout in react-native

## Installation

```sh
npm install rn-grid-layout
```

## Usage with col (for uniform grid)

```js
import Grid from 'rn-grid-layout';

<Grid col={3} space={12}>
  //- your components
</Grid>;
```

## Usage with template (for un-uniform grid)

```js
import Grid from 'rn-grid-layout';

<Grid template={[20, 80]} space={12}>
  //- your components
  <View></View> //- 20% width
  <View></View> //- 80% width
</Grid>;
```

## License

ISC
