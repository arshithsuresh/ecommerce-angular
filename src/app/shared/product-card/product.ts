export class Product {
    constructor(
        public productID:string,
        public title:string,        
        public rating:number,
        public totalRatings:number,        
        public brand:string,
        public currentPrice:number,
        public sponsored:boolean,
        public stock:number,
        public img:String,        
        public discountPrice?:number
    ){}

    public static getMockProduct():Product{
        return new Product(
            "abc123xyz",
            "Stylish Bag Very Very Very Long",            
            4.2,
            133,
            "Vinta",
            1499,
            true,            
            4,
            "assets/product/bag/card.jpg",
            2000
        )
    }
}
