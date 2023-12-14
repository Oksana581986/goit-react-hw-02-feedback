import React from 'react';
import css from "./Section.css";


const Section = ({ title, children}) => (
    <div>
      <h2 className={css.title}> {title} </h2> 
      {children}
    </div>
  );

  export { Section };
