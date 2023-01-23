function Greeting() {
    return <h1>Hello world</h1>
  }
  function App() {
    return <Greeting/>
  }

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App/>)