<?php
/**
 * Plugin Name: Gutenberg Custom Block
 * Description: Gutenberg Custom Block for Contact Information
 * Author: Hawana Tamang
 * Version: 1.0.0
 */

 if(!defined('ABSPATH')){
    exit;       //This is for security purpose (if accessed directly then exit)
 }

 function gutenberg_custom_block_script_register(){
    wp_enqueue_script('gutenberg-custom-block',plugin_dir_url(__FILE__) .'gutenberg-custom.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
 }
 add_action('enqueue_block_editor_assets','gutenberg_custom_block_script_register');

?>