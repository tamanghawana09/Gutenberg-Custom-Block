<?php
/**
 * Plugin Name: Hawana Slider Block
 * Description: This is a Slider block made with Swiper for testing.
 * Author: Hawana Tamang
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) exit; 

// Register the block
add_action('init', function () {
    wp_register_script('slider-block-js', plugin_dir_url(__FILE__) . 'slider-block.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-block-editor'), filemtime(plugin_dir_path(__FILE__) . 'slider-block.js'), true);
    wp_register_style(
        'slider-block-css',
        plugin_dir_url(__FILE__) . 'slider-block.css',
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'slider-block.css')
    );

    register_block_type('hawana-slider/slider-block', [
        'editor_script' => 'slider-block-js',
        'editor_style'  => 'slider-block-css',
    ]);
});

// Enqueue Swiper assets for frontend and editor
function hawana_slider_enqueue_assets() {
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');

    wp_enqueue_script(
        'swiper-js',
        'https://unpkg.com/swiper/swiper-bundle.min.js',
        array(),
        null,
        true
    );

    // Enqueue frontend script only if the file exists
    $frontend_script_path = plugin_dir_path(__FILE__) . 'slider-block-frontend.js';
    if (file_exists($frontend_script_path)) {
        wp_enqueue_script(
            'slider-block-frontend',
            plugin_dir_url(__FILE__) . 'slider-block-frontend.js',
            array('swiper-js'),
            filemtime($frontend_script_path),
            true
        );
    }
    wp_enqueue_style('slider-block-frontend-css', plugin_dir_url(__FILE__) . 'slider-block.css', array(), plugin_dir_path(__FILE__) . 'slider-block.css');
}
add_action('wp_enqueue_scripts', 'hawana_slider_enqueue_assets');


add_action('enqueue_block_editor_assets', function() {
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');
    wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), null, true);
});