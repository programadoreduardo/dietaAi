import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ScrollView
} from "react-native"

import { colors } from "@/app-example/constants/colors"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Header } from "@/app-example/components/header"

export default function Create() {
    return (
        <View style={styles.container}>
            <Header
            step="passo 2"
            title="Finalizando dieta"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
})