function createSelectBox(startYear, endYear) {
    let selectingBox = document.createElement('select');
    document.body.appendChild(selectingBox);
    selectingBox.id = "myElement";

    for (let i = startYear; i <= endYear; i++) {
        let optionElement = document.createElement('option'); 
        optionElement.textContent = `${i}`;
        optionElement.value = `${i}`;
        selectingBox.appendChild(optionElement); 
    }
}

createSelectBox(2000, 2021);



// ████████  ██████   ██ ███████  
// █        ██   ██  ██ ██       
// ████████  ███████  ██ █████    
// ██       ██  ██ ██       
// ████████  ██  ██ ██   