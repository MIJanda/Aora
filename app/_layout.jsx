import { Slot, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
		</Stack>
	)
}

NativeWindStyleSheet.setOutput({
	default: "native",
});

