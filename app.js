document.addEventListener('DOMContentLoaded', function () {
    // Simulacija podataka (možete zamijeniti sa stvarnim podacima)
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];

    const books = [
        { title: 'Book 1', inventoryNumber: 'INV001' },
        { title: 'Book 2', inventoryNumber: 'INV002' }
    ];

    // Funkcija za popunjavanje liste korisnika
    function populateUserList() {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `${user.id} - ${user.name}`;
            userList.appendChild(listItem);
        });
    }

    // Funkcija za popunjavanje liste knjiga
    function populateBookList() {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';
        books.forEach(book => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `${book.title} - ${book.inventoryNumber}`;
            bookList.appendChild(listItem);
        });
    }

    // Pokretanje funkcija za inicijalno popunjavanje liste korisnika i knjiga
    populateUserList();
    populateBookList();

    // Dodavanje event listenera za otvaranje modala za dodavanje korisnika i knjiga
    const addUserButton = document.querySelector('#addUserModal button');
    const addBookButton = document.querySelector('#addBookModal button');

    addUserButton.addEventListener('click', function () {
        // Logika za otvaranje modala za dodavanje korisnika
    });

    addBookButton.addEventListener('click', function () {
        // Logika za otvaranje modala za dodavanje knjige
    });
});
