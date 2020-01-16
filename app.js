const details = document.querySelector(".details");

// Update UI to the DOM

document.querySelector("#search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log();
  dayName(this.query.value.trim())
    .then(name => {
      console.log("Got data back", name);
    })
    .catch(error => {
      console.info("You got an error", error);
    });
});

details.innerHTML = `<h5 class="card-title">${name.results}</h5>
                <p class="card-text">${name.results}</p>
                <p class="card-text">Sweden</p>`;
