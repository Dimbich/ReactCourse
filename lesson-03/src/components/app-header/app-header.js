import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   h1 {
      color: ${props => props.colored ? 'red' : 'black'}
      font-size: 26px;
      :hover {
         color: blue;
      }   
   }     

   h2 {
      font-size: 1.2rem;
      color: grey;     
   }
`

const AppHeader = ({all, like})=>{
   const getCountRecText = (num)=>{
      let countRec; 
      num +='';
      let lastTwoNumber = num%100;
      // можно проще немного у Саши подсматрел 
      // lastTwoNumber = num%100;
      
      if (lastTwoNumber > 19 ) {
          lastTwoNumber=lastTwoNumber%10;      
      } 
      switch (lastTwoNumber) {
       case 1 :
           countRec=`${num} запись`;
           break;
       case 2:
       case 3:
       case 4:
           countRec=`${num} записи`;
           break;     
       default:
           countRec=`${num} записей`;
           break;  
      }
      return countRec;
   };

   return (
      <Header colored>
         <h1>Dmitriy Shirmanov</h1>
         <h2>{getCountRecText(all)}, {like} из них понравилась</h2>
      </Header >
   )
}
export default AppHeader;