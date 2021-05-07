var fileSelected = false;

function allowDrop(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    let dt = e.dataTransfer;
    let files = dt.files;

    let filepath = files[0];
    handleFile(filepath.name);
}

function handleFile(filename){
     addUploadButton(filename);
     fileSelected = true;
     showFileName(filename);
     console.log("File selected: "+filename)
}

function addUploadButton(filepath){
    if(fileSelected==false){
        var uploadButton = document.createElement("button");
        uploadButton.textContent = 'Upload file';
        uploadButton.type='button';
        uploadButton.id = 'upload-button';
        uploadButton.addEventListener("click", uploadFile)
        var buttonContainer = document.getElementById("buttons-container");
        buttonContainer.appendChild(uploadButton);
    }
}

function showFileName(filename){
    if(fileSelected==true & filename != null) {
        var fileSpan = "<span id='filename'>" + filename + "</span>";
        var targetElement = document.getElementById('filename');
        var parentTarget = targetElement.parentNode;
        parentTarget.removeChild(targetElement);
        parentTarget.innerHTML = fileSpan + parentTarget.innerHTML;
    }
}

function selectFile() {
    console.log("Selecting file");
    document.getElementById("upload-input").click();
    document.getElementById('upload-input').onchange = function () {
        let filename = this.value.replace(/^.*?([^\\\/]*)$/, '$1');
        handleFile(filename);
    };
};

function uploadFile(){
    console.log("Uploading file ....");
}