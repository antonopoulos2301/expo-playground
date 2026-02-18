import { MapPin, Star } from "lucide-react-native";
import React from "react";
import {
    FlatList,
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Restaurante = {
    id: string;
    nome: string;
    endereco: string;
    imagem: string | ImageSourcePropType;
    avaliacao?: number;
    distancia?: string;
};

interface Props {
    data: Restaurante[];
    onPressItem?: (item: Restaurante) => void;
}

export default function AddressList({
    data,
    onPressItem,
}: Props) {
    const getImageSource = (imagem: Restaurante["imagem"]): ImageSourcePropType =>
        typeof imagem === "string" ? { uri: imagem } : imagem;

    const renderItem = ({ item }: { item: Restaurante }) => (
        <TouchableOpacity
            onPress={() => onPressItem?.(item)}
            activeOpacity={0.9}
            className="mr-4 w-72"
        >
            <View className="bg-white rounded-2xl shadow-md overflow-hidden">
                <Image
                    source={getImageSource(item.imagem)}
                    className="w-full h-40"
                    resizeMode="cover"
                />

                <View className="p-4">
                    <Text className="text-lg font-bold text-gray-900">
                        {item.nome}
                    </Text>

                    <View className="flex-row items-center mt-1">
                        <MapPin size={14} color="#6B7280" />
                        <Text className="text-sm text-gray-500 ml-1 flex-1">
                            {item.endereco}
                        </Text>
                    </View>

                    <View className="flex-row items-center justify-between mt-3">
                        {item.avaliacao && (
                            <View className="flex-row items-center">
                                <Star size={14} color="#FACC15" fill="#FACC15" />
                                <Text className="text-sm font-semibold ml-1 text-gray-700">
                                    {item.avaliacao.toFixed(1)}
                                </Text>
                            </View>
                        )}

                        {item.distancia && (
                            <Text className="text-sm text-gray-400">
                                🚚 {item.distancia}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="mt-6">
            <Text className="text-xl font-bold text-gray-900 mb-4 px-4">
                📍 Restaurantes próximos
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
