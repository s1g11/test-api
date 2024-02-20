import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('')
  const [res, setRes] = useState('')

  const send = async () => {
      const res = await axios.get(url)
      setRes(JSON.stringify(res))
  }

  return (
    <>
        <h1>тимофей мощь</h1>
        <input onChange={e => setUrl(e.currentTarget.value)} value={url} type="text"/>
        <button onClick={send}>send</button>
        {res}
    </>
  )
}

export default App
