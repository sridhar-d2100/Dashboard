// page.tsx
"use client"
const handleClick = () => {
  window.location.href = 'https://sridhardataengineer.netlify.app/Routes'; // Replace with your desired external URL
};

const ExampleComponent = () => (
  <div>
    <h1>Hello, Next.js!</h1>
    <button onClick={handleClick}>Go to External Website</button>
  </div>
);

export default ExampleComponent;
