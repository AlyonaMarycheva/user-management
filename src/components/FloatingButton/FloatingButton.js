import './FloatingButton.css';

export const FloatingButton = ({ onClick}) => {
  return (
    <div onClick={onClick} className="button--floating">
      + 
    </div>
  )
};
