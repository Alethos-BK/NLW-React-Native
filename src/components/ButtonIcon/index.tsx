import React from "react";
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from "./styles";

import discordImage from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
    title: String;

}

export function ButtonIcon({ title, ...rest }: Props){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={discordImage}/>
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}