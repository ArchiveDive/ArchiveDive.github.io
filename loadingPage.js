// if onloading is actually finished, decide if wait for the animiton to finished too
let waitForAnimation = true;

let isLoadingReady = false;
let isAnimationFinished = false;

function start() {
    // start play animation
    playIntroductionWords(playProcessBar);

    // register onload
    $().ready(onLoad);
}

// first animation 
function playIntroductionWords(onComplete) {
    const sustainTime = 2000;
    setTimeout(() => {
        $('#loading-page-startwords').fadeOut(3000, onComplete);
    }, sustainTime);
}

// second animation 
function playProcessBar() {
    const sustainTime = 2000;
    let processBar =  $('#loading-page-processbar');
    processBar.fadeIn(
        2000,() => processBar.fadeOut(sustainTime,onAnimationFinished));
}

function onLoad() {
    isLoadingReady = true;

    if (!waitForAnimation || isAnimationFinished) {
        endLoadingPage();
    }
}

function onAnimationFinished() {
    isAnimationFinished = true;

    if (isLoadingReady) {
        endLoadingPage();
    }
}

function endLoadingPage() {
    setTimeout(() => {
        $('#loading-page').hide();
        $('#overlay-root').fadeIn(1000);
        $('#scene-canvas').fadeIn(1000);
    }, 100);
}

start();