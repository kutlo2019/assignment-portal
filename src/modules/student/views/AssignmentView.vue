<template>
  <div class="col-12 my-5 d-flex justify-content-between bg-secondary-subtle py-3">
    <h4>Chemistry > Organic Chemistry</h4>

    <div class="d-flex gap-2">
      <div class="bg-primary rounded text-center">
        <p class="mb-0 mt-2 px-3 text-white">Q1 of 10</p>
      </div>
    </div>

    <h4>Time</h4>

  </div>

  <div class="col-7 border p-5">
    <h3>Question {{ currentQuestion + 1 }}</h3>
    <p class="mt-3">{{ questions[currentQuestion].questionText }}</p>

    <!-- <img src="../../../assets/chlorophyl.png" alt="Question Image" class="border border-3 border-warning"> -->
  </div>

  <div class="col-5 border p-5 d-flex flex-column justify-content-around gap-2">
    <div 
      :key="index" 
      v-for="(option, index) in questions[currentQuestion].answerOptions" 
      class="form-check border rounded"
      @click="handleAnswerClick($event, option.isCorrrect, index)"
    >
      {{ option.answerText }}
    </div>
    <!-- <div class="form-check border rounded">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Cytosine
      </label>
    </div>

    <div class="form-check border rounded">
      <input class="form-check-input d-inline-flex" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
        Penicilin
      </label>
    </div>

    <div class="form-check border rounded">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Chlorophyl
      </label>
    </div>

    <div class="form-check border rounded">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
        Tetra Chloro Methane
      </label>
    </div> -->

    <div class="d-flex gap-2">
      <button @click="handlePrevClick" type="button" class="btn btn-primary">Prev</button>
      <button @click="handleNextClick" type="button" class="btn btn-primary">Next</button>
    </div>
    <button 
      v-if="currentQuestion === questions.length - 1" 
      class="btn btn-success" 
      type="button"
      @click="handleSubmit"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import { clear } from 'console';
import { ref } from 'vue';

const currentQuestion = ref(0);
let answersMap = new Map();
let showScore = false;
let score = 0;
let startQuiz = false;

const questions = [
  {
    questionText: "What is the HCF of 24 and 36?",
    answerOptions: [
      {answerText: '72', isCorrrect: false},
      {answerText: '18', isCorrrect: false},
      {answerText: '12', isCorrrect: true},
      {answerText: '6', isCorrrect: false},
    ]
  },
  {
    questionText: "What is the LCM of 24 and 36?",
    answerOptions: [
      {answerText: '72', isCorrrect: true},
      {answerText: '18', isCorrrect: false},
      {answerText: '12', isCorrrect: false},
      {answerText: '6', isCorrrect: false},
    ]
  },
  {
    questionText: "400 expressed as a product of its primes is:",
    answerOptions: [
      {answerText: '2x2x2x2x2x5x5', isCorrrect: false},
      {answerText: '2x2x2x5x5x7', isCorrrect: false},
      {answerText: '2x2x2x2x5x5', isCorrrect: true},
      {answerText: '2x2x2x2x2x5x5', isCorrrect: false},
    ]
  },
  {
    questionText: "What are the sum of interior angles in an octagon?",
    answerOptions: [
      {answerText: '720', isCorrrect: false},
      {answerText: '180', isCorrrect: false},
      {answerText: '540', isCorrrect: false},
      {answerText: '1080', isCorrrect: true},
    ]
  },
  {
    questionText: "What is 384 + 748?",
    answerOptions: [
      {answerText: '1122', isCorrrect: false},
      {answerText: '1132', isCorrrect: true},
      {answerText: '1134', isCorrrect: false},
      {answerText: '1312', isCorrrect: false},
    ]
  },
  {
    questionText: "Whic Mathematical property is demonstrated: a + b = b + a?",
    answerOptions: [
      {answerText: 'Distributive Property', isCorrrect: false},
      {answerText: 'Commutative Property', isCorrrect: true},
      {answerText: 'Associative Property', isCorrrect: false},
      {answerText: 'Binary Property', isCorrrect: false},
    ]
  },
]

const startQuizFunc = () => {
  startQuiz = true;
};

const handleNextClick = () => {
  let nextQuestion = currentQuestion.value + 1;
  // if (isCorrect) score++;

  nextQuestion < questions.length ? currentQuestion.value = nextQuestion : showScore = true;
  const options = document.getElementsByClassName("form-check");
  clearOptions(options)
  if (answersMap.has(currentQuestion.value.toString())) {
    clearOptions(options);
    const ansIdx = answersMap.get(currentQuestion.value.toString()).index
    console.log('indexes', ansIdx, options[ansIdx])
    options[ansIdx].classList.add("chosen")
  }
};

const handlePrevClick = () => {
  let prevQuestion = currentQuestion.value - 1;
  if (prevQuestion >= 0) currentQuestion.value = prevQuestion; 
  const options = document.getElementsByClassName("form-check");
  clearOptions(options)
  if (answersMap.has(currentQuestion.value.toString())) {
    clearOptions(options);
    const ansIdx = answersMap.get(currentQuestion.value.toString()).index
    console.log('indexes', ansIdx, options[ansIdx])
    options[ansIdx].classList.add("chosen")
  }
}

const handleAnswerClick = (event: any, isCorrect: boolean, index: number) => {
  const options = document.getElementsByClassName("form-check");
  clearOptions(options)
  event.target.classList.add("chosen")
  answersMap.set(currentQuestion.value.toString(), {"isCorrect": isCorrect, "index": index})
};

const clearOptions = (options: HTMLCollectionOf<Element>) => {
  for (let option of options) {
    option.classList.remove("chosen")
  }
}

const handleSubmit = () => {
  console.log('ansMap', answersMap)
  for (let i = 0; i < questions.length; i++) {
    console.log(answersMap.get(i.toString()))
  }
};
</script>

<style>
.form-check {
  padding: 0.75rem 2rem;
}

.chosen {
  background: limegreen;
}
</style>