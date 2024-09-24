function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSentenceFromText (text) {
  return getRandomArrayElement(text.split('.').trim());
}

export { getRandomArrayElement, getRandomInteger, getRandomSentenceFromText };
