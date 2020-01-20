document.querySelector("#search-form").addEventListener("submit", e => {
  e.preventDefault();
  const getName = document.querySelector("#query").value;
  const getNameDay = document.querySelector(".details");

  dayName(getName).then(data => {
    if (200 && data.results.length > 0) {
      const getName = document.querySelector("#query").value;

      let render = "";
      data.results.forEach(data => {
        render = `<h5 class="card-title">${data.day}/${data.month}</h5>
                <p class="card-text">${data.name}</p>
               `;
      });
      getNameDay.innerHTML = render;
    } else {
      errormsg("Error, go fish!");
    }
  });
});

const errormsg = error => {
  document.querySelector(".details").innerHTML = `<h2>${error}</h2>
    `;
};

document.querySelector("#search-date").addEventListener("submit", e => {
  e.preventDefault();

  const getNameMonth = document.querySelector("#this_month").value;
  const getNameDate = document.querySelector("#this_day").value;
  const writeOut = document.querySelector(".details");

  getDate(getNameMonth, getNameDate).then(data => {
    let renderDate = "";
    data.data.forEach(data => {
      renderDate = `<h5 class="card-title">${data.namedays.us} <br> ${data.dates.day}/${data.dates.month}</h5>
                `;
    });
    writeOut.innerHTML = renderDate;
  });
});
