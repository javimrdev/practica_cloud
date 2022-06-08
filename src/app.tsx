import { RouterComponent } from 'core/router/router.component';
import { LayoutComponent } from 'layouts/layout';
import React from 'react';

const App: React.FunctionComponent = () => {
  return (
      <LayoutComponent>
        <RouterComponent />
    </LayoutComponent>
  );
};

export default App;
