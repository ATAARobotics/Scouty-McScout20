import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginRight: 12,
	},
	text: {
		height: 240,
		borderRadius: 6,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#000000",
	}
});

interface TextBoxProps {
	label: string;
	setState?: (state: string) => void,
}

export default function TextBox(props: TextBoxProps) {
	return (
		<View style={style.container}>
			<Text>{props.label}</Text>
			<TextInput onChange={e => {
				if (props.setState) {
					props.setState(e.target.value);
				}
			}} style={style.text} spellCheck multiline></TextInput>
		</View>
	);
}
