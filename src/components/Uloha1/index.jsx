/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/
import React from 'react';

export const Uloha1 = () => {
  const showBubble = () => alert('Ahoj');
  return <button onClick={showBubble}>Ukaž bublinu</button>;
};
