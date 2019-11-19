import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
//import { createElement } from '@wordpress/element';
import { TextControl } from '@wordpress/components';

const edit = ( { className, attributes: { text }, setAttributes } ) => {
  const onChange = ( value ) => {
    return setAttributes( { text: value } );
  };
  return(
    <div className={ className }>
      <TextControl value={ text } onChange={ onChange } />
    </div>
  );
};

const save = ( { className, attributes: { text } } ) => {
  return(
    <div className={ className }>
      <div className="text">{ text }</div>
    </div>
  );
};

registerBlockType( 'my-blocks/my-block-02', {
  title: __( 'My Block: Stylesheets', 'my-blocks' ),
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
