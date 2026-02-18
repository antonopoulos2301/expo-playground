import { BellIcon, CircleUserIcon } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
    title: string;
    onRightPress?: () => void;
}

export const HEADER_HEIGHT = 56;

export function Header({ title, onRightPress }: HeaderProps) {
    const insets = useSafeAreaInsets();
    const containerHeight = insets.top + HEADER_HEIGHT;

    return (
        <View
            style={{ height: containerHeight, paddingTop: insets.top }}
            className="absolute inset-x-0 top-0 z-50 bg-zinc-50  px-6"
        >
            <View className="h-14 flex-row items-center justify-between">
                <CircleUserIcon size={24} color="#09090b" />
                <Text className="text-zinc-950 font-semibold text-base">{title}</Text>
                <Pressable onPress={onRightPress} disabled={!onRightPress} hitSlop={8}>
                    <BellIcon size={24} color="#09090b" />
                </Pressable>
            </View>
        </View>
    )
}
