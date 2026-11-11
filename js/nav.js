// 初始化主题：优先读 localStorage，否则跟随系统
(function initTheme(){
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', function(){
    const navHTML = `
    <nav>
        <a href="index.html">Home</a>
        <a href="quotes.html">Quotes</a>
        <a href="projects.html">Projects</a>
        <a href="machine.html">Game</a>
        <button class="theme-toggle" onclick="toggleTheme()" id="themeBtn">🌙</button>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    updateThemeIcon();
});

function toggleTheme(){
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon();
}

function updateThemeIcon(){
    const btn = document.getElementById('themeBtn');
    if(!btn) return;
    const theme = document.documentElement.getAttribute('data-theme');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}
