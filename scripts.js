window.addEventListener('scroll', fixedHeader);
function fixedHeader(){
    // console.log("Window scrolled");
    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementsByTagName("header")[0].className = "fixed-header";
      } else {
        document.getElementsByTagName("header")[0].className = "";
      }
}
function openMobileMenu(){
  console.log("openMobileMenu's working");
  document.getElementsByClassName("mobile-menu")[0].style.width = "100%";
}
function closeMobileMenu(){
  console.log("closeMobileMenu's working");
  document.getElementsByClassName("mobile-menu")[0].style.width = "0px";
}