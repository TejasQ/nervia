"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "../Button";
import { Screen } from "../Screen";

export const Game = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { push } = useRouter();
  const [answers, setAnswers] = useState([]);
  const score = questions.reduce((acc, q, i) => {
    if (JSON.parse(q.correctAnswer.toLowerCase()) === answers[i]) {
      acc++;
    }
    return acc;
  }, 0);

  if (activeQuestion === questions.length) {
    return (
      <div className="relative grid gap-4">
        <Screen>Your Final Score is {score}/10!</Screen>
        <div className="sticky flex items-center gap-4 ml-auto top-4">
          <Button
            className="text-white bg-gray-700 border-b-2 border-r-2 border-gray-900 hover:bg-gray-600"
            onClick={() => {
              push("/");
            }}
          >
            Replay
          </Button>
          <Button
            autoFocus
            className="text-white bg-purple-900 border-b-2 border-r-2 border-black hover:bg-purple-800"
            onClick={() => {
              const text = `I just scored ${score}/10 on Nervia! Can you beat me?
                  
Try at https://nervia.tej.as`;
              try {
                navigator.share({
                  text,
                });
              } catch {
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    text
                  )}`
                );
              }
            }}
          >
            Share
          </Button>
        </div>
        <h3 className="text-sm font-bold tracking-widest">SUMMARY</h3>
        <ul className="grid gap-4">
          {questions.map((q, i) => (
            <li className="grid gap-4 p-4 bg-purple-900 rounded shadow" key={i}>
              <p
                className="font-serif text-2xl"
                dangerouslySetInnerHTML={{ __html: q.question }}
              />
              <div className="flex flex-col items-end text-sm font-semibold">
                <p className="capitalize">You answered: {String(answers[i])}</p>
                <p>Correct Answer: {q.correctAnswer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      <Screen>
        <h2
          dangerouslySetInnerHTML={{
            __html: questions[activeQuestion]?.question,
          }}
        />
      </Screen>
      <div className="grid items-center w-full gap-4 md:flex">
        <div className="w-full font-mono text-sm font-bold text-black uppercase opacity-70">
          <p>Score {score}/10</p>
          <p>Question {activeQuestion + 1} of 10</p>
        </div>
        <div className="flex items-center gap-4 md:ml-auto">
          <Button
            className="text-white bg-green-600 border-b-2 border-r-2 border-green-900 hover:bg-green-500"
            onClick={() => {
              setAnswers([...answers, true]);
              setActiveQuestion(activeQuestion + 1);
            }}
          >
            True
          </Button>
          <Button
            className="text-white bg-red-600 border-b-2 border-r-2 border-red-900 hover:bg-red-500"
            onClick={() => {
              setAnswers([...answers, false]);
              setActiveQuestion(activeQuestion + 1);
            }}
          >
            False
          </Button>
        </div>
      </div>
    </div>
  );
};
