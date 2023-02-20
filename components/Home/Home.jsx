import { View, Text } from "react-native";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import { Image } from "react-native";
import celular from "../../assets/celular.jpg";
import useCar from "../../hooks/useCar";

import { useEffect, useState } from "react";
import Producto from "../Producto/Producto";

const Home = ({ navigation }) => {

  const carrito = useCar();
  const [numero,setNumero]  = useState();

  return (
    <View style={styles.container}>
      <View >
        <Buttons styles={styles} icon={""} label={typeof numero==="undefined" ? "sin articulos": " Articulos " + numero} color={"#000"} onHandlerPress={()=>navigation.navigate('ListaProductos')}/>
      </View>
      <View style={{flex:1}}>
        <Producto imagen={celular} nombre={"Celular"} precio={"12000"} addProducto={setNumero} />
        <Producto imagen={celular} nombre={"Bocinas"} precio={"1200"} addProducto={setNumero}/>
        <Producto imagen={celular} nombre={"Computadora"} precio={"35000"} addProducto={setNumero} />
      </View>
    </View>
  );
};



export default Home;