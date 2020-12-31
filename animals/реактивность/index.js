function checkboxstatus(currentObj) {
  if (currentObj.checked) {
    document.getElementById("TitleCheckText2").innerHTML =
      "<strike>Do you want to strike-out this text?</strike>";
  } else {
    document.getElementById("TitleCheckText2").innerHTML =
      "Do you want to strike-out this text? ";
  }
}
