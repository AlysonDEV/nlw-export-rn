import { useState, useRef } from "react"
import { FlatList, View, SectionList, Text } from "react-native"
import { Link } from "expo-router"

import { useCartStore } from "@/stores/cart-store"

import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button"
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products"
import { Product } from "@/components/product"

export default function Home() {
  const cartStore = useCartStore()
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  const cartQuantityItems = cartStore.products.reduce((amount, product) => amount + product.quantity, 0)

  function handleCategorySelect (newSeletedCategory: string) {
    setSelectedCategory(newSeletedCategory)
    
    const sectionIndex = CATEGORIES.findIndex((category)=>category === newSeletedCategory )

    if(sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0
      })
    }

  }
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cardQuantityItems={cartQuantityItems} />
      
      <FlatList 
        data={CATEGORIES} 
        keyExtractor={ (item) => item } 
        renderItem={({item})=>(
          <CategoryButton 
            title={item} 
            isSelected={item === selectedCategory} 
            onPress={()=>handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
      />

      <SectionList 
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item)=>item.id}
        stickyHeaderHiddenOnScroll={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({section:{title}}) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}
      />
    </View>
  )
}