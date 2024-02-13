import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

// products são passados para saber a quantidade deles, e se tiver repetido não aparecer duplicado e sim acrescentar na quantidade
export function add(products:ProductCartProps[], newProduct: ProductProps) {
    const existingProduct = products.find(({id}) => newProduct.id === id)

    if(existingProduct) {
        return products.map((product) => existingProduct.id === product.id 
                                         ? {...product, quantity: product.quantity + 1 }
                                         : product
                            )            
    }

    // principio da imutabilidade, sempre retornar um novo array
    // com o novo produto, sendo sua primeira vez então a quantidade é 1
    return [...products, {...newProduct, quantity: 1}]
}



// logica para deletar produto
export function remove( products:ProductCartProps[], productRemovedId: string ) {
    const updatedProducts = products.map( (product) => 
        product.id === productRemovedId ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 0
        } : product
    )

    return updatedProducts.filter( (product) => product.quantity > 0 )
}

