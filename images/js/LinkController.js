function Yukimin(){

    $('#Ibook').attr('src','YukiminBook.html');
    CleanLinks();
    $('#PGclass').attr('class', 'YukiminBook');
    $('#Yukiminlink').attr('class', 'current-page');
}

function Cooking(){

    $('#Ibook').attr('src','CookBook.html'); 
    CleanLinks();
    $('#PGclass').attr('class', 'CookingBook');
    $('#Cookinglink').attr('class', 'current-page');
}

function Drinking(){
    $('#Ibook').attr('src','DrinkMenu.html');  
    CleanLinks();
    $('#PGclass').attr('class', 'DrinkBook');
    $('#Drinkinglink').attr('class', 'current-page');
}

function Timeline(){
    $('#Ibook').attr('src','PictureBook.html'); 
    CleanLinks();
    $('#PGclass').attr('class', 'PictureBook');
    $('#Timelinelink').attr('class', 'current-page');
}

function Credits (){

    $('#Ibook').attr('src','Credits.html');  
    CleanLinks();
    $('#PGclass').attr('class', 'CreditBook');
    $('#Creditslink').attr('class', 'current-page');
}

function CleanLinks(){
    $('#PGclass').removeAttr('class')
    $('#Yukiminlink').removeAttr('class')
    $('#Cookinglink').removeAttr('class')
    $('#Drinkinglink').removeAttr('class')
    $('#Timelinelink').removeAttr('class')
    $('#Creditslink').removeAttr('class')
}