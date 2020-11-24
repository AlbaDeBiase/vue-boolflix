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
        search: ""

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
        .then((risposta) => {
            //cerco i film nella sezione film
            this.elencofilm= risposta.data.results;
            // console.log(this.elencofilm);

            })
            .get("https://api.themoviedb.org/3/search/tv", {
                params: {
                    api_key:"610e99fa99f9f0a61db03d2556de6388",
                    query:this.search,

                }
            })
            .then((risposta) => {
                //cerco i film nella sezione serie

                this.elencoSerie= risposta.data.results;
                console.log(this.elencoSerie);

                //unisco i 2 array
                });
            //svuoto la search
            // this.search=""
            // if (this.elencoFilm.length = 0) {
            //     this.noFilm = true;
            //
            // }
        }

    }//chiudo methods

}) //chiudo Vue
