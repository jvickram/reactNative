import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borederRadius: 2,
        borderColor: '#ddd',
        borderBottom: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRigt: 5,
        marginTop: 10
    }
}

export default Card