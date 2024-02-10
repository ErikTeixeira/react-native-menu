// definir as configurações da navegação

import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";

// Como não usou o default para criar o componente, ele é importado assim  ->  import { Loading } from "../components/loading";
// ---- pode usar o @ para importar por causa de uma config no tsconfig.json
import { Loading } from "@/components/loading";

// configurar as fonts no tailwind.config
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  } from '@expo-google-fonts/inter';

export default function Layout() {
    const [fontsLoaded] = useFonts({
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
    })
  
    if (!fontsLoaded) {
      return <Loading />
    }
  
    // pega todas as rotas e insere aqui ->  <Slot />
    // este arquivo serve para configurar todas as telas com a mesma cor de fundo
    return (
      <SafeAreaView className="flex-1 bg-slate-900">
        <Slot />
      </SafeAreaView>
    )
}