export interface Room{
    availableRooms: number;
    bookedRooms: number;
    totalRooms:number;
}


export interface RoomObjectInfo {
    roomNumber: number;
    roomType: string;
    price: number;
    photos: string;
    checkinTime: Date;
}