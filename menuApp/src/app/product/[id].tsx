// o nome do arquivo é assim [id], porque o expo-router consegue identificar que é para procurar de acordo com o id 
import { Image, Text, View } from "react-native";

import { Redirect } from "expo-router";

// biblioteca de icones
import { Feather } from "@expo/vector-icons";

import { useCartStore } from "@/stores/cart-store";

import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

export default function Product() {
    const { id } = useLocalSearchParams();
    const cartStore = useCartStore();
    const navigation = useNavigation();

    // em vez de usar o filter, usa o find, mas ai ele pode ser undefined ai usa o Redirect do expo-router
    const product = PRODUCTS.find( (item) => item.id === id );

    function handleAddToCart() {
        if(product) {
            cartStore.add(product)
    
            // quando adicionar vai voltar para o ínicio
            navigation.goBack();
        }
    }

    // se o produto não existir, volta para o inicio
    if(!product) {
        return <Redirect href="/" />
    }

    return (
        <View className="flex-1" >
            <Image 
                source={product.cover} 
                className="w-full h-52" 
                resizeMode="cover" 
            />


            {/* my -> margin na vertical */}
            <View className="p-5 mt-8 flex-1" >
                <Text className="text-white text-xl font-heading" >
                    {product.title}
                </Text>
                
                <Text className="text-lime-400 text-2xl font-heading my-2" >
                    { formatCurrency(product.price) }
                </Text>

                <Text className="text-slate-400 font-body text-base leading-6 mb-6" >
                    {product.description}
                </Text>

                {
                    // {"\u2022"}  -- e a bolinha de cada item da lista
                    product.ingredients.map( (ingredient) => (
                        <Text key={ingredient} className="text-slate-400 font-body text-base leading-6" >
                            {"\u2022"} {ingredient}
                        </Text>
                    ) )
                }
            </View>

                <View className="p-5 pb-7 gap-5" >
                    <Button onPress={handleAddToCart} >
                        <Button.Icon>
                            <Feather name="plus-circle" size={25} />
                        </Button.Icon>

                        <Button.Text>
                            Adicionar ao pedido
                        </Button.Text>
                    </Button>

                    <LinkButton title="Voltar ao cardápio" href="/" />
                </View>
        </View>
    )
}