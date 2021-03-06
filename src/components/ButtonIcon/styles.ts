import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    iconWrapper : {
        width:56,
        height:56,
        justifyContent: "center",
        alignItems: 'center',
        borderRightWidth: 2,
        borderColor: theme.colors.line
    },
    container: {
        width:'100%',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        alignItems: 'center'
    },
    title: {
        flex:1,
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15
    }
})