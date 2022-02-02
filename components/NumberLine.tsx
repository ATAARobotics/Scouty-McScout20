import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		marginRight: 12,
	},
	label: {
		color: "#ffffff",
	},
	text: {
		color: "#ffffff",
		width: 240,
		height: 24,
		borderRadius: 6,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#ffffff",
	},
});

interface NumberLineProps {
	label: string;
	setState?: (state: number | undefined) => void,
}

/**
 * @param props
 */
export default function NumberLine(props: NumberLineProps): JSX.Element {
	const [number, setNumber] = React.useState<number>();
	React.useEffect(() => {
		if (props.setState) {
			props.setState(number);
		}
	}, [number]);
	return (
		<View style={style.container}>
			<Text style={style.label}>{props.label}</Text>
			<TextInput style={style.text} onChangeText={value=>{
				if (value === "") {
					setNumber(undefined);
				} else {
					const number = parseInt(value);
					if (!isNaN(number)) {
						setNumber(number);
					}
				}
			}} placeholder={props.label} value={number === undefined ? "" : number.toString()}></TextInput>
		</View>
	);
}
