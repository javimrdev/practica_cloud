import { generatePath } from 'react-router-dom';

interface BaseRoutes {
  pokemon: string;
  detail: string;
}

export const baseRoutes: BaseRoutes = {
  pokemon: 'pokemon',
  detail: 'pokemon/:name',
};

interface Routes extends Omit<BaseRoutes, 'detail'> {
  detail: (name: string) => string;
}

export const routes: Routes = {
  ...baseRoutes,
  detail: name => generatePath(baseRoutes.detail, { name })
};
