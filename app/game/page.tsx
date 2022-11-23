import { Game } from "./Game";

const Page = async () => {
  const questions = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean"
  )
    .then((r) => r.json())
    .then((r) =>
      r.results.map((q) => ({
        question: q.question,
        correctAnswer: q.correct_answer,
      }))
    );

  return (
    <div>
      <Game questions={questions} />
    </div>
  );
};

export default Page;
