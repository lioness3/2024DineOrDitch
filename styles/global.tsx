import { StyleSheet } from "react-native";
//global style sheet for consistant styling

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        borderRadius:13,
        borderColor:'grey',
        borderWidth:3,
        width:'90%',
        height:'75%',
        padding:10
    },
    headingText:{
        fontSize:30,
        textAlign:'center'
    },
    buttonContainer:{ // holds yes and no buttons atbottom of card
        flexDirection:'row',
        justifyContent:'space-evenly',
        // position:'absolute',
        // bottom:0
        

    }

})
