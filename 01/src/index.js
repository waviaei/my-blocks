import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

const blockStyle = {
  backgroundColor: '#900',
  color: '#fff',
  padding: '30px'
};

registerBlockType( 'my-blocks/my-block-01', {
  title: __( 'My Block: Basic', 'my-blocks' ),
  icon: 'universal-access-alt',
  category: 'layout',
  example: {},
  edit( { props }) {
    return(
      <div style={ blockStyle }>Hello World, step 1 (from the editor).</div>
    );
  },
  save() {
    return(
      <div style={ blockStyle }>Hello World, step 1 (from the editor).</div>
    );
  },
} );
