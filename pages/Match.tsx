import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumberLine from "../components/NumberLine";
import TextBox from "../components/TextBox";
import Choice from "../components/Choice";
import Boolean from "../components/Boolean";
import NumberUpDown from "../components/NumberUpDown";

const style = StyleSheet.create({
	outer: {
		display: "flex",
		flexDirection: "column",
	},
	inner: {
		display: "flex",
		flexDirection: "row",
	},
	header: {
		fontSize: 24,
		marginTop: "2rem",
		paddingTop: "1rem",
		borderTopWidth: 1,
		borderTopColor: "#c0c0c0",
	},
});

export default function Match() {
	return (
		<View style={style.outer}>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<NumberLine label="Match Number"/>
				<NumberLine label="Team Number"/>
			</View>
			<Text style={style.header}>Autonomous</Text>
			<View style={style.inner}>
				<Choice options={["Left", "Middle", "Right"]} label="Starting Location"/>
				<Boolean label="Moved From Baseline"/>
			</View>
			<View style={style.inner}>
				<NumberUpDown label="Cells Picked Up"/>
				<NumberUpDown label="Cells Dropped"/>
				<NumberUpDown label="Cells in Low Goal"/>
				<NumberUpDown label="Cells in High Goal"/>
				<NumberUpDown label="Cells in Inner Goal"/>
			</View>
			<TextBox label="Auto Notes and Comments"/>
		</View>
	);
}
