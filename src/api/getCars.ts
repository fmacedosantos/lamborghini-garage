import axios from "axios";
import { CarModel } from "../components/CardView/model";
import { CAR_API_BASE_URL } from "../constants/car";

interface ApiResponse{
    cars: CarModel[]
}

const fetchGet = async(id: number) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL)
        const carData = response.data.cars.find((car) => car.id === id) || null

        return carData
    } catch (error) {
        console.log("Erro ao buscar dados da API", error);
        
    }
}