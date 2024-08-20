import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles";

import Logo from '../../../assets/pictures/logo.png'
import { Divider } from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";

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

    const renderCarImage = () => {
        return(
            <Image style={styles.image} 
            source={{uri: `${CAR_ASSETS_BASE_URL}1.png`}}/>
        )
    }

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title="<" color={'#01A6B3'}
            onPress={() => {

            }}/>
            <Text style={styles.priceLabel}>VALOR</Text>
            <Button title=">" color={'#01A6B3'}/>
        </View>
    )

    return(
        <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider/>
            
            {renderCarDetails()}
            {renderCarImage()}
            <Divider/>

            <BuyButton/>
            {renderPriceControls()}
        </View>
    )
}