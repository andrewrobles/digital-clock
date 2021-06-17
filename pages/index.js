import React from 'react';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext';

export default function Home() {
  return (
    <div>
        <ReactFitText compressor={0.4}>
          <h1>
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
          </h1>
        </ReactFitText>
    </div>
  )
}
