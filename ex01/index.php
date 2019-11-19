<?php
defined( 'ABSPATH' ) || exit;

function register_my_block_ex01() {

  $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

  wp_register_script(
    'my-block-ex01',
    plugins_url( 'build/index.js', __FILE__ ),
    $asset_file['dependencies'],
    $asset_file['version']
  );

  register_block_type(
    'my-blocks/my-block-ex01', [
      'editor_script' => 'my-block-ex01',
    ]
  );

}
add_action( 'init', 'register_my_block_ex01' );
