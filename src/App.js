import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Check,
  X,
  ArrowRight,
  RefreshCw,
  Trophy,
  Brain,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  List,
} from "lucide-react";

/**
 * ⚙️ НАЛАШТУВАННЯ ДЛЯ КОРИСТУВАЧА
 * Тут ви можете замінити посилання на свої.
 */
const GOOGLE_DOC_URL = "#"; // Вставте сюди посилання на ваш Google Doc з правилами
const NEXT_APP_URL = "#"; // Посилання на ТЕМУ 2
const PREV_APP_URL = "#"; // Посилання на ТЕМУ 0 (якщо є)
const MENU_APP_URL = "#"; // Посилання на ГОЛОВНЕ МЕНЮ (список усіх додатків)

// --- БАЗА ПИТАНЬ (50 шт) ---
const QUESTIONS_DB = [
  // Męski (On)
  {
    text: "Dom",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 'm'.",
  },
  {
    text: "Stół",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 'ł'.",
  },
  {
    text: "Telefon",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 'n'.",
  },
  {
    text: "Samochód",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 'd'.",
  },
  {
    text: "Brat",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 't'.",
  },
  {
    text: "Pies",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 's'.",
  },
  {
    text: "Komputer",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 'r'.",
  },
  {
    text: "Dziadek",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Закінчується на приголосну 'k'.",
  },
  {
    text: "Mężczyzna",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "ВИНЯТОК! Закінчується на -a, але позначає чоловіка.",
  },
  {
    text: "Kolega",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "ВИНЯТОК! Закінчується на -a, але позначає чоловіка.",
  },
  {
    text: "Tata",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "ВИНЯТОК! Тато - це він (On).",
  },
  {
    text: "Kierowca",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "ВИНЯТОК! Водій - чоловік (граматично).",
  },
  {
    text: "Artysta",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "ВИНЯТОК! Артист - чоловік.",
  },
  {
    text: "Bilet",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Приголосна 't'.",
  },
  {
    text: "Problem",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 0,
    explanation: "Приголосна 'm'.",
  },

  // Żeński (Ona)
  {
    text: "Kobieta",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Mama",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Kawa",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Polska",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Szkoła",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Praca",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Siostra",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Lampka",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -a.",
  },
  {
    text: "Pani",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -i (Леді/Пані).",
  },
  {
    text: "Gospodyni",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "Закінчення -i.",
  },
  {
    text: "Noc",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "ВИНЯТОК! Закінчується на приголосну, але це 'Ona'.",
  },
  {
    text: "Miłość",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "ВИНЯТОК! Любов - вона.",
  },
  {
    text: "Krew",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "ВИНЯТОК! Кров - вона.",
  },
  {
    text: "Rzecz",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "ВИНЯТОК! Річ - вона.",
  },
  {
    text: "Mysz",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "ВИНЯТОК! Миша - вона.",
  },
  {
    text: "Twarz",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 1,
    explanation: "ВИНЯТОК! Обличчя - вона.",
  },

  // Nijaki (Ono)
  {
    text: "Okno",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -o.",
  },
  {
    text: "Dziecko",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -o.",
  },
  {
    text: "Krzesło",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -o.",
  },
  {
    text: "Mieszkanie",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -e.",
  },
  {
    text: "Morze",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -e.",
  },
  {
    text: "Pole",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -e.",
  },
  {
    text: "Imię",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -ę.",
  },
  {
    text: "Zwierzę",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -ę.",
  },
  {
    text: "Muzeum",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -um (латинь).",
  },
  {
    text: "Centrum",
    options: ["On (Męski)", "Ona (Żeński)", "Ono (Nijaki)"],
    correct: 2,
    explanation: "Закінчення -um.",
  },

  // Plural (Liczba mnoga) - Множина
  {
    text: "Mnożna: Kobieta -> ...",
    options: ["Kobiety", "Kobieti", "Kobieta"],
    correct: 0,
    explanation: "Жіночий рід: A змінюється на Y.",
  },
  {
    text: "Mnożna: Telefon -> ...",
    options: ["Telefony", "Telefoni", "Telefona"],
    correct: 0,
    explanation: "Чоловічий неістота: +Y.",
  },
  {
    text: "Mnożna: Okno -> ...",
    options: ["Okny", "Okni", "Okna"],
    correct: 2,
    explanation: "Середній рід: O змінюється на A.",
  },
  {
    text: "Mnożna: Polak (люди) -> ...",
    options: ["Polaki", "Polacy", "Polaky"],
    correct: 1,
    explanation: "Чоловічий особовий: K змінюється на C + Y.",
  },
  {
    text: "Mnożna: Nauczyciel -> ...",
    options: ["Nauczyciele", "Nauczycieli", "Nauczyciela"],
    correct: 0,
    explanation: "М'яка основа 'l' -> -e.",
  },
  {
    text: "Mnożna: Dom -> ...",
    options: ["Domy", "Doma", "Domów"],
    correct: 0,
    explanation: "Звичайне закінчення -y.",
  },
  {
    text: "Mnożna: Stół -> ...",
    options: ["Stoły", "Stóły", "Stółe"],
    correct: 0,
    explanation: "ó змінюється на o + y.",
  },
  {
    text: "Mnożna: Muzeum -> ...",
    options: ["Muzeums", "Muzea", "Muzezy"],
    correct: 1,
    explanation: "Слова на -um відкидають -um і додають -a.",
  },
  {
    text: "Mnożna: Kolega -> ...",
    options: ["Kolegy", "Koledzy", "Kolegowie"],
    correct: 1,
    explanation: "Чоловічий особовий: G змінюється на DZ.",
  },
];

