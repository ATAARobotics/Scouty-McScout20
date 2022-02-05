import React from "react";
import { Image, View, StyleSheet } from "react-native";

const style = StyleSheet.create({
	image: {
		flex: 1,
		width: 75,
		height: 75,
		paddingRight: 130,
		marginRight: "100%",
		resizeMode: "contain",
	},
});

export default function Header(): JSX.Element {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				borderWidth: 24,
				borderBottomWidth: 0,
				marginBottom: 0,

				borderColor: "#ffffff",
			}}
		>
			<Image source={require("../assets/ataa.png")} style={style.image} />
		</View>
	);
}
