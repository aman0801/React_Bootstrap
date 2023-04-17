import React from 'react'

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.ZCxvPrbiBDrKQC_flLgDmQHaD-?w=326&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
    <img src="https://th.bing.com/th/id/OIP.ruRonxJJEbpTWT1_DjXCGgHaDd?w=341&h=163&c=7&r=0&o=5&dpr=1.1&pid=1.7" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/698508/pexels-photo-698508.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100 img-fluid" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider