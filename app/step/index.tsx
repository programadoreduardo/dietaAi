import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView
} from "react-native"

import { colors } from "@/app-example/constants/colors"
import { Header } from "@/app-example/components/header"
import { Input } from "@/app-example/components/input"

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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

    function handleCreate(data: FormData) {
        console.log(data)
    }

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

                <Text style={styles.label}>Seu peso atual:</Text>
                <Input
                    name="weight"
                    control={control}
                    placeholder="Ex: 90"
                    error={errors.weight?.message}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Seu altura atual:</Text>
                <Input
                    name="height"
                    control={control}
                    placeholder="Ex: 1.90"
                    error={errors.height?.message}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Sua idade:</Text>
                <Input
                    name="age"
                    control={control}
                    placeholder="Ex: 40"
                    error={errors.age?.message}
                    keyboardType="numeric"
                />

                <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
                    <Text style={styles.buttonText}> Avançar</Text>
                </Pressable>

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
    },
    button: {
        backgroundColor: colors.blue,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})