import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'src/components/HelloWorld';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));

const veryLongNameOfFunction = (veryLongNameOfParams: string) => 123;

const veryLongNameOfFunctionMoreWords = (longNameOfParams: string) =>
  veryLongNameOfFunction('123123123');
