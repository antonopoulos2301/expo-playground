import { Footer, FOOTER_HEIGHT } from "@/components/ui/footer";
import { Header, HEADER_HEIGHT } from "@/components/ui/header";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const itensCardapio = [
    { id: "1", nome: "Temaki Salmão", preco: "R$ 29,90" },
    { id: "2", nome: "Guioza de Frango", preco: "R$ 21,90" },
    { id: "3", nome: "Ramen Tradicional", preco: "R$ 34,90" },
];

export default function Cardapio() {
    const insets = useSafeAreaInsets();

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <Header title="Cardápio" />
            <Footer activeTab="cardapio" />

            <View
                style={{
                    paddingTop: insets.top + HEADER_HEIGHT,
                    paddingBottom: insets.bottom + FOOTER_HEIGHT,
                }}
                className="flex-1 bg-gray-50 px-6"
            >
                <Text className="mt-6 text-2xl font-bold text-zinc-950">Nosso cardápio</Text>
                <Text className="mt-2 text-zinc-500">Escolha os pratos disponíveis hoje.</Text>

                <View className="mt-6 gap-3">
                    {itensCardapio.map((item) => (
                        <View key={item.id} className="rounded-2xl bg-white p-4">
                            <Text className="text-base font-semibold text-zinc-950">{item.nome}</Text>
                            <Text className="mt-1 text-sm text-zinc-500">{item.preco}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
}
