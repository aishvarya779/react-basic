import React from 'react';

// const Loading = () => <h1>Loading...</h1>;

// component with input props
const Loading = props => <h1>{props.message}</h1>;

// use of destructring
// const Loading = ({ message }) => <h1>{message}</h1>;

export default Loading;

// if many export then no need export default use export every one

// export const Loading1 = () => <h1>Loading...</h1>;
// export const Loading2 = () => <h1>Loading...</h1>;
// and for many export then import with curly braces
//  import {Loading1, Loading2} from './Loading'
