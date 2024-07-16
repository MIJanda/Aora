import { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { icons } from '../constants';

export default function FormField({ title, value, placeholder, handleChangeText, otherStyles, ...props }) {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base text-gray-100 font-pmedium">{title}</Text>
			<View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:text-secondary flex-row justify-center items-center">
				{/* todo: rectify text input styles */}
				<TextInput
					className="flex-1 h-full text-white font-psemibold rounded-2xl"
					value={value}
					placeholder={placeholder}
					placeholderTextColor="#7b7b8b"
					onChangeText={handleChangeText}
					secureTextEntry={title === 'Password' && !showPassword}
				/>

				{
					title === 'Password' && (
						<TouchableOpacity
							onPress={() => setShowPassword(!showPassword)}
						>
							<Image
								source={!showPassword ? icons.eye : icons.eyeHide}
								className="w-6 h-6 ml-2"
								resizeMode="contain"
							/>
						</TouchableOpacity>
					)
				}
			</View>
		</View>
	)
}
