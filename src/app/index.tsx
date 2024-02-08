import { CategoryButton } from "@/components/category-button"

import { Header } from "@/components/header"
import { FlatList, Text, View } from "react-native"
import { CATEGORIES } from "@/utils/data/products"
import { useState } from "react"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0])

  function handleCategorySelect (newSeletedCategory: string) {
    setSelectedCategory(newSeletedCategory)
  }
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cardQuantityItems={0} />
      
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
        className="h-max-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
      />
    </View>
  )
}