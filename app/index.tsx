import AddressList from "@/components/ui/address-list";
import { Footer, FOOTER_HEIGHT } from "@/components/ui/footer";
import { Header, HEADER_HEIGHT } from "@/components/ui/header";
import SalesMenu from "@/components/ui/salesMenu";
import { Stack } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const locationOne = require("@/assets/images/locationOne.jpg");
const locationTwo = require("@/assets/images/locationTwo.jpg");
const locationThree = require("@/assets/images/locationThree.jpg");
const foodOne = require("@/assets/images/foodOne.jpg");
const foodTwo = require("@/assets/images/foodTwo.png");
const foodThree = require("@/assets/images/foodThree.png");



export default function Home() {
    const insets = useSafeAreaInsets();

    const restaurantes = [
        {
            id: "1",
            nome: "Tio Ping - Liberdade",
            endereco: "R. Thomaz Gonzaga, 45 - Loja E - Liberdade, São Paulo - SP, 01506-020",
            imagem: locationOne,
            avaliacao: 4.8,
            distancia: "2,2 km",
        },
        {
            id: "2",
            nome: "Tio Ping - Bom Retiro",
            endereco: "Rua Prates, 379 A - Bom Retiro, São Paulo - SP, 01121-000",
            imagem: locationTwo,
            avaliacao: 4.9,
            distancia: "3,2 km",
        },
        {
            id: "3",
            nome: "Tio Ping - Chongqing - China",
            endereco: "No. 4, Lintong West Road, Jing'an District, Chongqing, China",
            imagem: locationThree,
            avaliacao: 5.0,

        },
    ];

    const novidades: {
        id: string;
        titulo: string;
        descricao: string;
        imagem: string;
        tipo: "promo" | "novo";
    }[] = [
            {
                id: "1",
                titulo: "Yakissoba Tradicional",
                descricao: "Macarrão oriental com legumes frescos e carne salteada no wok.",
                imagem: foodOne,
                tipo: "promo",
            },
            {
                id: "2",
                titulo: "Frango Xadrez Especial",
                descricao: "Cubos de frango com pimentões e amendoim ao molho oriental.",
                imagem: foodTwo,
                tipo: "novo",
            },
        ];

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <Header title="Início" />
            <Footer activeTab="inicio" />
            <ScrollView>
                <View
                    style={{
                        paddingTop: insets.top + HEADER_HEIGHT,
                        paddingBottom: insets.bottom + FOOTER_HEIGHT,
                    }}
                    className="flex-1 bg-gray-50 px-6"
                >
                    <Image
                        source={require("@/assets/images/logo.png")}
                        style={{ width: 150, height: 150, alignSelf: "center" }}
                    />
                    <View className="flex-row items-center justify-center">
                        <SalesMenu data={novidades} onPressItem={(item) => console.log(item)} />
                    </View>
                    <View className="flex-row items-center justify-center">
                        <AddressList data={restaurantes} onPressItem={(item) => console.log(item)} />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
