import React, { useState, useEffect } from 'react';

import { FloatingButton } from '../FloatingButton/FloatingButton';
import { Table } from '../Table/Table';
import { Popup } from '../Popup/Popup';
import { Header } from '../Header/Header';

import './App.css';


export const App = () => {
  const [editedUser, setEditedUser] = useState(null);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : []
  });

  const [filteredUser, setFilteredUsers] = useState(users);
  const openPopup = () => setPopupIsOpen(true);

  const changeFilterStatusHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  const changeSearchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(()=> {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  useEffect(()=> {
    if (filterStatus !== 'all')
      setFilteredUsers(users.filter(user => user.status === filterStatus))
    else 
      setFilteredUsers(users);

    if (search)
      setFilteredUsers(users.filter(user => user.email.includes(search) || user.number.startsWith(search)))
  }, [search, filterStatus, users])

  return (
    <div>
      <Header search={search} changeSearchHandler={changeSearchHandler} status={filterStatus} changeStatusHandler={changeFilterStatusHandler}/>
      <Table 
        users={filteredUser} 
        setEditedUser={setEditedUser} 
        setIsOpen={setPopupIsOpen} 
        setUsers={setUsers} 
        status={filterStatus} 
        changeStatusHandler={changeFilterStatusHandler}
      />
      <FloatingButton onClick={openPopup}/>
      {popupIsOpen ? <Popup users={users} setEditedUser={setEditedUser} editedUser={editedUser} setUsers={setUsers} setIsOpen={setPopupIsOpen}/> : null}
    </div>
  );
}

