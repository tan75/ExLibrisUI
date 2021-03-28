import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import About from '../../pages/About/About';
import BookList from '../../pages/BookList/BookList';

import { ROUTE_ABOUT, ROUTE_BOOKS, ROUTE_HOME } from '../../constants';

const MainContent = () => {
  return (
    <div className="MainContent mt-3">
      <Container>
        <Switch>
          <Route path={ROUTE_BOOKS}>
            <BookList />
          </Route>
          <Route path={ROUTE_ABOUT} component={About} />
          <Route path={ROUTE_HOME}>
            <Redirect to={ROUTE_BOOKS} />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default MainContent;
