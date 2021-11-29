import React , { useState } from "react";
import InputRange from "react-input-range";

const InputRangeSlider = (props) =>{

 const [value, setvalue] = useState({ min: 0, max: 200 } );

  const seeState = evt => {
    setvalue(evt.target.value);
  };

  const setMin = evt => {
    setvalue({
      value: {
        min: Number(evt.target.value),
      }
    })
    
  };

  const setMax = evt => {
    setvalue({    
      value:  { ...this.value, max: Number(evt.target.value) }
    })
  }

  const setRange = (min, max)  => {

     setvalue({ value: { min, max } });
     console.log("minnnnnnnn====>",min);
     console.log("maxxxxxxx=====>", max);
  }

 

  return (
    
      <form className="form">
        <div className="input-range-wrapper">
       
          <InputRange
            maxValue={200}
            minValue={0}
            value={value}
            onChange={setvalue}         
            // onChange={(value) => setvalue({ value })}
            onChangeComplete={(value) => console.log(value)}
        />
      
          <div className= 'bothinput'>
            <p className="p">$</p>
            <input
              style={{ width: '20%' , border: 'none' }}
              type="text"
              value={value.min}
              onChange={
                  (evt) => evt.target.value
              }
            />
           
            <input
             style={{ width: '20%', borderBottomColor: '#cccccc',  borderBottom: '2px' , borderTop: 'none',  borderLeft: 'none', borderRight: 'none'}}
            type="text"
            value={value.max}
            onChange={
              (evt) => evt.target.value
          }
          />
           <button className="Gobtn">GO</button>
          </div>          
        </div>
      </form>
    )
}

export default InputRangeSlider;
;
