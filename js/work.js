
var workJson;

document.addEventListener("DOMContentLoaded", async (event) => {
// Send the request
workJson = await  loadJSON("http://127.0.0.1:3000/json/WorkData.json");
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
        console.log("Processing JSON Data:", data);
        const companyListElement = document.getElementById('company-list');
        const TitleCompanyName = document.getElementById('TitleCompanyName');
        const currentCompany = document.getElementById('currentCompany');
        const companyYear = document.getElementById('companyYear');

       
        const workTasks = document.getElementById('workTasks');
        var activeCompanyName="";
        var firstItem = true;
        workJson.forEach(item => {

            // Create a time element
            const liElement = document.createElement('li');
            const buttonElement = document.createElement('button');

            buttonElement.textContent = item.companyName;

            buttonElement.classList.add('company-item');
            if (firstItem) {
                firstItem = false;
                // liElement.classList.add('company-item');
                activeCompanyName =item.companyName;

            }
            liElement.appendChild(buttonElement);
            companyListElement.appendChild(liElement);

            currentCompany.textContent = item.jobTitle;
            TitleCompanyName.textContent = " @ "+item.companyName;
            companyYear.textContent = item.workDuration;

          
        if(activeCompanyName == item.companyName)
        {
            item.jobResponsibilities.forEach(subItem => {
              const stackSubElement = document.createElement('li');
               // stackSubElement.classList.add('company-item');
               stackSubElement.textContent = subItem;
               workTasks.appendChild(stackSubElement);
            });
        }


       
        });
    } else {
        console.log("No data to process.");
    }
}


function OnClickCompany(element)
{
   
    var activeCompanyName="";
    activeCompanyName = element.textContent;
    const workTasks = document.getElementById('workTasks');
    
    while (workTasks.firstChild) {
        workTasks.removeChild(workTasks.firstChild);
      }

      const TitleCompanyName = document.getElementById('TitleCompanyName');
        const currentCompany = document.getElementById('currentCompany');
        const companyYear = document.getElementById('companyYear');
    workJson.forEach(item => {


    if(activeCompanyName == item.companyName)
    {
        currentCompany.textContent = item.jobTitle;
        TitleCompanyName.textContent = " @ "+item.companyName;
        companyYear.textContent = item.workDuration;

        item.jobResponsibilities.forEach(subItem => {
          const stackSubElement = document.createElement('li');
           // stackSubElement.classList.add('company-item');
           stackSubElement.textContent = subItem;
           workTasks.appendChild(stackSubElement);
        });
    }
    });
}

document.addEventListener("click", function(event) {

    if(event.target.classList.contains("company-item"))
    {
        OnClickCompany(event.target);
    }
});


