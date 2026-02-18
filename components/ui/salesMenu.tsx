import React from "react";
import {
    FlatList,
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Novidade = {
    id: string;
    titulo: string;
    descricao: string;
    imagem: string | ImageSourcePropType;
    tipo?: "novo" | "promo";
};

interface Props {
    data: Novidade[];
    onPressItem?: (item: Novidade) => void;
}

export default function SalesMenu({ data, onPressItem }: Props) {
    const getImageSource = (imagem: Novidade["imagem"]): ImageSourcePropType =>
        typeof imagem === "string" ? { uri: imagem } : imagem;

    const renderItem = ({ item }: { item: Novidade }) => (
        <TouchableOpacity
            onPress={() => onPressItem?.(item)}
            className="mr-4 w-72"
            activeOpacity={0.9}
        >
            <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                <Image
                    source={getImageSource(item.imagem)}
                    className="w-full h-40"
                    resizeMode="cover"
                />

                <View className="p-4">
                    {item.tipo && (
                        <View
                            className={`self-start px-3 py-1 rounded-full mb-2 ${item.tipo === "promo"
                                ? "bg-red-500"
                                : "bg-green-500"
                                }`}
                        >
                            <Text className="text-white text-xs font-bold uppercase">
                                {item.tipo === "promo" ? "Promoção" : "Novo"}
                            </Text>
                        </View>
                    )}

                    <Text className="text-lg font-bold text-gray-800">
                        {item.titulo}
                    </Text>

                    <Text className="text-sm text-gray-500 mt-1">
                        {item.descricao}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="mt-6">
            <Text className="text-xl font-bold text-gray-900 mb-4 px-4">
                🔥 Novidades
            </Text>

            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingLeft: 16 }}
            />
        </View>
    );
}
