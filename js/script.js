
// form用のコード
jQuery( '#file-test' ).change( function() {
  jQuery( '#file-test-name' ).show();
  jQuery( '#file-test-name' ).val( jQuery( this ).val() );
  jQuery( this ).val( '' );
});
// form用のコード end
