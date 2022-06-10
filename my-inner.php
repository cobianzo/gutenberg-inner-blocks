<?php
/**
 * Plugin Name:       My Inner
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       aaa
 *
 * @package           cobianzo
 */

/** Register the block in PHP */
add_action( 'init', 'create_block_my_inner_block_init' );
function create_block_my_inner_block_init() {
	register_block_type( __DIR__ . '/build/block.json', [
		"render_callback" => "render_block_php",
	] );
}

/** PHP server side render on frontend - view.php */
function render_block_php($attributes, $content) {
	
	ob_start();

	echo '<div ' . get_block_wrapper_attributes( [ 'class' => 'my-own-class' ] ). '>';
		require_once 'view.php';
		// get_template_part( 'view', '' , $attributes );
	echo '</div>';
	
	return ob_get_clean();
}



/** Load js in frontend */
add_action( 'enqueue_block_assets', 'myplugin_enqueue_if_block_is_present' );  // Can only be loaded in the footer
// add_action( 'wp_enqueue_scripts', 'myplugin_enqueue_if_block_is_present' ); // Can be loaded in the both in head and footer
function myplugin_enqueue_if_block_is_present(){

    if ( has_block( 'cobianzo/my-inner' ) ) {			
        wp_enqueue_script(
            'my-inner-js-slider',
            plugin_dir_url( __FILE__ ) . '/build/frontend.js',
            array(),
            '1.0.0',
            true
        );

				wp_enqueue_style( 
						'my-inner-css-slider', 
						//plugin_dir_url( __FILE__ ) . '/node_modules/@splidejs/splide/dist/css/splide.min.css',
						plugin_dir_url( __FILE__ ) . '/build/frontend.css',
						[], 
						1 
				);
    }
}