import React from 'react';
import Choice from "./Choice";

interface BooleanProps {
	label: string;
}

export default function Boolean(props: BooleanProps) {
	return (
		<Choice options={["Yes", "No"]} label={props.label}/>
	);
}
