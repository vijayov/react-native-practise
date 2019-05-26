import React from 'react';
import { View , Text , TouchableOpacity , Image , StyleSheet} from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemsPressed}>
            <View style={styles.listItem}>
                <Image style={styles.placeImage} resizeMode="cover" source={props.placeImage} />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
   
}
const styles = StyleSheet.create({
    listItem : {
        width : "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage : {
        width : 30 ,
        height : 30,
        marginRight : 8
    }
})
export default ListItem;