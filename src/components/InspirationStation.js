import React from 'react';
import Meal from './Meal';

function InspirationStation() {
  return (
    <>
      <div className="overallInspire">
        <div className="overallInspireCard">
          <div className="inspirationContainer">
            <div className="scootDown">
              <h4>
                <b>Welcome to the Inspiration Station!</b>
              </h4>
              <h5>
                <i>Click the button to generate a random meal</i>
              </h5>
            </div>

            <div className="scroll">
              <Meal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InspirationStation;
