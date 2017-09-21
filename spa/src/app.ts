import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'home/index',      nav: true, title: 'Greeter' },
      { route: 'charging-history',  name: 'charging-history', moduleId: 'charging-history/index', nav: true, title: 'Charging History' }
    ]);

    this.router = router;
  }
}
