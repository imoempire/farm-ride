export const appColor = '#006021';

import { getStatusBarHeight } from "react-native-status-bar-height";

export const parameters ={
   statusBarHeight :getStatusBarHeight(),
   headerHeight:70,

   styledButton:{
       backgroundColor:"#ff8c52",
       alignContent:"center",
       justifyContent:"center",
       borderRadius:12,
       borderWidth:1, 
       borderColor:"#ff8c52",
       height:50,
       paddingHorizontal:20,
       width:'100%'
   },

   buttonTitle:{
       color:"white",
       fontSize:20,  
       fontWeight:"bold" ,
       alignItems:"center",
       justifyContent:"center"  ,
       marginTop:-3 
   }
}

// const SCREEN_HEIGHT = Dimensions.get('window').height;
// const SCREEN_WIDTH = Dimensions.get('window').width;
