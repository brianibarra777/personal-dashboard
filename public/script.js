yelpRating = document.getElementById("yelpRating");
address = document.getElementById("address");
review = document.getElementById("review");
newRestaurant = document.getElementById("newRestaurant");
yelpBox = document.getElementById("yelpBox");
someUrl = document.getElementById("someUrl");
restaurantName = document.getElementById("restaurantName");

async function getRequest(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function updateYelpBox() {
  const url = "http://localhost:2023/yelp";
  const response = await getRequest(url);
  //yelpBox.value=`<a href="${response.url}"</a>`;
  restaurantName.innerHTML = `<a href="${response.url}" target="_blank">${response.name}</a>`;
  yelpRating.innerHTML =
    '<span style="font-weight:bold;">Rating: </span>' +
    response.rating +
    " stars";
  address.innerHTML =
    '<span style="font-weight:bold;">Address: </span>' + response.address;
  review.innerHTML =
    '<span style="font-weight:bold;">Recent Review: </span>' +
    response.recent_review;
}

updateYelpBox();

newRestaurant.onclick = () => {
  updateYelpBox();
};

//News

newsRow1 = document.getElementById("newsRow1");
newsRow2 = document.getElementById("newsRow2");
newsRow3 = document.getElementById("newsRow3");

newsBox = document.getElementById("newsBox");

async function updateNews() {
  const url = "http://localhost:2023/news";
  const response = await getRequest(url);
  //yelpBox.value=`<a href="${response.url}"</a>`;
  newsRow1.innerHTML =
    `<p>${response.publishedAt[0]}</p>` +
    `<a href="${response.url[0]}"><h2>${response.title[0]}</h2></a>`;
  newsRow2.innerHTML =
    `<p>${response.publishedAt[1]}</p>` +
    `<a href="${response.url[1]}"><h2>${response.title[1]}</h2></a>`;
  newsRow3.innerHTML =
    `<p>${response.publishedAt[2]}</p>` +
    `<a href="${response.url[2]}"><h2>${response.title[2]}</h2></a>`;
}

updateNews();

//Reddit

redditRow1 = document.getElementById("redditRow1");
redditRow2 = document.getElementById("redditRow2");
redditRow3 = document.getElementById("redditRow3");

newsBox = document.getElementById("newsBox");

async function updateReddit() {
  const url = "http://localhost:2023/reddit";
  const response = await getRequest(url);
  //yelpBox.value=`<a href="${response.url}"</a>`;
  redditRow1.innerHTML = `<div style="display: flex; justify-content: flex-start; align-items: center; position: relative;">
  <p>Posted: ${response.time_ago[0]} hours ago</p>
  <p style="text-align: center; position: absolute; left: 50%; transform: translateX(-50%); margin: 0;">Upvotes: ${response.upvotes[0]}</p>
  <p style="position: absolute; right: 0.5%;">Flair: ${response.flair[0]}</p>
</div>
<div style="display: block;">
  <a href="${response.url[0]}"><h2>${response.title[0]}</h2></a>
</div>`;

  redditRow2.innerHTML = `<div style="display: flex; justify-content: flex-start; align-items: center; position: relative;">
  <p>Posted: ${response.time_ago[1]} hours ago</p>
  <p style="text-align: center; position: absolute; left: 50%; transform: translateX(-50%); margin: 0;">Upvotes: ${response.upvotes[1]}</p>
  <p style="position: absolute; right: 0.5%;">Flair: ${response.flair[1]}</p>
</div>
<div style="display: block;">
  <a href="${response.url[1]}"><h2>${response.title[1]}</h2></a>
</div>`;

  redditRow3.innerHTML = `<div style="display: flex; justify-content: flex-start; align-items: center; position: relative;">
  <p>Posted: ${response.time_ago[2]} hours ago</p>
  <p style="text-align: center; position: absolute; left: 50%; transform: translateX(-50%); margin: 0;">Upvotes: ${response.upvotes[2]}</p>
  <p style="position: absolute; right: 0.5%;">Flair: ${response.flair[2]}</p>
</div>
<div style="display: block;">
  <a href="${response.url[2]}"><h2>${response.title[2]}</h2></a>
</div>`;
}

updateReddit();

//weather

hourInformation = document.getElementById("hourInformation");
fahrenheitInformation = document.getElementById("fahrenheitInformation");
celciusInformation = document.getElementById("celciusInformation");

async function updateWeather() {
  const url = "http://localhost:2023/weather";
  const response = await getRequest(url);
  //yelpBox.value=`<a href="${response.url}"</a>`;
  hourInformation.innerHTML =
    `<li>Now</li>` +
    `<li>+3 Hours</li>` +
    `<li>+6 Hours</li>` +
    `<li>+9 Hours</li>` +
    `<li>+12 Hours</li>` +
    `<li>+15 Hours</li>` +
    `<li>+18 Hours</li>` +
    `<li>+21 Hours</li>`;

  fahrenheitInformation.innerHTML =
    `<li>${response.temp[0]} °F</li>` +
    `<li>${response.temp[1]} °F</li>` +
    `<li>${response.temp[2]} °F</li>` +
    `<li>${response.temp[3]} °F</li>` +
    `<li>${response.temp[4]} °F</li>` +
    `<li>${response.temp[5]} °F</li>` +
    `<li>${response.temp[6]} °F</li>` +
    `<li>${response.temp[7]} °F</li>`;

  celciusInformation.innerHTML =
    `<li>${Math.round(((response.temp[0] - 32) * 5) / 9)} °C</li>` +
    `<li>${Math.round(((response.temp[1] - 32) * 5) / 9)} °C</li>` +
    `<li>${Math.round(((response.temp[2] - 32) * 5) / 9)} °C</li>` +
    `<li>${Math.round(((response.temp[3] - 32) * 5) / 9)} °C</li>` +
    `<li>${Math.round(((response.temp[4] - 32) * 5) / 9)} °C</li>` +
    `<li>${Math.round(((response.temp[5] - 32) * 5) / 9)} °C</li>` +
    `<li>${Math.round(((response.temp[6] - 32) * 5) / 9)} °C</li>` +
    `<li>${Math.round(((response.temp[7] - 32) * 5) / 9)} °C</li>`;

  descriptionInformation.innerHTML =
    `<li>${response.description[0]}` +
    `<li>${response.description[1]}` +
    `<li>${response.description[2]}` +
    `<li>${response.description[3]}` +
    `<li>${response.description[4]}` +
    `<li>${response.description[5]}` +
    `<li>${response.description[6]}` +
    `<li>${response.description[7]}`;
}

updateWeather();

//DOM
const plusBtn = document.getElementById("plusBtn");
const invisible = document.querySelector(".invisible");
const blurContainer = document.getElementById("blurContainer");
const closeButton = document.getElementById("closeButton");
const rightPanel = document.querySelector(".rightPanel");
const container = document.querySelector(".container");

plusBtn.addEventListener("click", () => {
  blurContainer.classList.add("blur");
  container.classList.add("blur");
  invisible.style.display = "block"; //change to block or something
});

function closeWindow() {
  blurContainer.classList.remove("blur");
  container.classList.remove("blur");
  invisible.style.display = "none";
  invisibleEdit.style.display = "none";
}

closeButton.addEventListener("click", closeWindow);

//adding a row
let toggled = null;

addRowTitle = document.getElementById("addRowTitle");
addRowDescription = document.getElementById("addRowDescription");
date = document.getElementById("date");
createdButtonContainer = Array.from(
  document.querySelectorAll(".createdButtonOption")
);
add = document.querySelector(".add");

createdButtonContainer.forEach((item) => {
  item.addEventListener("click", (e) => {
    toggled = e.target.textContent;

    //if first child
    if (toggled == "Low") {
      e.target.nextElementSibling.classList.remove("toggled");
      e.target.nextElementSibling.nextElementSibling.classList.remove(
        "toggled"
      );
      e.target.classList.add("toggled");
    } else if (toggled == "High") {
      e.target.previousElementSibling.classList.remove("toggled");
      e.target.previousElementSibling.previousElementSibling.classList.remove(
        "toggled"
      );
      e.target.classList.add("toggled");
    } else {
      e.target.previousElementSibling.classList.remove("toggled");
      e.target.nextElementSibling.classList.remove("toggled");
      e.target.classList.add("toggled");
    }
  });
});

function addNew() {
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerHTML = `
                <button class="selected"></button>
                <div class="info">${addRowTitle.value}</div>
                <div class="priority">${toggled}</div> 
                <div class="details">${addRowDescription.value}</div> 
                <div class="date">${date.value}</div> 
                <div class="edit"><button class="editBtn">Edit</button></div> 
                <div class="delete"><button class="deleteBtn">Delete</button></div>`;

  rightPanel.appendChild(newItem);
  sortDivs();
  saveToLocalStorage(); //local storage
}

add.addEventListener("click", () => {
  if (
    addRowTitle.value === "" ||
    addRowDescription.value === "" ||
    date.value === "" ||
    toggled === null
  ) {
    alert("fill fields");
  } else {
    addNew();
    //reset
    addRowTitle.value = null;
    toggled = null;
    addRowDescription.value = null;
    date.value = null;
    createdButtonContainer[0].classList.remove("toggled");
    createdButtonContainer[1].classList.remove("toggled");
    createdButtonContainer[2].classList.remove("toggled");
    closeWindow();
    sortDivs();
  }
});

//sort
const buttonContainer =
  document.querySelectorAll(".buttonContainer")[0].children;

const itemRow = document.querySelectorAll(".item");

//const itemRow=document.querySelectorAll('.item')[0].children

//change 0 to it and loop
function compareDates(a, b) {
  return new Date(a.date) - new Date(b.date);
}

let arr = [];

function sortDivs() {
  const itemRows = document.querySelectorAll(".item");
  let arr = [];

  for (let i = 0; i < itemRows.length; i++) {
    arr.push({
      itemRows: itemRows[i].children[4],
      date: itemRows[i].children[4].textContent,
    });
    itemRows[i].classList.remove("invisibleRows"); //remove class to see all rows not sorted
  }

  arr.sort(compareDates);

  rightPanel.innerHTML = ""; // Clear the HTML

  for (let i = 0; i < arr.length; i++) {
    rightPanel.innerHTML += arr[i].itemRows.parentElement.outerHTML;

    if (rightPanel.children[i].children[2].textContent == "Low") {
      rightPanel.children[i].children[2].style.backgroundColor = "green";
    } else if (rightPanel.children[i].children[2].textContent == "Medium") {
      rightPanel.children[i].children[2].style.backgroundColor = "orange";
    } else if (rightPanel.children[i].children[2].textContent == "High") {
      rightPanel.children[i].children[2].style.backgroundColor = "red";
    }
  }
}

Array.from(buttonContainer)
  .slice(0, 2)
  .forEach((item) => {
    item.addEventListener("click", sortDivs);
  });

//today
const today = document.getElementById("today");

const dateToday = new Date();

const dateYear = dateToday.getFullYear();
const dateMonth = String(dateToday.getMonth() + 1).padStart(2, "0");
const dateDay = String(dateToday.getDate()).padStart(2, "0");

const todaysDate = `${dateYear}-${dateMonth}-${dateDay}`;

function sortToday() {
  const itemRows = document.querySelectorAll(".item");
  let arr = [];

  for (let i = 0; i < itemRows.length; i++) {
    if (itemRows[i].children[4].textContent == todaysDate) {
      arr.push({
        itemRows: itemRows[i].children[4],
        date: itemRows[i].children[4].textContent,
      });
    } else {
      // console.log(itemRows[i])
      itemRows[i].classList.add("invisibleRows");
    }
  }

  arr.sort(compareDates);
}

today.addEventListener("click", sortToday);

//week
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getUTCFullYear(), 0, 1);
  const dayOfWeek = (date.getUTCDay() + 6) % 7; // Adjust for week starting on Monday
  const daysSinceFirstDayOfYear = (date - firstDayOfYear) / 86400000; // 86400000 milliseconds in a day
  const weekNumber = Math.ceil(
    (daysSinceFirstDayOfYear + firstDayOfYear.getUTCDay() + 1) / 7
  );
  return weekNumber;
}

