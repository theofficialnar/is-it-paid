import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import styles from '../styles/Nav.module.scss';
import { NAV_ITEMS } from '../config/constants';

const cx = classNames.bind(styles);

export default function Nav() {
  const [ collapse, setCollapse ] = useState<boolean>(false);
  const { pathname }: { pathname: string } = useRouter();
  const navClassname: string = cx({
    nav: true,
    collapsed: collapse
  })

  /**
   * Sets the classname for each nav item.
   * @param {string} activeRoute Active page route.
   * @param {string} navItemRoute Route of nav item.
   * @returns {Object} Classname object.
   */
  function getClassName(activeRoute: string, navItemRoute: string): string {
    return cx({
      navItem: true,
      active: activeRoute === navItemRoute,
    });
  }

  // TODO: Persist collapse on page change
  function handleCollapse(): void {
    setCollapse(!collapse)
  }

  return (
    <nav className={navClassname}>
      <div className={styles.titleContainer}>
        <Button onClick={handleCollapse} transparent>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <h1 className={styles.title}>Is It Paid?</h1>
      </div>
      {NAV_ITEMS.map(nav => {
        return (
          <Link 
            key={nav.path} 
            href={nav.path}
          >
            <a className={getClassName(pathname, nav.path)}>
              <FontAwesomeIcon icon={nav.icon} />
              <span>
                {nav.name}
              </span>
            </a>
          </Link>
        )
      })}
    </nav>
  )
}