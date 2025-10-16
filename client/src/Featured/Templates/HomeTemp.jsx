import BannerSection from "../Components/BannerSection";
import BrandSection from "../Components/BrandsSection";
import BuyNowSection from "../Components/BuyNowSection";
import SaleOfSection from "../Components/SaleofSection";
import TrendsSection from "../Components/TrendsSection";

const HomeTemp = () => {
  return (
    <div>
      <BannerSection />
      <TrendsSection />
      <BuyNowSection />
      <SaleOfSection />
      <BrandSection />
    </div>
  );
};

export default HomeTemp;
