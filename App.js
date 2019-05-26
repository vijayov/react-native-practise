import React from 'react';
import { StyleSheet, Text, View , TextInput , Button} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    places : [],
    selectedPlace : null
  };

  placeNameChangeHandler = (value) => {
    this.setState({placeName : value})
  };

  placeAddHandler = (placeName) => {
   this.setState(prevState => {
     return {
       places : prevState.places.concat({
         key : Math.random(),
         name : placeName,
         image : {
           uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
         }
       })
     }
   })
  }

  placeSelectHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace : prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };



  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler} />
        <PlaceInput onPlaceAdded={this.placeAddHandler}/>
        <PlaceList places={this.state.places} onSelectHandler={this.placeSelectHandler}/>
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
