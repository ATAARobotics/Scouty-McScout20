import React from 'react';
import Choice from "./Choice";

interface BooleanProps {
	label: string;
	setState?: (state: boolean) => void,
}

export default function Boolean(props: BooleanProps) {
	return (
		<Choice setState={s => props.setState && props.setState(s == 1)} options={["Yes", "No"]} label={props.label}/>
	);
}
