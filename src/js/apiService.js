// export function basicApi() {
//     const axios = require('axios');
// axios.get(`https://pixabay.com/api/?key=24211892-65b24d547a4d8d8d87b5227cd&image_type=photo&orientation=horizontal&q=car&page=1&per_page=12`)
//   .then(function (response) {
//    responce.json()
//     .then(console.log);
//   })
// }

// =================================================================
export default class BasicApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
        async fetchImg() {
            
            const key = '24211892-65b24d547a4d8d8d87b5227cd';
            const url = 'https://pixabay.com/api/';
           
             const responce = await fetch(`${url}/?key=${key}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`);
            const respObj = await responce.json().then(({hits}) => {
                this.incrementPage();
                return hits;
            })
            
            return respObj;
            
            // .then(data => {
            //     this.incrementPage();
            //     console.log('data:', data);
            //     console.log("после запроса:",this);
            //     return data.hits
            // }) 
        }
        get query() {
            return this.searchQuery;
        }
        set query(newQuery) {
            this.searchQuery = newQuery;
        }
        incrementPage() {
            this.page += 1;
        }
        resetPage() {
            this.page = 1;
        }
    }