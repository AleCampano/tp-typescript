import type { UserProfile } from '../types';

interface SidebarProps {
  usuario: UserProfile;
  vistaActual: string;
  onCambiarVista: (vista: string) => void;
}

function Sidebar({ usuario, vistaActual, onCambiarVista }: SidebarProps) {
  return (
    <aside className="sidebar">

      <div className="sidebarPerfil" onClick={() => onCambiarVista('perfil')}>
        <div className="sidebarAvatarBorde">
          <img src={usuario.fotoPerfil} alt={usuario.nombreCompleto} className="sidebarAvatar" />
        </div>
        <p className="sidebarNombre">{usuario.nombreCompleto} ✓</p>
        <p className="sidebarUsername">{usuario.username}</p>
      </div>

      <div className="sidebarStats">
        <div className="sidebarStat">👥 {usuario.seguidores.toLocaleString()}</div>
        <div className="sidebarStat">❤️ {usuario.seguidores.toLocaleString()}</div>
      </div>

      <nav className="sidebarNav">
        <button
          className={vistaActual === 'home' ? 'sidebarItem sidebarItemActivo' : 'sidebarItem'}
          onClick={() => onCambiarVista('home')}
        >
          🏠 Inicio
        </button>
        <button className="sidebarItem">🔍 Explorar</button>
        <button className="sidebarItem">🎬 Reels</button>
        <button className="sidebarItem">📺 IGTV</button>
        <button className="sidebarItem">🔔 Notificaciones</button>
        <button
          className={vistaActual === 'perfil' ? 'sidebarItem sidebarItemActivo' : 'sidebarItem'}
          onClick={() => onCambiarVista('perfil')}
        >
          👤 Perfil
        </button>
      </nav>

    </aside>
  );
}

export default Sidebar;
