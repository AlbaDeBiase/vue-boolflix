// Milestone 1

var app = new Vue ({
    el:'#container',
    data: {
        elencofilm:[],
        search: ""
    },
    methods:{

        Searchfilm(){
        axios
        .get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key:"610e99fa99f9f0a61db03d2556de6388",
                query:this.search,
                // title:"",
                // original_title:"",
                // original_language:"",
                // vote_average:"",
            }
        })
        .then((risposta) => {

            this.elencofilm= risposta.data.results;
            console.log(this.elencofilm);

            });

        }

    }//chiudo methods

}) //chiudo Vue
