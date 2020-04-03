import React from 'react';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Álbuns</th>
          <th>Posts</th>
          <th>Fotos</th>
        </tr>
      </thead>
      <UsersList/>
    </table>
  
  );
}

export default App;
