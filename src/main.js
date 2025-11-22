const mainContent = document.getElementById("content");

const mainPage = () => {
    mainContent.innerHTML = ""
     const h1Element = document.createElement('h1');
     h1Element.textContent = "main header"
     mainContent.appendChild(h1Element);
}


export default mainPage;