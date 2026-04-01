import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {

  const roteador = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Navegue nos elementos abaixo:</Text>
      <Button
        title="Verificação de CEP"
        onPress={() => roteador.push("./cep")}
      />
    </View>
  );
}
