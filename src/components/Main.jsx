import style from "./Main.module.css";

export default function Main() {
    return (
    <main className={`py-40 text-center ${style.background}`}>
      <h1>Content goes here</h1>
      <div className="blue-section"></div>
    </main>
  );
}