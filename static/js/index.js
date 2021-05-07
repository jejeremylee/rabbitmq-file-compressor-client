let fileSelected = false;

function allowDrop(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    let dt = e.dataTransfer;
    let files = dt.files;

    let input = document.getElementById('upload-input');
    input.files = files;

    handleFile(files[0].name);

}

function handleFile(filename){
     addUploadButton();
     fileSelected = true;
     showFileName(filename);
     console.log("File selected: "+filename)
}

function addUploadButton(){
    if(fileSelected==false){
        const uploadButton = document.createElement("button");
        uploadButton.textContent = 'Upload file';
        uploadButton.type='submit';
        uploadButton.id = 'upload-button';
        uploadButton.addEventListener("click", uploadFile)
        const buttonContainer = document.getElementById("buttons-container");
        buttonContainer.appendChild(uploadButton);
    }
}

function showFileName(filename){
    if(fileSelected==true & filename != null) {
        const fileSpan = "<span id='filename'>" + filename + "</span>";
        const targetElement = document.getElementById('filename');
        const parentTarget = targetElement.parentNode;
        parentTarget.removeChild(targetElement);
        parentTarget.innerHTML = fileSpan + parentTarget.innerHTML;
    }
}

function selectFile() {
    console.log("Selecting file");
    document.getElementById("upload-input").click();
    document.getElementById('upload-input').onchange = function () {
        let filename=this.files[0].name;
        handleFile(filename);
    };
};

function uploadFile(){
    console.log("Uploading file ....");
}