import { User } from "src/app/core/user-service/user";
interface UserThumbnail{
    id:number;
    name:string;
    img:string;
    
}
export class Review{

    constructor(
        public id:number,
        public user:UserThumbnail,
        public rating:number,
        public review:string,
        public createdAt:Date
    ){}
}