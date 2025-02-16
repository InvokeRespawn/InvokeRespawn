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
const maxCount=12;
var currentCount=0;
        data.forEach(item => {
            currentCount++;
           
            if(currentCount>maxCount)
            {
                return;
            }
            const buttonElement = document.createElement('button');
            const imgElement = document.createElement('img');

            buttonElement.classList.add("box");
            buttonElement.classList.add(item.Category);
            imgElement.classList.add("boxImage");
            imgElement.src = item.Thumbnail;
            buttonElement.appendChild(imgElement);
            designList.appendChild(buttonElement);
            

        });
        LoadAndAssignElements();
    } else {
        console.log("No data to process.");
    }
}
var illustrationElements, levelDesignElements, modellingElements;

function LoadAndAssignElements() {
    illustrationElements = Array.from(document.getElementsByClassName("illustration"));
    levelDesignElements = Array.from(document.getElementsByClassName("levelDesign"));
    modellingElements = Array.from(document.getElementsByClassName("modelling"));
}

function ProjectDesignButton(element) {

    console.log(element.id);
    switch (element.id) {
        case "all":
            illustrationElements.forEach(element => {
                element.classList.remove("hidden")
            });
            levelDesignElements.forEach(element => {
                element.classList.remove("hidden")
            });
            modellingElements.forEach(element => {
                element.classList.remove("hidden");
            });
            break;
        case "illustrate":
            illustrationElements.forEach(element => {
                element.classList.remove("hidden")
            });
            levelDesignElements.forEach(element => {
                element.classList.add("hidden")
            });
            modellingElements.forEach(element => {
                element.classList.add("hidden");
            });
            break;
        case "design":
            illustrationElements.forEach(element => {
                element.classList.add("hidden")
            });
            levelDesignElements.forEach(element => {
                element.classList.remove("hidden")
            });
            modellingElements.forEach(element => {
                element.classList.add("hidden");
            });
            break;
        case "mod":
            illustrationElements.forEach(element => {
                element.classList.add("hidden")
            });
            levelDesignElements.forEach(element => {
                element.classList.add("hidden")
            });
            modellingElements.forEach(element => {
                element.classList.remove("hidden");
            });
            break;

    }
}

// document.addEventListener("click", function (event) {

//     if (event.target.classList.contains("company-item")) {
//         OnClickCompany(event.target);
//     }
// });
