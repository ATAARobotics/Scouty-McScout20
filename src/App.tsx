import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { PageState } from "./components/Header";
import Header from "./components/Header";
import Match from "./pages/Match";
import Sync from "./pages/Sync";
import Pit from "./pages/Pit";

const style = StyleSheet.create({
	main: {
		backgroundColor: "#08080C",
	},
});

function renderPage(
	state: PageState,
	setState: (state: PageState) => void,
): JSX.Element {
	switch (state) {
		case "match":
			return <Match />;
		case "sync":
			return <Sync done={() => setState("match")} />;
		case "pit":
			return <Pit />;
	}
}

export default function App(): JSX.Element {
	const [state, setState] = React.useState<PageState>("match");
	return (
		<ScrollView style={style.main}>
			<Header setPage={setState} />
			{renderPage(state, setState)}
		</ScrollView>
	);
}
