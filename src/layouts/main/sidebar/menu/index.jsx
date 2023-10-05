import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/" className="group block">
        <div className="p-3 inline-flex items-center gap-5 rounded-full transition-colors group-hover:bg-[rgba(239,243,244,0.1)]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#e7e9ea"
              d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"
            />
          </svg>
          <div className="text-xl mr-4">Anasayfa</div>
        </div>
      </NavLink>
      <NavLink to="/explore" className="group block">
        <div className="p-3 inline-flex items-center gap-5 rounded-full transition-colors group-hover:bg-[rgba(239,243,244,0.1)]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#e7e9ea"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
          <div className="text-xl mr-4">Keşfet</div>
        </div>
      </NavLink>
      <NavLink to="/notifications" className="group block">
        <div className="p-3 inline-flex items-center gap-5 rounded-full transition-colors group-hover:bg-[rgba(239,243,244,0.1)]">
          <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
            <path
              fill="#e7e9ea"
              d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
            />
          </svg>
          <div className="text-xl mr-4">Bildirimler</div>
        </div>
      </NavLink>
    </nav>
  );
};

export default Menu;
