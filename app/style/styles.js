import { StyleSheet ,Dimensions} from 'react-native';
import Constants from 'expo-constants';
const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        marginTop:Constants.statusBarHeight,
    },
    conta:{
        height:140,
        backgroundColor:'rgba(0, 0, 0, 0.5);',
        paddingTop:25,
        paddingHorizontal:10,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        marginTop:10,
        width:width,
        flexDirection: "row",
        justifyContent: "space-between",
    },
   
    btn:{
        // backgroundColor: '#000',
        marginTop:26,
        color:'#rgb(238,59,69)',
        backgroundColor:'white',
        borderRadius:5,
        fontWeight:'bold',
        paddingHorizontal:10,
        paddingVertical:5,
        width:170,
        textAlign:'center',
        alignItems: 'flex-end',
        marginRight:10
        
        
    },
    imageBackground: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "space-evenly",
        // paddingVertical: 100,
    },
    header:{
        // marginTop:Constants.statusBarHeight,
        height:90,
        backgroundColor:'black',
        paddingTop:15,
        marginTop:490,
        paddingHorizontal:5,
        width:width,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    youImage:{
        height:height / 2.0
    },
    logo:{
        // width:width / 2.5,
        // height:height /3,
        // flex: 1,
        width: 100,
        height: 60,
        marginLeft:20
    },
    cont : {
        marginTop : 120,
        alignItems : "center",
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderRadius:40,
        width:width,
        height:500

    },
    inp : {
        width : width / 1.2,
        color:'white',
        marginTop : 100,
        padding : 40,
        borderColor : "white",
        borderWidth : 2,
        marginTop : 30,
        padding : 15,
        borderWidth : 1,
        borderRadius : 1
    },
    tle : {
        fontSize : 23,
        color : 'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    tlee:{
        fontSize : 13,
        color : 'red',
        textAlign:'center',
        fontWeight:'bold'
    },
    creditSection:{
        height:550,
        padding:25,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        alignItems:'center',
        marginTop:100
    },
    creditSectionMt:{
        backgroundColor:'black',
        padding:3,
        borderRadius:0,
        width:width / 1.3,
        marginVertical:10
    },
    creditText:{
        color:'white',
        fontSize:15
    },
    creditTitle:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    creditTitle2:{
        fontSize:50,
        color:'red',
        fontWeight:'bold'
    },
    creditAmortissment:{
        fontSize:20,
        color:'black',
        marginLeft:10
    },
    card:{
        height:100,
        backgroundColor:'white',
        width:width / 1.3,
        marginVertical:2,
        marginBottom:100,

      
    },
    
})