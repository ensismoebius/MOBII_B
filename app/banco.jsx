import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";


export default function Banco() {

    // Abre uma conexão com a base de dados sqlite
    const db = SQLite.openDatabaseSync("banco.db");

    // Guarda os dados em um estado local
    const [dados, setDados] = useState([]);

    // Guarda o valor do digitado no TextInput
    const [valor, setValor] = useState("");

    // Cria a tabela "dados" caso ela não exista
    // Isso é necessário para garantir que a base de dados
    // exista e tenha a tabela que esperadmos
    useEffect(() => {
        db.execSync("CREATE TABLE IF NOT EXISTS dados (id INTEGER PRIMARY KEY AUTOINCREMENT, valor TEXT);");
    }, []);


    function salvarDado() {
        // Adiciona o novo valor à lista de dados
        setDados([...dados, valor]);
        // Limpa o campo de texto
        setValor("");
    }


    return (
        <View>
            <Text>Banco de dados local</Text>
            <TextInput
                placeholder="Digite algo para salvar"
                value={valor}
                onChangeText={setValor}
            />
            <Button
                title="Salvar"
                onPress={salvarDado}
            />
            <Text>Dados salvos aparecerão aqui</Text>
            <View>
                {/* Exibe um lista de valores salvos no estado dados */}
                <FlatList
                    data={dados}
                    keyExtractor={
                        (item, index) => index.toString()
                    }
                    renderItem={
                        ({ item }) =>
                            <Text>{item}</Text>
                    }
                />
            </View>
        </View>
    );
}