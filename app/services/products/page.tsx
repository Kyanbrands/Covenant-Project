import Carousel from "@/app/_components/carousel";
import SecureServices from "./secureServices";
import ProductsShowcase from "./productShowcase";
import ProductHeroSection from "./products";
function page() {
  return (
    <div>
      <ProductHeroSection />
      <SecureServices />
      <ProductsShowcase />
      <Carousel />
    </div>
  );
}

export default page;
