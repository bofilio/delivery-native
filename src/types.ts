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
    categories:categoryType[];
    mainCategory:categoryType;
    location:locationType
}