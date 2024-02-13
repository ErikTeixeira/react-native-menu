import { useState } from "react";
import { useNavigation } from "expo-router";
import { Alert, ScrollView, Text, View, Linking } from "react-native";
// ScrollView  -- ative a rolagem da página
// Linking -- utilizado para abrir um link pelo react native

// icones
import { Feather } from "@expo/vector-icons";

// importar a biblioteca
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { ProductCartProps, useCartStore } from "@/stores/cart-store";

import { formatCurrency } from "@/utils/functions/format-currency";
import { LinkButton } from "@/components/link-button";


const PHONE_NUMBER = "5511957538411";


export default function Cart() {
    // anotar o endereco
    const [address, setAddress] = useState("");

    // pegar os dados do produto
    const cartStore = useCartStore();

    const navigation = useNavigation();

    const total = formatCurrency( cartStore.products.reduce( (total, product) => total + product.price * product.quantity, 0))

    function handleProductRemove(product: ProductCartProps) {
        Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
            {
                text: "Carcelar",
            },
            {
                text: "Remover",
                onPress: () => cartStore.remove( product.id ),
            }
        ])
    }

    // enviar o pedido por wats
    function handleOrder() {
        // trim -- para tirar os espaços em branco
        if(address.trim().length === 0) {
            return Alert.alert("Pedido", "Informe os dados da entrega.") ;
        }

        const products = cartStore.products.map( (product) => `\n ${product.quantity} ${product.title}` ).join("");

        const message = `
        🍔 NOVO PEDIDO
        \n Entregar em: ${address}

        ${products}

        \n Valor total: ${total}
        `;

        // enviar pro whats
        Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`);

        cartStore.clear();
        // voltar para a tela anterior
        navigation.goBack();
    }

    return (
        <View className="flex-1 pt-8" >
            <Header title="Seu carrinho" />

            <KeyboardAwareScrollView>
                <ScrollView>

                    <View className="p-5 flex-1" >
                        { cartStore.products.length > 0 ? (
                            <View className="border-b border-slate-700" >
                                {
                                    cartStore.products.map( (product) => (
                                        <Product  key={product.id} data={product}  onPress={ () => handleProductRemove(product) }  />
                                    ) )
                                }
                            </View>

                        ) : (

                            <Text className="font-body text-slate-400 text-center my-8" >
                                Seu carrinho está vazio.
                            </Text>
                        
                        )}

                        <View className="flex-row gap-2 items-center mt-5 mb-4" >
                            <Text className="text-white text-xl font-subtitle" > Total: </Text>

                            <Text className="text-lime-400 text-2xl font-heading" > {total} </Text>
                        </View>

                        <Input 
                            placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento... "
                            // vai pegar a informação e guardar no estado, ele atualiza sempre que algo é digitado ou apagado
                            onChangeText={ setAddress }

                            // blurOnSubmit -- o botão do teclado de dar espaço não vai dar espaço
                            // o botão de dar espaço vai enviar
                            blurOnSubmit={true}
                            onSubmitEditing={ handleOrder }
                            // o botão de pular linha/ enviar vai estar escrito next ou uma setinha
                            returnKeyType="next"
                        />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>

            <View className="p-5 gap-5" >
                <Button onPress={ handleOrder } >
                    <Button.Text>Enviar pedido</Button.Text>

                    <Button.Icon>
                        <Feather name="arrow-right-circle" size={20} />
                    </Button.Icon>
                </Button>

                <LinkButton title="Voltar ao cardápio" href="/" />

            </View>

        </View>
    )       
}