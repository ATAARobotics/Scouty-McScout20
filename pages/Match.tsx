import React from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";
import NumberLine from "../components/NumberLine";
import TextBox from "../components/TextBox";
import Choice from "../components/Choice";
import Switch from "../components/Switch";
import NumberUpDown from "../components/NumberUpDown";

import { MatchInfo, ClimbLevel, writeMatch } from "../source/database";

const style = StyleSheet.create({
	outer: {
		backgroundColor: "#08080C",
		flex: 1,
		flexDirection: "column",
		padding: 24,
	},
	inner: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	header: {
		fontSize: 24,
		marginTop: 24,
		paddingTop: 12,
		borderTopWidth: 1,
		borderTopColor: "#c0c0c0",
		color: "#ffffff",
	},
});

/**
 *
 */
export default function Match(): JSX.Element {
	const [state, setState] = React.useState<MatchInfo>({
		type: "match_info",
		match: undefined,
		matchCategory: undefined,
		team: undefined,
		auto: {
			exitedTarmac: false,
			startingLocation: undefined,
			cellsAcquired: 0,
			cellsDropped: 0,
			lowGoalShots: 0,
			highGoalShots: 0,
		},
		teleop: {
			cellsAcquired: 0,
			cellsDropped: 0,
			lowGoalShots: 0,
			highGoalShots: 0,
		},
		climb: {
			highestAttempted: 0,
			highestScored: 0,
			fell: false,
		},
		speed: undefined,
		stability: undefined,
		defense: undefined,
		isPrimaryDefence: false,
		wasDisabled: false,
		wasBroken: false,
		notes: "",
	});
	return (
		<ScrollView style={style.outer}>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<NumberLine setState={s => {
					setState({...state, match: s})
				}} label="Match Number"/>
			</View>
			<View style={style.inner}>
				<NumberLine setState={s => {

				}} label="Team Number"/>
			</View>
			<Text style={style.header}>Autonomous</Text>
			<View style={style.inner}>
				<Switch setState={s => setState({...state, auto: {...state.auto, exitedTarmac: s}})} label="Exited Tarmac"/>
				<Choice options={["Left", "Middle", "Right"]} label="Starting Location"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, cellsAcquired: s}})} label="Cells Picked Up"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, cellsDropped: s}})} label="Cells Dropped"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, lowGoalShots: s}})} label="Cells in Low Goal"/>
				<NumberUpDown setState={s => setState({...state, auto: {...state.auto, highGoalShots: s}})} label="Cells in High Goal"/>
			</View>
			<Text style={style.header}>Teleop</Text>
			<View style={style.inner}>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, cellsAcquired: s}})} label="Cells Picked Up"/>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, cellsDropped: s}})} label="Cells Dropped"/>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, lowGoalShots: s}})} label="Cells in Low Goal"/>
				<NumberUpDown setState={s => setState({...state, teleop: {...state.teleop, highGoalShots: s}})} label="Cells in High Goal"/>
			</View>
			<Text style={style.header}>Climb</Text>
			<View style={style.inner}>
				<Choice setState={s => setState({...state, climb: {...state.climb, highestAttempted: (s || 0) as ClimbLevel}})} options={["None", "Low", "Medium", "High", "Traversal"]} label="Highest Level Attempted"/>
				<Choice setState={s => setState({...state, climb: {...state.climb, highestScored: (s || 0) as ClimbLevel}})} options={["None", "Low", "Medium", "High", "Traversal"]} label="Highest Level Scored"/>
				<Switch setState={s => setState({...state, climb: {...state.climb, fell: s}})} label="Fell Down"/>
			</View>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<Choice setState={s => setState({...state, speed: s ? s/4 : undefined})} options={["1", "2", "3", "4", "5"]} label="Speedyboi"/>
				<Choice setState={s => setState({...state, stability: s ? s/4 : undefined})} options={["1", "2", "3", "4", "5"]} label="Stability"/>
				<Choice setState={s => setState({...state, defense: s ? s/4 : undefined})} options={["1", "2", "3", "4", "5"]} label="Defense"/>
				<Switch setState={s => setState({...state, isPrimaryDefence: s})} label="Primary Defense Bot?"/>
				<Switch setState={s => setState({...state, wasBroken: s})} label="Did Anything Break?"/>
				<Switch setState={s => setState({...state, wasDisabled: s})} label="Robot Died, Disabled, or Disconnected?"/>
			</View>
			<TextBox setState={s => setState({...state, notes: s})} label="Notes and Comments"/>
			<Button title="Save" onPress={() => writeMatch(state).then(() => console.log("Wrote the match"))} />
			<Text style={style.header}>This is padding please ignore it because react native is bad.</Text>
		</ScrollView>
	);
}
