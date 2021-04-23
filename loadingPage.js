function start() {
    // start play animation
    playIntroduction();

    // register onload
    $().ready(onLoad);

    $('#loading-page-start-btn').click(endLoadingPage);

}

function playIntroduction() {
    $('#loading-page-header').fadeIn(4500);
}

function onLoad() {
    $('#loading-page-start-btn').show();
}

function endLoadingPage() {
    setTimeout(() => {
        $('#loading-page').hide();
        $('#overlay-root').fadeIn(1000);
        $('#scene-canvas').fadeIn(1000);
    }, 100);
}

start();