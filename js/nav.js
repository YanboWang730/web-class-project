document.addEventListener('DOMContentLoaded', function(){
    const navHTML = `
    <nav>
        <a href="index.html">Home</a>
        <a href="quotes.html">Quotes</a>
        <a href="projects.html">Projects</a>
        <a href="machine.html">Game</a>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
})