function displayRowInformation(row) {
    // Extract information from the clicked row
   // Find the <td> element containing the image and title
var tdElement = row.find('td:first-child');

// Find the <p> tag within the <td> element and get its text
var titre = tdElement.find('p').text();

// Now, title will contain the text "IAM"
 // Get the alt attribute of the image
    var dateRéception = row.find('td:eq(1)').text(); // Get the text of the second td element
    var datePublication = row.find('td:eq(2)').text(); // Get the text of the third td element
    var dateDernièreMiseàJour = row.find('td:eq(3)').text(); 
    var Description= row.find('td:eq(4)').text();
    var categorie = row.find('td:eq(5)').text(); // Get the text of the fourth td element
    var theme = row.find('td:eq(6)').text(); // Get the text of the fifth td element
    var couverture = row.find('td:eq(7)').text(); // Get the text of the sixth td element
    var resolutionSpatial = row.find('td:eq(8)').text(); // Get the text of the seventh td element
    var resume = row.find('td:eq(9)').text(); // Get the text of the eighth td element
  
    // Display information in the modal
    $('#labelTitre').text(titre).css('color', '#3C91E6');
    $('#labelDateRéception').text(dateRéception).css('color', '#3C91E6');
    $('#labelDatePublication').text(datePublication).css('color', '#3C91E6');
    $('#labelDateDernièreMiseàJour').text(dateDernièreMiseàJour).css('color', '#3C91E6');
    $('#labelDecription').text(Description).css('color', '#3C91E6');
    $('#labelCategorie').text(categorie).css('color', '#3C91E6');
    $('#labelTheme').text(theme).css('color', '#3C91E6');
    $('#labelCouverture').text(couverture).css('color', '#3C91E6');
    $('#labelResolutionSpatial').text(resolutionSpatial).css('color', '#3C91E6');
    $('#labelResume').text(resume).css('color', '#3C91E6');
    
  
    // Show the modal
  //  $('#exampleModal').modal('show');
  }

  $("table").on("click", "span.show-button", function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Get the closest row to the clicked anchor tag
    var row = $(this).closest("tr");
    // Call the displayRowInformation function with the clicked row as argument
    displayRowInformation(row);
});

function populateUpdateModal(editButton) {
    // Get the closest row to the clicked edit button
    var row = $(editButton).closest("tr");
    
    // Extract information from the row
    var titre = row.find("td:eq(0) p").text();
    var dateRéception = row.find("td:eq(1)").text();
    var datePublication = row.find("td:eq(2)").text();
    var dateDernièreMiseàJour = row.find("td:eq(3)").text();
    var Description = row.find("td:eq(4)").text();
    var categorie = row.find("td:eq(5)").text();
    var theme = row.find("td:eq(6)").text();
    var couverture = row.find("td:eq(7)").text();
    var resolutionSpatial = row.find("td:eq(8)").text();
    var resume = row.find("td:eq(9)").text();
    
    function formatDate(dateStr) {
        var parts = dateStr.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    // Log the extracted values for debugging
    console.log("Titre:", titre);
    console.log("Date Réception:", dateRéception);
    console.log("Date Publication:", datePublication);
    console.log("Date DernièrMiseàJour:", dateDernièrMiseàJour);
    console.log("Date Description:", Description);
    console.log("Categorie:", categorie);
    console.log("Theme:", theme);
    
    console.log("Resolution Spatial:", resolutionSpatial);
    console.log("Resume:", resume);
    
    // Populate input fields in the modal with extracted information
    $('#inputTitreUpdate').val(titre);
    $('#inputDateRéceptionUpdate').val(formatDate(dateRéception));
    $('#inputDatePublicationUpdate').val(formatDate(datePublication));
    $('#inputDateDérnierMiseàJourUpdate').val(formatDate(dateDernièreMiseàJour));
    $('#inputDescriptionUpdate').val(formatDate(Description));
    $('#inputCategorieUpdate').val(categorie);
    $('#inputThemeUpdate').val(theme);
    $('#inputCouvertureUpdate').val(couverture);
    $('#inputResolutionSpatialUpdate').val(resolutionSpatial);
    $('#inputResumeUpdate').val(resume);
}



// Function to toggle visibility of search input field
document.getElementById("filterIcon").addEventListener("click", function() {
    var searchInput = document.getElementById("searchInput");
    if (searchInput.classList.contains("hidden")) {
        searchInput.classList.remove("hidden");
    } else {
        searchInput.classList.add("hidden");
        // Clear search input and reset table rows when hiding the input
        searchInput.value = "";
        filterTable();
    }
});

// Function to filter table rows based on search input
function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector('.order table');
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

// Add event listener to search input field
document.getElementById("searchInput").addEventListener("input", filterTable);


// JavaScript to handle dropdown with checkboxes
$(document).ready(function() {
    // Toggle dropdown
    $('.dropdown-checkbox').on('click', function(event) {
        $(this).toggleClass('show');
        event.stopPropagation();
    });

    // Close dropdown when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown-checkbox').length) {
            $('.dropdown-checkbox').removeClass('show');
        }
    });

    // Handle checkbox selection
    $('.dropdown-menu input[type="checkbox"]').on('change', function() {
        var selectedOptions = [];
        $('.dropdown-menu input[type="checkbox"]:checked').each(function() {
            selectedOptions.push($(this).val());
        });
        $('#inputCouvertureUpdate').val(selectedOptions.join(', '));
    });
});


