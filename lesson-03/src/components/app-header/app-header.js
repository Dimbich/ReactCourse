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
   return (
      <Header colored>
         <h1>Dmitriy Shirmanov</h1>
         <h2>{all} записей, {like} из них понравилась</h2>
      </Header >
   )
}
export default AppHeader;