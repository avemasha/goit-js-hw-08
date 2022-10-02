import throttle from 'lodash.throttle';


const LOCAL_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form')
const inputName = document.querySelector('.feedback-form input')
const textareaContent = document.querySelector('.feedback-form textarea')

addSavedInfo()

form.addEventListener('submit', throttle(submitOnForm, 500))
inputName.addEventListener('input', throttle(onInput, 500))
textareaContent.addEventListener('input', throttle(onInput, 500))

function submitOnForm(evt)  {
    evt.preventDefault()
    const currentInfo = localStorage.getItem(LOCAL_KEY);
    const parsedInfo = JSON.parse(currentInfo)

    evt.target.reset();
    localStorage.removeItem(LOCAL_KEY);

}

function onInput() {
    const Info = {
        name: inputName.value,
        message: textareaContent.value
    }
    
    localStorage.setItem(LOCAL_KEY, JSON.stringify(Info));
}

function addSavedInfo() {
    const savedText = localStorage.getItem(LOCAL_KEY)
    const parsedText = JSON.parse(savedText);

    if (parsedText) {
        inputName.value = parsedText.name
    }

    if (parsedText) {
        textareaContent.value = parsedText.message
    }

}