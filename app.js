document.addEventListener('DOMContentLoaded', function () {
    // Inicijalizacija datepickera
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true
    });

    const userForm = document.getElementById('userForm');
    const bookForm = document.getElementById('bookForm');
    const userList = document.getElementById('userList');
    const bookList = document.getElementById('bookList');
 
    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        //Dobijanje  iz forme
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const membershipStart = document.getElementById('membershipStart').value;
        const membershipEnd = document.getElementById('membershipEnd').value;

        // Kreiranje novog korisnika
        const newUser = {
            id: new Date().getTime(),
            name: name,
            lastName: lastName,
            gender: gender,
            membershipStart: membershipStart,
            membershipEnd: membershipEnd,
            
        };

        // Dodavanje korisnika u listu
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `${newUser.id} - ${newUser.name} ${newUser.lastName}
                       <span class="badge badge-primary badge-pill view-user" 
                             data-id="${newUser.id}" 
                             data-name="${newUser.name}" 
                             data-lastname="${newUser.lastName}" 
                             data-gender="${newUser.gender}" 
                             data-membershipstart="${newUser.membershipStart}" 
                             data-membershipend="${newUser.membershipEnd}">&#128065;</span>
                       <span class="badge badge-warning badge-pill edit-user" data-id="${newUser.id}">&#9998;</span>
                       <span class="badge badge-danger badge-pill delete-user" data-id="${newUser.id}">&#128465;</span>`;
        userList.appendChild(listItem);

        // Zatvaranje moda nakon dodavanja korisnika
        $('#addUserModal').modal('hide');

        // Resetovanje forme
        userForm.reset();

        // Opciono: Prikazivanje notifikacije o uspešnom dodavanju
        Swal.fire({
            icon: 'success',
            title: 'Korisnik uspešno dodat!',
            showConfirmButton: false,
            timer: 1500
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
       
    
        const bookForm = document.getElementById('bookForm');
        const bookList = document.getElementById('bookList');
    
        bookForm.addEventListener('submit', function (event) {
            event.preventDefault();
    
            // Dobijanje podataka iz forme za knjige
            const inventoryNumber = document.getElementById('inventoryNumber').value;
            const bookTitle = document.getElementById('bookTitle').value;
            const authorName = document.getElementById('authorName').value;
            const publishingYear = document.getElementById('publishingYear').value;
            const publishingPlace = document.getElementById('publishingPlace').value;
            const publisher = document.getElementById('publisher').value;
    
            // Kreiranje nove knjige
            const newBook = {
                inventoryNumber: inventoryNumber,
                bookTitle: bookTitle,
                authorName: authorName,
                publishingYear: publishingYear,
                publishingPlace: publishingPlace,
                publisher: publisher
            };
    
            // Dodavanje knjige u listu
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `<strong>${newBook.bookTitle}</strong> - ${newBook.authorName}, ${newBook.publishingYear}, ${newBook.publishingPlace}, ${newBook.publisher}
                <span class="badge badge-primary badge-pill view-book">&#128065;</span>
                <span class="badge badge-warning badge-pill edit-book">&#9998;</span>
                <span class="badge badge-danger badge-pill delete-book">&#128465;</span>`;
            bookList.appendChild(listItem);
    
            // Zatvaranje moda nakon dodavanja knjige
            $('#addBookModal').modal('hide');
    
            // Resetovanje forme
            bookForm.reset();
    
            // Opciono: Prikazivanje notifikacije o uspešnom dodavanju
            Swal.fire({
                icon: 'success',
                title: 'Knjiga uspešno dodata!',
                showConfirmButton: false,
                timer: 1500
            });
        });
    
        // Dodajte event listener za dugme "Čitaj" (prikazivanje podataka o knjizi)
bookList.addEventListener('click', function (event) {
    if (event.target.classList.contains('view-book')) {
        const bookId = event.target.dataset.id;
        const inventoryNumber = event.target.dataset.inventorynumber;
        const title = event.target.dataset.title;
        const author = event.target.dataset.author;
        const publishYear = event.target.dataset.publishyear;
        const publishPlace = event.target.dataset.publishplace;
        const publisher = event.target.dataset.publisher;

        // Prikazivanje podataka o knjizi (modal)
        Swal.fire({
            title: `Podaci o knjizi ${bookId}`,
            html: `
                <p><strong>Inventarni broj:</strong> ${inventoryNumber}</p>
                <p><strong>Naziv knjige:</strong> ${title}</p>
                <p><strong>Ime autora:</strong> ${author}</p>
                <p><strong>Godina izdavanja:</strong> ${publishYear}</p>
                <p><strong>Mjesto izdavanja:</strong> ${publishPlace}</p>
                <p><strong>Izdavač:</strong> ${publisher}</p>
                <!-- Dodati ostale podatke o knjizi -->
            `,
            icon: 'info',
        });
    }
});

// Dodajte event listener za dugme "Uredi" (otvaranje moda za uređivanje knjige)
bookList.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-book')) {
        const bookId = event.target.dataset.id;

        // Dobijanje roditeljskog elementa
        const listItem = event.target.closest('.list-group-item');
        
        // Provera da li smo pronašli roditeljski element
        if (listItem) {
            // Dohvatanje podataka iz roditeljskog elementa
            const inventoryNumber = listItem.dataset.inventorynumber;
            const title = listItem.dataset.title;
            const author = listItem.dataset.author;
            const publishYear = listItem.dataset.publishyear;
            const publishPlace = listItem.dataset.publishplace;
            const publisher = listItem.dataset.publisher;

            // Postavljanje podataka u modal za uređivanje
            document.getElementById('viewEditInventoryNumber').value = inventoryNumber;
            document.getElementById('viewEditTitle').value = title;
            document.getElementById('viewEditAuthor').value = author;
            document.getElementById('viewEditPublishYear').value = publishYear;
            document.getElementById('viewEditPublishPlace').value = publishPlace;
            document.getElementById('viewEditPublisher').value = publisher;

            // Otvaranje moda za uređivanje
            $('#viewEditBookModal').modal('show');
        }
    }
});

// Dodajte event listener za dugme "Obriši" (prikazivanje modalnog prozora za potvrdu brisanja knjige)
bookList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-book')) {
        const bookId = event.target.dataset.id;

        // Prikazivanje modalnog prozora za potvrdu brisanja
        Swal.fire({
            title: 'Jeste li sigurni?',
            text: 'Obrisani podaci se ne mogu povratiti!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Da, obriši!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Implementirati logiku za brisanje knjige
                // Ovo može uključivati ažuriranje UI-a, slanje AJAX zahteva itd.
                
                // Uklanjanje knjige iz liste
                const listItem = event.target.closest('.list-group-item');
                if (listItem) {
                    listItem.remove();
                }

                // Prikazivanje poruke o uspešnom brisanju
                Swal.fire({
                    icon: 'success',
                    title: 'Knjiga uspešno obrisana!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
});

    });






    
  
   
});
