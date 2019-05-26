import React from 'react';
import { FlatList } from "react-native";
import ListItem from '../ListItem/ListItem';

class PlaceList extends React.Component {

    onItemsPressed(key){
        console.log(key)
        return this.props.onSelectHandler(key)
    }
     
    render(){
        return(
            <FlatList style={{ width: '100%' }} data={this.props.places} keyExtractor={(item, index) => index.toString()} renderItem={
                place => (
                    <ListItem placeName={place.item.name} placeImage={place.item.image} onItemsPressed={this.onItemsPressed.bind(this ,place.item.key)} />
                )
            } />
        )
        
    }
}

export default PlaceList;