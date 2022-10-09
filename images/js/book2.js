Page.init();
function onResize(){
    var img = document.querySelector(".bb-item img");
    var displaySetting = img.parentElement.parentElement.style.display;
    img.parentElement.parentElement.style.display = "block";
    document.getElementById("bb-bookblock").style.height = img.offsetHeight + "px";
    img.parentElement.parentElement.style.display = displaySetting;
}
window.addEventListener("resize", function(){
    onResize();
});
onResize();