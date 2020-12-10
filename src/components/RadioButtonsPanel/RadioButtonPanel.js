import './RadioButtonPanel.css';

export const RadioButtonPanel = ({status, changeStatusHandler, isAll}) => {
  return (
    <div className="radio__container">
      <div className="radio">
        <input 
          type="radio" 
          value="client" 
          checked={status === 'client'} 
          onChange={changeStatusHandler}
          />
          <label>Client</label> 
      </div>
      <div className="radio">
        <input 
          type="radio" 
          value="partner"  
          checked={status === 'partner'} 
          onChange={changeStatusHandler}
          />
          <label>Partner</label>
      </div>
      <div className="radio">
        <input type="radio" 
        value="admin"  
        checked={status === 'admin'} 
        onChange={changeStatusHandler}
        />
        <label>Admin</label>
      </div>
      {isAll ? 
        <div className="radio">
        <input type="radio" 
        value="all"  
        checked={status === 'all'} 
        onChange={changeStatusHandler}
        />
        <label>Все</label>
      </div>
      : null
      }
      
  </div>
 )
}