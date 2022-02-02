import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginRight: 12,
	},
	text: {
		width: 240,
		height: 24,
		borderRadius: 6,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#000000",
	},
});

interface NumberLineProps {
	label: string;
	setState?: (state: number | undefined) => void,
}

export default function NumberLine(props: NumberLineProps) {
	const [number, setNumber] = React.useState<number>();
	React.useEffect(() => {
		if (props.setState) {
			props.setState(number);
		}
	}, [number]);
	return (
		<View style={style.container}>
			<Text>{props.label}</Text>
			<TextInput style={style.text} onChangeText={value=>{
				if (value == "") {
					setNumber(undefined);
				} else {
					const number = parseInt(value);
					if (!isNaN(number)) {
						setNumber(number);
					}
				}
			}} placeholder={props.label} value={number == undefined ? "" : number.toString()}></TextInput>
		</View>
	);
}
