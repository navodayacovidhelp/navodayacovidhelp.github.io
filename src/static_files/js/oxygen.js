document.addEventListener('DOMContentLoaded', function () {
  // Load data from JSON file
  fetch('/src/static_files/data/oxygen-data.json')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#oxygen_table tbody');
      data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.organisation}</td>
          <td>${item.service}</td>
          <td>${item.place}</td>
          <td>${item.contact_person}</td>
          <td><a href="tel:${item.mobile}" style="text-decoration: none;">${item.mobile}</a></td>
          <td>${item.last_updated_date}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error loading data:', error));

  // Search function
  document.getElementById('myInput').addEventListener('keyup', function () {
    let filter = this.value.toUpperCase();
    let myTable = document.getElementById('oxygen_table');
    let tr = myTable.getElementsByTagName('tr');

    for (var i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[2];
      if (td) {
        let textValue = td.textContent || td.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });
});
