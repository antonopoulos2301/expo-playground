import { Footer, FOOTER_HEIGHT } from "@/components/ui/footer";
import { Header, HEADER_HEIGHT } from "@/components/ui/header";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const pedidos = [
    { id: "PED-1023", status: "Em preparo" },
    { id: "PED-1021", status: "Saiu para entrega" },
    { id: "PED-1018", status: "Finalizado" },
];

export default function Pedidos() {
    const insets = useSafeAreaInsets();

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <Header title="Pedidos" />
            <Footer activeTab="pedidos" />

            <View
                style={{
                    paddingTop: insets.top + HEADER_HEIGHT,
                    paddingBottom: insets.bottom + FOOTER_HEIGHT,
                }}
                className="flex-1 bg-gray-50 px-6"
            >
                <Text className="mt-6 text-2xl font-bold text-zinc-950">Seus pedidos</Text>
                <Text className="mt-2 text-zinc-500">Acompanhe o status dos últimos pedidos.</Text>

                <View className="mt-6 gap-3">
                    {pedidos.map((pedido) => (
                        <View key={pedido.id} className="rounded-2xl bg-white p-4">
                            <Text className="text-base font-semibold text-zinc-950">{pedido.id}</Text>
                            <Text className="mt-1 text-sm text-zinc-500">{pedido.status}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
}
