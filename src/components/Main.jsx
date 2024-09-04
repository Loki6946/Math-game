import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoSunny, IoMoon } from "react-icons/io5";
import "../index.css";

function Main({ navbar, theme, options }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [answer, setAnswer] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);

  const toggleDarkMode = () => {
    theme.setDark(!theme.dark);
    document.body.classList.toggle("dark");
  };

  const generateProblem = () => {
    let numMin = 0;
    let numMax = 0;
    let newNum1 = 0;
    let newNum2 = 0;

    switch (options.difficulty) {
      case "easy":
        numMin = 1;
        numMax = 10;
        break;
      case "medium":
        numMin = 3;
        numMax = 16;
        break;
      case "hard":
        numMin = 6;
        numMax = 26;
        break;
    }

    newNum1 = Math.floor(Math.random() * (numMax - numMin) + numMin);
    newNum2 = Math.floor(Math.random() * (numMax - numMin) + numMin);

    switch (options.gamemode) {
      case "addition":
        setOperator("+");
        setAnswer(newNum1 + newNum2);
        break;
      case "multiplication":
        setOperator("x");
        setAnswer(newNum1 * newNum2);
        break;
      case "substraction":
        setOperator("-");
        if (newNum2 > newNum1) {
          let biggerNumber = newNum2;
          newNum2 = newNum1;
          newNum1 = biggerNumber;
        }
        setAnswer(newNum1 - newNum2);
        break;
      case "division":
        setOperator("÷");
        setAnswer(newNum1 / newNum2);
        break;
    }

    setNum1(newNum1);
    setNum2(newNum2);
  };

  const checkAnswer = (e) => {
    setInputValue(e);

    if (parseInt(e) == answer) {
      setTimeout(() => {
        setIsWrong(false);
        setInputValue("");
        setScore(score + 5);
        generateProblem();
      }, 100);
    } else {
      setIsWrong(true);
    }
  };

  useEffect(() => {
    setScore(0);
    generateProblem();
  }, [options.difficulty, options.gamemode]);

  return (
    <main className="min-h-dvh flex justify-center items-center mx- bg-background dark:bg-dark-background font-primary font-bold text-foreground dark:text-dark-foreground">
      <button
        className={`${
          navbar.isVisible ? "hidden" : "block"
        } absolute top-12 left-10 bg-accent-3-dm dark:bg-dark-background-lt hover:bg-accent-3 hover:dark:bg-dark-accent-3-dm p-2 border border-background dark:border-dark-background active:border-accent-1 active:dark:border-accent-1 rounded-lg`}
        onClick={() => navbar.toggleNavbar()}
      >
        <FaBars size={20} />
      </button>
      <button
        className="absolute top-12 right-10 bg-accent-3-dm dark:bg-dark-background-lt hover:bg-accent-3 hover:dark:bg-dark-accent-3-dm p-2 border border-background dark:border-dark-background active:border-accent-1 active:dark:border-accent-1 rounded-lg cursor-pointer"
        onClick={() => toggleDarkMode()}
      >
        {theme.dark && <IoSunny size={20} />}
        {!theme.dark && <IoMoon size={20} />}
      </button>
      <div className="flex flex-col justify-center items-center gap-20 mx-2">
        <p className="flex flex-col items-center gap-2 font-bold text-3xl md:text-4xl text-foreground-dm">
          Score <span className="text-foreground dark:text-dark-foreground">{score}</span>
        </p>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <p className="text-4xl md:text-7xl">
            {num1} {operator} {num2}
          </p>
          <p className="text-5xl md:text-7xl">=</p>
          <input
            className={`max-w-24 md:max-w-40 p-2 text-4xl md:text-7xl outline-none bg-foreground-lt dark:bg-dark-background border-2 border-accent-3 dark:border-dark-accent-3-dm  ${
              isWrong
                ? "focus:border-accent-2 focus:dark:border-accent-2"
                : "focus:border-accent-1 focus:dark:border-accent-1"
            } rounded-xl`}
            type="text"
            inputMode="numeric"
            value={inputValue}
            autoComplete="off"
            onChange={(e) => checkAnswer(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
