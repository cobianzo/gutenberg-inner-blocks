const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

let defaultEntry = defaultConfig.entry;

console.log( 'mierda entry', defaultEntry );
// defaultEntry = {
// 	theblock: './src',
// };
// defaultEntry.add( { frontend: './src/frontend.js' } );
module.exports = {
	...defaultConfig,
	entry: {
		index: './src/index.js',
		frontend: './src/frontend.js',
	},
};
