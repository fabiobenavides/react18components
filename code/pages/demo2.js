import { useState } from 'react'

const Demo2 = ({darkTheme, toggleTheme}) => {
  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}
      onClick={toggleTheme}>
        demo2
    </div>
  )
}

const withTheme = (Component) => {
  function Func(props) {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
      <Component {...props} 
        darkTheme={darkTheme} 
        toggleTheme={() => setDarkTheme(!darkTheme)} />
    )
  }
  return Func;
}

export default withTheme(Demo2);
