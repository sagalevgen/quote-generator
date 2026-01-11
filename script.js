const quotes = [
  {
    text: "Делай сегодня то, что другие не хотят — завтра будешь жить так, как другие не могут.",
    author: "Неизвестный",
  },
  { text: "Если тебе тяжело — значит ты растёшь.", author: "Неизвестный" },
  {
    text: "Не бойся медленно идти, бойся стоять на месте.",
    author: "Китайская мудрость",
  },
  { text: "Большие дела начинаются с маленьких шагов.", author: "Неизвестный" },
  {
    text: "Сначала ты создаёшь привычки, потом привычки создают тебя.",
    author: "Джон Драйден",
  },
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const btn = document.getElementById("btn");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = "“" + quotes[randomIndex].text + "”";
  quoteAuthor.textContent = "— " + quotes[randomIndex].author;
}

btn.addEventListener("click", getRandomQuote);

// чтобы сразу показывалась цитата при загрузке
getRandomQuote();
