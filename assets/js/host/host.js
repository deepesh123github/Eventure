document.getElementById('fileInput').addEventListener('change', handleFiles);
document.getElementById('dropZone').addEventListener('dragover', (e) => {
    e.preventDefault();
});
document.getElementById('dropZone').addEventListener('drop', (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer);
});

function handleFiles(event) {
    const files = event.files || event.target.files;
    for (const file of files) {
        uploadFile(file);
    }
}

function uploadFile(file) {
    const uploadList = document.getElementById('uploadList');
    const listItem = document.createElement('div');
    listItem.classList.add('mt-2');
    listItem.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <span>${file.name}</span>
            <small class="text-muted">0%</small>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 0%"></div>
        </div>
    `;
    uploadList.appendChild(listItem);
    
    simulateUpload(file, listItem);
}

function simulateUpload(file, listItem) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        listItem.querySelector('.progress-bar').style.width = `${progress}%`;
        listItem.querySelector('small').innerText = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            listItem.querySelector('.progress-bar').classList.add('bg-success');
        }
    }, 300);
}