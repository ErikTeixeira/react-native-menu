import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";

// para salver no dispositivo
import { createJSONStorage, persist } from "zustand/middleware";
import { AsyncStorageHook } from "@react-native-async-storage/async-storage/lib/typescript/types";


import * as cartInMemory from "./helpers/cart-in-memory";
import AsyncStorage from "@react-native-async-storage/async-storage";

// coloca quantidade para saber quanto foi selecionado
export type ProductCartProps = ProductProps & {
    quantity: number;
}

// type ProductCartProps = {
//     id: string;
//     title: string;
//     price: number;
//     description: string;
//     cover: any;
//     thumbnail: any;
//     ingredients: string[];
// } & {
//     quantity: number;
// }

// add  --- função que recebe um produto do tipo ProductProps
type StateProps = {
    products: ProductCartProps[];
    add: (product: ProductProps) => void;
    remove: (productId: string) => void;
    clear: () => void;
}


//  está persistindo no dispositivo  -- persist 
export const useCartStore = create( persist <StateProps>( (set) => ({
    products: [],

    add: (product: ProductProps) => set( (state) => ({
        products: cartInMemory.add(state.products, product)
    }) ),

    remove: (productId: string) => 
        set( (state) => ({
            products: cartInMemory.remove( state.products, productId ),
        }) ),

    clear: () => set( () => ( {products: []} ) )

}), {
    name: "nlw-expert:cart",
    storage: createJSONStorage( () => AsyncStorage ),
})  ) 