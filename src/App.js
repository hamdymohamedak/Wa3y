import React, { useEffect, useState } from 'react';
import './App.css';
import { toast, Toaster } from 'react-hot-toast'; // Import toast and Toaster

function App() {
  const [finishCount, setFinishCount] = useState(
    Number(localStorage.getItem("finishCount")) || 21
  );
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );
  const countEvent = () => {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
    if (count === finishCount - 1) {
      toast.success('Congratulations,Iam sure you can do it ', {
        duration: 3000,
        position: 'bottom-left',
        style: {
          background: 'green',
          color: 'white',
        },
      });
      toast.success('Your body is now fully recovered from the effects of that habit', {
        duration: 3000,
        position: 'bottom-left',
        style: {
          background: 'green',
          color: 'white',
        },
      });
      setFinishCount(90);
      localStorage.setItem("finishCount", 90);
    }
  };
  if (count === 90) {
    toast.success('Congratulations,You Do it you are Hero  ', {
      duration: 30000,
      position: 'bottom-left',
      style: {
        background: 'green',
        color: 'white',
      }
    });
    toast.success(' Your subconscious mind now doesnt want that habit again and you wont want to have it ', {
      duration: 30000,
      position: 'bottom-left',
      style: {
        background: 'green',
        color: 'white',
      }
    });
  }

  const resetEvent = () => {
    setCount(0);
    setFinishCount(21);
    localStorage.setItem("count", 0);    
    localStorage.setItem("finishCount", 21);  
    toast.loading(' No problem, try again. Nothing is easy at first. I trust you', {
      duration: 30000,
      position: 'bottom-left',
      style: {
        background: '#900C3F',
        color: 'white',
      }
    });
    toast.loading('  Always remember that your body gets used to that habit for a period of time, so you have to hold out for a longer period because the challenge is not easy, many people have done that and you are not weaker than them. Continue', {
      duration: 30000,
      position: 'bottom-left',
      style: {
        background: '#900C3F',
        color: 'white',
      }
    });
  };


  return (
    <div className="App">
      <div className='title'>21 days to lose the effects of the habit and 90 days to forget it</div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-800">
        <div className="relative font-mono font-extrabold text-9xl grid grid-cols-2 text-right text-white shadow-2xl gap-x-px border-8 border-yellow-100 rounded">
          <div className="absolute inset-x-0 -bottom-5 mx-auto flex justify-center">
            <div className="w-3/4 h-5 bg-yellow-100 rounded" />
          </div>
          <div className="relative py-8 px-5">
            <div className="absolute inset-0 w-full h-full grid grid-rows-2">

              <div className="bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="bg-gradient-to-br from-gray-700 to-gray-900" />
            </div>
            <div className="relative"> {count} </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="h-px w-full bg-gray-800" />
            </div>
          </div>
          <div className="relative py-8 px-5">
            <div className="absolute inset-0 w-full h-full grid grid-rows-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="bg-gradient-to-br from-gray-700 to-gray-900" />
            </div>
            <div className="relative"> {finishCount} </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="h-px w-full bg-gray-800" />

            </div>
          </div>
        </div>
        <div className='btns'>
          <button onClick={countEvent}> Add Day</button>
          <button onClick={resetEvent} >Reset</button>
        </div>
      </div>

      <Toaster /> {/* Render the toast notifications */}


    </div>
  )
}

export default App;


