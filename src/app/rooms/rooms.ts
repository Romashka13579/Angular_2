export interface Room {
    availableRooms:number;
    bookedRooms:number;
    allRooms:number;
}

export interface RoomList{
    roomType:string;
    roomNumber:number;
    roomPrice:number;
    roomQuality:string;
    roomFreeTime:Date;
}