(function($) {
    var CheckboxDropdown = function(el) {
        // JavaScript code for handling the dropdown checkboxes
        // You can place the provided JavaScript code here
    };

    // Initialize the checkbox dropdowns
    var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
    for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
        new CheckboxDropdown(checkboxesDropdowns[i]);
    }
})(jQuery);

function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

function filterCheckboxes() {
    var input, filter, ul, li, checkboxes, i;
    input = document.getElementById("dropdownFilter");
    filter = input.value.toUpperCase();
    checkboxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        var label = checkbox.parentElement;
        if (label.textContent.toUpperCase().indexOf(filter) > -1) {
            label.style.display = "";
        } else {
            label.style.display = "none";
        }
    });
}

function getDateFromString(dateString) {
    // Split the date string into day, month, and year parts
    var parts = dateString.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Create a new Date object with the extracted parts
    return new Date(year, month - 1, day); // Month is zero-based in Date constructor
}

function setDateValues() {
    var dateRéceptionInput = document.getElementById("inputDateRéceptionUpdate");
    var datePublicationInput = document.getElementById("inputDatePublicationUpdate");
    var dateDernièrMiseàJourInput = document.getElementById("inputDateDernièrMiseàJourUpdate");

    // Get the date strings from the table cells
    var dateRéceptionString = document.getElementById("dateRéceptionCell").textContent.trim();
    var datePublicationString = document.getElementById("datePublicationCell").textContent.trim();
    var dateDernièrMiseàJourString = document.getElementById("dateDernièrMiseàJourCell").textContent.trim();

    // Convert the date strings to Date objects
    var dateRéception = getDateFromString(dateRéceptionString);
    var datePublication = getDateFromString(datePublicationString);
    var dateDernièreMiseàJour = getDateFromString(dateDernièrMiseàJourString);

    // Format the dates into yyyy-mm-dd format (required by input[type="date"])
    var formattedDateRéception = dateRéception.toISOString().split('T')[0];
    var formattedDatePublication = datePublication.toISOString().split('T')[0];
    var formattedDateDernièrMiseàJour = dateDernièreMiseàJour.toISOString().split('T')[0];

    // Set the formatted dates to the input fields
    dateAcquisitionInput.value = formattedDateAcquisition;
    datePublicationInput.value = formattedDatePublication;
    dateDernièrMiseàJourInput.value = formattedDateDernièrMiseàJour;
}

// Call the function to set the date values when needed
setDateValues();




    


    

    


