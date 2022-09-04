import throttle from 'lodash.throttle';

const localKey = "feedback-form-state"

const form = document.querySelector('.feedback-form')
const inputName = document.querySelector('.feedback-form input')
const textareaContent = document.querySelector('.feedback-form textarea')

addSavedInfo()

form.addEventListener('submit', throttle(submitOnForm, 500))
inputName.addEventListener('input', throttle(onInput, 500))
textareaContent.addEventListener('input', throttle(onInput, 500))

function submitOnForm(evt)  {
    evt.preventDefault()
    const currentInfo = localStorage.getItem(localKey);
    const parcedInfo = JSON.parse(currentInfo)

    evt.taget.reset();
    localStorage.removeItem(parcedInfo);

}

function onInput(evt) {
    const Info = {
        name: inputName.value,
        message: textareaContent.value
    }
    
    localStorage.setItem(localKey, JSON.stringify(data));
}

function addSavedInfo() {
    const savedText = localStorage.getItem(localKey)
    const parcedText = JSON.parse(savedText);

    if (parcedText) {
        inputName.value = parcedText.name
    }

    if (parcedText) {
        textareaContent.value = parcedText.message
    }

}