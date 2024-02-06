import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

// interface HeaderProps  {
//   title: string
// }

type HeaderProps = {
  title: string
  cardQuantityItems?: number
}

export function Header({title, cardQuantityItems = 0}: HeaderProps){
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
        <Text className="text-white text-xl font-heading">{title}</Text>
      </View>

      {cardQuantityItems > 0 &&
        <TouchableOpacity className="relative" activeOpacity={0.7}>
        <View 
          className="bg-lime-400 w-4 h-4 rounded-full items-center justify-center absolute z-10 -right-1.5 -top-1"
        >
          <Text className="text-slate-900 font-bold text-xs">{cardQuantityItems}</Text>
        </View>

        <Feather name="shopping-bag" color={colors.white} size={24} />
      </TouchableOpacity>}

    </View>
  )
}