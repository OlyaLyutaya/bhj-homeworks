const textArea = document.querySelector('#editor');
const savedText = localStorage.getItem('text');

const saveDataInLocalStorage = () => {
  localStorage.setItem('text', textArea.value);
};

textArea.addEventListener('input', saveDataInLocalStorage);

if (savedText) {
  textArea.value = savedText;
} 

function clearText() {
  textArea.value = '';
  saveDataInLocalStorage();
}