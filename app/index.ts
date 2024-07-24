import { ProductData } from "@/constant/data"
export const getsingleProduct=(id:number)=>{
    const item =ProductData.find(item => item._id === id)
    return item;
}