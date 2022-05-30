import Splide from '@splidejs/splide';
// Default theme
import '@splidejs/splide/css';

// or other themes
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';

// or only core styles
import '@splidejs/splide/css/core';

console.log( Splide );
//alert( 'frontend' );

new Splide( '.splide' ).mount();
