import { useState, useRef } from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';

// serve para conseguir ir para outrar páginas
import { Link } from "expo-router";

import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products';

import { Header } from '@/components/header';
import { CategoryButton } from '@/components/category-button';
import { Product } from '@/components/product';

import { useCartStore } from '@/stores/cart-store';

// nome do componente letra maiuscula
export default function Home() {
  const cartStore = useCartStore();
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList<ProductProps>>(null);

  // percorre a quantidade de cada produto e vai somando, 0 é o valor inicial
  const cartQuantityItems = cartStore.products.reduce( (total, product) => total + product.quantity, 0 )

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);

    // pegar o index da categoria
    const sectionIndex = CATEGORIES.findIndex( (category) => category === selectedCategory )

    // a tela ir para a seção que é escolhida em cima
    if( sectionListRef.current ) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        // como tem o mesmo nome da const pode deixar só assim
        sectionIndex,
        // começa no index 0
        itemIndex: 0,
      })
    }
  }

  return (
    // bg -> background   |  pt-8 -> padding top de 8
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={ cartQuantityItems } />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      {/* stickySectionHeadersEnabled  -- para a seção não esticar, não ficar em cima de algo */}
      <SectionList
        ref={ sectionListRef }

        sections={MENU}
        keyExtractor={ (item) => item.id }
        stickySectionHeadersEnabled={false}
        // render item -- vai renderizar o titulo
        renderItem={( {item} ) => (
          // vai levar dinamicamente para a pagina do id do produto escolhido
          <Link href={`/product/${item.id}`} asChild >
            <Product  data={item} />
          </Link>
        ) }
        // renderSectionHeader -- vai renderizar o
        renderSectionHeader={({section: { title } }) =>
          <Text className="text-xl text-white font-heading mt-8 mb-3" > {title} </Text>
        }
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ {paddingBottom: 100} }
      />
    </View>
  );
}