import Splide from '@splidejs/splide';

// this doesnt include it, but makes it that webpack generates build/frontend.css - use 'npm run build'
import './frontend.scss';

console.log( Splide );
alert( 'frontend' );

new Splide( '.splide' ).mount();
