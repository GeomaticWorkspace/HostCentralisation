
   


   
    $(document).ready(function() {
        // Function to handle click event on table rows
        $('table tbody tr').click(function() {
            // Get data from the clicked row
            var projet = $(this).find('td:eq(0) p').text().trim();
            
            var dateDebut = $(this).find('td:eq(1)').text().trim();
            var dateFin = $(this).find('td:eq(2)').text().trim();
            var duree = $(this).find('td:eq(3)').text().trim();
            var description = $(this).find('td:eq(4)').text().trim();
            var status = $(this).find('td:eq(5)').text().trim();
            
            // Populate modal with the data
            $('#labelProjet').text(projet);
            $('#labelDateDebut').text(dateDebut);
            $('#labelDateFin').text(dateFin);
            $('#labelDuree').text(duree);
            $('#labelDescription').text(description);
            $('#labelStatus').text(status);
            
            // Show the modal
          
        });
    });
    
// Assume selectedFiles is an array containing the names of selected files
var selectedFiles = ["file1.pdf", "file2.doc", "file3.docx"];

// Get the container element
var fileSelectionContainer = document.getElementById("labelFileSelection");

// Clear any existing content
fileSelectionContainer.innerHTML = "";

// Loop through the selectedFiles array and create list items
selectedFiles.forEach(function(fileName) {
    var listItem = document.createElement("li");
    listItem.textContent = fileName;
    fileSelectionContainer.appendChild(listItem);
});


function populateUpdateModal(editButton) {
    // Get the closest row to the clicked edit button
    var row = $(editButton).closest("tr");
    
    // Extract information from the row
    var projet = row.find("td:eq(0) p").text(); // Project name is inside a <p> tag within the first <td>
    var dateDebut = row.find("td:eq(1)").text();
    var dateFin = row.find("td:eq(2)").text();
    var typeCollaboration = row.find("td:eq(3)").text();
    var duree = row.find("td:eq(4)").text();
    var description = row.find("td:eq(5)").text();
    var status = row.find("td:eq(6) span").text(); // Assuming the status is inside a <span> tag within the seventh <td>
    
    // Helper function to format date
    function formatDate(dateStr) {
        var parts = dateStr.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}`; // Format as yyyy-mm-dd
    }

    // Log the extracted values for debugging
    console.log("Projet:", projet);
    console.log("Date de Début:", dateDebut);
    console.log("Date de Fin:", dateFin);
    console.log("Type de collaboration:", typeCollaboration);
    console.log("Durée (Mois):", duree);
    console.log("Description:", description);
    console.log("Statut:", status);
    
    // Populate input fields in the modal with extracted information
    $('#inputProjetUpdate').val(projet);
    $('#inputDateDebutUpdate').val(formatDate(dateDebut));
    $('#inputDateFinUpdate').val(formatDate(dateFin));
    $('#inputTypeCollaborationUpdate').val(typeCollaboration);
    $('#inputDureeUpdate').val(duree);
    $('#inputDescriptionUpdate').val(description);
    $('#inputStatusUpdate').val(status);
}

// Event listener for edit button clicks
$(document).on("click", ".edit-button", function() {
    populateUpdateModal(this);
   // $('#ModalUpdateProjet').modal('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const dataButtons = document.querySelectorAll('.data-button');

    dataButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the project name from the clicked row in projetinfo
            const projectRow = button.closest('tr');
            const projectName = projectRow.querySelector('td p').textContent.trim();

            // Get all rows from donneInfo table
            const donneInfoRows = document.querySelectorAll('#donneInfo tbody tr');

            // Find the matching row in donneInfo
            let matchingRow;
            donneInfoRows.forEach(row => {
                const dataName = row.querySelector('td p').textContent.trim();
                if (dataName === projectName) {
                    matchingRow = row;
                }
            });

            // Populate and show the modal with the matching row information
            if (matchingRow) {
                const modalContent = document.getElementById('modalDataContent');
                modalContent.innerHTML = ''; // Clear previous content

                // Labels array to map to the corresponding cells
                const labels = [
                    'Titre',
                    'Date Réception',
                    'Date de Publication',
                    'Date Derniers Mise à Jour',
                    'Catégorie',
                    'Thème',
                    'Couverture',
                    'Résolution Spatial',
                    'Résumé'
                ];

                // Populate modal with label-value pairs
                for (let i = 0; i < labels.length; i++) {
                    const label = labels[i];
                    const value = matchingRow.cells[i].textContent.trim();

                    const formGroup = document.createElement('div');
                    formGroup.classList.add('form-group', 'row');

                    const labelElement = document.createElement('label');
                    labelElement.classList.add('col-sm-6');
                    labelElement.textContent = label + ':';
                    formGroup.appendChild(labelElement);

                    const valueElement = document.createElement('p');
                    valueElement.classList.add('col-sm-2');
                    valueElement.id = 'modal' + label.replace(/\s+/g, ''); // Remove spaces for ID
                    valueElement.textContent = value;
                    formGroup.appendChild(valueElement);

                    modalContent.appendChild(formGroup);
                }

                // Show the modal
              //  $('#dataModal').modal('show');
            } else {
               // alert('No matching data found!');
            }
            
        });
    });
});





    


    

    


