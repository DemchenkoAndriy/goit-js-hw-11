
import { getRefs } from './js/getRefs.js';
import { fetchImg } from './js/fetchImg.js';
import { reloadRender} from './js/renders';
import debounce from 'lodash.debounce';

const refs = getRefs();
const DEBOUNCE_DELAY = 500;
let numberPage = 1;
let searchWord = "";


refs.searchForm.addEventListener('submit', searchImg);

function searchImg(e) {
 
    e.preventDefault();


if (refs.searchInput.value.trim()=== "") {
    reloadRender();
    numberPage = 1;
    searchWord = "";
} else if(searchWord === refs.searchInput.value.trim()) {
        numberPage+=1;
        fetchImg(searchWord, numberPage)
} else {
    reloadRender();
    searchWord = refs.searchInput.value.trim();
    fetchImg(searchWord, numberPage)
  
    }
    




    
};

refs.loadMoreBnt.addEventListener('click', loadMore);

function loadMore(e) {
    numberPage+=1;
   fetchImg(searchWord, numberPage)
    
}



