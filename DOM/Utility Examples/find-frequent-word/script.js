// Step 1: Get the text
const paragraph = document.querySelector("#text");
const text = paragraph.textContent.toLowerCase();

// Step 2: Convert to array of words (remove punctuation)
const words = text.replace(/[^\w\s]/g, "").split(/\s+/);

// Step 3: Count word frequency
const frequency = {};
words.forEach(word => {
  frequency[word] = (frequency[word] || 0) + 1;
});

// Step 4: Find the most frequent word
let maxWord = "";
let maxCount = 0;

for (const word in frequency) {
  if (frequency[word] > maxCount) {
    maxWord = word;
    maxCount = frequency[word];
  }
}

// Step 5: Display the result
const resultDiv = document.querySelector("#result");
resultDiv.textContent = `Most frequent word: "${maxWord}" (${maxCount} times)`;


console.log('Hello World');