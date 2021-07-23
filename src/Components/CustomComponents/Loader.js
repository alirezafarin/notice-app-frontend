import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';

function Loader() {
  return (
    <div className="preLoader">
      <CircularProgress />
      <div>در حال دریافت اطلاعات</div>
    </div>
  )
}

export default Loader;
