<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wpreactpm
 */

get_header();

// foreach (get_users() as $user) {
//   $user_image_array = get_field('thumbnail', "user_" . $user->ID);
//   pr1($user_image_array['sizes']['user-thumbnail']);
// }
?>



<div id="wprg-root">

    HERE COMES THE WEB APP

</div>

<?php
get_footer();
