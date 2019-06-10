import React from 'react';
import { View, TextInput , StyleSheet , Button} from 'react-native';



class PlaceInput extends React.Component {
    state = {
        placeName : ''
    }

    todoHandler = (value) => {
        this.setState({placeName : value})
        console.log(this.state);
    }

    placeSubmitHandler = () => {
        console.log('called')
        if(this.state.placeName.trim() === ''){
            console.log('called')
            return;
        }
     
        this.props.onPlaceAdded(this.state.placeName);
    }

    render(){
        return (
            <View style={styles.inputContainer}>
                <TextInput placeholder="Add Place" onChangeText={this.todoHandler} style={styles.placeInput} />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    placeInput: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1
    },
    placeButton: {
        width: "30%"
    }
})

export default PlaceInput;
