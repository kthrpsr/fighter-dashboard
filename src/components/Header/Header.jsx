import "./Header.css";

export default function Header({ view, onViewChange, darkMode, onToggleDark }) {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-icon">🥊</span>
        <div>
          <h1 className="header-title">Fighter's Dashboard</h1>
          <p className="header-sub">Track. Train. Dominate.</p>
        </div>
      </div>
      <nav className="header-nav">
        <button
          className={`nav-btn ${view === "dashboard" ? "active" : ""}`}
          onClick={() => onViewChange("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`nav-btn ${view === "about" ? "active" : ""}`}
          onClick={() => onViewChange("about")}
        >
          About
        </button>
        <button className="theme-btn" onClick={onToggleDark} title="Toggle theme">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
# Header Component
