document.getElementById("toggleContact").onclick = function () {
    const contact = document.getElementById("contactInfo");

    contact.style.display =
        contact.style.display === "none" ? "block" : "none";
};