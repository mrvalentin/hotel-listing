export type HotelCardType = {
    id: number;
    photo: PhotoProps;
    title: string;
    rating: number;
    description: string;
    userRating: number;
    reviewersNo: number;
    amenities: AmenitiesType[];
    price: number;
    pricePP: number;
}

type PhotoProps = {
    src: string;
    isResponsive: boolean;
}

export type AmenitiesType = {
    icon: string;
    description: string;
}