
import CategoriesGrid from '~/components/Categories/CategoriesGrid';
import FeaturedImageGallery from '~/components/MainSection/FeaturedImageGallery';
import HeroBannerMove from '~/components/MainSection/HeroBanner';
import HeroSubSection from '~/components/MainSection/HeroSubSection';
import VideosSection from '~/components/MainSection/VideosSecetion';
import SocialSection from '~/components/SocialHeader/SocialSection';

const Home = () => {
  return (
    <>
      <HeroBannerMove />
      <CategoriesGrid />
      <VideosSection />
      <HeroSubSection />
      <SocialSection />
      <FeaturedImageGallery />
    </>
  );
};

export default Home;
