import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
	label: {
		color: "#ffffff",
	},
	container: {
		flex: 1,
		flexDirection: "column",
		marginRight: 12,
	},
	buttons: {
		flex: 1,
		flexDirection: "row",
	},
	borderRight: {
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
	},
	borderLeft: {
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4,
	},
	buttonPress: {
		padding: 6,
		borderRadius: 0,
		backgroundColor: "#545b62",
	},
	buttonUnpress: {
		padding: 6,
		borderRadius: 0,
		backgroundColor: "#6c757d",
	},
	buttonText: {
		color: "#ffffff",
	},
});

interface ChoiceProps {
	options: string[];
	label: string;
	setState?: (state: number | undefined) => void;
	state?: number;
}

/**
 * @param props
 */
export default function Choice(props: ChoiceProps): JSX.Element {
	const [choice, setChoice] = React.useState<number>();
	React.useEffect(() => {
		if (props.setState) {
			props.setState(choice);
		}
	}, [choice]);
	return (
		<View style={style.container}>
			<Text style={style.label}>{props.label}</Text>
			<View style={style.buttons}>
				{props.options.map((label, index) => (
					<Pressable
						key={index}
						style={[
							index ===
							(props.state === undefined ? choice : props.state)
								? style.buttonPress
								: style.buttonUnpress,
							index === 0
								? style.borderLeft
								: index === props.options.length - 1
								? style.borderRight
								: {},
						]}
						onPress={() => setChoice(index)}
					>
						<Text style={style.buttonText}>{label}</Text>
					</Pressable>
				))}
			</View>
		</View>
	);
}
