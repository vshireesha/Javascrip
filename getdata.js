document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  console.log(12);
  //create an xml object
  const xhr = new XMLHttpRequest();
  //open

  xhr.open("GET", "data.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };
  xhr.send();
}
