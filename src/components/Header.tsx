import React from "react";
import { Image, Button, View, StyleSheet } from "react-native";

const style = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "row",
		height: 100,
		backgroundColor: "#404050",
	},
	image: {
		height: 100,
		width: 140,
	},
});

export type PageState = "match" | "sync";

interface HeaderProps {
	setPage: (page: PageState) => void;
}

export default function Header(props: HeaderProps): JSX.Element {
	return (
		<View style={style.main}>
			<Image source={require("../../assets/ataa.png")} style={style.image} />
			<Button title="Match" onPress={() => props.setPage("match")} />
			{/* <Button title="Pit" onPress={() => props.setPage("pit")} />*/}

			<Button title="Sync" onPress={() => props.setPage("sync")} />
		</View>
	);
}
