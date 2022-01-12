import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginRight: 12,
	},
	panel: {
		display: "flex",
		flexDirection: "row",
	},
	text: {
		width: 36,
		borderRadius: 6,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#000000",
		marginLeft: 4,
		marginRight: 4,
		textAlign: "center",
	}
});

interface NumberUpDownProps {
	label: string;
}

export default function NumberUpDown(props: NumberUpDownProps) {
	const [value, setValue] = React.useState(0);
	return (
		<View style={style.container}>
			<Text>{props.label}</Text>
			<View style={style.panel}>
				<Button onPress={()=>setValue(Math.max(value-1, 0))} title="  - " color="#ea3017"/>
				<TextInput style={style.text} keyboardType="numeric" onChangeText={value=>{
					if (value == "") {
						value = "0";
					}
					const number = parseInt(value);
					if (!isNaN(number)) {
						setValue(Math.min(Math.max(number, 0), 100));
					}
				}} value={value.toString()}/>
				<Button onPress={()=>setValue(Math.min(value+1, 100))} title=" + " color="#4cea17"/>
			</View>
		</View>
	);
}
