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

    const renderCarDetails = () => {
        return(
            <View style={{alignItems: 'center'}}>
                <Text style={styles.carBrand}>Lamburghini</Text>
                <Text style={styles.carName}>MODEL</Text>
            </View>
        )
    }

    return(
        <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider/>
            {renderCarDetails()}
        </View>
    )
}