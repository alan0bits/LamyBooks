var config = {
    $bookBlock : $( '#bb-bookblock' ),
    $navNext : $( '#bb-nav-next' ),
    $navPrev : $( '#bb-nav-prev' ),
    $navFirst : $( '#bb-nav-first' ),
    $navLast : $( '#bb-nav-last' )
}
var configCook = {
    $bookBlock : $( '#cook-bookblock' ),
    $navNext : $( '#cook-nav-next' ),
    $navPrev : $( '#cook-nav-prev' ),
    $navFirst : $( '#cook-nav-first' ),
    $navLast : $( '#cook-nav-last' )
}
var configDrink = {
    $bookBlock : $( '#drink-bookblock' ),
    $navNext : $( '#drink-nav-next' ),
    $navPrev : $( '#drink-nav-prev' ),
    $navFirst : $( '#drink-nav-first' ),
    $navLast : $( '#drink-nav-last' )
}
var configPict = {
    $bookBlock : $( '#pict-bookblock' ),
    $navNext : $( '#pict-nav-next' ),
    $navPrev : $( '#pict-nav-prev' ),
    $navFirst : $( '#pict-nav-first' ),
    $navLast : $( '#pict-nav-last' )
}
var configCred = {
    $bookBlock : $( '#cred-bookblock' ),
    $navNext : $( '#cred-nav-next' ),
    $navPrev : $( '#cred-nav-prev' ),
    $navFirst : $( '#cred-nav-first' ),
    $navLast : $( '#cred-nav-last' )
}
Page.init(config);
Page.init(configCook);
Page.init(configDrink);
Page.init(configPict);
Page.init(configCred);
function onResize(){
    var img = document.querySelector(".bb-item img");
    var displaySetting = img.parentElement.parentElement.style.display;
    img.parentElement.parentElement.style.display = "block";
    document.getElementById("bb-bookblock").style.height = img.offsetHeight + "px";
    img.parentElement.parentElement.style.display = displaySetting;
}
function GoToPage(index){
    var sideScroller = document.getElementById("side-scroller");
    var buttons = document.querySelectorAll("header button");
    var currentSelected = document.querySelector("header button.current-page");
    if(currentSelected){
        currentSelected.classList.remove("current-page");
    }
    buttons[index].classList.add("current-page");
    sideScroller.style.transform = "translateX(-"+index+"00vw)";
}
window.addEventListener("resize", function(){
    onResize();
});
onResize();