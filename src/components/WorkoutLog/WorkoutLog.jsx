import { useState } from "react";
import "./WorkoutLog.css";

const TYPE_COLORS = {
  Boxing: "#e74c3c",
  "Muay Thai": "#e67e22",
  BJJ: "#3498db",
  Wrestling: "#9b59b6",
  MMA: "#e74c3c",
  Strength: "#2ecc71",
  Cardio: "#1abc9c",
  Recovery: "#95a5a6",
};

export default function WorkoutLog({ workouts, onToggle, onDelete }) {
  const [filter, setFilter] = useState("All");

  const disciplines = ["All", ...Array.from(new Set(workouts.map((w) => w.type)))];

  const filtered = filter === "All" ? workouts : workouts.filter((w) => w.type === filter);

  return (
    <div className="workout-log">
      <div className="log-header">
        <h2 className="log-title">Session Log</h2>
        <div className="filter-bar">
          {disciplines.map((d) => (
            <button
              key={d}
              className={`filter-btn ${filter === d ? "active" : ""}`}
              onClick={() => setFilter(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="log-empty">No sessions logged yet. Add one above.</p>
      ) : (
        <ul className="log-list">
          {filtered.map((workout) => (
            <li key={workout.id} className={`log-item ${workout.completed ? "completed" : ""}`}>
              <span
                className="log-type-badge"
                style={{ background: TYPE_COLORS[workout.type] || "#888" }}
              >
                {workout.type}
              </span>
              <div className="log-info">
                <span className="log-date">{workout.date}</span>
                <span className="log-duration">{workout.duration} min</span>
                {workout.notes && <span className="log-notes">{workout.notes}</span>}
              </div>
              <div className="log-actions">
                <button
                  className={`log-check ${workout.completed ? "checked" : ""}`}
                  onClick={() => onToggle(workout.id)}
                  title={workout.completed ? "Mark incomplete" : "Mark complete"}
                >
                  {workout.completed ? "✓" : "○"}
                </button>
                <button
                  className="log-delete"
                  onClick={() => onDelete(workout.id)}
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
# WorkoutLog Component
