const phonesGallery = document.getElementById("phones-gallery");
const phoneGalleryEl = document.getElementsByClassName("phones-gallery-item");
const angleLeft = document.getElementById("icon-left-open");
const angleRight = document.getElementById("icon-right-open");
const visibleWindow = document.getElementById("visible-window");

let idx = 0;
let elsOnPage = 3;

if (window.innerWidth < 1000) {
    elsOnPage = 1;
    phonesGallery.style.height = '750px';
    for (let el = 0; el < phoneGalleryEl.length; el++) {
        phoneGalleryEl[el].style.position = 'absolute';
    }
}

for (let el = 0; el < elsOnPage; el++) {
    phoneGalleryEl[el].style.display = 'block';
}

const moveRight = () => {

    idx++;

    if(idx > phoneGalleryEl.length - 3) {
        idx = 0;
    }

    for (let i = 0; i < phoneGalleryEl.length; i++) {
        phoneGalleryEl[i].style.display = 'none';
        phoneGalleryEl[i].style.transition = '.5s';
    }

    for (let el = 0; el < elsOnPage; el++) {
        phoneGalleryEl[idx + el].style.display = 'block';
    }

};

const moveLeft = () => {
    idx--;

    if (idx < 0) {
        idx = phoneGalleryEl.length - 3;
    }

    for (let i = 0; i < phoneGalleryEl.length; i++) {
        phoneGalleryEl[i].style.display = 'none';
        phoneGalleryEl[i].style.transition = '.5s';
    }

    for (let el = 0; el < elsOnPage; el++) {
        phoneGalleryEl[idx + el].style.display = 'block';
    }
};



angleLeft.onclick = moveLeft;
angleRight.onclick = moveRight;


/////////////////////////////////////////////


const visibleWindowNew = document.getElementById("visible-window-new");
const peopleList = document.getElementById("people-list");
const list = document.getElementById("list");

const listItems = document.getElementsByClassName('item');

const peopleListElWidth = visibleWindowNew.offsetWidth;

listItems[0].classList.add('active');

for (let i = 0; i < listItems.length; i++) {

    listItems[i].addEventListener('click', () => {

        peopleList.style.left = (-peopleListElWidth * i) + "px";

        for(let j = 0; j < listItems.length; j++) {
            listItems[j].className = listItems[j].className.replace('active', '');
        }

        listItems[i].classList.add('active');

    });

}