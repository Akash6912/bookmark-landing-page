
$("#first").click(function (){
  $(".tab-img").attr("src", "images/illustration-features-tab-1.svg");
  $(".tab-heading").text("Bookmark in one click");
  $(".tab-intro").text("Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.");
});

$("#second").click(function (){
  $(".tab-img").attr("src", "images/illustration-features-tab-2.svg");
  $(".tab-heading").text("Intelligent search");
  $(".tab-intro").text("Our powerful search feature will help you of find saved sites in no time at all. No need to trawl through all  your bookmarks.");
});

$("#third").click(function (){
  $(".tab-img").attr("src", "images/illustration-features-tab-3.svg");
  $(".tab-heading").text("Share your bookmarks");
  $(".tab-intro").text("Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
  function myFunction(x) {
    x.classList.toggle("fa-angle-up");
  }
}
