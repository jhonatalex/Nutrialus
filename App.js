import React, {useState,useEffect} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import logo from './assets/nutrialus.png'

const app =() =>{
const [patient, setPatient] = useState([]);

  useEffect(() => {

    getData()
    
  },[]);


   const getData = async ()=>{
  
    const patch= 'https://0q27loouph.execute-api.us-east-1.amazonaws.com'
    const data= await fetch(patch)
    const user = await data.json() 
  
    setPatient(user)
                  
   }

   


  return (
    <View style={styles.container}>
   
   <Image style={styles.imagen}
          source={logo}/>
        
      <View style={styles.Subcontainer}>
    
      <Image style={styles.imagenGet}
              source={{uri: patient.image,
              headers: {
                Pragma: 'no-cache'
              },}}/>

            <View styles={{flex: 1}} >
              <Text style={styles.sectionTitle}>Nombre: {patient.name}</Text>
              <Text style={styles.sectionTitle}>Email: {patient.email}</Text>
              <Text style={styles.sectionTitle}>Telefono: {patient.phone} </Text>
              <Text style={styles.sectionTitle}>{patient.nutritionist} </Text>
          </View> 
      </View>

      <TouchableOpacity  style={styles.button}
                         onPress={getData} >
     <Text style={styles.sectionTitle}>Nuevo</Text>
      </TouchableOpacity>

    </View>

  );

  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingBottom:25,
    alignItems: 'center', 
    backgroundColor: '#c6d166',
    justifyContent: 'center',
  },
  imagen:{  
     paddingBottom: '5%',
     height:'40%', 
     width:'50%', 
     borderRadius: 50, 
     resizeMode: 'contain'
    },
    imagenGet:{ 
      height:'60%', 
      borderRadius: 15, 
      resizeMode: 'stretch'
    },
    button: {
       borderWidth: 1,
        height:45,
        width:'80%',
        backgroundColor:'#FA8F10',
        marginTop: 30,
        justifyContent:'center',
        alignItems:'center',
        shadowOpacity:0.3,
        shadowColor:'#000',
        shadowRadius:1,
        shadowOffset:{
        width:10,
        height:10
        },
        borderRadius: 15, 
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
    },
    sectionTitleBoton: {
      fontSize: 24,
      fontWeight: '600',
    },

     Subcontainer:{ 
      flex:1,
      padding:10,
      width:'90%',
      backgroundColor:'#F1F3CE',
      shadowOpacity:0.3,
      shadowColor:'#000',
      shadowRadius:1,
      shadowOffset:{
      width:10,
      height:10
      },
      borderRadius: 15, 
     },
});

export default app;







