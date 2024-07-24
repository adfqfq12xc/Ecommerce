import Image from "next/image";
import Container from "./_components/container";
import Header from "./_components/header";
import Logo from "./_components/Logo";
import Banner from "./_components/Banner";
import Cart from "./_components/cart";
import Products from "./_components/products";
export default function Home() {
  return (
    <div className="forced-color-adjust-auto">
      
    <Banner/>
<Products/>
    
    </div>
  );
}
