import { StyleSheet } from "react-native";
import config from "../../../config";

const styles = StyleSheet.create({
    textAreaStyle:{
        borderColor: config.colors.green,
        borderWidth: 0,
        backgroundColor: config.colors.white,
        fontSize: 14
    },
    countTextStyle: {
        fontSize: 12,
        marginTop: 5,
        alignSelf: 'flex-end',
        color: '#6F6F6F'
    }
})
export default styles;