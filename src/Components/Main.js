 
 import React, { Component } from 'react';
 import {  Route ,Routes} from 'react-router-dom';
 
 // Our all component files
 import ListEmployee from '../Components/ListEmployee';
 import AddEmployee from '../Components/AddEmploee';
 import EditEmployee from '../Components/EditEmployee';
 
 class Main extends Component {
 
 render() {
 return (
 <main>
 <Routes>
 <Route  path='/' element={<ListEmployee/>}/>
 <Route path='/list' element={<ListEmployee/>}/> 
 <Route path='/addemployee' element={<AddEmployee/>} />
 <Route path='/editemployee/:id' element={<EditEmployee/>} />
 </Routes>
 </main>
 );
 }
 }

 export default Main;