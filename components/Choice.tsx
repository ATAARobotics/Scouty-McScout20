import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginRight: 12,
	},
	buttons: {
		display: "flex",
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
	}
});

interface ChoiceProps {
	options: string[];
	label: string;
	setState?: (state: number | undefined) => void,
}

export default function Choice(props: ChoiceProps) {
	let [choice, setChoice] = React.useState<number>();
	React.useEffect(() => {
		if (props.setState) {
			props.setState(choice);
		}
	}, [choice]);
	return (
		<View style={style.container}>
			<Text>{props.label}</Text>
			<View style={style.buttons}>
				{
					props.options.map(
						(label, index) =>
							<Pressable
								key = {index}
								style={[
									(index == choice ? style.buttonPress : style.buttonUnpress),
									(index == 0 ? style.borderLeft : index == props.options.length-1 ? style.borderRight : {})
								]}
								onPress={()=>setChoice(index)}
							>
								<Text style={style.buttonText}>{label}</Text>
							</Pressable>
					)
				}
			</View>
		</View>
	);
}
