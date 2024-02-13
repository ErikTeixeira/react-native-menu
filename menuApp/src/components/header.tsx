// TouchableOpacity  - fazer a área se tornar uma área de toque

import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Link } from 'expo-router';

// icones do proprio expo
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

// cartQuantityItems?  -  opcional
type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
    // border-b -> border bottom  | pb -> padding bottom  | mx -> margin na horizontal  | text-xl/xs -> tamanho do texto  | mt -> margin top  |  z -> para trazer para frente
    // h -> height  | w -> width   -> se passar o mouse em cima te mostra o tamanho que está utilizando
    // rounded-full  ->  100% redondo 

  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require('@/assets/logo.png')} className="h-6 w-32" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

        {/* &&  -- usado para renderizar o que está depois se for maior que 0
            activeOpacity={0.7}  -- 70% a opacidade */}
      {cartQuantityItems > 0 && (
        <Link href="/cart" asChild >
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
              <Text className="text-slate-900 font-bold text-xs">{cartQuantityItems}</Text>
            </View>

              {/* icone de sacolinha de compras */}
            <Feather name="shopping-bag" color={colors.white} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}