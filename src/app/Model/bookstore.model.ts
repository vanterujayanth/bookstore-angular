export interface Book{

    id:number,
      title:string,
      originalprice:number,
      ratting:Number,
      numberOfRattings:number,
      discountprice:number,
      author: string,
      description:string,
      quantity:number,
      image: string

   
}
export interface Cart{
    id:number,
    quantity:number
}