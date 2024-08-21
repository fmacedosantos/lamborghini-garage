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

export const handlePreviousItem = async() => {

}

export const handleNextItem = async() => {
    
}