"use strict";

let button = document.querySelector("button");

button.addEventListener("click", checkInputs);

let whatSlideRemove = 0;

function checkInputs() {
  let testQuestions = document.querySelectorAll(".testQuestions");
  let right = 0;
  let wrong = 0;
  let without = 0;

  checkAnswers();
  showResult();
  nextSlide();

  //Проверка ответов пользователя при клике
  function checkAnswers() {
    for (let i = 0; i < testQuestions.length; i++) {
      let inputs = testQuestions[i].querySelectorAll("input");
      let arrayInputs = [...inputs];

      if (
        arrayInputs.some(function (elem) {
          if (elem.checked == true && elem.classList.contains("false")) {
            return true;
          }
        })
      ) {
        wrong += 1;
      } else if (
        arrayInputs.some(function (elem) {
          if (elem.checked == true && elem.classList.contains("true")) {
            return true;
          }
        })
      ) {
        right += 1;
      } else {
        without += 1;
      }
    }
  }

  // Показ результатов при клике на последнем слайдере
  function showResult() {
    if (
      testQuestions[testQuestions.length - 1].classList.contains("none") ===
      false
    ) {
      let rightAnswers =
        "Правильных ответов: " +
        right +
        "(" +
        Math.round((right / testQuestions.length) * 100) +
        "%)";
      let wrongAnswers = "Неправильных ответо: " + wrong;
      let withoutAnswers =
        "Без ответов: " + (testQuestions.length - (right + wrong));
      alert(rightAnswers + "\n" + wrongAnswers + "\n" + withoutAnswers);
    }
  }

  // Переход на следующий слайд при клике
  function nextSlide() {
    whatSlideRemove++;
    let whatSlideAdd = whatSlideRemove - 1;
    if (whatSlideRemove < testQuestions.length) {
      testQuestions[whatSlideRemove].classList.remove("none");
      testQuestions[whatSlideAdd].classList.add("none");
    }

    // Смена текста кнопки при переходе на последний слайд
    if (whatSlideRemove == testQuestions.length - 1) {
      button.innerHTML = "Show results";
    }
  }
}
