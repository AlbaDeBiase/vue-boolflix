// Milestone 1
//Milestone 2
// 1- sostituire il voto numerico su base 10 in un voto su base 5
//  e visualizzare in totale 5 stelline,
//  di cui tante piene quanto è il voto arrotondato
//  (non gestiamo stelline a metà).
//  Ad esempio, se il voto è 8.2, dobbiamo visualizzare 4 stelline piene e 1 stellina vuota (in totale sempre 5)

var app = new Vue ({
    el:'#container',
    data: {
        elencofilm:[],
        elencoSerie:[],
        elencoTot:[],
        search: "",
        notFound:false,
        flags: ['de','it','en','es','fr','ru','ja']

    },
    methods:{

        //funzione di ricerca
        Searchfilm(){
            axios
            .get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key:"610e99fa99f9f0a61db03d2556de6388",
                    query:this.search,

                }
            })
            .then((film) => {
                //cerco i film nella sezione film
                this.elencofilm= film.data.results;
                // console.log(this.elencofilm);
           //      this.elencofilm.forEach((film) => {
           //          //sostituire il voto numerico su base 10 in un voto su base 5
           //          film.vote_average = Math.round(film.vote_average / 2);
           // });

            })
            axios
                .get("https://api.themoviedb.org/3/search/tv", {
                    params: {
                        api_key:"610e99fa99f9f0a61db03d2556de6388",
                        query:this.search,

                    }
                })
                .then((serie) => {
                    //cerco i film nella sezione serie
                    this.elencoSerie= (serie.data.results);
                    console.log(this.elencoSerie);

                    /*
                    this.elencoSerie.forEach((serie) => {

                        // sostituire il voto numerico su base 10 in un voto su base 5
                        serie.vote_average = Math.round(serie.vote_average / 2);
                   });
                   */

                    //unisco i 2 array
                    this.elencoTot=Array.prototype.push.apply(this.elencoSerie,this.elencofilm);

                    console.log(this.elencoTot);

                    // Se la mia ricerca non produce risultato visualizzo notFound
                    if (this.elencofilm.length == 0) {
                        this.notFound = true;

                    }

                    });

                //svuoto la search
                // this.search=""

        },
        getStars(voteAverage) {

            // INPUT 9.5
            // output 4

            //??

            return Math.floor(voteAverage / 2);
        },

        // funzione per sotituire con una mia immagine, la bandiera che non è compresa nella mia carrtella
        // flagsInvible() {
        //
        //     this.elencoSerie.forEach((serie, i) => {
        //         if (serie.original_language).includes("/flags.png") {
        //             serie.original_language=true;
        //         }else {
        //             serie.original_language="flags/null.png"
        //         }
        //
        //     });
        //
        // },


    }//chiudo methods

}) //chiudo Vue
