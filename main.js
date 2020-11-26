// Milestone 1
//Milestone 2
// 1- sostituire il voto numerico su base 10 in un voto su base 5
//  e visualizzare in totale 5 stelline,
//  di cui tante piene quanto è il voto arrotondato
//  (non gestiamo stelline a metà).
//  Ad esempio, se il voto è 8.2, dobbiamo visualizzare 4 stelline piene e 1 stellina vuota (in totale sempre 5)

var app = new Vue ({
    el:'#row',
    data: {
        elencofilm:[],
        elencoSerie:[],
        elencoTot:[],
        search: "",
        testoTitolo:"",
        ricercaIncorso:false,
        // notFound:false,
        flags: ['de','it','en','es','fr','ru','ja']

    },
    methods:{

        //funzione di ricerca
        Searchfilm(){
            // verifico che l'utente non abbia premuto invio con spazio vuoto
            if(this.search.trim() != '') {
                this.ricercaIncorso=true;
                // svuoto la pagina(array e input)
                this.elencoTot="";
                // imposto una variabile che corrisponde al testo scritto dall'utente
                let testoUtente = this.search;
                this.search=testoUtente;
                // inserisco il testo ricercato nel titolo
                this.testoTitolo=testoUtente;

                // parte la chiamata
            axios
            .get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key:"610e99fa99f9f0a61db03d2556de6388",
                    query:testoUtente

                }
            })
            .then((film) => {
                //cerco i film nella sezione film
                this.elencofilm= film.data.results;
                console.log(this.elencofilm);
                this.ricercaIncorso=false;


            })
            axios
                .get("https://api.themoviedb.org/3/search/tv", {
                    params: {
                        api_key:"610e99fa99f9f0a61db03d2556de6388",
                        query:testoUtente

                    }
                })
                .then((serie) => {
                    //cerco i film nella sezione serie
                    this.elencoSerie= (serie.data.results);
                    console.log(this.elencoSerie);
                    this.ricercaIncorso=false;


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

            }

        },

        // passo un parametro x(vote) alla funzione per replicare le stelle
        getStars(vote) {

            // INPUT 9.5
            // output 4

            //??

            return Math.floor(vote/ 2);
        },


    }//chiudo methods

}) //chiudo Vue
