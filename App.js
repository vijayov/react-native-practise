import React from 'react';
import { StyleSheet, Text, View , TextInput , Button} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace,deletePlace,deselectPlace,selectPlace } from './src/store/actions';

class App extends React.Component {
 

  

  placeAddHandler = (placeName) => {
   this.props.onAddPlace(placeName)
  }

  placeSelectHandler = (key) => {
   this.props.onSelectPlace(key)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  };



  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler} />
        <PlaceInput onPlaceAdded={this.placeAddHandler}/>
        <PlaceList places={this.props.places} onSelectHandler={this.placeSelectHandler}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding : 26
  },
 
});

const mapStateToProps = state => {
  return {
    places : state.places.places,
    selectedPlace : state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace : () => dispatch(deletePlace()),
    onSelectPlace : (key) => dispatch(selectPlace(key)),
    onDeselectPlace : () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);