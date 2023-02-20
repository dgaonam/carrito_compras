import { View, TextInput,Text } from "react-native";
import styles from "../Styles/Styles";

const Input = ({ label,placeholder,onChangeText,password}) => {
    return (
            <View>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
                password={password} 
                secureTextEntry={password}

                />
            </View>
    );
};

export default Input;