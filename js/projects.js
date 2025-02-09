var designJson;

document.addEventListener("DOMContentLoaded", async (event) => {


    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "::1") {
        designJson = await loadJSON("http://127.0.0.1:3000/json/DesignData.json");
        console.log("Running on localhost");
    } else {
        console.log("Running on a live website");
        designJson = await loadJSON("../InvokeRespawn/json/DesignData.json");
    }
    processDesignData(designJson);

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

function processDesignData(data) {
    if (data) {

        const designList = document.getElementById('designList');
       
        data.forEach(item => {

            const buttonElement = document.createElement('button');
            const imgElement = document.createElement('img');
            
            buttonElement.classList.add("box");
            buttonElement.classList.add(item.Category);
            imgElement.classList.add("boxImage");
            imgElement.src =item.Thumbnail;
            buttonElement.appendChild(imgElement);
            designList.appendChild(buttonElement);

          
        });
        // OnClickCompany(refrenceElement);
    } else {
        console.log("No data to process.");
    }
}


// function OnClickCompany(element) {

//     var activeCompanyName = "";
//     activeCompanyName = element.textContent;
//     const workTasks = document.getElementById('workTasks');
//     var companyItems = Array.from(document.getElementsByClassName('company-item'));

//     companyItems.forEach(_element => {

//         _element.classList.remove("highlightCompany");
//     });

//     element.classList.add('highlightCompany');

//     while (workTasks.firstChild) {
//         workTasks.removeChild(workTasks.firstChild);
//     }

//     const TitleCompanyName = document.getElementById('TitleCompanyName');
//     const currentCompany = document.getElementById('currentCompany');
//     const companyYear = document.getElementById('companyYear');
//     workJson.forEach(item => {


//         if (activeCompanyName == item.companyName) {
//             currentCompany.textContent = item.jobTitle;
//             TitleCompanyName.textContent = " @ " + item.companyName;
//             companyYear.textContent = item.workDuration;

//             item.jobResponsibilities.forEach(subItem => {
//                 const stackSubElement = document.createElement('li');
//                  stackSubElement.classList.add('workDetails');
//                 stackSubElement.textContent = subItem;
//                 workTasks.appendChild(stackSubElement);
//             });
//         }
//     });
// }

// document.addEventListener("click", function (event) {

//     if (event.target.classList.contains("company-item")) {
//         OnClickCompany(event.target);
//     }
// });
