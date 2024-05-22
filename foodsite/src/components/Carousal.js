import React from "react";

function Carousal() {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel" 
    >
      <div class="carousel-inner">
        <div className="Carousel-Caption" style={{zIndex: '10',position:'absolute',top:'90%',left:'50%',transform:'translate(-50%,-50%)',width:'50%',textAlign:'center'}} id='carousel'>
        <form className="d-flex" style={{maxWidth:'400px',alignContent:'center'}}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success text-white bg-success" type="submit" >Search</button>
          </form> 
    
        </div>
        <div class="carousel-item active" >
          <img
            src="https://source.unsplash.com/random/900x700/?zombies"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x700/?ghost"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x700/?skull"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        ``
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;
