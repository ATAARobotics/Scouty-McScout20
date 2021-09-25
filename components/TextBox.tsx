import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginRight: "1rem",
	},
	text: {
		height: "10rem",
		borderRadius: 6,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#000000",
	}
});

interface TextBoxProps {
	label: string;
}

export default function TextBox(props: TextBoxProps) {
	return (
		<View style={style.container}>
			<Text>{props.label}</Text>
			<TextInput style={style.text} spellCheck multiline></TextInput>
		</View>
	);
}
