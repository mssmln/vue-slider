// Ricreate lo slider visto in jQuery con vue. Personalizzatelo come meglio credete.

var app = new Vue({
  el : '#app',
  data : {
    counter : 0,
    images : [
      'img/img-1.jpg',
      'img/img-2.jpg',
      'img/img-3.jpg',
      'img/img-4.jpg'
    ],
    interval : '' // settata a null per poterci poi salvare un metodo
  },
  // metodo mounted che parte dopo che l'istanza Vue è montata
  mounted(){ // in questo caso non vedo differenze con created
    this.interval = setInterval(this.nextImg,2000);
  },
  // created e mounted sono metodi Vue che partono in automatico, non serve intervenire sul html ne inserirli in methods

  // metodo created che parte non appena l'istanza Vue è creata
  // created(){ // ogni sezione è isolata a se, ti serve il this se vuoi richiamare un componente esterno
  //   this.interval = setInterval(this.nextImg,2000); // sovrascriviamo interval inserendoci un metodo
  // },

  methods : {
    nextImg(){
      // var conteggio = this.counter++;
      // console.log(conteggio); // qua parte da 0 il log

      // metodo 1
      // this.counter++;
      // console.log(this.counter); // qua parte da 1 il log
      // if (this.counter == this.images.length) {
      //   this.counter = 0;
      //   console.log(this.counter);
      // }

      // metodo 2
      // this.counter++;
      // console.log(this.counter); // qua parte da 1 il log
      // if (this.counter > this.images.length - 1) {
      //   this.counter = 0;
      //   console.log(this.counter);
      // }

      // metodo 3 ternario
      // se 1 corrisponde a 4 - 1 cioè 3 farà il :
      // se 2 corrisponde a 4 - 1 cioè 3 farà il :
      // se 3 corrisponde a 4 - 1 cioè 3 farà il ?
      (this.counter == this.images.length - 1) ? this.counter = 0 : this.counter++;
      console.log(this.counter);
    },
    prevImg(){
      // metodo 1 ternario, mia preferita
      (this.counter == 0) ? this.counter = this.images.length - 1 : this.counter--;
      console.log(this.counter);

      // metodo 2 ternario
      // (this.counter < 1) ? this.counter = this.images.length - 1 : this.counter--;
      // console.log(this.counter);
    },
    changeImg(indice){
      this.counter = indice; // al click sul circle il counter avrà il valore dell'index che abbiamo usato con il v-for, quindi la img corrisponderà all'indice di images. Quando clicco vado a prendere l'indice e il counter diventa uguale all'indice.

      // indice = this.counter; // così non appena clicchi su un pallino, lo slider si blocca

      // quando clicchiamo su uno dei circle stoppiamo il setInterval
      clearInterval(this.interval);
    }
  }
});
