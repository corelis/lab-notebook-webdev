const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  app.style.display = "flex";
  app.style.flexDirection = "column";
  app.style.alignItems = "center";

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network response was not ok (${res.status})`);
      }
      return res.json();
    })
    .then((books) => {
      app.innerHTML = "";

      // 4. For each book, build a card and append it
      books.forEach((book) => {
        const card = document.createElement("div");
        card.style.width = "75%";
        card.style.margin = "1em 0";
        card.style.padding = "1em";
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "8px";
        card.style.backgroundColor = "#fff";
        card.style.textAlign = "center";

        const pubYear = new Date(book.released).getFullYear();

        card.innerHTML = `
          <h3>${book.name}</h3>
          <p><strong>Author${
            book.authors.length > 1 ? "s" : ""
          }:</strong> ${book.authors.join(", ")}</p>
          <p><strong>Published:</strong> ${pubYear}</p>
          <p><strong>Pages:</strong> ${book.numberOfPages}</p>
        `;

        app.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      app.innerHTML = "";
      // Show an error message
      const msg = document.createElement("p");
      msg.textContent = "Sorry, we couldn’t load the books at this time.";
      msg.style.color = "red";
      msg.style.textAlign = "center";
      app.appendChild(msg);
    });
};

fetchData(url);
