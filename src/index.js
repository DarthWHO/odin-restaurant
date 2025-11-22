import "./styles.css";
import mainPage from './main.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const mainButtons = document.querySelectorAll(".btn")
let activePage = "main";

function handleClick(event) {
    const elementID = event.target.id
    if (elementID != activePage) {
        activePage = elementID;
        if (activePage == "contactPage") {
            contactPage();
        } else if (activePage == "menuPage") {
            menuPage();
        } else {
            mainPage();
        }
    }
    return

}

mainButtons.forEach((button) => {
    button.addEventListener("click", handleClick)
})

