document.querySelector('#app').innerHTML = `
  <h1>Environment Parameters</h1>
  <p>MODE: ${import.meta.env.MODE}</p>
  <p>DEV: ${import.meta.env.DEV}</p>
  <p>PROD: ${import.meta.env.PROD}</p>
  <p>VITE_ENV: ${import.meta.env.VITE_ENV}</p>
`;
