<template>
    <div>
    <h1> Services we offer</h1>
    <div id="other">
      <!-- card one -->
      <div class="card" style="width: 25rem;">
  <img src="../pics/services-img-01-interior-steam.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Interior washing</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<!-- card two -->
 <div class="card" style="width: 25rem;">
  <img src="../pics/services-img-02.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Engine wash</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<!-- card three -->
    <div class="card" style="width: 25rem;">
  <img src="../pics/services-img-03.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">headlight cleaning</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<!-- card four -->
    <div class="card" style="width: 25rem;">
  <img src="../pics/services-img-05.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">water marks removal</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<!-- card five -->
    <div class="card" style="width: 25rem;">
  <img src="../pics/services-img-04.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">waxing and baffing</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<!-- card six -->
<div class="card" style="width: 25rem;">
  <img src="../pics/services-img-01-interior-steam.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Rim wash</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div>
  <h3>Packages</h3>
  <div class="wash">
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    basic wash
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">  automated car wash </li>
    <li class="list-group-item">wheel cleaner</li>
    <li class="list-group-item">power dry</li>
    <li  class="list-group-item">foam bath</li>
  </ul>
  <button v-on:click='ContactCompo' class="btn btn-primary">Ksh1000</button>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-header">
    nice wash
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">vacuuming </li>
    <li class="list-group-item"> window cleaning</li>
    <li class="list-group-item">dash wipe-down</li>
    <li class="list-group-item">air gun drying system 1</li>
    <li class="list-group-item">triple foam </li>
    <li class="list-group-item"> undercarriage spray</li>
    <li class="list-group-item">tire dressing</li>

  </ul>
  <button type="submit" class="btn btn-primary">Ksh2500</button>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-header">
    premium wash
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">shampooing seats, carpets, and upholstery</li>
    <li class="list-group-item">compound polishing</li>
    <li class="list-group-item">clay bar treatment</li>
    <li class="list-group-item">hand-applied wax</li>
    <li class="list-group-item">Hand Washing</li>
    <li class="list-group-item">Ceramic Coating</li>
  </ul>
  <button type="submit" class="btn btn-primary">Ksh4500</button>
</div>
  </div>
</div>
</div>
    </template>
    
    <script>
import ContactCompo from './contactCompo.vue'

    export default{
       
    name: "serviceCompo",
    components: ContactCompo ,
}
    
    </script>
    
    <style  scoped>
    #other{
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      justify-content: space-evenly;
    
    }

    .card{
      margin-bottom: 2rem;
    }
    
    .wash{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    </style>