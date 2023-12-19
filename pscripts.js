function scrollToClass(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: 'smooth' });
    }
}

function ToggleHam(this) {
    let mymenu = document.getElementById('mymenu');
    if (mymenu.className === 'menu') {
        mymenu.className += 'menu-active'
    }
    else{
        mymenu.className = "menu";
    }
}
