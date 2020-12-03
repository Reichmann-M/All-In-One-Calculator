function openCategory(evt, mainCategoryName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(mainCategoryName).style.display = "block";
  evt.currentTarget.className += " active";

  var i, subtabcontent, subtablinks;
  subtabcontent = document.getElementsByClassName("subtabcontent");
  for (i = 0; i < subtabcontent.length; i++) {
    subtabcontent[i].style.display = "none";
  }
  var i, subsubtabcontent, subsubtablinks;
  subsubtabcontent = document.getElementsByClassName("subsubtabcontent");
  for (i = 0; i < subsubtabcontent.length; i++) {
    subsubtabcontent[i].style.display = "none";
  }
}

function openSubCategory(evt, subCategoryName) {
  var i, subtabcontent, subtablinks;
  subtabcontent = document.getElementsByClassName("subtabcontent");
  for (i = 0; i < subtabcontent.length; i++) {
    subtabcontent[i].style.display = "none";
  }
  subtablinks = document.getElementsByClassName("subtablinks");
  for (i = 0; i < subtablinks.length; i++) {
    subtablinks[i].className = subtablinks[i].className.replace(" active", "");
  }
  document.getElementById(subCategoryName).style.display = "block";
  evt.currentTarget.className += " active";
  var i, subsubtabcontent, subsubtablinks;
  subsubtabcontent = document.getElementsByClassName("subsubtabcontent");
  for (i = 0; i < subsubtabcontent.length; i++) {
    subsubtabcontent[i].style.display = "none";
  }
}

function openSubSubCategory(evt, subsubCategoryName) {
  var i, subsubtabcontent, subsubtablinks;
  subsubtabcontent = document.getElementsByClassName("subsubtabcontent");
  for (i = 0; i < subsubtabcontent.length; i++) {
    subsubtabcontent[i].style.display = "none";
  }
  subsubtablinks = document.getElementsByClassName("subsubtablinks");
  for (i = 0; i < subsubtablinks.length; i++) {
    subsubtablinks[i].className = subsubtablinks[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(subsubCategoryName).style.display = "block";
  evt.currentTarget.className += " active";
}
