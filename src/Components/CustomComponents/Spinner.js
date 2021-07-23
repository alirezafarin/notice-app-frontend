import React from 'react'
import Loader from './Loader';

function Spinner({
  Component= null,   //the component or element to render 
  isLoading= false,  //isLoading
  data,              //the data to display
  noData=false,      //if true, the component is a plain element with no data property
  noContentMsg= '',  //the messsage to display if no data is returned from api call
  noLoadingDisplay= false, //if set to true, do not display spinner even if loading is true
  firstLoading= false  //if set to true, display spinner even if data is not null or empty 
                      //in contrast with the default, display component if data is present even if
                      // loading is true.
}) {

  const renderNoContentMsg = () => {
    return (
      <div className="no-content-yet">
        {noContentMsg}
      </div>
    );
  }

  const renderSpinner = () => {
    if(noLoadingDisplay) {
      return null;
    }

    return <Loader />;
  }

  // display loading even if data is available inside store (not need to even check)
  if(firstLoading && isLoading) {
    return renderSpinner();
  }

  if( noData ) {
    if(isLoading) {
      return renderSpinner();
    }

    return Component;
  }

  if( data ) {
    if( Array.isArray(data) && (data.length !== 0) ) {
      return Component;
    }
  
    if( typeof data === 'object' && data !== null ) {
      if(Object.keys(data).length !== 0) {
        return Component; 
      }
    }
  }
  // handle the number 0 which passes the prev if statement
  if(typeof data === 'number') {
    return Component;
  }

  if(isLoading) {
    return renderSpinner();
  }

  return renderNoContentMsg();
}

export default Spinner;