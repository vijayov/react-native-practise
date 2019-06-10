import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import HeaderComponent from '../../components/Header/Header';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import validate from '../../utility/validation';
import { connect } from "react-redux";
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends React.Component {
    static navigationOptions = {
        title: 'Find Place',
        drawerLockMode: 'locked-open'
    };

    state = {
        controls: {
            placeName: {
                value: "",
                valid: false,
                touched: false,
                validationRules: {
                    notEmpty: true
                }
            }
        }
    };

    placeNameChangedHandler = val => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: val,
                        valid: true,
                        touched: true
                    }
                }
            };
        });
    };

    placeAddedHandler = (placeName) => {
        this.props.onAddPlace(placeName);
    };

    render() {
        return (
            <Container>
                <HeaderComponent title="Share the Place" />
                <PlaceInput
                    onPlaceAdded={this.placeAddedHandler}
                    onChangeText={this.placeNameChangedHandler}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
