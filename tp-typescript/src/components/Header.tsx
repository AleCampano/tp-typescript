function Header() {
  return (
    <header className="header">
      <div className="headerLogo">
        📷 <span>Instagram</span>
      </div>

      <div className="headerBuscador">
        <input
          type="text"
          placeholder="Buscar usuario, hashtag o historia"
          className="headerInput"
        />
      </div>

      <div className="headerBotones">
        <button className="headerBtn">⚙️</button>
        <button className="headerBtn">📷</button>
        <button className="headerBtn">✈️</button>
        <button className="headerBtnNuevo">+ Nueva publicación</button>
      </div>
    </header>
  );
}

export default Header;
