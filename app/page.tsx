
import { log } from "console";
import Banner from "./_components/Banner";
import Products from "./_components/products";
import User from "./_model/user";
import sequelize from "./_utils/sequilize";
import { Op, Sequelize, where } from "sequelize";
import Post from "./_model/post";
import toast, { Toaster } from 'react-hot-toast';

const a=async()=>{

  // functions
 // const a=await User.findAll({attributes:[[sequelize.fn('AVG',sequelize.col('admin')),"howmanyadmins"]]})
 // execluding
 //const a=await User.findAll({attributes:{exclude:['password']},where:{admin:'1'},limit:1})
 //orderby
 //const a=await User.findAll({attributes:{exclude:['password']},where:{admin:'1'},order:[['id','ASC']]})
//groupby
// const a=await User.findAll({attributes:[[Sequelize.fn('SUM',Sequelize.col('id')),'group'],'username'],group:'username'})
//or and 
const a=await User.findAll({attributes:['username','email','id'],where:{
email:"als"
}})
 console.log("users")
 console.log(a);
 


}
export default function Home() {
  a()
 

  return (
    <div className="forced-color-adjust-auto">


    <Banner/>
<Products/>
    
    </div>
  );
}
