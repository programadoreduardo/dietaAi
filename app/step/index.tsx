import { Header } from "@/app-example/components/header";
import { Input } from "@/app-example/components/input"
import { colors } from "@/app-example/constants/colors";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { TypeOf, z } from 'zod'

const schema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatório" }),
    weight: z.string().min(1, { message: "O peso é obrigatório" }),
    age: z.string().min(1, { message: "A idade é obrigatório" }),
    height: z.string().min(1, { message: "A altura é obrigatório" }),
})

type FormData = z.infer<typeof schema>


export default function Step() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    return (
        <View style={styles.container}>
            <Header
                step="Passo 1"
                title="vamos começar"
            />
            <ScrollView style={styles.content}>
                <Text style={styles.label}>Nome:</Text>
                <Input 
                name="name"
                control={control}
                placeholder="Digite o seu nome..."
                error={errors.name?.message}
                keyboardType="default"
                />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    content: {
        paddingHorizontal: 16
    },
    label: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 8,
    }
})