import React from 'react';
import Flex from '../components/Flex';

const Header: React.FC<any> = (props) => {
  return (
    <header>
      <Flex
        role="img"
        aria-label="Home24 Logo"
        boxShadow="md"
        backgroundColor="white"
        justifyContent="space-between"
        padding="md">
        <nav>
          <a href="/" title="Home">
            <img height="30px" src="/home24_logo.svg" alt="Home24" />
          </a>
        </nav>
        <input
          data-testid="search"
          type="text"
          placeholder={`Search Product`}
          onChange={(e) => props.changeHandler(e.target.value)} />
      </Flex>
    </header>
  );
}

export default Header;
