import Aurelia from 'aurelia';
// Our router configuration import to register the Router with Aurelia's DI
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';
import { MissingPage } from './resources/elements/missing-page';
// Importar los estilos CSS de FontAwesome
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/global.css';
import $ from 'jquery';

// Opcional: Si necesitas usar jQuery globalmente
window.$ = $;
window.jQuery = $;

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
