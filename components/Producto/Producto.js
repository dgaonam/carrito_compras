import { Image, View, Text } from "react-native";
import Buttons from "../Buttons/Buttons";
import styles from "../Styles/Styles";
import useCar from "../../hooks/useCar";


const Producto = ({ imagen, nombre, precio,addProducto }) => {

    const carrito = useCar();

    return (
        <View style={styles}>
            <View>
                <Image
                    source={imagen}
                    style={{ flex: 1, height: "10%", width: "10%" }}
                    resizeMode="stretch"
                />
            </View>
            <View>
                <Text>{nombre}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text>Precio: </Text>
                    <Text>$: {precio}</Text>
                </View>
                <View>
                    <Buttons label={"agregar"} icon={"plus"} styles={styles} color={"#000"} onHandlerPress={()=>{
                        carrito.total = typeof carrito.total==="undefined" ?  precio : parseFloat(carrito.total) + parseFloat(precio);
                        carrito.numero = typeof carrito.numero==="undefined" ? 1 :  parseInt(carrito.numero) +1;
                        carrito.productos.push({numero: carrito.numero,precio:precio,articulo: nombre});
                        
                        addProducto(carrito.numero);
                        console.log(carrito);
                    }}></Buttons>
                </View>
            </View>

        </View>

    );
};


export default Producto;