import StatsSummary from "../StatsSummary/StatsSummary";
import AddWorkoutForm from "../AddWorkoutForm/AddWorkoutForm";
import WorkoutLog from "../WorkoutLog/WorkoutLog";
import "./Dashboard.css";

export default function Dashboard({ workouts, onAdd, onToggle, onDelete }) {
  return (
    <div className="dashboard">
      <section className="dashboard-section">
        <h2 className="section-label">Overview</h2>
        <StatsSummary workouts={workouts} />
      </section>

      <section className="dashboard-section">
        <h2 className="section-label">Log a Session</h2>
        <AddWorkoutForm onAdd={onAdd} />
      </section>

      <section className="dashboard-section">
        <WorkoutLog workouts={workouts} onToggle={onToggle} onDelete={onDelete} />
      </section>
    </div>
  );
}
