import { NavLink } from 'react-router-dom';
import './servicesSideMenu.css';

function ServicesSideMenu() {
  return (
    <aside>
      <ul className="ss-menu">
        <li className="ss-menu-item">
          <NavLink to="/services/business registration">
            Business Registration<i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </li>
        <li className="ss-menu-item">
          <NavLink to="/services/general supplies">
            General Supplies<i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </li>
        <li className="ss-menu-item">
          <NavLink to="/services/general printing services">
            General Printing Services<i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </li>
        <li className="ss-menu-item">
          <NavLink to="/services/import and export services">
            Import & Export Services<i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </li>
        <li className="ss-menu-item">
          <NavLink to="/services/computer software and hardware training">
            Computer Software & Hardware Training
            <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </li>
        <li className="ss-menu-item">
          <NavLink to="/services/real estate services">
            Real Estate Services<i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default ServicesSideMenu