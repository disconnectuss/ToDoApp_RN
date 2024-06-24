import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";


export const planStyles = StyleSheet.create({
    planWrapper: {
        padding: 20,
        borderBottomColor:colors.borderColor,
        borderBottomWidth:1,
    },
    title: {
        fontWeight:'bold',
        color: colors.textSecondary,
        fontsize:25

    },
    date: {

    }

})