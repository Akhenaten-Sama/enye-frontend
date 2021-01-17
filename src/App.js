import './App.scss';
import React, { useEffect, useState } from 'react';
import Cardlist from './components/Cardlist/Cardlist';
import SearchBox from './components/Filter/filter';
import {Loader} from 'react-loaders'

function App() {
  const [state, setState] = useState(null);
  const [filter, setFilter] = useState({
    searchField: '',
    genderField: '',
    paymentField: '',
    filterWord: '',
    criteria: '',
  });
  useEffect(() => {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then((data) => data.json())
      .then((data) => setState(data.records.profiles));
  }, []);
  const { searchField, criteria, filterWord } = filter;

  const filteredProfiles = state?.filter((profile) => {
    return profile.FirstName.toLowerCase().includes(searchField.toLowerCase());
  });

  const handlefilter = (e) => {
    const { name, value } = e.target;
    name === 'genderField'
      ? setFilter({
          ...filter,
          [name]: value,
          filterWord: value,
          criteria: 'Gender',
        })
      : setFilter({
          ...filter,
          [name]: value,
          filterWord: value,
          criteria: 'PaymentMethod',
        });
  };

  return (
    <div className="App">

      
      {console.log}

      <SearchBox
        handleGender={handlefilter}
        handlePaymentFilter={handlefilter}
        handleChange={(e) =>
          setFilter({ ...filter, searchField: e.target.value })
        }
      />
      {state ? (
        <Cardlist
          filterWord={filterWord}
          criteria={criteria}
          profiles={filteredProfiles}
        />
      ) : (
        <Loader type='ball-scale-multiple' active />
      )}
    </div>
  );
}

export default App;
