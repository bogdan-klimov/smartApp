const phonesGallery = document.getElementById("phones-gallery");
const phoneGalleryEl = document.getElementsByClassName("phones-gallery-item");
const angleLeft = document.getElementById("icon-left-open");
const angleRight = document.getElementById("icon-right-open");
const visibleWindow = document.getElementById("visible-window");

let elWidth = visibleWindow.offsetWidth / 3;

const move = elWidth;

let step = 0;

let elsOnSlider = elWidth * 3;

const leftBorder = 0;

const rightBorder = elWidth * phoneGalleryEl.length - elsOnSlider;

let elsOnSliderWidth = elWidth * 3;
 
if (window.innerWidth < 1000) {
    elsOnSliderWidth = elWidth;
    elWidth = window.innerWidth;
}

for (let i = 0; i < phoneGalleryEl.length; i++) {
    phoneGalleryEl[i].style.minWidth = elWidth + "px";
}

const moveLeft = () => {
    step += move;
    if (step > leftBorder) {
        step = -rightBorder;
    }
    phonesGallery.style.left = step + "px";
};

const moveRight = () => {
    step += -move;  
    if (step < -rightBorder) {
        step = leftBorder;
    }
    phonesGallery.style.left = step + "px";
};

angleLeft.onclick = moveLeft;
angleRight.onclick = moveRight;

/////////////////////////////////////////////
const visibleWindowNew = document.getElementById("visible-window-new");
const peopleList = document.getElementById("people-list");
const list = document.getElementById("list");
const listItem1 = document.getElementById("list-item-1");
const listItem2 = document.getElementById("list-item-2");
const listItem3 = document.getElementById("list-item-3");

const firstPosition = 0;

const peopleListElWidth = visibleWindowNew.offsetWidth;

const peopleList1Move = () => {
    peopleList.style.left = firstPosition + "px";
};

const peopleList2Move = () => {
    peopleList.style.left = -peopleListElWidth + "px";
};

const peopleList3Move = () => {
    peopleList.style.left = -peopleListElWidth * 2 + "px";
};

listItem1.onclick = peopleList1Move;
listItem2.onclick = peopleList2Move;
listItem3.onclick = peopleList3Move;


