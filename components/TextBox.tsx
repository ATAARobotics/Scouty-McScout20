import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const style = StyleSheet.create({
	label: {
		color: "#ffffff",
	},
	container: {
		flex: 1,
		flexDirection: "column",
		marginRight: 12,
	},
	text: {
		color: "#ffffff",
		height: 240,
		borderRadius: 6,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#ffffff",
	},
});

interface TextBoxProps {
	label: string;
	setState?: (state: string) => void,
}

/**
 * @param props
 */
export default function TextBox(props: TextBoxProps): JSX.Element {
	return (
		<View style={style.container}>
			<Text style={style.label}>{props.label}</Text>
			<TextInput onChangeText={text => {
				if (props.setState) {
					props.setState(text);
				}
			}} style={style.text} spellCheck multiline></TextInput>
		</View>
	);
}
