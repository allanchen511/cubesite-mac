import './App.css';
import { useState, useEffect } from 'react';
import { supabase } from './client';

function App() {
  const [times, setTimes] = useState([])
  const [time, setTime] = useState({ scramble: "", secs: 0})
  const { scramble, secs } = time
  useEffect(() => {
    fetchTimes()
  }, [])
  async function fetchTimes() {
    const { data } = await supabase
      .from('times')
      .select("*")
    setTimes(data)
    console.log("data: ", data)
  }
  async function createTime() {
    await supabase
      .from('times')
      .insert([
        { scramble, secs }
      ])
      .single()
    setTime({ scramble: "", secs: 0})
    fetchTimes()
  }
  return (
    <div className="App">
      <input 
        placeholder="scramble"
        value = {scramble}
        onChange = {e => setTime({ ...time, scramble: e.target.value })}
      />
      <input
        placeholder="Time"
        value = {secs}
        onChange = {e =>setTime({ ...time, secs: e.target.value})}
      />
      <button onClick = {createTime}>Input Time</button>
      {
        times.map(time => (
          <div key={time.id}>
            <h3>{time.scramble}</h3>
            <p>{time.secs}</p>
          </div>
        ))
      }
      <div>
        <button onClick = {fetchTimes}>Fetch Times</button>
      </div>
    </div>
  );
}

export default App;
