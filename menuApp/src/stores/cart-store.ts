import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";

import * as cartInMemory from "./helpers/cart-in-memory";

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
}


export const useCartStore = create<StateProps>( (set) => ({
    products: [],

    add: (product: ProductProps) => set( (state) => ({
        products: cartInMemory.add(state.products, product)
    }) )
}) ) 