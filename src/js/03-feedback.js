import throttle from "lodash.throttle";

const KEY_STORAGE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailField = document.querySelector('[name="email"]');
const messageField = document.querySelector('[name="message"]');

let formValues = {};

form.addEventListener('input', throttle(saveForm, 500));

function saveForm() {
    formValues = {
        email: emailField.value,
        message: messageField.value,
    };
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formValues));
};

function restoreForm() {
  let savedData = JSON.parse(localStorage.getItem(KEY_STORAGE));
  if (savedData) {
    emailField.value = savedData.email;
    messageField.value = savedData.message;
    };
  formData = savedData;
};

restoreForm();

form.addEventListener('submit', updateForm);

function updateForm(event) {
  event.preventDefault();
  if (emailField.value.trim() !== '' && messageField.value.trim() !== '') {
    console.log(formValues);
    form.reset();
    localStorage.removeItem(KEY_STORAGE);
    };
};