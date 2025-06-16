
import CategoriesGrid from '~/components/Categories/CategoriesGrid';
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
    </>
  );
};

export default Home;
