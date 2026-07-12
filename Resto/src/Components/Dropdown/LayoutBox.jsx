
import React from 'react'

import'./CSS/LayoutBox.css'
function LayoutBox({ children }) {
  return (
    <div className="box">
      {children}
    </div>
  );
}

export default LayoutBox