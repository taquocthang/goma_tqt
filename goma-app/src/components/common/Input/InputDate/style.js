import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputWrap:{
        position: 'relative',
    },
    calendarIcon: {
        width: 18,
        height: 20,
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{translateY: -10}],
        zIndex: 5,
        borderWidth: 0,
    }
})
export default styles;