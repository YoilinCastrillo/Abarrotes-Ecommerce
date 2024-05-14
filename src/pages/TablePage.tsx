import { useState } from 'react';
import NewPage from '../pages/NewPage';



const TablePage = () => {

  const [showData, setShowData] = useState(false);
  const handleClick = () => {
    setShowData(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Hola</button>
      {showData && <NewPage />}
    </div>
  );
};

export default TablePage;