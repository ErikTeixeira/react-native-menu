// componente de loading

// ActivityIndicator  -  mostrar que está carregando
import { ActivityIndicator, View } from "react-native";

// para conseguir passar no ActivityIndicator a cor usando tailwind 
import colors from "tailwindcss/colors";

export function Loading() {
    return(
        <View className="flex-1 items-center justify-center bg-slate-900" >
            <ActivityIndicator color={colors.white} />
        </View>
    )
}