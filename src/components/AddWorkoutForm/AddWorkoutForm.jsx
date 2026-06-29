import { useState } from "react";
import "./AddWorkoutForm.css";

const DISCIPLINES = ["Boxing", "Muay Thai", "BJJ", "Wrestling", "MMA", "Strength", "Cardio", "Recovery"];

const emptyForm = {
  date: "",
  type: "Boxing",
  duration: "",
  notes: "",
};

export default function AddWorkoutForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.duration) {
      setError("Date and duration are required.");
      return;
    }
    if (Number(form.duration) <= 0 || Number(form.duration) > 480) {
      setError("Duration must be between 1 and 480 minutes.");
      return;
    }
    onAdd({ ...form, duration: Number(form.duration) });
    setForm(emptyForm);
    setOpen(false);
    setError("");
  };

  return (
    <div className="add-form-wrapper">
      <button className="add-toggle-btn" onClick={() => setOpen((o) => !o)}>
        {open ? "✕ Cancel" : "+ Log Workout"}
      </button>

      {open && (
        <form className="add-form" onSubmit={handleSubmit} noValidate>
          <h3 className="form-title">New Session</h3>

          {error && <p className="form-error">{error}</p>}

          <div className="form-row">
            <label className="form-label">
              Date
              <input
                className="form-input"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </label>

            <label className="form-label">
              Discipline
              <select
                className="form-input"
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                {DISCIPLINES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </label>

            <label className="form-label">
              Duration (min)
              <input
                className="form-input"
                type="number"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                placeholder="60"
                min="1"
                max="480"
                required
              />
            </label>
          </div>

          <label className="form-label form-label--full">
            Notes
            <input
              className="form-input"
              type="text"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="What did you work on?"
              maxLength={120}
            />
          </label>

          <button className="form-submit-btn" type="submit">
            Log Session
          </button>
        </form>
      )}
    </div>
  );
}
# AddWorkoutForm Component
