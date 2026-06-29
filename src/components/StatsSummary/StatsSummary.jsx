import "./StatsSummary.css";

export default function StatsSummary({ workouts }) {
  const total = workouts.length;
  const completed = workouts.filter((w) => w.completed).length;
  const totalMinutes = workouts.reduce((sum, w) => sum + Number(w.duration), 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  const typeCounts = workouts.reduce((acc, w) => {
    acc[w.type] = (acc[w.type] || 0) + 1;
    return acc;
  }, {});
  const topDiscipline = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  const stats = [
    { label: "Sessions Logged", value: total, icon: "📋" },
    { label: "Completed", value: completed, icon: "✅" },
    { label: "Time Trained", value: `${hours}h ${mins}m`, icon: "⏱️" },
    { label: "Top Discipline", value: topDiscipline, icon: "🏆" },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <span className="stat-icon">{stat.icon}</span>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
