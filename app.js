// insertAdjacentElement Example
function insertElement(){
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText(){
    const item = document.querySelector('li');

    item.insertAdjacentText('afterend', 'Hello');
}

// insertAdjacentHTML Example
function insertHTML(){
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example



insertAdjacentElement();
insertText();
insertHTML();

/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/