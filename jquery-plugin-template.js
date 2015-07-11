/**
 * jQuery Plugin Template
 * Original Author: Hector Virgen
 * Extended Author: Tom Kaczocha <tom@rawphp.org>
 * Licensed under the MIT license
 */

;
( function ( $, window, document, undefined )
{
    var Plugin = function ( element, options )
    {
        this.element = $( element );
        this.obj = this;
        this.settings = $.extend(
            {
                param: 'defaultValue'
            }, options || {}
        );

        this.publicMethod = function ()
        {
            console.log( 'public method called' );
        };

        var privateMethod = function ()
        {
            console.log( 'private method called' );
        };
    };

    $.fn.plugin = function ( options )
    {
        return this.each( function ()
        {
            var element = $( this );

            if ( element.data( 'plugin' ) )
            {
                return this;
            }

            var plugin = new Plugin( this, options );

            element.data( 'plugin', plugin );

            return plugin;
        } );
    };

}( jQuery, window, document, undefined ));