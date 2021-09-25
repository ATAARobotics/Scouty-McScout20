import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginRight: "1rem",
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
	}
});

interface ChoiceProps {
	options: string[];
	label: string;
}

export default function Choice(props: ChoiceProps) {
	let [choice, setChoice] = React.useState<number>();
	return (
		<View style={style.container}>
			<Text>{props.label}</Text>
			<View style={style.buttons}>
				{props.options.map((label, index) => <Button color={index == choice ? "#ffff00" : "#ff00ff"} onPress={()=>setChoice(index)} title={label}/>)}
			</View>
		</View>
	);
}
