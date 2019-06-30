import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// LIST OF PROPS
// 1 - increment - DONE
// 2 - buttonBackgroundColor - DONE
// 3 - fillupColor - DONE
// 4 - buttonText - DONE
// 5 - height - DONE
// 6 - width - DONE
// 7 - incrementSpeed (millseconds) - DONE
// 8 - buttonTextStyle - DONE
// 9 - activeOpacity - DONE
// 10 - onFilled - DONE
// 11 - borderRadius - To be implmeneted

class FillUpButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_flex: 1.00,
            second_flex: 0.00,
        }
        this.timer = null;
        this.fillUp = this.fillUp.bind(this);
        this.resetFillUp = this.resetFillUp.bind(this);
    }

    render() {
        return (
            <View style={{borderRadius: 20}}>
                <TouchableOpacity   activeOpacity={this.props.activeOpacity}
                                    onPressIn={this.fillUp}
                                    onPressOut={this.resetFillUp}
                                    style={{ flexDirection: 'row', height: this.props.height , width: this.props.width}}
                                    >
                    <View style={{  flex: this.state.second_flex, backgroundColor: this.props.fillupColor || '#292929' }}></View>
                    <View style={{  flex: this.state.first_flex, backgroundColor: this.props.buttonBackgroundColor || '#000000' }}></View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ zIndex: 111}}>
                            <Text style={this.props.buttonTextStyle}> {this.props.buttonText} </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            
        );
      }
     
    fillUp(){
        this.setState({
            first_flex: this.state.first_flex - (this.props.increment || 0.05),
            second_flex: this.state.second_flex + (this.props.increment || 0.05),
        })
        this.timer = setTimeout(this.fillUp, this.props.incrementSpeed || 10);
        if (this.state.second_flex >= 1.00 && this.props.onFilled !== undefined){
            this.props.onFilled();
        }
    }
    
    resetFillUp(){
        this.setState({
            first_flex: 1.00,
            second_flex: 0.00,
        })
        clearTimeout(this.timer);
    }
}

export default FillUpButton;