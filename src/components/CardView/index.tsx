import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles";

import Logo from '../../../assets/pictures/logo.png'
import { Divider } from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { useEffect, useState } from "react";
import { CarModel } from "./model";
import { handleNextItem, handlePreviousItem, loadCarData } from "./services";

export default function CardView(){
    const [carData, setCarData] = useState<CarModel | null>(null)

    useEffect(() => {
        (async() => {
            await loadCarData(1, setCarData)
        })()
    }, [])

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
                <Text style={styles.carName}>{carData?.carName}</Text>
            </View>
        )
    }

    const renderCarImage = () => {
        return(
            <Image style={styles.image} 
            source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}/>
        )
    }

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title="<" color={'#01A6B3'}
            onPress={() => handlePreviousItem(carData, setCarData)}/>
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title=">" color={'#01A6B3'}
            onPress={() => handleNextItem(carData, setCarData)}/>
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
