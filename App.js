import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Tabs } from "./components";
import { AirCondition, Light, Loading, Login, Register } from "./screens";

const Stack = createStackNavigator();

const App = () => {
	return (
    	<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={"Login"}
			>
				<Stack.Screen name="HomeTabs" component={Tabs} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Light" component={Light} />
				<Stack.Screen name="AirCondition" component={AirCondition} />
			</Stack.Navigator>
    	</NavigationContainer>
  	)
}

export default App