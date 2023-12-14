function setTitle(newTitle) {
  document.getElementById('pageTitle').innerText = newTitle;
}
 
function setDescription(newDescription) {
  document.getElementById('pageDescription').innerText = newDescription;
}

function setBackgroundColor(newColor) {
  document.body.style.backgroundColor =newColor;
}

function setFontColor(newColor) {
  document.body.style.color =newColor;
}

function setTheme(theme) {
  if (theme === 'light') {
    setBackgroundColor('#fff');
    setFontColor('#333');
  }
  else if (theme === 'dark') {
    setBackgroundColor('#333');
    setFontColor('#fff');
  }
}


function changeTitle() {
  const newTitle = prompt('Enter title of essay');
  if (newTitle) {
    setTitle(newTitle);
  }
}

function changeText() {
  const newText = prompt('Enter essay text');
  if (newText) {
    setText(newText);
  }
}
