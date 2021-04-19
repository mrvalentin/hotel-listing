import {HotelCardType} from '../../components/elements/types'

interface Action_Get_Hotels {
    type: "GET_HOTELS";
    payload: HotelCardType
}

export type Action = Action_Get_Hotels;