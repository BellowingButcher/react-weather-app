import React from 'react';
import ReactDOM from 'react-dom/client';
// import SubmitButton from './submitButton';
import ZipInput from './ZipInput';
// import ZipInput from './ZipInput';
let root = ReactDOM.createRoot(document.getElementById('root'));
// const SubButton = <SubmitButton />
const zipField = <ZipInput />
root.render(zipField);