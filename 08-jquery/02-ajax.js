// const url = "https://anapioficeandfire.com/api/books/";

// const app = document.querySelector("#books");
// app.style.paddingLeft = 0;
// const loading = document.querySelector("#loading");

// const addBookToDOM = (item) => {
//   console.log(item);
//   let element = document.createElement("div");
//   let title = document.createElement("h4");
//   let author = document.createElement("p");
//   let published = document.createElement("p");
//   let pages = document.createElement("p");

//   element.style.display = "flex";
//   element.style.flexDirection = "column";
//   element.style.alignItems = "center";
//   element.style.marginTop = "20px";

//   title.textContent = item.name;
//   author.textContent = `by ${item.authors[0]}`;
//   published.textContent = item.released.substr(0, 4);
//   pages.textContent = `${item.numberOfPages} pages`;

//   element.append(title);
//   element.append(author);
//   element.append(published);
//   element.append(pages);

//   app.append(element);
// };

// const fetchData = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((item) => {
//         addBookToDOM(item);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       let li = document.createElement("li");
//       li.textContent = `An error occured. Please try again.`;
//       app.append(li);
//     })
//     .finally(() => {
//       app.removeChild(loading);
//     });
// };

// fetchData(url);

// 02-ajax.js

$(document).ready(function () {
  const url = "https://anapioficeandfire.com/api/books/";
  const $app = $("#books");
  const $loading = $("#loading");

  $app.css("padding-left", "0");

  // create and append a book card
  const addBookToDOM = (item) => {
    const $element = $("<div>").css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    });

    const $title = $("<h4>").text(item.name);
    const $author = $("<p>").text(`by ${item.authors[0]}`);
    const $published = $("<p>").text(item.released.substr(0, 4));
    const $pages = $("<p>").text(`${item.numberOfPages} pages`);

    $element.append($title).append($author).append($published).append($pages);

    $app.append($element);
  };

  // Fetch data
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
  })
    .done(function (data) {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .fail(function () {
      const $errorLi = $("<li>").text("An error occurred. Please try again.");
      $app.append($errorLi);
    })
    .always(function () {
      $loading.remove();
    });
});
