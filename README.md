# React Native Fill Up Button
[![npm version](https://badge.fury.io/js/react-native-fill-up-button.svg)](https://badge.fury.io/js/react-native-fill-up-button)

A React Native Button component with fills up animation on press and hold.


# Installation.

using NPM

```sh
npm install react-native-fill-up-button --save
```

Or with YARN

```sh
yarn install react-native-fill-up-button
```


# How to use.

All you have to is just import the component to your javascript file using:

```js
import FillUpButton from 'react-native-fill-up-button';
```

Then using it as the project can is as simple as the following:

```js
import FillUpButton from 'react-native-fill-up-button';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        buttontext: "Not Pressed"
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text>{this.state.buttontext}</Text>
        <FillUpButton increment={0.01}
                      buttonBackgroundColor={'blue'}
                      fillupColor={'green'}
                      height={60}
                      width={200}
                      buttonText= "PRESS AND HOLD"
                      incrementSpeed={10}
                      buttonTextStyle={{ fontSize: 20, color: 'white', fontWeight: 'bold'}}
                      activeOpacity={0.7}
                      onFilled={ () => this.setState({buttontext: "PRESSED!"}) }
        />
      </View>
    );
  }
}
```

This will result in the following:

![fillUpButton](https://user-images.githubusercontent.com/26725901/60399592-50c0d280-9b6f-11e9-8967-747d218e10bd.gif)


# Props

| Property              | Type   | Required | Description                                                                                                | Default   |
|-----------------------|--------|----------|------------------------------------------------------------------------------------------------------------|-----------|
| height                | number | yes      | Height of the button                                                                                       | -         |
| width                 | number | yes      | Width of the button                                                                                        | -         |
| buttonText            | string | no       | Text inside the button                                                                                     | -         |
| onFilled              | func   | no       | The function to be executed once the button is  completely filled.                                         | -         |
| activeOpacity         | number | no       | Determines what the opacity of the wrapped view should be when touch is active                             | 0.2       |
| buttonBackgroundColor | string | no       | The color of the button before filling up                                                                  | '#292929' |
| fillupColor           | string | no       | The color of which the button is filled up with when is pressed down.                                      | '#000000' |
| buttonTextStyle       | style  | no       | The style for the text inside the button                                                                   | -         |
| increment             | number | no       | The percentage of which the button filling is incremented by.                                              | 0.05      |
| incrementSpeed        | number | no       | The time between each filling increment in milliseconds. The smaller the number the faster the filling up. | 10        |
