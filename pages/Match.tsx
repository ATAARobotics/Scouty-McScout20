import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import NumberLine from "../components/NumberLine";
import TextBox from "../components/TextBox";
import Choice from "../components/Choice";
import Boolean from "../components/Boolean";
import NumberUpDown from "../components/NumberUpDown";

const style = StyleSheet.create({
	outer: {
		display: "flex",
		flexDirection: "column",
		padding: 24,
	},
	inner: {
		display: "flex",
		flexDirection: "row",
	},
	header: {
		fontSize: 24,
		marginTop: 24,
		paddingTop: 12,
		borderTopWidth: 1,
		borderTopColor: "#c0c0c0",
	},
});

export default function Match() {
	return (
		<ScrollView style={style.outer}>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<NumberLine label="Match Number"/>
			</View>
			<View style={style.inner}>
				<NumberLine label="Team Number"/>
			</View>
			<Text style={style.header}>Autonomous</Text>
			<View style={style.inner}>
				<Boolean label="Exited Tarmac"/>
				<Choice options={["Left", "Middle", "Right"]} label="Starting Location"/>
			</View>
			<View style={style.inner}>
				<NumberUpDown label="Cells Picked Up"/>
				<NumberUpDown label="Cells Dropped"/>
			</View>
			<View style={style.inner}>
				<NumberUpDown label="Cells in Low Goal"/>
				<NumberUpDown label="Cells in High Goal"/>
			</View>
			<Text style={style.header}>Teleop</Text>
			<View style={style.inner}>
				<NumberUpDown label="Cells Picked Up"/>
				<NumberUpDown label="Cells Dropped"/>
			</View>
			<View style={style.inner}>
				<NumberUpDown label="Cells in Low Goal"/>
				<NumberUpDown label="Cells in High Goal"/>
			</View>
			<Text style={style.header}>Climb</Text>
			<View style={style.inner}>
				<Choice options={["None", "Low", "Medium", "High", "Traversal"]} label="Highest Level Attempted"/>
			</View>
			<View style={style.inner}>
				<Choice options={["None", "Low", "Medium", "High", "Traversal"]} label="Highest Level Scored"/>
			</View>
			<View style={style.inner}>
				<Boolean label="Fell Down"/>
			</View>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<Choice options={["1", "2", "3", "4", "5"]} label="Speedyboi"/>
				<Choice options={["1", "2", "3", "4", "5"]} label="Stability"/>
				<Choice options={["1", "2", "3", "4", "5"]} label="Defense"/>
			</View>
			<View style={style.inner}>
				<Boolean label="Primary Defense Bot?"/>
				<Boolean label="Did Anything Break?"/>
			</View>
			<View style={style.inner}>
				<Boolean label="Robot Died, Disabled, or Disconnected?"/>
			</View>
			<TextBox label="Notes and Comments"/>
		</ScrollView>
	);
}
