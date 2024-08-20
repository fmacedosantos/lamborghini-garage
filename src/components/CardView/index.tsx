import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import {Logo} from '../../../assets/pictures/logo.png'

export default function CardView(){
    const renderLogoBox = () => {
        return(
            <View style={styles.logoContainer}>
                <Image style={styles.imageLogo} source={Logo}/>
            </View>
        )
    }

    return(
        <View style={styles.imageContainer}>
            {renderLogoBox()}
        </View>
    )
}