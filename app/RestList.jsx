import { useState, useEffect } from "react"
import { ScrollView, Text, StyleSheet } from "react-native"
import RestCard from "./RestCard"

  {/* ^ Always need to import text to use text */}

export default function RestList() {
    const [restaurants, setRestaurants] = useState()

    useEffect(() => {
        fetch('https://api.bocacode.com/api/restaurants')
            .then(res => res.json())
            .then(setRestaurants)
            .catch(alert)
    }, [])

    return (
        <>
            <ScrollView style={styles.scrollingList}>
                {!restaurants
                    ? <Text styles={styles.loadingText}>Loading...</Text>
                    : restaurants.map(restaurant => (
                        <RestCard key={restaurant._id} restaurant={restaurant}/>
                    ))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    scrollingList: {
        // borderColor: "white",
        // borderWidth: 2,
        // borderStyle: "solid",
        width: "90%",
        marginTop: 16,
    },
    loadingText: {
        padding: 8, 
        fontSize: 24,
        color: "#eee",
    },
}) 