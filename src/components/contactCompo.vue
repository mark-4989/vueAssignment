<template>
    <h1>Reach out or Book an Appointment</h1>
    <div class="wrap">   
    <div class="hold">  
      <div class="col-md-6">
        <h3>Book an Appointment</h3>
        <form @submit.prevent="handleSubmit" >
          <div class="mb-3">
            <input v-model="fullName" type="text" class="form-control" id="floatingInput" placeholder="Enter full name">
          </div>
          <div class="mb-3">
            <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="Email address">
          </div>
          <div class="mb-3">
            <input v-model="phone" type="number" class="form-control" id="floatingInput" placeholder="enter phone">
          </div>
          <div class="mb-3">
            <textarea v-model="message" class="form-control" rows="3" placeholder="Write a message here"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Book</button>
        </form>
      </div>
      </div>
<div class="card" style="width: 30rem;">
  <div class="card-body bg-secondary">
    <h5 class="card-title">Talk to us</h5>
    <p class="card-text"><i class='bx bx-current-location' style='color:#f3ecec' ></i>Nairobi,westlands</p>
    <p class="card-text"><i class='bx bxs-phone-call' style='color:#f3ecec' ></i>07123456789</p>
    <p class="card-text"><i class='bx bx-envelope' style='color:#f3ecec' ></i>examples@gmail.com</p>
    <h6>our socials</h6>
    <div class="social">
    <p class="card-text"><i class='bx bxl-instagram' style='color:#f7f2f2' ></i></p>
    <p class="card-text"><i class='bx bx-x' style='color:#f7f2f2'  ></i></p>
    <p class="card-text"><i class='bx bxl-facebook' style='color:#f7f2f2'  ></i></p>
    </div>
  </div>
</div>
</div>
<button @click="displaySavedData" class="btn btn-secondary mt-3">View Saved Data</button>

<div v-if="contact.fullName" class="card mt-3" style="width: 30rem;">
  <div class="card-body">
    <h5 class="card-title">Saved Form Data</h5>
    <ul>
      <li><strong>Name:</strong> {{ contact.fullName }}</li>
      <li><strong>Email:</strong> {{ contact.email }}</li>
      <li><strong>Phone:</strong> {{ contact.phone }}</li>
      <li><strong>Message:</strong> {{ contact.message }}</li>

    </ul>
  </div>
</div>
    </template>
    
    <script>

    export default{
        name:'contactCompo',
        data() {
    return {
      fullName: '',
      email: '',
      message: '',
      phone:'',
      contact: {}
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Save form data locally
        this.saveFormData();
        
        // Clear form fields after submission
        this.fullName = '';
        this.email = '';
        this.message = '';
        this.phone='';

        // Fetch contact information from localStorage
        const savedData = localStorage.getItem('contactInfo');
        if (savedData) {
          this.contact = JSON.parse(savedData);
        } else {
          this.contact = {};
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    
    saveFormData() {
      const formData = {
        fullName: this.fullName,
        email: this.email,
        message: this.message,
        phone:this.phone
      };
      
      // Save form data to localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
    },
    displaySavedData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      this.displayFormData(formData);
    } else {
      this.displayNoData();
    }
  },
  
  displayFormData(data) {
    this.contact = {
      fullName: data.fullName || '',
      email: data.email || '',
      phone: '', // This field wasn't part of the original form data
      message: data.message || ''
    };
  },
  
  displayNoData() {
    this.contact = {
      fullName: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  }
}
    
    </script>
    
    <style lang="css" scoped>
    .wrap{
        display: flex;
        justify-content: space-evenly;
    }
    .hold{
        width: 30vw;
    }
    .card{
        /* background-color:#241E48 ; */
        color: white;
        border-radius: 20px;
    }
    .card .card-body{
      font-size: 1.5rem;
    }
    .card .social{
        display: flex;
        justify-content: space-evenly;
        font-size: 2rem;
    }
    </style>