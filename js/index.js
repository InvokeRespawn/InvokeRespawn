window.addEventListener('load', function () {

});

function getScrollPercentage() {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  return Math.min(100, Math.max(0, scrolled));
}


window.addEventListener('scroll', () => {
  const percentage = getScrollPercentage();
  const newValue = 301.6 - ((percentage / 100) * 301.6);

  const specificElement = document.getElementById('scrollProgress');
  specificElement.style.setProperty('--scroll-progress', newValue.toFixed(2));

  let button = document.getElementById('scrollBtnCtn');
  if (window.scrollY > 0) {
    button.classList.add('slideInBottom');
  } else {
    button.classList.remove('slideInBottom');
  }
});
function ScrollToTopButton() {
  console.log("Scroll Pressed");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



function submitForm(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const body = encodeURIComponent(
    `Name: ${firstName} ${lastName}
    Email: ${email}

    Message:
    ${message}`
  );

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = mailtoLink;
}


// const jsonURL = 'http://127.0.0.1:3000/json/BlogData.json';

// const xhr = new XMLHttpRequest();

// // Configure it: GET-request for the URL
// xhr.open('GET', jsonURL, true);

// // Set up a function to handle the response
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     try {
//       // Parse the JSON response
//       const data = JSON.parse(xhr.responseText);
//       console.log('JSON Data:', data);

//       const parentElement = document.getElementById('blogContainer');
//       if (!parentElement) {
//         console.error('No element with ID "blog" found.');
//         return;
//       }

//       // Example: Accessing the articles and their details
//       data.forEach(item => {

// // Create a time element
// const divElement = document.createElement('div');
// divElement.classList.add('blog-item');

// const timeElement = document.createElement('time');
// timeElement.setAttribute('datetime', item.Date); // Set the datetime attribute
// timeElement.textContent = item.Date;
// timeElement.classList.add('blog-time');// Set the content

// // Create an h3 element for the title
// const h3Element = document.createElement('h3');
// h3Element.textContent = item.Title;
// h3Element.classList.add('blog-title');

// // Create an anchor (a) element for the link
// const aElement = document.createElement('a');
// aElement.setAttribute('href', item.Link); // Set the href attribute
// aElement.textContent = 'Read more'; // Link text
// aElement.classList.add('blog-link');

// // Append the new elements to the parent
// divElement.appendChild(timeElement);
// divElement.appendChild(h3Element);
// divElement.appendChild(aElement);

// parentElement.appendChild(divElement);



//         console.log(`Title: ${item.Title}`);
//         console.log(`Link: ${item.Link}`);
//         item.TextDescription.forEach(description => {
//           console.log(`Paragraph: ${description.paragraph}`);
//         });
//         item.Images.forEach(image => {
//           console.log(`Image URL: ${image.url}`);
//           console.log(`Alt Text: ${image.alt}`);
//         });
//       });
//     } catch (error) {
//       console.error('Error parsing JSON:', error);
//       jsonParsingIssue();
//     }
//   } else {
//     console.error(`HTTP Error: ${xhr.status}`);
//   }
// };

// // Handle network errors
// xhr.onerror = function () {
//   console.error('Network Error');

//   jsonParsingIssue();
// };

// // Send the request
// xhr.send();


// function jsonParsingIssue()
// {
//   // Find the element with the ID 'blog' and set its display to 'none'
//   const blogElement = document.getElementById('blog');
//   if (blogElement) {
//     blogElement.style.display = 'none';
//     console.log('Element with ID "blog" hidden due to error.');
//   } else {
//     console.error('No element with ID "blog" found.');
//   }
// }





/*============================================================================== */

//update this url such that it uses local host in current environment but uses the actual domain in production

const projectJSONURL = 'http://127.0.0.1:3000/json/ProjectData.json';

const xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL
xhr.open('GET', projectJSONURL, true);

// Set up a function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    try {
      // Parse the JSON response
      const data = JSON.parse(xhr.responseText);
      console.log('JSON Data:', data);

      const parentElement = document.getElementById('projectContainer');
      if (!parentElement) {
        console.error('No element with ID "blog" found.');
        return;
      }

      // Example: Accessing the articles and their details
      data.forEach(item => {

        // Create a time element
        const divElement = document.createElement('div');
        const h3Element = document.createElement('h3');
        const h4Element = document.createElement('h4');


        h3Element.textContent = 'Featured Project';
        h4Element.textContent = item.Title;

        const boxDivElement = document.createElement('div');
        const para = document.createElement('p');
        para.textContent = item.Description;
        boxDivElement.appendChild(para);

        const stackElement = document.createElement('ul');
        item.Stack.forEach(subItem => {
          const stackSubElement = document.createElement('li');
          const stackSpanElement = document.createElement('span');
          stackSpanElement.textContent = subItem.Name;

          stackSubElement.appendChild(stackSpanElement);
          stackElement.appendChild(stackSubElement);
        });


        const projectElement = document.createElement('ul');
        item.links.forEach(subItem => {
          const stackSubElement = document.createElement('li');
          const stackHrefElement = document.createElement('a');
          stackHrefElement.href = subItem.Link;
          stackHrefElement.target = "_blank";

          const stackSpanElement = document.createElement('span');
          stackSpanElement.classList.add('bi-' + subItem.Icon);

          stackHrefElement.appendChild(stackSpanElement);
          stackSubElement.appendChild(stackHrefElement);
          projectElement.appendChild(stackSubElement);
        });


        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element);
        divElement.appendChild(boxDivElement);
        divElement.appendChild(stackElement);
        divElement.appendChild(projectElement);

        parentElement.appendChild(divElement);

      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      projectJsonParsingIssue();
    }
  } else {
    console.error(`HTTP Error: ${xhr.status}`);
  }
};

// Handle network errors
xhr.onerror = function () {
  console.error('Network Error');

  projectJsonParsingIssue();
};

// Send the request
xhr.send();


function projectJsonParsingIssue() {
  // Find the element with the ID 'blog' and set its display to 'none'
  const projectElement = document.getElementById('project');
  if (projectElement) {
    projectElement.style.display = 'none';
    console.log('Element with ID "blog" hidden due to error.');
  } else {
    console.error('No element with ID "blog" found.');
  }
}












function HamBurgerClick() {
  const bars = document.querySelectorAll('.bar');
  console.log("boom boom:" + bars.length);

  bars[0].classList.add('animateTop');
  bars[1].classList.add('animateMiddle');
  bars[2].classList.add('animateBottom');

}






