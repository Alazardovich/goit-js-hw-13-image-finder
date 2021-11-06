// export default class BasicApi {
//   constructor() {
//     this.query = 'car';
//     this.page = 1;
//   }

//   fetchArticles() {
//  const BASE_URL = `https://pixabay.com/api/?key=24211892-65b24d547a4d8d8d87b5227cd&image_type=photo&orientation=horizontal&q=${this.query}&${this.page}&per_page=12`;

//     return fetch(BASE_URL)
//       .then(responce => responce.json())
//       .then(console.log)
//       .catch(err => console.log(err));
//   }
// }
// // fetch(`https://pixabay.com/api/?key=24211892-65b24d547a4d8d8d87b5227cd&image_type=photo&orientation=horizontal&q=car&page=1&per_page=12`)
// // .then(r=>r.json())
export default class BasicApi {
    constructor() {
        this.searchQuery = 'car';
        this.page = 1;
    }
        fetchArticles() {
            console.log("до запроса:", this);
        
            const url = `https://pixabay.com/api/?key=24211892-65b24d547a4d8d8d87b5227cd&image_type=photo&orientation=horizontal&q=car&page=1&per_page=12`
            
            return fetch(url)
            .then(responces => responces.json())
            .then(data => {
                this.incrementPage();
                console.log(data);
                console.log("после запроса:",this);
                return data.articles
            }) 
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