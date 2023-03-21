// IDs or Tags
function loadHTMLFiles(elements) {
  // check if only string or array
  let elementIds = [];
  if (typeof elements === 'string') {
    elementIds = [elements];
  } else if (Array.isArray(elements)) {
    elementIds = elements;
  }
  // load .html-file
  const fileNames = elementIds.map(id => `partials/${id}.html`);
  for (let i = 0; i < fileNames.length; i++) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileNames[i], true);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let element = document.getElementById(elementIds[i]);
        if (!element) {
          element = document.getElementsByTagName(elementIds[i])[0];
        }
        if (element) {
          element.innerHTML = this.responseText;
        } else {
          console.error(`Element with ID or tag name '${elementIds[i]}' not found`);
        }
      }
    };
    xhr.send();
  }
}

// also possible: load every .html-file globally:
// e.g. loadHTMLFiles(['header', 'nav', 'footer']);


// // just IDs
// function loadHTMLFiles(elementIds) {
//     if (typeof elementIds === 'string') {
//       elementIds = [elementIds];
//     }

//     const fileNames = elementIds.map(id => `partials/${id}.html`);
//     for (let i = 0; i < fileNames.length; i++) {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', fileNames[i], true);
//       xhr.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//           document.getElementById(elementIds[i]).innerHTML = this.responseText;
//         }
//       };
//       xhr.send();
//     }
//   }