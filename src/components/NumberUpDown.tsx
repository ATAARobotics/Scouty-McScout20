import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const style = StyleSheet.create({
	label: {
		color: "#ffffff",
	},
	container: {
		flexDirection: "column",
		marginRight: 12,
		marginVertical: 6,
		alignItems: "center",
	},
	panel: {
		flex: 1,
		flexDirection: "row",
	},
	text: {
		color: "#ffffff",
		width: 36,
		borderRadius: 6,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#ffffff",
		marginLeft: 4,
		marginRight: 4,
		textAlign: "center",
	},
});

interface NumberUpDownProps {
	label: string;
	setState?: (state: number) => void;
	state?: number;
}

/**
 * @param props
 */
export default function NumberUpDown(props: NumberUpDownProps): JSX.Element {
	const [value, setValue] = React.useState(0);
	React.useEffect(() => {
		if (props.setState) {
			props.setState(value);
		}
	}, [value]);
	return (
		<View style={style.container}>
			<Text style={style.label}>{props.label}</Text>
			<View style={style.panel}>
				<Button
					onPress={() => setValue(Math.max(value - 1, 0))}
					title="  - "
					color="#ea3017"
				/>
				<TextInput
					style={style.text}
					keyboardType="numeric"
					onChangeText={(value) => {
						if (value === "") {
							value = "0";
						}
						const number = parseInt(value);
						if (!isNaN(number)) {
							setValue(Math.min(Math.max(number, 0), 100));
						}
					}}
					value={
						props.state === undefined
							? value.toString()
							: props.state.toString()
					}
				/>
				<Button
					onPress={() => setValue(Math.min(value + 1, 100))}
					title=" + "
					color="#4cea17"
				/>
			</View>
		</View>
	);
}
