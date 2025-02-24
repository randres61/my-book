import Aurelia from 'aurelia';
// Our router configuration import to register the Router with Aurelia's DI
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';
import { MissingPage } from './resources/elements/missing-page';

Aurelia
  .register( 
        RouterConfiguration.customize({ 
            title: {
              transformTitle: (title, instruction, navigation ) => `${title} - MYAPP`
            },
            fallback: MissingPage
        }) 
  )
  .app( MyApp )
  .start();
