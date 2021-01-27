let format = new Vue({
    el: '#format',
    data:{
        contatore: 0,
        foto : [
            'https://cdn.pixabay.com/photo/2021/01/20/09/29/islet-5933589__340.jpg',
            'https://cdn.pixabay.com/photo/2021/01/20/07/45/soap-bubble-5933332__340.jpg',
            'https://cdn.pixabay.com/photo/2021/01/19/09/09/sunset-5930547__340.jpg',
            'https://cdn.pixabay.com/photo/2021/01/20/09/29/landscape-5933588__340.jpg'
        ]
    },
    methods:{
        // funzione per scorrere in avanti
        avanti(){
        (this.contatore ==(this.foto.length - 1 )) ? this.contatore = 0 : this.contatore++;
        },

        // funzione per scorrere indietro
        indietro(){
        (this.contatore < 1) ? this.contatore = (this.foto.length-1) : this.contatore--;
        }
    }   
});