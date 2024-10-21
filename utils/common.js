function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomSentenceFromText (text) {
  return getRandomArrayElement(text.split('.'));
}

function getRandomInteger(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomArrayElement, getRandomInteger, getRandomSentenceFromText};
