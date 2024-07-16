import { Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Link } from 'expo-router';

import { images } from '../../constants';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

export default function SignIn() {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = () => {

	};

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				{/* todo: replace h-full with min-h-[85vh] if not working as expected */}
				<View className="w-full justify-center min-h-[90vh] px-4 py-6">
					<Image
						source={images.logo}
						className="w-[115px] h-[35px]"
						resizeMode="contain"
					/>
					<Text
						className="text-2xl text-white text-semibold mt-10 font-psemibold"
					>
						Log in to Aora
					</Text>
					<FormField
						title="Email"
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>
					<FormField
						title="Password"
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles="mt-7"
					/>

					<CustomButton
						title="Sign In"
						handlePress={submit}
						containerStyles="mt-7"
						isLoading={isSubmitting}
					/>

					<View className="justify-center pt-5 flex-row gap-2">
						<Text className="text-lg text-gray-100 font-pregular">
							Don't have an account?
						</Text>
						<Link
							href="/sign-up"
							className="text-lg font-semibold text-secondary"
						>
							Sign Up
						</Link>
					</View>
				</View>

			</ScrollView>
		</SafeAreaView>
	)
}
