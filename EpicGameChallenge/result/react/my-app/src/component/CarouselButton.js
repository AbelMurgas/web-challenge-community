export default function CarouselButton(){
 return (
  <div className="d-flex">
   <button className="carousel-control-prev position-relative rounded-circle mx-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
     <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next position-relative rounded-circle  mx-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
     <span className="carousel-control-next-icon icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
  </div>
 );
}