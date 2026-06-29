import "./About.css";

const DISCIPLINES = [
  {
    name: "Boxing",
    emoji: "🥊",
    desc: "Sweet science. Footwork, combinations, head movement. The foundation of striking.",
  },
  {
    name: "Muay Thai",
    emoji: "🦵",
    desc: "Eight limbs. Elbows, knees, clinch, teeps. The most complete standup discipline.",
  },
  {
    name: "BJJ",
    emoji: "🥋",
    desc: "Ground game. Submissions, positional control, escapes. Chess on the mat.",
  },
  {
    name: "Wrestling",
    emoji: "🤼",
    desc: "The cage's great equalizer. Takedowns and top control win MMA fights.",
  },
  {
    name: "Strength",
    emoji: "🏋️",
    desc: "Hypertrophy and power. Deadlifts, squats, overhead press. Build the engine.",
  },
];

export default function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h2 className="about-headline">Built for fighters.</h2>
        <p className="about-body">
          Fighter's Dashboard is a training tracker designed around the demands of combat sports.
          Log sessions, track discipline balance, and keep your training consistent — one session
          at a time.
        </p>
      </div>

      <div className="about-disciplines">
        <h3 className="about-sub">Disciplines Tracked</h3>
        <div className="disc-grid">
          {DISCIPLINES.map((d) => (
            <div key={d.name} className="disc-card">
              <span className="disc-emoji">{d.emoji}</span>
              <strong className="disc-name">{d.name}</strong>
              <p className="disc-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-howto">
        <h3 className="about-sub">How to Use</h3>
        <ol className="howto-list">
          <li>Click <strong>Log Workout</strong> on the Dashboard to open the session form.</li>
          <li>Fill in the date, discipline, duration, and any notes about the session.</li>
          <li>Hit <strong>Log Session</strong> to add it to your log.</li>
          <li>Use the filter buttons to view by discipline.</li>
          <li>Check off sessions as complete, or delete ones logged by mistake.</li>
        </ol>
      </div>

      <p className="about-footer">
        Built with React · TAMUCC COSC — Component-Based Development Assignment
      </p>
    </div>
  );
}
# About Component
