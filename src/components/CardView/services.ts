import { fetchCarData } from "../../api/getCars";
import { CarModel } from "./model"

export const loadCarData = async(
    id: number,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    const response = await fetchCarData(id)
    try {
        if(response){
            setCarData(response)
        }
    } catch (error) {
        console.log("Erro ao buscar da api", error);
        setCarData(null)
    }
}

export const handlePreviousItem = async(
    carData: CarModel | null, 
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
    ) => {
        let response = null;
        try {
            if(carData && carData?.id > 1){
                response = await fetchCarData(carData.id - 1)
            }

            if(response){
                setCarData(response)
            }
        } catch (error) {
            console.log("Erro ao chamar a api", error);
        }
}

export const handleNextItem = async(
    carData: CarModel | null, 
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
    ) => {
        let response = null
    try {
        if(carData && carData?.id < 10){
            response = await fetchCarData(carData.id + 1)
        }

        if(response){
            setCarData(response)
        }
    } catch (error) {
        console.log("Erro ao chamar a api", error);
    }
}
