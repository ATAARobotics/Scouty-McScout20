import React from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";
import NumberLine from "../components/NumberLine";
import TextBox from "../components/TextBox";
import Choice from "../components/Choice";
import Switch from "../components/Switch";
import NumberUpDown from "../components/NumberUpDown";

import { RobotInfo, ClimbLevel, writeMatch, Size, writeRobot } from "../util/database";


const style = StyleSheet.create({
	outer: {
		backgroundColor: "#08080C",
		flexDirection: "column",
		padding: 24,
	},
	inner: {
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
	const [state, setState] = React.useState<RobotInfo>({
		type: "robot_info",
		team: undefined,
	    size: undefined,
	    appearance: undefined,
	    pitCrewSkill: undefined,
		robotDone: undefined,
		broken: undefined,
		notes: undefined,
	});

	return (
		<View style={style.outer}>
			<View style={style.inner}>
				<NumberLine
					setState={(s) => {
						setState({ ...state, team: s });
					}}
					state={state.team}
					label="Team Number"
				/>
			</View>
			<Text style={style.header}>General</Text>
			<View style={style.inner}>
				<Choice
					setState={(s) =>
						setState({ ...state, size: (s ? s : undefined ) as Size})
					}
					state={state.size}
					options={["Small", "Medium", "Large"]}
					label="Size"
				/>
				<Choice
					setState={(s) =>
						setState({ ...state, appearance: s})
					}
					state={state.appearance}
					options={["1", "2", "3", "4", "5"]}
					label="Overall Apperance"
				/>
				<Choice
					setState={(s) =>
						setState({ ...state, pitCrewSkill: s})
					}
					state={state.pitCrewSkill}
					options={["1", "2", "3", "4", "5"]}
					label="Pit Crew Skill"
				/>
                <Switch
					setState={(s) => setState({ ...state, robotDone: s})}
					state={state.robotDone}
					label="Is Robot Done?"
				/>
				<Switch
					setState={(s) => setState({ ...state, broken: s})}
					state={state.broken}
					label="Anything broken?"
				/>	
			</View>
			<View style={style.inner}>
				<TextBox
				setState={(s) => setState({ ...state, notes: s })}
				state={state.notes}
				label="Notes and Comments"
				/>
				</View>
				<View style={style.inner}>
				<Button
				title="Save"
				onPress={() =>
					writeRobot(state).then((success) =>
						console.log("Wrote the match: ", success),
					)
				}
				/>
				</View>
		</View>
	);
}
