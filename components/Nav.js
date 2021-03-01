import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import styles from '../styles/Nav.module.scss';
import { NAV_ITEMS } from '../config/constants';

const cx = classNames.bind(styles);

export default function Nav() {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Is It Paid?</h1>
        <Button onClick={handleCollapse} transparent>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
      </div>
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
    </nav>
  )
}

/**
 * Sets the classname for each nav item.
 * @param {string} activeRoute Active page route.
 * @param {string} navItemRoute Route of nav item.
 * @returns {Object} Classname object.
 */
function getClassName(activeRoute, navItemRoute) {
  return cx({
    navItem: true,
    active: activeRoute === navItemRoute,
  });
}

function handleCollapse() {
  console.log('handleCollapse')
}