const PolishTrainerT1 = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showTheory, setShowTheory] = useState(true);

  // Ініціалізація: перемішуємо питання при старті
  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    const shuffled = [...QUESTIONS_DB].sort(() => 0.5 - Math.random());
    setShuffledQuestions(shuffled);
    setCurrentQIndex(0);
    setScore(0);
    setCompleted(false);
    setShowFeedback(false);
    setSelectedOption(null);
  };

  const handleOptionClick = (index) => {
    if (showFeedback) return;

    const question = shuffledQuestions[currentQIndex];
    const correct = index === question.correct;

    setSelectedOption(index);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < shuffledQuestions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setShowFeedback(false);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };

  // --- RENDERERS ---

  if (shuffledQuestions.length === 0)
    return <div className="p-10 text-center">Завантаження...</div>;

  const question = shuffledQuestions[currentQIndex];
  const progressPercentage = Math.round(
    (currentQIndex / shuffledQuestions.length) * 100
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* 1. HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              A1
            </span>
            <h1 className="font-bold text-slate-800 truncate">
              Тема 1: Rzeczownik
            </h1>
          </div>

          <div className="flex items-center gap-1">
            {/* Назад */}
            <a
              href={PREV_APP_URL}
              className={`p-2 rounded-full transition-colors ${
                PREV_APP_URL === "#"
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              title="Попередня тема"
            >
              <ChevronLeft size={24} />
            </a>

            {/* МЕНЮ (СПИСОК) */}
            <a
              href={MENU_APP_URL}
              className={`p-2 rounded-full transition-colors ${
                MENU_APP_URL === "#"
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              title="Усі теми"
            >
              <List size={24} />
            </a>

            {/* Вперед */}
            <a
              href={NEXT_APP_URL}
              className={`p-2 rounded-full transition-colors ${
                NEXT_APP_URL === "#"
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              title="Наступна тема"
            >
              <ChevronRight size={24} />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-xl mx-auto w-full p-4 md:p-6 flex flex-col">
        {/* 2. THEORY BLOCK (Collapsible) */}
        <div className="mb-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div
            onClick={() => setShowTheory(!showTheory)}
            className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2 font-semibold text-blue-700">
              <BookOpen size={20} />
              <span>Експрес-правила</span>
            </div>
            <span className="text-xs text-slate-400">
              {showTheory ? "Згорнути" : "Показати"}
            </span>
          </div>

          {showTheory && (
            <div className="p-5 text-sm leading-relaxed text-slate-700 space-y-4">
              <div>
                <strong className="block text-slate-900 mb-1">
                  Як визначити рід?
                </strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    👨 <b>Męski (Він):</b> Приголосна (*dom, stół).{" "}
                    <span className="text-red-500 text-xs">
                      Виняток: Mężczyzna, Kolega (-a).
                    </span>
                  </li>
                  <li>
                    👩 <b>Żeński (Вона):</b> -A (*kawa).{" "}
                    <span className="text-red-500 text-xs">
                      Виняток: Noc, Miłość, Pani.
                    </span>
                  </li>
                  <li>
                    👶 <b>Nijaki (Воно):</b> -O, -E, -Ę, -UM (*okno, imię,
                    muzeum).
                  </li>
                </ul>
              </div>
              <div>
                <strong className="block text-slate-900 mb-1">
                  Множина (Вони/Oni):
                </strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <b>Не чоловіки (Niemęskoosobowy):</b> Закінчення <b>-y</b>{" "}
                    (*domy), <b>-i</b> (*kaczki) або <b>-a</b> (сер.рід: *okna).
                  </li>
                  <li>
                    <b>Чоловіки (Męskoosobowy):</b> Чергування! (*Polak &rarr;
                    Polacy).
                  </li>
                </ul>
              </div>

              {/* Ссылка на Google Doc */}
              <div className="pt-2 border-t border-slate-100 mt-2">
                <a
                  href={GOOGLE_DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${
                    GOOGLE_DOC_URL === "#"
                      ? "text-slate-400 cursor-not-allowed"
                      : "text-blue-600 hover:underline"
                  }`}
                >
                  <ExternalLink size={14} />
                  {GOOGLE_DOC_URL === "#"
                    ? "Детальні правила (Скоро)"
                    : "Відкрити повні правила"}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* 3. GAME ZONE */}
        {!completed ? (
          <div className="flex-1 flex flex-col justify-center">
            {/* Question Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center mb-6 min-h-[160px] flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Питання {currentQIndex + 1} з {shuffledQuestions.length}
              </span>
              <h2 className="text-4xl font-extrabold text-slate-800">
                {question.text}
              </h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {question.options.map((opt, idx) => {
                let btnClass =
                  "p-4 rounded-xl font-semibold text-lg transition-all border-2 text-left relative ";

                if (showFeedback) {
                  if (idx === question.correct) {
                    btnClass += "bg-green-100 border-green-500 text-green-800"; // Правильный
                  } else if (selectedOption === idx) {
                    btnClass += "bg-red-100 border-red-500 text-red-800"; // Выбранный неправильный
                  } else {
                    btnClass += "bg-white border-slate-100 text-slate-300"; // Остальные
                  }
                } else {
                  btnClass +=
                    "bg-white border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 shadow-sm active:scale-[0.98]";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={showFeedback}
                    className={btnClass}
                  >
                    {opt}
                    {showFeedback && idx === question.correct && (
                      <Check
                        size={20}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      />
                    )}
                    {showFeedback &&
                      idx !== question.correct &&
                      selectedOption === idx && (
                        <X
                          size={20}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        />
                      )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Next Button */}
            {showFeedback && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                {!isCorrect && (
                  <div className="bg-red-50 text-red-800 p-4 rounded-xl mb-4 text-sm border border-red-100 flex gap-3 items-start">
                    <Brain size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <strong>Підказка:</strong> {question.explanation}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className={`w-full p-4 rounded-xl font-bold text-lg text-white shadow-lg flex items-center justify-center gap-2 transition-all ${
                    isCorrect
                      ? "bg-green-600 hover:bg-green-700 shadow-green-200"
                      : "bg-slate-800 hover:bg-slate-900 shadow-slate-300"
                  }`}
                >
                  {currentQIndex < shuffledQuestions.length - 1
                    ? "Далі"
                    : "Завершити"}{" "}
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* RESULT SCREEN */
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
            <div className="mb-6">
              {score === shuffledQuestions.length ? (
                <Trophy size={80} className="text-yellow-500 mx-auto" />
              ) : score >= shuffledQuestions.length * 0.8 ? (
                <Trophy size={80} className="text-blue-500 mx-auto" />
              ) : (
                <RefreshCw size={80} className="text-slate-300 mx-auto" />
              )}
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {score === shuffledQuestions.length
                ? "Ідеально!"
                : "Тренування завершено!"}
            </h2>
            <p className="text-slate-500 mb-8 text-lg">
              Ваш результат: <strong className="text-slate-800">{score}</strong>{" "}
              з {shuffledQuestions.length}
            </p>

            <button
              onClick={restartGame}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <RefreshCw size={20} />
              Почати знову
            </button>
          </div>
        )}
      </main>

      {/* 4. FOOTER (Progress) */}
      {!completed && (
        <footer className="bg-white border-t border-slate-100 p-4">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
              <span>Прогрес</span>
              <span>
                {Math.round((score / (currentQIndex + 1)) * 100) || 0}% Успіху
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default PolishTrainerT1;
