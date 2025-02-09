
var workJson;

document.addEventListener("DOMContentLoaded", async (event) => {


    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "::1") {
        workJson = await loadJSON("http://127.0.0.1:3000/json/WorkData.json");
        console.log("Running on localhost");
    } else {
        console.log("Running on a live website");
        workJson = await loadJSON("../InvokeRespawn/json/WorkData.json");
    }
    processData(workJson);

});

async function loadJSON(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error loading JSON:", error);
        return null;
    }
}

function processData(data) {
    if (data) {

        const companyListElement = document.getElementById('company-list');
        const TitleCompanyName = document.getElementById('TitleCompanyName');
        const currentCompany = document.getElementById('currentCompany');
        const companyYear = document.getElementById('companyYear');


        const workTasks = document.getElementById('workTasks');
        var refrenceElement;
        var firstItem = true;
        data.forEach(item => {

            // Create a time element
            const liElement = document.createElement('li');
            const buttonElement = document.createElement('button');

            buttonElement.textContent = item.companyName;

            buttonElement.classList.add('company-item');
            if (firstItem) {
                firstItem = false;
                buttonElement.classList.add('highlightCompany');
                refrenceElement =buttonElement;
            }
            liElement.appendChild(buttonElement);
            companyListElement.appendChild(liElement);

          
        });
        OnClickCompany(refrenceElement);
    } else {
        console.log("No data to process.");
    }
}


function OnClickCompany(element) {

    var activeCompanyName = "";
    activeCompanyName = element.textContent;
    const workTasks = document.getElementById('workTasks');
    var companyItems = Array.from(document.getElementsByClassName('company-item'));

    companyItems.forEach(_element => {

        _element.classList.remove("highlightCompany");
    });

    element.classList.add('highlightCompany');

    while (workTasks.firstChild) {
        workTasks.removeChild(workTasks.firstChild);
    }

    const TitleCompanyName = document.getElementById('TitleCompanyName');
    const currentCompany = document.getElementById('currentCompany');
    const companyYear = document.getElementById('companyYear');
    workJson.forEach(item => {


        if (activeCompanyName == item.companyName) {
            currentCompany.textContent = item.jobTitle;
            TitleCompanyName.textContent = " @ " + item.companyName;
            companyYear.textContent = item.workDuration;

            item.jobResponsibilities.forEach(subItem => {
                const stackSubElement = document.createElement('li');
                 stackSubElement.classList.add('workDetails');
                stackSubElement.textContent = subItem;
                workTasks.appendChild(stackSubElement);
            });
        }
    });
}

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("company-item")) {
        OnClickCompany(event.target);
    }
});


