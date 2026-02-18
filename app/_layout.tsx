import "../global.css";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#09090b" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#09090b" },
      }}
    />
  );
}
