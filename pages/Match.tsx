import React from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";
import NumberLine from "../components/NumberLine";
import TextBox from "../components/TextBox";
import Choice from "../components/Choice";
import Boolean from "../components/Boolean";
import NumberUpDown from "../components/NumberUpDown";

import { MatchInfo, ClimbLevel, writeMatch } from "../source/database";

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
	let [state, setState] = React.useState<MatchInfo>({
		type: "match_info",
		match: undefined,
		match_category: undefined,
		team: undefined,
		auto: {
			exited_tarmac: false,
			starting_location: undefined,
			cells_acquired: 0,
			cells_dropped: 0,
			low_goal_shots: 0,
			high_goal_shots: 0,
		},
		teleop: {
			cells_acquired: 0,
			cells_dropped: 0,
			low_goal_shots: 0,
			high_goal_shots: 0,
		},
		climb: {
			highest_attempted: 0,
			highest_scored: 0,
			fell: false,
		},
		speed: undefined,
		stability: undefined,
		defense: undefined,
		is_primary_defence: false,
		was_disabled: false,
		notes: "",
	});
	return (
		<ScrollView style={style.outer}>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<NumberLine setState={s => {

				}} label="Match Number"/>
			</View>
			<View style={style.inner}>
				<NumberLine setState={s => {

				}} label="Team Number"/>
			</View>
			<Text style={style.header}>Autonomous</Text>
			<View style={style.inner}>
				<Boolean setState={s => setState({...state, auto: {...state.auto, exited_tarmac: s}})} label="Exited Tarmac"/>
				<Choice options={["Left", "Middle", "Right"]} label="Starting Location"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, cells_acquired: s}})} label="Cells Picked Up"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, cells_dropped: s}})} label="Cells Dropped"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, low_goal_shots: s}})} label="Cells in Low Goal"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, high_goal_shots: s}})} label="Cells in High Goal"/>
			</View>
			<Text style={style.header}>Teleop</Text>
			<View style={style.inner}>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, cells_acquired: s}})} label="Cells Picked Up"/>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, cells_dropped: s}})} label="Cells Dropped"/>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, low_goal_shots: s}})} label="Cells in Low Goal"/>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, high_goal_shots: s}})} label="Cells in High Goal"/>
			</View>
			<Text style={style.header}>Climb</Text>
			<View style={style.inner}>
				<Choice setState={s => setState({...state, climb: {...state.climb, highest_attempted: (s || 0) as ClimbLevel}})} options={["None", "Low", "Medium", "High", "Traversal"]} label="Highest Level Attempted"/>
				<Choice setState={s => setState({...state, climb: {...state.climb, highest_scored: (s || 0) as ClimbLevel}})} options={["None", "Low", "Medium", "High", "Traversal"]} label="Highest Level Scored"/>
				<Boolean setState={s => setState({...state, climb: {...state.climb, fell: s}})} label="Fell Down"/>
			</View>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<Choice setState={s => setState({...state, speed: s ? s/4 : undefined})} options={["1", "2", "3", "4", "5"]} label="Speedyboi"/>
				<Choice setState={s => setState({...state, stability: s ? s/4 : undefined})} options={["1", "2", "3", "4", "5"]} label="Stability"/>
				<Choice setState={s => setState({...state, defense: s ? s/4 : undefined})} options={["1", "2", "3", "4", "5"]} label="Defense"/>
				<Boolean setState={s => setState({...state, is_primary_defence: s})} label="Primary Defense Bot?"/>
				<Boolean setState={s => setState({...state, was_broken: s})} label="Did Anything Break?"/>
				<Boolean setState={s => setState({...state, was_disabled: s})} label="Robot Died, Disabled, or Disconnected?"/>
			</View>
			<TextBox setState={s => setState({...state, notes: s})} label="Notes and Comments"/>
			<Button title="Save" onPress={() => writeMatch(state)} />
			<Text style={style.header}>This is padding please ignore it because react native is bad.</Text>
		</ScrollView>
	);
}
