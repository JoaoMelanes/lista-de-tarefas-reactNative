import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, Text} from "react-native";

export default function Task ({text, completed}) {
    return ( 
    <View style={style.rowContainer}>
        <Pressable>
            {completed ? 
                <Ionicons
                name="checkmark-circle"
                size={32}
                color={"#32ba7c"}
                /> 
                :
                <Ionicons
                name="checkmark-circle"
                size={32}
                color={"red"}
                />
            }
        </Pressable>
        <Text>{text}</Text>
    </View>
    )
}

const style = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
    }
})