window.onload = function () {
    document.getElementById('navbar').classList.add('nav-scrolled');
}

window.onscroll = function() {
    var y = window.scrollY;
    if ( y > 100 ) {
        document.getElementById('topbar').classList.add('topbar-scrolled');
        document.getElementById('navbar').classList.remove('nav-scrolled');
    } else {
        document.getElementById('topbar').classList.remove('topbar-scrolled');
        document.getElementById('navbar').classList.add('nav-scrolled');
    }
};