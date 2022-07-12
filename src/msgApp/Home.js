import React from 'react';
import Chat from './chat';
import Msgchat from './msgchat';

const Home = () => {
  return (
    <div className='right'>
      <div className='message'>
          <Msgchat/>
      </div>

      <h1 className='chat'>Chats</h1>

      <div className='row'>
          <div>
              <Chat/>
          </div>            
      </div>
    </div>
  );
};

export default Home
