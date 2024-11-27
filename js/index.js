document.getElementById('bookmaker').innerHTML = "Bookmarker";
var siteName = document.getElementById('sitename');
var siteUrl = document.getElementById('siteurl');
var allData = [];

// Local Storage
if (localStorage.getItem('WebsitesData') !== null) {
    allData = JSON.parse(localStorage.getItem('WebsitesData'));
    displayData();
}

function addWebsite() {
    if (!validateURL(siteUrl.value)) {
        alert('Please enter a valid URL.');
        return;
    }

    var website = {
        name: siteName.value,
        url: siteUrl.value
    };
    allData.push(website);
    localStorage.setItem('WebsitesData', JSON.stringify(allData));
    console.log(allData);
    resetForm();
    displaylastIndex();
}

function validateURL(url) {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w-]*)*\/?$/;
    return regex.test(url);
}

function resetForm() {
    siteName.value = null;
    siteUrl.value = null;
}

function deleteindex(itemindex) {
    allData.splice(itemindex, 1);
    displayData();
    localStorage.setItem('WebsitesData', JSON.stringify(allData));
}

function displayData() {
    var cartonaData = '';
    for (var i = 0; i < allData.length; i++) {
        cartonaData += `   <tr class="text-center">
    <td>${i + 1}</td>
    <td>${allData[i].name}</td>
    <td><a href="${allData[i].url}" target="_blank">${allData[i].url}</a></td>
    <td><button onclick="deleteindex(${i})" class="btn btn-submit color-red delete">Delete<i class="fa-solid fa-trash-can"></i></button></td>
      </tr>`;
        document.getElementById('rowData').innerHTML = cartonaData;

    }
}

function displaylastIndex() {
    var lastIndex = allData.length - 1;
    var cartonaData = `
    <tr class="text-center">
        <td>${lastIndex + 1}</td>
        <td>${allData[lastIndex].name}</td>
        <td><a href="${allData[lastIndex].url}" target="_blank">${allData[lastIndex].url}</a></td>
        <td><button onclick="deleteindex(${lastIndex})" class="btn btn-submit color-red delete">Delete<i class="fa-solid fa-trash-can"></i></button></td>
    </tr>`;
    document.getElementById('rowData').innerHTML += cartonaData;
}
