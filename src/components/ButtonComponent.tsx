import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        backgroundColor: 'green',
        marginTop: 30
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});


const ButtonComponent = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: props.disabled
                        ? "#ccc"
                        : pressed
                            ? "#aa0000"
                            : props.color || "red",
                },
                styles.container,
                props.buttonStyles,
            ]}
            disabled={props.disabled}
            onPress={props.onPress}
            accessible
            accessibilityLabel={props.accessibilityLabel || "A Button"}
        >
            <Text style={[styles.text, props.textStyles]}>
                {props.children || "Press Me"}
            </Text>
        </Pressable>
    );
};
export default ButtonComponent;

