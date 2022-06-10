<!-- <pre> DATOS: <?php print_r($attributes); ?></pre>
<pre> content: <?php print_r( esc_html( $content ) ); ?></pre> -->
<?php 

// parsing content to display it as slides.
// <div class="wp-block-cobianzo-my-inner">
$content = str_replace('<ul class="wp-block-cobianzo-my-inner', '<ul class="splide__list wp-block-cobianzo-my-inner', $content);
$content = str_replace('<hr class="container-start hidden"/>', '<li class="splide__slide">', $content);
$content = str_replace('<hr class="container-end hidden"/>', '</li>', $content);
?>




<section class="splide" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<!-- <ul class="splide__list">
			<li class="splide__slide">Slide 01</li>
			<li class="splide__slide">Slide 02</li>
			<li class="splide__slide">Slide 03</li>
		</ul> -->
    <?php echo $content; ?>
  </div>
</section>