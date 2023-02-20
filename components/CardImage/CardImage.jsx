import { Image } from "react-native";

const CardImage=({url,style,imagen})=>{
  const imagenSelected=imagen!==null ? imagen:url;
  
  console.log("Ruta: ", url);
  console.log("Imagen Selected: ", imagenSelected);
    return(
        <Image
          source={{uri: imagenSelected}}
          style={style.image}
        />
    );
};

export default CardImage;