import React from 'react';
const Icon = ({icon,type}) => {
  return (
    <>
        {
            type === "DARK"
            &&
            <div className="customizeIcon dark">
                {icon}
            </div>
        }
        {
            type === "LIGHT"
            &&
            <div className="customizeIcon light">
                {icon}
            </div>
        }
    </>
    
  )
};

export default Icon;
