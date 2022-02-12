import React from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";
import NumberLine from "../components/NumberLine";
import TextBox from "../components/TextBox";
import Choice from "../components/Choice";
import Switch from "../components/Switch";
import NumberUpDown from "../components/NumberUpDown";

import { RobotInfo, ClimbLevel, writeMatch, Size } from "../util/database";


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
	    appearance: 0,
	    pitCrewSkill: 0,
	    robotDone: undefined,
	});

	return (
		<ScrollView style={style.outer}>
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
					setState={(s) => setState({ ...state, robotDone: s })}
					state={state.robotDone}
					label="Is Robot Done?"
				/>
			</View>
		</ScrollView>
	);
}
