import { View, Text } from "react-native";
import useCar from "../../hooks/useCar";
import Buttons from "../Buttons/Buttons";



const ListProductos = ({ navigation }) => {
    const carrito = useCar();

    return (
        <View style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:1,justifyContent:"space-evenly",flexDirection:"row"}}>
                <Text style={{fontSize:16}}>Total de productos </Text>
                <Text style={{fontSize:24}}>{carrito.numero}</Text>
            </View>
            <View style={{flex:1, fontSize:16}}>
                <Text>Lista de productos</Text>
                {
                    carrito.productos.map((producto) => (
                        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                            <Text>{producto.numero}</Text>
                            <Text>{producto.articulo}</Text>
                            <Text>{producto.precio}</Text>
                            <Buttons  icon={"trash"} onHandlerPress={()=>{
                                carrito.productos.filter((numero) => numero !== producto.numero)
                                console.log("borramos",carrito);

                            }}/>
                        </View>
                    ))
                }
            </View>
            <View style={{flex:1,flexDirection:"row"}}>
                <Text style={{fontSize:16}}>Total a pagar de productos : </Text>
                <Text style={{fontSize:24}}>{carrito.total}</Text>
            </View>
        </View>
    );
};

export default ListProductos;