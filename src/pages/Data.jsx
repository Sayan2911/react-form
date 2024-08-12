import React from 'react'
import { useLocation } from 'react-router-dom';

const Data = () => {
  const location = useLocation();
  const { fname } = location.state || {};
  console.log(fname);
  
  return (
    <div>


      {fname}
    </div>
  )
}

export default Data