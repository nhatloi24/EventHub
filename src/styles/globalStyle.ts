/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { Colors } from "../const/Colors";
import { fontFamily } from "../const/fontFamily";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    text : {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: Colors.text
    },
    
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
        lineHeight: 56,
        flexDirection: 'row'

    },
    section : {
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    shadow: {
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6
    }
})