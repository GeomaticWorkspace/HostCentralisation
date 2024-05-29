function displayRowInformation(row) {
    // Extract information from the clicked row
    var imgSrc = row.find('img').attr('src');
    var nom = row.find('p').text();
    var adresse = row.find('td:nth-child(2)').text();
    var email = row.find('td:nth-child(3)').text();
    var type = row.find('td:nth-child(4)').text();
    var categorie = row.find('td:nth-child(5)').text();
    var solutionArcGIS = row.find('td:nth-child(6)').text();
    var contactClient = row.find('td:nth-child(7)').text();
    var nomContact = row.find('td:nth-child(8)').text();

    // Populate the detail modal with the extracted information
    $('#detailNom').text(nom).css('color', '#3C91E6');
    $('#detailAdresse').text(adresse).css('color', '#3C91E6');
    $('#detailEmail').text(email).css('color', '#3C91E6');
    $('#detailType').text(type).css('color', '#3C91E6');
    $('#detailCategorie').text(categorie).css('color', '#3C91E6');
    $('#detailSolution').text(solutionArcGIS).css('color', '#3C91E6');
    $('#detailContactClient').text(contactClient).css('color', '#3C91E6');
    $('#detailNomContact').text(nomContact).css('color', '#3C91E6');

    // Show the detail modal
   // $('#ModalDetailClient').modal('show');
}

// Add event listener for clicks on table rows
$(document).on('click', 'tbody tr', function() {
    var row = $(this);
    displayRowInformation(row);
});


function populateUpdateClientModal(row) {
    // Extract information from the clicked row
    var nom = row.find('p').text();
    var adresse = row.find('td:nth-child(2)').text();
    var email = row.find('td:nth-child(3)').text();
    var type = row.find('td:nth-child(4)').text();
    var categorie = row.find('td:nth-child(5)').text();
    var solutionArcGIS = row.find('td:nth-child(6)').text();
    var contactClient = row.find('td:nth-child(7)').text();
    var nomContact = row.find('td:nth-child(8)').text();

    // Populate the update client modal with the extracted information
    $('#updateNom').val(nom);
    $('#updateAdresse').val(adresse);
    $('#updateEmail').val(email);
    $('#updateType').val(type);
    $('#updateCategorie').val(categorie);
    $('#updateSolution').val(solutionArcGIS);
    $('#updateContactClient').val(contactClient);
    $('#updateNomContact').val(nomContact);

    // Store the current row for later use
    $('#updateClientForm').data('currentRow', row);

    // Show the update client modal
   // $('#UpdateClientModal').modal('show');
}

// Add event listener for clicks on the edit button
$(document).on('click', '.edit-button', function() {
    var row = $(this).closest('tr');
    populateUpdateClientModal(row);
});