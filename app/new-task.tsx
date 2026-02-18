import { router, Stack } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function NewTask() {
    const [title, setTitle] = useState("");

    const handleSave = () => {
        const trimmed = title.trim()
        if (!trimmed) {
            Alert.alert("Erro", "O título da task é obrigatório");
            return
        }
        Alert.alert("Sucesso", "Task salva com sucesso");
        router.back();
    }
    return (
        <View className="flex-1 bg-zinc-950 px-6 pt-16">
            <Stack.Screen options={{ title: "Nova task" }} />
            <Text className="text-zinc-300 mt-2">Digite um título e salve.</Text>
            <TextInput value={title} onChangeText={setTitle} placeholder="Digite um título" placeholderTextColor="#a1a1aa" className="mt-6 rounded-2xl bg-zinc-800 text-white px-4 py-4" autoFocus returnKeyType="done" onSubmitEditing={handleSave} />
            <Pressable onPress={handleSave} className="mt-6 rounded-2xl bg-white px-4 py-3 active:opacity-80">
                <Text className="text-zinc-950 font-semibold text-base">Salvar</Text>
            </Pressable>
            <Pressable
                onPress={() => router.back()}
                className="mt-3 rounded-2xl bg-zinc-900 px-4 py-3 active:opacity-80"
            >
                <Text className="text-white font-semibold text-base">Cancelar</Text>
            </Pressable>
        </View>
    );
}
