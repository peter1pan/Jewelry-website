//Style
import '../css/main.scss'
import '../css/_style.scss'

//Components
import Header from '../Home-components/Header/Header';
import Jewelry from '../Home-components/JewelryOne/Jewelry';
import Midimage from '../Home-components/Midimage/Midimage';
import SentenceOne from '../Home-components/SentenceOne/SentenceOne';
import SentenceTwo from '../Home-components/SentenceTwo/SentenceTwo';
import SentenceThree from '../Home-components/SentenceThree/SentenceThree';
import SentenceFour from '../Home-components/SentenceFour/SentenceFour';
import MidimageTwo from '../Home-components/MidimageTwo/MidimageTwo';
import SlideShow from '../Home-components/BestSellers/Slideshow'
import NewArrivals from '../Home-components/NewArrivals/NewArrivals';
import Confidence from '../Home-components/Confidence/Confidence';


export function Home() {
    return (
        <div className="App">
            <Header />
            <SentenceOne />
            <Midimage />
            <SentenceTwo />
            <Jewelry />
            <SentenceThree />
            <MidimageTwo />
            <SlideShow />
            <SentenceFour />
            <NewArrivals />
            <Confidence />
        </div>
    );
}


