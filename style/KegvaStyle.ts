import { StyleSheet } from "react-native";

const KegvaStyle = StyleSheet.create({
    main_container:{
        padding:30,
        height:'100%',
        alignItems:'center',
        
    },
    text_input:{
        marginTop:15,
    },
    button:{
        marginTop:15,
        backgroundColor: 'lightblue',
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems:'center',
        elevation: 2,
    },
    button_text:{
        fontSize:20,
        fontWeight: 'bold',
    },
    //login
    feilds_container:{
        height:70,
        width:'100%',
    },
    app_title:{
        padding:100,
        fontSize:20,
        fontWeight:'bold',
    },
    scrollview:{
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1 ,
    },

});

export default KegvaStyle;