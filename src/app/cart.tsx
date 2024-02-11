import { Text, View } from "react-native";

import { useCartStore } from "@/stores/cart-store";

import { Header } from "@/components/header";
import { Product } from "@/components/product";

export default function Cart() {
  const cartStore = useCartStore()


  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      {cartStore.products.length > 0 ?  (
        <View className="p-5 flex-1">
          {
            cartStore.products.map((product)=>(
              <Product key={product.id} data={product} />
            ))
          }
        </View>
      ) : (
        <Text className="font-body text-slate-400 text-center my-8">Seu carrinho está vazío</Text>
      ) }
    </View>
  )
}