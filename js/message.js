var modalMessage = document.querySelector(".modal-message");
var messagePopup = document.querySelector(".modal");
var popupClose = messagePopup.querySelector(".modal-close");
var messageForm = messagePopup.querySelector(".message-form");
var nameUser = messagePopup.querySelector(".name-user");
var emailUser = messagePopup.querySelector(".email-user");
var commentUser = messagePopup.querySelector(".comment");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

modalMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
    if (storage) {
        emailUser.value = storage;
    }
    nameUser.focus();
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
    messagePopup.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function (evt) {
    if (!nameUser.value || !emailUser.value || !commentUser.value) {
        evt.preventDefault();
        messagePopup.classList.remove("modal-error");
        messagePopup.offsetWidth = messagePopup.offsetWidth;
        messagePopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", emailUser.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (messagePopup.classList.contains("modal-show")) {
            evt.preventDefault();
            messagePopup.classList.remove("modal-show");
            messagePopup.classList.remove("modal-error");
        }
    }
});