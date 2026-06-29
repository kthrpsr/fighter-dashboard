import { useState } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import "./App.css";

const initialWorkouts = [
  { id: 1, date: "2025-06-20", type: "Boxing", duration: 60, notes: "Heavy bag, 8 rounds", completed: true },
  { id: 2, date: "2025-06-22", type: "Muay Thai", duration: 75, notes: "Pad work + clinch", completed: true },
  { id: 3, date: "2025-06-24", type: "Strength", duration: 50, notes: "Deadlift focus, 3x5 @ 315", completed: true },
  { id: 4, date: "2025-06-26", type: "BJJ", duration: 90, notes: "Live rolling, 6 rounds", completed: false },
];

export default function App() {
  const [view, setView] = useState("dashboard");
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [darkMode, setDarkMode] = useState(true);

  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, { ...workout, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setWorkouts((prev) =>
      prev.map((w) => (w.id === id ? { ...w, completed: !w.completed } : w))
    );
  };

  const deleteWorkout = (id) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className={`app-root ${darkMode ? "dark" : "light"}`}>
      <Header
        view={view}
        onViewChange={setView}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
      />
      <main className="app-main">
        {view === "dashboard" ? (
          <Dashboard
            workouts={workouts}
            onAdd={addWorkout}
            onToggle={toggleComplete}
            onDelete={deleteWorkout}
          />
        ) : (
          <About />
        )}
      </main>
    </div>
  );
}
