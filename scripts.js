//code for adding class fixed header to header
window.addEventListener('scroll', fixedHeader);
function fixedHeader() {
  // console.log("Window scrolled");
  // console.log(document.body.scrollTop);
  // console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementsByTagName("header")[0].className = "fixed-header";
  } else {
    document.getElementsByTagName("header")[0].removeAttribute("class");
  }
}
//end of code for header

//code for hambergur menu opening and closing a menu overlay
function openMobileMenu() {
  // console.log("openMobileMenu's working");
  document.getElementsByClassName("mobile-menu")[0].style.width = "100%";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closeMobileMenu() {
  // console.log("closeMobileMenu's working");
  document.getElementsByClassName("mobile-menu")[0].removeAttribute("style");
  document.getElementsByTagName("body")[0].removeAttribute("style");
}
//end of code for menu

//code for getting height of other project links
/*
if (window.matchMedia("(max-width: 1150px)").matches) {
  console.log("Window is 1150px");
  var text = document.querySelector(".other-project-link:not(.web-design)").innerText;
  var heightOfOtherProjects = document.querySelector(".other-project-link:not(.web-design)").offsetHeight; //clientHeight
  console.log( "height of other project ", heightOfOtherProjects, text);
  document.querySelector(".other-project-link.web-design").offsetHeight = heightOfOtherProjects;

}
*/

//code for displaying maps in contact us page
var mapLocations = {
  canada: {
    id: "canada-map",
    latitude: 43.710,
    longitude: -79.230,
    scale: 12.5,
    address: "<b>Designo Central Office</b><br/>3886 Wellington Street<br/> Toronto, Ontario M9C 3J5"
  },
  australia: {
    id: "australia-map",
    latitude: -33.106,
    longitude: 151.63,
    scale: 10,
    address: "<b>Designo AU Office</b><br/>19 Balonne Street<br/> New South Wales 2443"
  },
  uk: {
    id: "uk-map",
    latitude: 53.736,
    longitude: -1.335,
    scale: 12.5,
    address: "<b>Designo UK Office</b><br/>13 Colorado Way<br/> Rhyd-y-fro SA8 9GA"
  }
};
for (let i in mapLocations) {
  console.log("i", i, mapLocations[i].id);
  var mymap = L.map(mapLocations[i].id).setView([mapLocations[i].latitude, mapLocations[i].longitude], mapLocations[i].scale);//12.5
  var marker = L.marker([mapLocations[i].latitude, mapLocations[i].longitude]).addTo(mymap);
  marker.bindPopup(mapLocations[i].address).openPopup();
  var accessToken = "pk.eyJ1IjoiYWJjb2RpbmcxNyIsImEiOiJja3J4aW5tczIwODd0MnFtc2phMzF6ZWJhIn0.DYqG15NQEqBbWsFVRrkJGQ";
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJjb2RpbmcxNyIsImEiOiJja3J4aW5tczIwODd0MnFtc2phMzF6ZWJhIn0.DYqG15NQEqBbWsFVRrkJGQ', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
}
//end of code for maps

