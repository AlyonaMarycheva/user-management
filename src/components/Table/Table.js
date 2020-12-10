import './Table.css';
import { AiFillDelete } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';

export const Table = ({users, setUsers, setEditedUser, setIsOpen}) => {

  const deleteUser = (deletedUser) => {
    const redusedArray = users.filter(user => user!==deletedUser);
    setUsers(redusedArray);
  }

  const editUser = (user) => {
    setEditedUser(user);
    setIsOpen(true);
  }

  return (
    <div className="table-container">
    
     <header className="header">Пользователи</header>
      <table className="users">
      <thead>
          <tr>
            <th>ФИО</th>
            <th>электронный адрес</th>
            <th>телефон</th>
            <th>пароль</th>
            <th>статус</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => 
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.number}</td>
            <td>{user.password}</td>
            <td>{user.status}</td>
            <td className="dates">
                <div>создано: {user.creationDate} </div>
                <div>отредактировано: {user.editionDate}</div>
            </td>
            <td>
            <button className="svg-button" onClick={(e) => editUser(user, e)}>
                <BiPencil size='1.5rem' className="svg"/>
              </button>
              <button className="svg-button" onClick={(e) => deleteUser(user, e)}>
                <AiFillDelete size='1.5rem' className="svg"/>
              </button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

