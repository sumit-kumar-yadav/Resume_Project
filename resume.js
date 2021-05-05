            
            // Smooth Scroll

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
                     // Or
        // var targetSectionID = this.getAttribute('href');
        // console.log(targetSectionID);
        // var targetSection = document.querySelector(targetSectionID);
        // console.log(targetSection);


        
        //    interval = setInterval(scrollVertically, 20, targetSection);
                    // Or
        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}








            // Auto Fill Skill Bars

var progressBars = document.querySelectorAll('.skill-progress > div');

window.addEventListener('scroll', checkScroll);

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

// for (var bar of progressBars) {
//     initialiseBar(bar);
// }


function fillBar(bar){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 10);
}

function checkScroll(){
    for(let bar of progressBars){
        let coordinates = bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited") == "false") && coordinates.top <= window.innerHeight){
            bar.setAttribute("data-visited", true);
            console.log('bar visible');
            fillBar(bar);
        }
        else if(coordinates.top > window.innerHeight){
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }
    }
}