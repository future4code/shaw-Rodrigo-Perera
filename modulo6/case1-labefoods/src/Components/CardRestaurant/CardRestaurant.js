import { goToRestaurantPage } from "../../Routes/coordinator";
import { DivRestaurantInfo, Main, RestaurantImage, RestaurantInfo, RestaurantName } from "./styled";
import { useNavigate } from "react-router-dom";

 const CardRestaurant = ({restaurant}) => {

    const navigate = useNavigate()

    return(
        <Main onClick={() => goToRestaurantPage(navigate, restaurant.id)}>
            <RestaurantImage src={restaurant.logoUrl}/>
            <RestaurantName>{restaurant.name}</RestaurantName>
            <DivRestaurantInfo>
                <RestaurantInfo>{restaurant.deliveryTime}</RestaurantInfo>
                <RestaurantInfo>{restaurant.shipping}</RestaurantInfo>
            </DivRestaurantInfo>
        </Main>
    )
}

export default CardRestaurant;