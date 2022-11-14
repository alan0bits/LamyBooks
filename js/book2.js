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
    var height = img.offsetHeight + "px";
    document.getElementById("bb-bookblock").style.height = height;
    document.getElementById("cook-bookblock").style.height = height;
    document.getElementById("drink-bookblock").style.height = height;
    document.getElementById("pict-bookblock").style.height = height;
    document.getElementById("cred-bookblock").style.height = height;
    img.parentElement.parentElement.style.display = displaySetting;
}
var backgrounds = ["#bdc8f8f1", "#fff2e3", "#1e0b63", "#E7BAE4", "#C8F8F1"];
var textColors = ["#3f3f3f", "#3f3f3f", "#ffffff", "#3f3f3f", "#3f3f3f"];
var btnColors = ["#b872b8", "#415B9F", "#C05131", "#72b890", "#b872b8"];
function GoToPage(index){
    var sideScroller = document.getElementById("side-scroller");
    var buttons = document.querySelectorAll("header button");
    var currentSelected = document.querySelector("header button.current-page");
    if(currentSelected){
        currentSelected.classList.remove("current-page");
    }
    buttons[index].classList.add("current-page");
    sideScroller.style.transform = "translateX(-"+index+"00vw)";
    document.body.style.background = backgrounds[index];
    document.body.style.color = textColors[index];
    $('.codrops-demos button').css("background", btnColors[index]);
   
    
}
window.addEventListener("resize", onResize.bind(null));
document.getElementById("firstImg").addEventListener('load', (event) => {
    onResize();
});
onResize();

function GotoJP() {
    //Switch to JP page
    window.location.href = 'https://lamybooksjp.netlify.app'; 
}
