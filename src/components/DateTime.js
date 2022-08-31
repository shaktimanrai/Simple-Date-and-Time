import React from 'react'




function DateTime () {
// const name="Shaktiman";
// const CurrentDate = new Date().getDate();
const CurrentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString();
  return (<>
 {/* <h1>My name is {name}</h1> */}
 <h1>Hello Date And Time</h1>
 <p>Current Date is = {CurrentDate}</p>
 <p>Current Time is = {CurrentTime}</p>

    </>
  );
};

export default DateTime;