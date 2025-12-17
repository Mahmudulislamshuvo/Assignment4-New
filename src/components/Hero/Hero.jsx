import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="soft-card px-6 sm:px-8 py-10 flex flex-col lg:flex-row gap-8">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
