import React from 'react';
import './app-header.css';

const AppHeader = ({all})=>{
return (
   <div className="app-header d-frex ">
        <h1>Dmitriy Shirmanov</h1>
        <h2>{all} записей, 1 из них понравилась</h2>
   </div>
)
}
export default AppHeader;