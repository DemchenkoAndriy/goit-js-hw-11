
import { getRefs } from './getRefs.js';



const refs = getRefs();

function rendersImgs(arrayImgs) {
   
  
  const renderedImages = arrayImgs.map(item => 
    
    `<div class="photo-card">
  <img class="photo" src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${item.likes}
    </p>
    <p class="info-item">
      <b>Views</b>${item.views}</p>
    <p class="info-item">
      <b>Comments</b>${item.comments}</p>
    <p class="info-item">
      <b>Downloads</b>${item.downloads}
    </p>
  </div>
</div>`

  ).join('');
  refs.gallery.insertAdjacentHTML('beforeend', renderedImages);
  visibilityBntLoadMore(true);
}



function reloadRender() {
 visibilityBntLoadMore(false);
   refs.gallery.innerHTML = "";
}

function visibilityBntLoadMore(showBtn) {
  
  if (showBtn) {
    refs.loadMoreBnt.classList.remove('hidden'); 
    return;
  }
  refs.loadMoreBnt.classList.add('hidden');
}



export {reloadRender,rendersImgs,visibilityBntLoadMore};