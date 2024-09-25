<template>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../pics/download.jpeg" class="d-block" style="width: 100vw; height: 90vh;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>our expertise</h5>
        <p>Experience the ultimate car wash experience - clean cars, happy drivers!</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../pics/download (1).jpeg" class="d-block" style="width: 100vw; height: 90vh;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>our efficiency</h5>
        <p>Quick, easy, and convenient car washing - book online now</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../pics/download (2).jpeg" class="d-block" style="width: 100vw; height: 90vh;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>our service</h5>
        <p>Premium car wash service that leaves your vehicle looking showroom new</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
<div class="hero">
  <div class="container">
    <h1 class="display-4">Professional Car Wash Services</h1>
    <p class="lead">Experience the best car wash in Nairobi!</p>
    <RouterLink :to="{name:ContactCompo}">
      <button class="btn btn-primary btn-lg mt-3">Book Now</button>
    </RouterLink>

  </div>
</div>
<div class="bg-light text-center py-3">
  <h3 class="mb-0">Limited Time Offer!</h3>
  <small>15% off your next service</small>
  <button class="btn btn-success mt-2">Claim Offer</button>
</div>
<section id="testimonials" class="py-5 bg-white">
  <h2 class="text-center mb-4 text-black">What Our Customers Say</h2>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card bg-secondary text-white">
        <div class="card-body">
          <blockquote class="blockquote">
            <p>"🚗💨 Their eco-friendly wash left my vehicle spotless without harsh chemicals!"</p>
            <footer class="blockquote-footer text-white">Sarah K.</footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card bg-secondary text-white">
        <div class="card-body">
          <blockquote class="blockquote">
            <p>"The quick turnaround time allowed me to run errands while my car was being serviced. Highly recommended!"</p>
            <footer class="blockquote-footer text-white">David M.</footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card bg-secondary text-white">
        <div class="card-body">
          <blockquote class="blockquote">
            <p>"Their attention to detail is impressive. They even polished the wheels to a shine!"</p>
            <footer class="blockquote-footer text-white">Emily T.</footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card bg-secondary text-white">
        <div class="card-body">
          <blockquote class="blockquote">
            <p>"The interior detailing was so thorough, I couldn't believe how clean it got! Worth every penny."</p>
            <footer class="blockquote-footer text-white">James B.</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>


</template>

<script>
// import ContactCompo from './contactCompo.vue';

export default{
    name:'homeComp',
    methods: {
  handleClick() {
    this.$router.push({ name: 'ContactCompo' })
  }
}


}

</script>

<style lang="css" scoped>

</style>