const week = document.getElementById("week");
const todaysWeek = getWeekNumber(new Date());

function sortWeek() {
  const itemRows = document.querySelectorAll(".item");
  let arr = [];

  for (let i = 0; i < itemRows.length; i++) {
    if (
      getWeekNumber(new Date(itemRows[i].children[4].textContent)) == todaysWeek
    ) {
      itemRows[i].classList.remove("invisibleRows");
      arr.push({
        itemRows: itemRows[i].children[4],
        date: itemRows[i].children[4].textContent,
      });
    } else {
      // console.log(itemRows[i])
      itemRows[i].classList.add("invisibleRows");
    }
  }

  arr.sort(compareDates);
}

week.addEventListener("click", sortWeek);

//month
const month = document.getElementById("month");

function sortMonth() {
  const itemRows = document.querySelectorAll(".item");
  let arr = [];

  for (let i = 0; i < itemRows.length; i++) {
    if (itemRows[i].children[4].textContent.slice(5, 7) == dateMonth) {
      itemRows[i].classList.remove("invisibleRows");
      arr.push({
        itemRows: itemRows[i].children[4],
        date: itemRows[i].children[4].textContent,
      });
    } else {
      // console.log(itemRows[i])
      itemRows[i].classList.add("invisibleRows");
    }
  }

  arr.sort(compareDates);
}

