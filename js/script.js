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
    ]
  },
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
    changeImg(){}
  }
});
