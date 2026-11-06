const quoteList = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Stay hungry, stay foolish. — Steve Jobs",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "Imagination is more important than knowledge. — Albert Einstein",
    "You miss 100% of the shots you don't take. — Wayne Gretzky",
    "Be the change that you wish to see in the world. — Mahatma Gandhi",
    "An unexamined life is not worth living. — Socrates",
    "Happiness depends upon ourselves. — Aristotle",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
    "The mind is everything. What you think you become. — Buddha",
    "Peace comes from within. Do not seek it without. — Buddha",
    "All that we are is the result of what we have thought. — Buddha"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    return quoteList[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("randomQuote").textContent = getRandomQuote();
});