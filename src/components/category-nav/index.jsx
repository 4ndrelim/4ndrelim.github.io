import React from 'react';

const classes = {
  wrapper: 'pt-12 border-b border-gray-300',
  nav: 'flex flex-wrap gap-4 md:gap-8',
  navItem: 'pb-2 uppercase tracking-wider font-semibold text-xs cursor-pointer transition-colors whitespace-nowrap',
  navItemActive: 'text-gray-900 border-b-2 border-gray-900',
  navItemInactive: 'text-gray-600 hover:text-black',
};

const CategoryNav = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'personal', label: 'Personal' },
    { id: 'readings', label: 'Readings' },
    { id: 'tech', label: 'Tech' },
  ];

  return (
    <div className={classes.wrapper}>
      <nav className={classes.nav}>
        {categories.map(({ id, label }) => {
          const isActive = activeCategory === id;
          return (
            <button
              key={id}
              onClick={() => onCategoryChange(id)}
              className={`${classes.navItem} ${
                isActive ? classes.navItemActive : classes.navItemInactive
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default CategoryNav;
