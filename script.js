// your code here

 const nameInput = document.getElementById("name");
    const yearInput = document.getElementById("year");
    const button = document.getElementById("button");
    const urlDisplay = document.getElementById("url");

    button.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const year = yearInput.value.trim();

      let queryString = "";
      if (name) {
        queryString += `name=${encodeURIComponent(name)}`;
      }
      if (year) {
        queryString += (queryString ? "&" : "") + `year=${encodeURIComponent(year)}`;
      }

      const newURL = `https://localhost:8080/?${queryString}`;
      urlDisplay.textContent = newURL;
    });