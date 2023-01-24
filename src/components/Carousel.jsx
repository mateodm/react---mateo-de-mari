import React from "react"

const Carousel = () => {
return(
<section className="row mb-5">
<div className="col-md-1"></div>
<div className="col-md-10">
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./modern-interior-beautiful-kitchen-studio.jpg" className="carousel-img  d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./woman-relaxing-sofa-while-robot-vacuum-cleaner-doing-housework.jpg" className="carousel-img d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./modern-interior-beautiful-kitchen-studio.jpg" className="carousel-img d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>
<div className="col-md-1"> </div>
</section>
)
}

export default Carousel