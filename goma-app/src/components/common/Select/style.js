import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    selectWrap: {
        position: 'relative',
    },
    selectIcon: {
        width: 13,
        height: 10,
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{translateY: -5}],
        zIndex: 5,
        borderWidth: 0,
    },
})
export default styles;