// These styles apply to every route in the application
import { Analytics } from "./Analytics";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-white conic-bg">
        <main className="flex flex-col items-center gap-4 p-8 md:gap-8 md:py-32">
          <h1 className="text-3xl font-bold md:text-6xl">Nervia</h1>
          <p className="max-w-lg text-center md:text-lg">
            In this Next.js nerd trivia app, you will be asked 10 questions.
            After this, you'll receive a score and an option to play again!
          </p>
          {children}
        </main>
      </body>
      <Analytics />
    </html>
  );
}
