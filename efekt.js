
function kalpEfekti() {
    const sekiller = ['💜', '💚', '🌸', '🌺', '💗'];
    for (let i = 0; i < 20; i++) {
        const kalp = document.createElement("div");
        kalp.className = "kalp-u";
        kalp.innerText = sekiller[Math.floor(Math.random() * sekiller.length)];
        kalp.style.left = Math.random() * 100 + "vw";
        kalp.style.animationDuration = (4 + Math.random() * 3) + "s";
        document.body.appendChild(kalp);
        setTimeout(() => kalp.remove(), 7000);
    }
}
