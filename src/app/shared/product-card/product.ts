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
            "-1",
            "Product Not Available",            
            0, //Rating
            0, //No. Rating
            "Brand",
            1499, // Rate
            true,            
            4, //Stock
            //"assets/img/placeholders/product.png"
            "assets/product/ps5/card.jpg",
            1000
        )
    }
}