month.addEventListener("click", sortMonth);

//delete

document.addEventListener("click", (e) => {
  if (e.target.matches(".deleteBtn")) {
    const item = e.target.parentElement.parentElement;
    item.remove();
    saveToLocalStorage(); // Update local storage
  }
});

//select
document.addEventListener("click", (e) => {
  if (
    e.target.matches(".selected") &&
    e.target.parentElement.matches(".slash")
  ) {
    e.target.parentElement.classList.remove("slash");
  } else if (e.target.matches(".selected")) {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.add("slash");
  }
});

//edit
const invisibleEdit = document.querySelector(".invisibleEdit");
const closeEditBtn = document.getElementById("closeEditBtn");
const createdEditContainer = document.querySelector(".createdEditContainer");

let replaceHtml;

document.addEventListener("click", (e) => {
  if (e.target.matches(".editBtn")) {
    replaceHtml = e.target.parentElement.parentElement;

    createdEditContainer.innerHTML = `
        <button id="closeEditBtn">x</button>
                <textarea  name="" id="" style="width: 312px; cols="38" rows="1" placeholder="Title: Pay Bills">${e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML}</textarea>
                <textarea name="" id="" style="width: 312px; height: 152px;" cols="38" rows="10" placeholder="Details: e.g internet, phone, rent">${e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML}</textarea>
                <p>Due Date: <input type="date" value="${e.target.parentElement.previousElementSibling.innerHTML}"></p>
                <div id="priority">Priority: 
                        <div class="createdButtonContainer">
                            <button class="low createdButtonOption">Low</button><button  class="medium createdButtonOption">Medium</button><button class="high createdButtonOption">High</button>
                            <div class="">
                                <button class="add addEdit">Edit</button>
                            </div>
                        </div>
                    </div>`;

    invisibleEdit.style.display = "block";
    blurContainer.classList.add("blur");
    container.classList.add("blur");

    createdButtonOption = Array.from(
      document.querySelectorAll(".createdButtonOption")
    );

    createdButtonOption.forEach((item) => {
      item.addEventListener("click", (e) => {
        toggled = e.target.textContent;

        //if first child
        if (toggled == "Low") {
          e.target.nextElementSibling.classList.remove("toggled");
          e.target.nextElementSibling.nextElementSibling.classList.remove(
            "toggled"
          );
          e.target.classList.add("toggled");
        } else if (toggled == "High") {
          e.target.previousElementSibling.classList.remove("toggled");
          e.target.previousElementSibling.previousElementSibling.classList.remove(
            "toggled"
          );
          e.target.classList.add("toggled");
        } else {
          e.target.previousElementSibling.classList.remove("toggled");
          e.target.nextElementSibling.classList.remove("toggled");
          e.target.classList.add("toggled");
        }
      });
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target.matches(".addEdit")) {
      replaceHtml.innerHTML = `
                <button class="selected"></button>
                <div class="info">${createdEditContainer.children[1].value}</div>
                <div class="priority">${toggled}</div> 
                <div class="details">${createdEditContainer.children[2].value}</div> 
                 <div class="date">${createdEditContainer.children[3].children[0].value}</div> 
                <div class="edit"><button class="editBtn">Edit</button></div> 
                <div class="delete"><button class="deleteBtn">Delete</button></div>`;

      sortDivs();
      closeWindow();
      saveToLocalStorage(); // Update local storage
    }
  });
});

document.body.addEventListener("click", (e) => {
  if (e.target.matches("#closeEditBtn")) {
    closeWindow();
  }
});

//Local Stoage
function saveToLocalStorage() {
  const items = Array.from(rightPanel.children);

  const itemsArray = items.map((item) => {
    return [
      item.querySelector(".info").textContent,
      item.querySelector(".priority").textContent,
      item.querySelector(".details").textContent,
      item.querySelector(".date").textContent,
    ];
  });

  localStorage.setItem("todoItems", JSON.stringify(itemsArray));
}

function loadFromLocalStorage() {
  const savedItems = localStorage.getItem("todoItems");

  if (savedItems) {
    const itemsArray = JSON.parse(savedItems);

    itemsArray.forEach((item) => {
      const newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.innerHTML = `
          <button class="selected"></button>
          <div class="info">${item[0]}</div>
          <div class="priority">${item[1]}</div>
          <div class="details">${item[2]}</div>
          <div class="date">${item[3]}</div>
          <div class="edit"><button class="editBtn">Edit</button></div>
          <div class="delete"><button class="deleteBtn">Delete</button></div>
        `;

      rightPanel.appendChild(newItem);
    });
  }
}

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
document.addEventListener("DOMContentLoaded", sortDivs);

//done
