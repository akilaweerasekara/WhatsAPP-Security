async function startScan() {
    try {
        // 1. Triggers the "Allow Camera" popup
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        video.srcObject = stream;

        // 2. Fake "Scanning" phase
        alert("Scanning facial features... Please stay still.");

        // 3. The Reveal after 3 seconds
        setTimeout(() => {
            document.getElementById('overlay').style.display = 'block';
            // Optional: add a "shutter" sound effect here!
        }, 3000);

    } catch (err) {
        alert("Permission denied. Face ID update failed.");
    }
}