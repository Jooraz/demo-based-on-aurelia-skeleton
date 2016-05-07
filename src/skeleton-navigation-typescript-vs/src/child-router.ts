import {Router, RouterConfiguration} from 'aurelia-router'

//info: router prawie identyczny jak w app.ts
//info: mo?na tworzy? wiele poziom�w router�w
export class ChildRouter {
  heading = 'Child Router';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
