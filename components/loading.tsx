import { ActivityIndicator } from "react-native";
import { View, Text } from "react-native";
import colors from "tailwindcss/colors"

export function Loading(){
    return(
    <View className="flex-1 items-center justfy-center bg-slate-900">
        <ActivityIndicator color={colors.white} />
    </View>
    )
}