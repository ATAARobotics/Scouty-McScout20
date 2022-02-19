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
			setState={(s) => props.state && props.setState && props.setState(s === 1)}
			state={props.state === undefined ? undefined : props.state ? 1 : 0}
			options={["No", "Yes"]}
			label={props.label}
		/>
	);
}
