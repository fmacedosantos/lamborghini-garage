import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import {Logo} from '../../../assets/pictures/logo.png'
import { Divider } from "../Divider";

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
            <Divider/>
        </View>
    )
}