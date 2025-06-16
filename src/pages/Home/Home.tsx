import CategoriesGrid from "~/components/Categories/CategoriesGrid";
import HeroBannerMove from "~/components/MainSection/HeroBanner";
import HeroSubSection from "~/components/MainSection/HeroSubSection";
import VideosSection from "~/components/MainSection/VideosSecetion";

const Home = () => {
    return (<>
        <HeroBannerMove />
        <CategoriesGrid />
        <VideosSection />
        <HeroSubSection />
    </>);
}

export default Home;