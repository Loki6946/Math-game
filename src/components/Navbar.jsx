import "../index.css";
import { FaPlus, FaDivide, FaMinus, FaTimes } from "react-icons/fa";

function Navbar({ navbar, options }) {
  const setDifficulty = (element) => {
    options.setDifficulty(element.target.value);
  };

  const setGamemode = (element) => {
    options.setGamemode(element.target.value);
  };

  return (
    <nav
      className={`${
        navbar.isVisible ? "block" : "hidden"
      } absolute min-h-full px-6 py-12 bg-background dark:bg-dark-background font-primary text-foreground dark:text-dark-foreground shadow-xl animate-in slide-in-from-left`}
    >
      <div className="flex justify-between items-center gap-5 mb-8">
        <button
          className="bg-accent-3-dm dark:bg-dark-background-lt hover:bg-accent-3 hover:dark:bg-dark-accent-3-dm p-2 border border-background dark:border-dark-background active:border-accent-1 dark:active:border-accent-1 rounded-lg"
          onClick={() => navbar.toggleNavbar()}
        >
          <FaTimes size={20} />
        </button>
        <h1 className="font-bold text-3xl md:text-4xl">Math tail</h1>
      </div>
      <div className="flex flex-col justify-center gap-1 mb-8">
        <p className="font-bold text-foreground-dm">Select difficulty</p>
        <div className="flex flex-col justify-center gap-1">
          <label className="p-2 hover:bg-accent-3-dm hover:dark:bg-dark-accent-3-dm has-[:checked]:bg-accent-1 dark:has-[:checked]:bg-accent-1 has-[:checked]:text-foreground-lt rounded-lg cursor-pointer">
            <input
              className="hidden"
              type="radio"
              name="difficulty"
              value="easy"
              defaultChecked
              onChange={(e) => setDifficulty(e)}
            />
            <span>Easy</span>
          </label>
          <label className="p-2 hover:bg-accent-3-dm hover:dark:bg-dark-accent-3-dm has-[:checked]:bg-accent-1 dark:has-[:checked]:bg-accent-1 has-[:checked]:text-foreground-lt rounded-lg cursor-pointer">
            <input
              className="hidden"
              type="radio"
              name="difficulty"
              value="medium"
              onChange={(e) => setDifficulty(e)}
            />
            <span>Medium</span>
          </label>
          <label className="p-2 hover:bg-accent-3-dm hover:dark:bg-dark-accent-3-dm has-[:checked]:bg-accent-1 dark:has-[:checked]:bg-accent-1 has-[:checked]:text-foreground-lt rounded-lg cursor-pointer">
            <input className="hidden" type="radio" name="difficulty" value="hard" onChange={(e) => setDifficulty(e)} />
            <span>Hard</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1 mb-8">
        <p className="font-bold text-foreground-dm">Choose gamemode</p>
        <div className="flex flex-col justify-center gap-1">
          <label className="flex items-center gap-2 p-2 hover:bg-accent-3-dm hover:dark:bg-dark-accent-3-dm has-[:checked]:bg-accent-1 dark:has-[:checked]:bg-accent-1  has-[:checked]:text-foreground-lt rounded-lg cursor-pointer">
            <input
              className="hidden"
              type="radio"
              name="gamemode"
              value="addition"
              defaultChecked
              onChange={(e) => setGamemode(e)}
            />
            <FaPlus />
            <span>Addition</span>
          </label>
          <label className="flex items-center gap-2 p-2 hover:bg-accent-3-dm hover:dark:bg-dark-accent-3-dm has-[:checked]:bg-accent-1 dark:has-[:checked]:bg-accent-1  has-[:checked]:text-foreground-lt rounded-lg cursor-pointer">
            <input
              className="hidden"
              type="radio"
              name="gamemode"
              value="multiplication"
              onChange={(e) => setGamemode(e)}
            />
            <FaTimes />
            <span>Multiplication</span>
          </label>
          <label className="flex items-center gap-2 p-2 hover:bg-accent-3-dm hover:dark:bg-dark-accent-3-dm has-[:checked]:bg-accent-1 dark:has-[:checked]:bg-accent-1  has-[:checked]:text-foreground-lt rounded-lg cursor-pointer">
            <input
              className="hidden"
              type="radio"
              name="gamemode"
              value="substraction"
              onChange={(e) => setGamemode(e)}
            />
            <FaMinus />
            <span>Substraction</span>
          </label>
          <label className="flex items-center gap-2 p-2 hover:bg-accent-3-dm hover:dark:bg-dark-accent-3-dm has-[:checked]:bg-accent-1 dark:has-[:checked]:bg-accent-1  has-[:checked]:text-foreground-lt text-foreground-dm rounded-lg cursor-pointer">
            <input
              className="hidden"
              type="radio"
              name="gamemode"
              value="division"
              disabled
              onChange={(e) => setGamemode(e)}
            />
            <FaDivide />
            <span>Division</span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
