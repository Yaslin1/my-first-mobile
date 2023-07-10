import {View, Image, Text, StyleSheet} from "react-native"

export default function RestCard( {restaurant} ) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} src={restaurant.photo_url}/>
            <Text style={styles.title}>{restaurant.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        color: "#203040",
        fontSize: 28, 
        textAlign: "center",

    },
    card: {
        padding: 8,
        margin: 8,
        borderRadius: 12, 
        backgroundColor: "#e9eeff",
    },
    image: {
        width: "100%",
        height: 200,
    }
})