import React from "react";
import Choice from "./Choice";

interface SwitchProps {
	label: string;
	setState?: (state: boolean) => void;
	state?: boolean;
}

/**
 * @param props
 */
export default function Switch(props: SwitchProps): JSX.Element {
	return (
		<Choice
			setState={(s) => props.setState && props.setState(s === 1)}
			state={props.state === undefined ? undefined : props.state ? 0 : 1}
			options={["Yes", "No"]}
			label={props.label}
		/>
	);
}
