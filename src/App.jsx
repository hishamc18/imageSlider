// import { useState } from 'react'
// import './App.css'
// import ImageSlider from './components/ImageSlider'


// function App() {
//   return (
//     <>
//         <ImageSlider />
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

function ColorInput() {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <input
      type="text"
      value={color}
      onChange={handleChange}
      style={{ backgroundColor: color }}
      placeholder="Type a color"
    />
  );
}

export default ColorInput;



//passing component as children
// import React from 'react';

// // Parent component that uses children
// function Container({ children }) {
//   return (
//     <div style={{ border: '1px solid black', padding: '20px' }}>
//       {children}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>My App</h1>

//       {/* Passing content as children */}
//       <Container>
//         <p>This is a paragraph inside the container.</p>
//         <button>Click me</button>
//       </Container>
//     </div>
//   );
// }

// export default App;