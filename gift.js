const giftForm = document.getElementById("gift-form");
const giftInput = giftForm.querySelector("input");
const giftList = document.getElementById("gift-list");

const GIFT_KEY = "gifts";

let gifts = [];

function saveGift() {
    localStorage.setItem("gifts", JSON.stringify(gifts));
}

function deleteGift(event) {
    const li = event.target.parentElement;
    gifts = gifts.filter(gift => gift.id !== parseInt(li.id));
    li.remove();
    saveGift();
}


function paintGift(newGiftObj) {
    const li = document.createElement("li");
    li.id = newGiftObj.id;
    const span = document.createElement("span");
    span.innerText = newGiftObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteGift);
    li.appendChild(span);
    li.appendChild(button);
    giftList.appendChild(li);
}

function handleGiftSubmit(event) {
    event.preventDefault();
    const newGift = giftInput.value;
    giftInput.value = "";
    const newGiftObj = {
        text: newGift,
        id: Date.now()
    };
    gifts.push(newGiftObj);
    paintGift(newGiftObj);
    saveGift();
}

giftForm.addEventListener("submit", handleGiftSubmit);

const savedGift = localStorage.getItem(GIFT_KEY);

if (savedGift !== null) {
    const parsedGift = JSON.parse(savedGift);
    gifts = parsedGift;
    parsedGift.forEach(paintGift);
}