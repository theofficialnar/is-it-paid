import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Nav.module.css';
import { NAV_ITEMS } from '../config/constants';

export default function Nav() {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.topNav}>
        <h1 className={styles.title}>Is It Paid?</h1>
        {NAV_ITEMS.map(nav => 
          <Link 
            key={nav.path} 
            href={nav.path}
          >
            <a className={getClassName(pathname, nav.path)}>
              {nav.name}
            </a>
          </Link>
        )}
      </div>
      <div className={styles.bottomNav}>
        <FontAwesomeIcon icon={faChevronLeft} />
        {' '}
        Collapse
      </div>
    </nav>
  )
}

/**
 * Sets the classname for each nav item.
 * @param {string} activeRoute Active page route.
 * @param {string} navItemRoute Route of nav item.
 * @returns {string} Classname.
 */
function getClassName(activeRoute, navItemRoute) {
  return activeRoute === navItemRoute
    ? styles.navItemActive
    : styles.navItemNormal
}