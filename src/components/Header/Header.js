import { RadioButtonPanel } from '../RadioButtonsPanel/RadioButtonPanel';
import { Input } from '../Input/Input';

import './Header.css'

export const Header = ({search, changeSearchHandler, status, changeStatusHandler}) => {
  return (
    <div className="header__container">
    <div className="header__search ">
     <Input 
         value={search}
         placeholder="Поиск по email и номеру телефона..."
         changed={changeSearchHandler}
       />
       </div>
     
    <RadioButtonPanel status={status} changeStatusHandler={changeStatusHandler} isAll={true}/>
    </div>
  )
}