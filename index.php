<?php
/*
Plugin Name: Simple CTA Button
Description: A reusable Call-To-Action (CTA) button block with consistent editor and frontend styles.
Version: 1.0
Author: Cosmin
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SimpleCTAButton {
    public function __construct() {
        // Load JavaScript for the Gutenberg editor
        add_action('enqueue_block_editor_assets', array($this, 'loadBlockEditorAssets'));

        // Load CSS for both frontend and editor
        add_action('enqueue_block_assets', array($this, 'loadBlockStyles'));
    }

    /**
     * Load JavaScript for the Gutenberg editor.
     */
    public function loadBlockEditorAssets() {
        wp_enqueue_script(
            'cta-button-in-content-js',
            plugin_dir_url(__FILE__) . 'build/index.js',
            array('wp-blocks', 'wp-element', 'wp-editor'), // Dependencies
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
            true
        );
        wp_localize_script('cta-button-in-content-js', 'wp_theme_directory', get_template_directory_uri());

        // Load editor-specific CSS
        wp_enqueue_style(
            'cta-button-in-content-editor-css',
            plugin_dir_url(__FILE__) . 'cta-button.css',
            array('wp-edit-blocks'), // Editor dependencies
            filemtime(plugin_dir_path(__FILE__) . 'cta-button.css')
        );
    }

    /**
     * Load block styles for both frontend and editor.
     */
    public function loadBlockStyles() {
        // wp_enqueue_style(
        //     'cta-button-in-content-css',
        //     plugin_dir_url(__FILE__) . 'cta-button.css',
        //     array(),
        //     filemtime(plugin_dir_path(__FILE__) . 'cta-button.css')
        // );
    }
}

new SimpleCTAButton();

class PhoneNumberButton {
    public function __construct() {
        // Load JavaScript for the Gutenberg editor
        add_action('enqueue_block_editor_assets', array($this, 'loadBlockEditorAssets'));

        // Load CSS for both frontend and editor
        add_action('enqueue_block_assets', array($this, 'loadBlockStyles'));
    }

    /**
     * Load JavaScript for the Gutenberg editor.
     */
    public function loadBlockEditorAssets() {
        wp_enqueue_script(
            'cta-button-in-content-js',
            plugin_dir_url(__FILE__) . 'build/index.js',
            array('wp-blocks', 'wp-element', 'wp-editor'), // Dependencies
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
            true
        );

        wp_localize_script('cta-button-in-content-js', 'wp_theme_directory', get_template_directory_uri());

        // Load editor-specific CSS
        wp_enqueue_style(
            'cta-button-in-content-editor-css',
            plugin_dir_url(__FILE__) . 'cta-button.css',
            array('wp-edit-blocks'), // Editor dependencies
            filemtime(plugin_dir_path(__FILE__) . 'cta-button.css')
        );
    }

    /**
     * Load block styles for both frontend and editor.
     */
    public function loadBlockStyles() {
        // wp_enqueue_style(
        //     'cta-button-in-content-css',
        //     plugin_dir_url(__FILE__) . 'cta-button.css',
        //     array(),
        //     filemtime(plugin_dir_path(__FILE__) . 'cta-button.css')
        // );
    }
} 

new PhoneNumberButton();