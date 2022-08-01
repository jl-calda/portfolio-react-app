import React from 'react';

const NavigationDots = (active) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skill', 'testimonials', 'contact'].map(
        (item, key) => (
          <a
            href={`#${item}`}
            key={item + key}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
