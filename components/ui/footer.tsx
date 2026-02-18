import { ClipboardListIcon, HouseIcon, UtensilsCrossedIcon } from "lucide-react-native";
import { Href, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type FooterTabKey = "inicio" | "cardapio" | "pedidos";

interface FooterProps {
    activeTab: FooterTabKey;
}

type FooterTab = {
    key: FooterTabKey;
    label: string;
    href: Href;
    icon: typeof HouseIcon;
};

export const FOOTER_HEIGHT = 64;

const tabs: FooterTab[] = [
    { key: "inicio", label: "Início", href: "/", icon: HouseIcon },
    { key: "cardapio", label: "Cardápio", href: "/cardapio", icon: UtensilsCrossedIcon },
    { key: "pedidos", label: "Pedidos", href: "/pedidos", icon: ClipboardListIcon },
];

export function Footer({ activeTab }: FooterProps) {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const containerHeight = insets.bottom + FOOTER_HEIGHT;

    return (
        <View
            style={{ height: containerHeight, paddingBottom: insets.bottom }}
            className="absolute inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-zinc-50 px-6"
        >
            <View className="h-16 flex-row items-center justify-between">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.key;
                    const Icon = tab.icon;

                    return (
                        <Pressable
                            key={tab.key}
                            onPress={() => !isActive && router.replace(tab.href)}
                            className="flex-1 items-center justify-center"
                            hitSlop={8}
                        >
                            <Icon size={20} color={isActive ? "#09090b" : "#71717a"} />
                            <Text
                                className="mt-1 text-xs"
                                style={{
                                    color: isActive ? "#09090b" : "#71717a",
                                    fontWeight: isActive ? "600" : "500",
                                }}
                            >
                                {tab.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}
