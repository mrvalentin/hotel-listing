import { GET_HOTELS } from "./actionTypes";
import { sortAlphabetically } from "./helpers";
import { HotelCardType } from "../../components/elements/types";

export const storeHotels = (payload:HotelCardType[]) => {
    const list = JSON.parse(JSON.stringify(payload));
    sortAlphabetically(list, "title");

    return {
        type: GET_HOTELS,
        payload: { list }
    }
}
