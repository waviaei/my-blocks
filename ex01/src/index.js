import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'my-blocks/my-block-ex01', {
  title: __( 'My Block: Definition List', 'my-blocks' ),
  icon: 'palmtree',
  category: 'common',
  attributes: {
    text: {
      type: 'string',
      default: '',
    },
  },
  edit,
  save,
} );
