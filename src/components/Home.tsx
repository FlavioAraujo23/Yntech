import HighlightedNews from './HighlightedNews.tsx';
import News from './News';

const Home = () => {
  return (
    <div className="bg-[#EDEDED] md:bg-white">
      <HighlightedNews />
      <News />
    </div>
  );
};

export default Home;
