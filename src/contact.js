const mainContent = document.getElementById("content");

const contactPage = () => {
    mainContent.innerHTML = ""
     const h1Element = document.createElement('h1');
     h1Element.textContent = "contact header"
     mainContent.appendChild(h1Element);
}


export default contactPage;