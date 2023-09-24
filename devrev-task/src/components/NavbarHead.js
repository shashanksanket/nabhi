import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ViewSearchResults from './ViewSearchResults';
import { useNavigate } from 'react-router-dom';

import {
  GlobalStyle,
  Navbar,
  NavLinks,
  NavLink,
  NavItem,
  SearchBox,
  RightContainer,
  BrandLogo,
  LoginLink
} from './Styles';

const NavbarHead = () => {
  const [auth,setAuth] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {

   if (localStorage.getItem("token")){
    setAuth(true)
   }
   else{
    setAuth(false)
    navigate('/login')
   }
    
  }, [])
  
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {

      console.log(searchValue);
      // Make a request to the Google Books API
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: searchValue,
        },
      });
      
      // Handle the response data here
      console.log(response.data);
      setSearchResults(response.data);
      
      // Navigate to the SearchResults page with the search results
      navigate('/searchpage', { state: { searchResults: response.data } });

      // Reset the search term
      searchValue('');

    } catch (error) {
      // Handle any errors
      console.error(error);
    }


  };

  return (
    <div>
      <GlobalStyle />
      <Navbar>
        <NavLinks>
        {auth ? (
        <NavItem>
        <NavLink onClick={()=>{localStorage.removeItem("token")}} href="/login">Logout</NavLink>
      </NavItem>
      ) : (
        <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
      )}
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/viewbooks">View Books</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/borrowbooks">Borrowed Books</NavLink>
          </NavItem>
        </NavLinks>
        <RightContainer>

        <form onSubmit={handleSearch}>
        
        <SearchBox
              type="text"
              placeholder="Search for Books"
              id="searchInput" // Add a unique id attribute
              name="search" // Add a unique name attribute
              value={searchValue}
              onChange={handleSearchChange}
            />

        </form>

        </RightContainer>
        <RightContainer style={{ marginLeft: '20px' }}>
          <BrandLogo src="logo.png" alt="Library Management System Logo" />
        </RightContainer>
      </Navbar>
      {searchResults && <ViewSearchResults searchResults={searchResults} />}

    </div>
  );
};

export default NavbarHead;
