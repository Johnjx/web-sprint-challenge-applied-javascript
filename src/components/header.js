const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const div = document.createElement("div");
  div.classList.add("header");

  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.textContent = date;
  div.appendChild(spanDate);

  const h1 = document.createElement("h1");
  h1.textContent = title;
  div.appendChild(h1);

  const spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");
  spanTemp.textContent = temp;
  div.appendChild(spanTemp);

  return div

}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  document.querySelector(selector).appendChild(Header('Bloom Bard','April 15, 2022','5 Cel'));
  

}

export { Header, headerAppender }
