// insertAdjacentElement Example
function insertElement(){
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example


// insertAdjacentHTML Example


// insertBefore Example



insertAdjacentElement();

/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/