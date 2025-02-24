export class MyApp {
  static routes = [
    {
      path: '',
      component: import('./resources/elements/home'),
      title: 'Index'
    },
    {
        path: 'books',
        component: import('./resources/elements/books'),
        title: 'Books'
    }
];
}

