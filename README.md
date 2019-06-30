# React Native Fill Up Button

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


