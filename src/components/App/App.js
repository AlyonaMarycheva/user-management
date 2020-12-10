import React, { useState, useEffect } from 'react';

import { FloatingButton } from '../FloatingButton/FloatingButton';
import { Table } from '../Table/Table';
import { Input } from '../Input/Input';
import { Popup } from '../Popup/Popup';

import './App.css';


export const App = () => {
  // const userData = [
  //   {
  //     id: 1,
  //     name: "Иванов Иван Иванович",
  //     email: "ivan@mail.ru",
  //     number: "+79998887766",
  //     password: "imPassword22",
  //     status: "client",
  //     creationDate: "22-12-2020",
  //     editionDate: "22-12-2020"
  //   },
  //   {
  //     id: 2,
  //     name: "Максимова Александра Ивановна",
  //     email: "ivaываываn@mail.ru",
  //     number: "+79998887766",
  //     password: "imPasswвавord22",
  //     status: "client",
  //     creationDate: "22-12-2020",
  //     editionDate: "22-12-2020"
  //   },
  //   {
  //     id: 3,
  //     name: "Иванов Иван Иванович",
  //     email: "ivan@mail.ru",
  //     number: "+79998887766",
  //     password: "imPassword22",
  //     status: "client",
  //     creationDate: "22-12-2020",
  //     editionDate: "22-12-2020"
  //   }
  // ]

  // localStorage.setItem('users', JSON.stringify(userData));
  const [editedUser, setEditedUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : []
  });
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const openPopup = () => {
    setPopupIsOpen(true);
  } 

  useEffect(()=> {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  return (
    <div className="container">
      {/* <Input/> */}
      <Table users={users} setEditedUser={setEditedUser} setIsOpen={setPopupIsOpen} setUsers={setUsers} setIsOpen={setPopupIsOpen}/>
      <FloatingButton onClick={openPopup}/>
      {popupIsOpen ? <Popup users={users} setEditedUser={setEditedUser} editedUser={editedUser} setUsers={setUsers} setIsOpen={setPopupIsOpen}/> : null}
    </div>
  );
}

