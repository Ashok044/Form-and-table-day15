const form = document.getElementById('userForm');
const tableBody = document.getElementById('tableData');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const address = formData.get('address');
  const pincode = formData.get('pincode');
  const gender = formData.querySelector('input[name="gender"]:checked').value;

  // Validate food selection (at least 2 options)
  let selectedFood = [];
  for (const checkbox of form.querySelectorAll('input[name="food[]"]:checked')) {
    selectedFood.push(checkbox.value);
  }
  if (selectedFood.length < 2) {
    alert('Please select at least 2 food options.');
    return;
  }

  const state = formData.get('state');
  const country = formData.get('country');

  // Create table row element
  const tableRow = document.createElement('tr');

  // Create table cells and add data
  const cell1 = document.createElement('td');
  cell1.textContent = firstName;
  tableRow.appendChild(cell1);

  const cell2 = document.createElement('td');
  cell2.textContent = lastName;
  tableRow.appendChild(cell2);

  const cell3 = document.createElement('td');
  cell3.textContent = address;
  tableRow.appendChild(cell3);

  const cell4 = document.createElement('td');
  cell4.textContent = pincode;
  tableRow.appendChild(cell4);

  const cell5 = document.createElement('td');
  cell5.textContent = gender;
  tableRow.appendChild(cell5);

  const cell6 = document.createElement('td');
  cell6.textContent = selectedFood.join(', ');  // Join selected food options
  tableRow.appendChild(cell6);

  const cell7 = document.createElement('td');
  cell7.textContent = state;
  tableRow.appendChild(cell7);

  const cell8 = document.createElement('td');
  cell8.textContent = country;
  tableRow.appendChild(cell8);

  // Append the table row to the table body
  tableBody.appendChild(tableRow);

  // Clear the form fields
  form.reset();
});
