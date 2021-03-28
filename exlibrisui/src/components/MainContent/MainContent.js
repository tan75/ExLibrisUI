import React from 'react';
import { Switch, Route } from 'react-router-dom;';
import Container from 'react-bootstrap/Container';
import About from '../../pages/About/About';
import BookList from '../../pages/BookList/BookList';

import { ROUTE_ABOUT } from '../../constants';

const MainContent = () => {
  return (
    <div className="MainContent mt-3">
      <Container>
        <Switch>
          <Route path={ROUTE_ABOUT}>
            <About />
          </Route>
        </Switch>
        <BookList />
      </Container>
    </div>
  );
};

export default MainContent;
