import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const  SearchForm = () => {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    getdocumentos();
  }, []);
  
  const searchHandle = async (event) => {
    let key = event.target.value;
    let result = await fetch 
  };
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='conatiner'>
        <div className='search-form-content'>
          <div className='search-form-elem flex flex-sb bg-white'>
            <input type="text" 
            className='form-control' 
            placeholder="buscar ..."
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            />
            <button type="submit">
              <FaSearch className='text-purple' size={32} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
