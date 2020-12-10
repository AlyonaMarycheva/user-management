import React, { useState } from 'react';
import { Input } from '../Input/Input';
import './Popup.css';

export const Popup = ( {users, setUsers, setIsOpen, editedUser, setEditedUser} ) => {
  const [ name, setName ] = useState(() => editedUser ? editedUser.name : '');
  const [ email, setEmail ] = useState(() => editedUser ? editedUser.email : '');
  const [ number, setNumber ] = useState(() => editedUser ? editedUser.number : '');
  const [ password, setPassword ] = useState(() => editedUser ? editedUser.password : '');
  const [ status, setStatus ] = useState(() => editedUser ? editedUser.status : '');

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changeNumberHandler = (e) => {
    setNumber(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeStatusHandler = (e) => {
    setStatus(e.target.value);
  };
  
  const closePopup = () => {
    setIsOpen(false);
    setEditedUser(null);
  }

  const addUser = (event) => {
    event.preventDefault();
    const userObject = {
      id: Math.floor(Math.random() * 10**8),
      name,
      email,
      number,
      password,
      status,
      creationDate: new Date().toLocaleDateString(),
      editionDate: new Date().toLocaleDateString()
    };
    setUsers(users.concat(userObject));
    closePopup();
  }

  const editUser = (event) => {
    event.preventDefault();
    const userObject = {
      id: editedUser.id,
      name,
      email,
      number,
      password,
      status,
      creationDate: editedUser.creationDate,
      editionDate: new Date().toLocaleDateString()
    };
    setUsers(users.filter(user => user.id != editedUser.id).concat(userObject));
    closePopup();
  }

  return (
    <div>
      <div className="popup__backdrop" onClick={closePopup}></div>
      <div className="popup">
      <div className="popup__header">{editedUser ? 'Редактирование' : 'Создание пользователя'}
        <button className="button--close" onClick={closePopup}>×</button>
      </div>
      <form className="popup__content" onSubmit={editedUser ? editUser : addUser}>
          <div className="popup__item">
            <Input 
              value={name}
              placeholder="ФИО"
              changed={changeNameHandler} 
              required={true}
            />
          </div>
          <div className="popup__item">
            <Input 
              value={email}
              type="email"
              placeholder="Электронный адрес"
              changed={changeEmailHandler}
              required={true} 
            />
          </div>
          <div className="popup__item">
            <Input 
              value={number}
              placeholder='Номер телефона'
              changed={changeNumberHandler} 
              required={true}
            />
          </div>
          <div className="popup__item">
            <Input 
              value={status}
              placeholder="Статус"
              changed={changeStatusHandler}
              required={true}
            />
          </div>
          <div className="popup__item">
            <Input 
              value={password}
              placeholder="Пароль"
              type="password"
              changed={changePasswordHandler} 
              required={true}
            />
          </div>          
          <button type="submit" className="popup__button">{editedUser ? 'Сохранить' : 'Создать'}</button>
        </form>
        </div>
    </div>
  )

}