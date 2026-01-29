document.getElementById("yesBtn").onclick = () => {
    let bursts = 5;
    const interval = setInterval(() => {
        bursts--;
        spawnConfetti();
        if (bursts === 0) clearInterval(interval);
    }, 300);
};

function spawnConfetti() {
    const colors = ["#D95A3F", "#f472b6", "#fb7185", "#facc15", "#ffffff"];

    for (let i = 0; i < 80; i++) {
        const c = document.createElement("div");
        const size = Math.random() * 8 + 4;

        c.innerText = "💖";
        c.style.fontSize = size + "px";
        c.style.background = "none";
        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-10px";
        c.style.width = size + "px";
        c.style.height = size + "px";
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.opacity = Math.random();
        c.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
        c.style.pointerEvents = "none";

        const duration = Math.random() * 3 + 2;
        const drift = (Math.random() - 0.5) * 250;
        const rotation = Math.random() * 720;

        c.animate(
            [
                { transform: "translate(0,0) rotate(0deg)" },
                { transform: `translate(${drift}px,100vh) rotate(${rotation}deg)` }
            ],
            { duration: duration * 1000, easing: "ease-out", fill: "forwards" }
        );

        document.body.appendChild(c);
        setTimeout(() => c.remove(), duration * 1000);
    }
}

/* Floating hearts generator */
const hearts = document.getElementById("hearts");
setInterval(() => {
    const h = document.createElement("div");
    h.innerText = "❤️";
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 20 + 10 + "px";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 8000);
}, 500);

/* Typewriter letter */
const text = `From the moment you walked into my life, everything changed. You are my favorite person and my greatest adventure.
                <br>
                I choose you today, tomorrow, and always.`;
let i = 0;
function type() {
    if (i < text.length) {
        // Check if we're at a <br> tag
        if (text.substr(i, 4) === '<br>') {
            document.getElementById("letter").innerHTML += '<br>';
            i += 4; // Skip the entire <br> tag
        } else {
            document.getElementById("letter").innerHTML += text.charAt(i);
            i++;
        }
        setTimeout(type, 40);
    }
}
type();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-10");
        }
    });
});
document
    .querySelectorAll(".timeline-item")
    .forEach((el) => observer.observe(el));