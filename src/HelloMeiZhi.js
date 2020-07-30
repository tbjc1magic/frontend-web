import React from 'react';

const Hello = () => {
  
  function sayHello() {
    alert('Hello, MeiZhi!');
  }
  
  return (
    <button onClick={sayHello}>Click me!</button>
  );
};

export default Hello;
