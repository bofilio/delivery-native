export type FoodType = {
    id?:number;
    name: string;
    imageUrl: string;
    totalRating: number;
    ratingAvg: number;
    category: string;
    timeDelivery: string;
}
export type categoryType = {
    id?: number;
    name: string;
    color: string;
    icon: JSX.Element;
}
export type locationType={
    long:number;
    lat:number;
}
export type restaurantType = {
    id?: number;
    name: string;
    imageUrl: string;
    tags?:string[];
    mainCategory:string;
    location?:locationType
}
export type UpcomingOrderType={
    restaurantName:string,
    code:string,
    estimatedArrival:number,
    deliveryTime:number
}