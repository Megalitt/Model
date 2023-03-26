import React from 'react';
import {useImmer} from 'use-immer';
import './App.css';


interface Param {
  id: number;
  name: string;
};
interface ParamValue {
   paramId: number;
   value: string;
};
interface Model {
   paramValues: ParamValue[];
};
interface Props {
   params: Param[];
   model: Model;
};
const propse = {
  params:[
    {
      id: 1,
      name: "Назначение",
    },
    {
      id: 2,
      name: "Длина",
    }
  ],
  model: {
    paramValues: [
      {
        paramId: 1,
        value: "повседневное",
      },
      {
        paramId: 2,
        value: "макси",
      }
    ] 
  }
};
 


function App(){

  const [paramModel, setParamModel] = useImmer<Props>(propse);

  const changeModel = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setParamModel((state) => {
      state.model.paramValues[i].value = e.target.value;
      }
    )
  };
  
  return (
    <div className="App">
      {paramModel.params.map((nam, i) =>
        <form className='form'>   
          <div className='for' key={i}>{nam.name}</div> 
          <input  className='for' value={paramModel.model.paramValues[i].value} key={i} onChange={(e) => changeModel(e, i)}/>
        </form>
        )}
    </div>
  );
}

export default App;


