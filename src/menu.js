const mainContent = document.getElementById("content");

const menuPage = () => {
    mainContent.innerHTML = ""
     const h1Element = document.createElement('h1');
     h1Element.textContent = "menu header"
     mainContent.appendChild(h1Element);
}


export default menuPage;