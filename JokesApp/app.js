const jokes = [
  "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht.",
  "Ich habe meiner Katze beigebracht, Befehle auf Deutsch zu befolgen. Sie ignoriert mich jetzt in zwei Sprachen.",
  "Ein Mann geht zum Arzt: 'Doktor, ich fühle mich unsichtbar.' Arzt: „Der Nächste bitte!",
  "Warum lügen Skelette nie? Weil sie keine Leichen im Keller haben.",
  "Was ist der Unterschied zwischen dem deutschen Nationalteam und einem Teebeutel? Der Teebeutel bleibt länger im Cup.",
  "Ein Rennradfahrer kommt in die Apotheke: 'Haben Sie etwas gegen Sattelbeschwerden?' Apotheker: „Ja – ein Auto.",
];

function generateRandomIndex(count) {
  let randomIndex = Math.floor(Math.random() * count);
  return randomIndex;
}

function getJoke(jokeList) {
  let index = generateRandomIndex(jokeList.length);
  let randomJoke = jokeList[index];
  return randomJoke;
}

function rateJoke(jokeText) {
  let jokeLength = jokeText.length;

  if (jokeLength < 40) {
    return "Kurz und knackig";
  } else if (jokeLength > 40 && jokeLength < 75) {
    return "Perfekte Länge";
  } else {
    return "Puh, das war ein langer Witz!";
  }
}

function showJoke(jokeList) {
  let joke = getJoke(jokeList);
  let rating = rateJoke(joke);

  console.log("=== Witz des Tages ===");
  console.log(joke);
  console.log("Bewertung: " + rating);
  console.log("Zeichenanzahl: " + joke.length);

  return joke;
}

showJoke(jokes);
