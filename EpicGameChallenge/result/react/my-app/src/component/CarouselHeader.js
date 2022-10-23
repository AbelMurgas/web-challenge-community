import CarouselButton from "./CarouselButton";
import arrow from '../assets/icons/angle-right.png'
export default function CarouselHeader() {
 return (
    <div className='d-flex justify-content-between py-2'>
        <a href="https://store.epicgames.com/en-US/browse?sortBy=releaseDate&sortDir=DESC&priceTier=tierDiscouted&category=Game&count=40&start=0" target={"_blank"}>
        <div className="carouselHeaderLink" >
          <div className="jaraDelux">
            Games On Sale
          <img src={arrow} alt="" className="text-light-grey icon ms-1" />
          </div>
        </div>
        </a>
        <CarouselButton />
   </div>
 );
}