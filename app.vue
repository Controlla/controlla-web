<template>
  <div class="container bg">
    <div class="header">
    <img src="assets/logocontrolla.svg"/>
    </div>
    <div class="message">
      <div class="soon">We'll be back soon!</div>
      <div class="while">In the meantime, we can help you here</div>
      <div class="boton"><button @click="contact" class="button">Contact us</button></div>
    </div>
    <footer class="contact">
      <div class="socials"><img src="assets/facebook.svg"/></div> 
      <div class="socials"><img src="assets/instagram.svg"/></div>
      <div class="socials"><img src="assets/linkedin.svg"/></div>
    </footer>
  </div>
</template>

<script setup>
  import { createPopup } from '@typeform/embed'
  import '@typeform/embed/build/css/popup.css'
  const { toggle } = createPopup('BYWHV4')
  
  function contact(){
    toggle()
  }
</script>

<style>
.bg{
  background-image:url("assets/figura1.svg"), url("assets/figura2.svg");
  background-position: left top, right bottom; 
  background-repeat: no-repeat;
}
.container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  position: relative;
  min-height:400px;
  height: 95vh;
  text-align: center;
  font-family:system-ui;
  justify-items:center;
}
.header{
  grid-column: 3;
  grid-row:1;
  max-width: 100%;
  max-height: 25px;
  padding: 20px;
}
.message{
  grid-column:3;
  grid-row:2;
}
.soon{
  font-weight: bold;
  font-size: 50px;
  padding:5px;
}
.while{
  font-size:25px;
  color:gray;
  padding-top:5px;
  padding-bottom:2rem;
}
.boton{
  padding-top: 5px;
}
.button{
  cursor:pointer;
  background-color:black;
  color:white;
  border-radius:50px;
  padding:10px;
  font-size: 1.2rem;
  width:11rem;
  
}
.contact {
  grid-column-start:3;
  grid-row:10;
}
footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
.socials{
  cursor:pointer;
  display: inline;
  width: 33.33%;
  padding: 20px;
}
</style>