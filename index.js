
document.addEventListener('DOMContentLoaded', () => {
    const copyMap = {
        "discord": "BuildsPixled#5583",
        "email": "nawarabtahi@gmail.com"
    };

    // Create and style the notification div
    const notify = document.createElement("div");
    notify.id = "copy-notification";
    Object.assign(notify.style, {
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(36, 41, 46, 0.95)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        fontFamily: "Rubik, sans-serif",
        fontSize: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: "9999",
        opacity: "0",
        transition: "opacity 0.3s ease",
        display: "none"
    });
    document.body.appendChild(notify);

    // Show custom notification
    function showNotification(message) {
        notify.textContent = message;
        notify.style.display = "block";
        setTimeout(() => {
            notify.style.opacity = "1";
        }, 10);

        setTimeout(() => {
            notify.style.opacity = "0";
            setTimeout(() => {
                notify.style.display = "none";
            }, 300);
        }, 2000);
    }

    // Attach click events
    Object.keys(copyMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', e => {
                e.preventDefault();
                const text = copyMap[id];
                navigator.clipboard.writeText(text)
                    .then(() => showNotification(`${text} copied!`))
                    .catch(err => console.error("Copy failed", err));
            });
        }
    });
});

