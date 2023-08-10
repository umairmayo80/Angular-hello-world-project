export interface Room{
    availableRooms: number;
    bookedRooms: number;
    totalRooms:number;
}


export interface RoomObjectInfo {
    roomNumber?: string;
    roomType: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}