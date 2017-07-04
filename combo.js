function fillCombo( obj, arr, valor, texto )
{
    //vaciar combo...
    while ( obj.options.length > 0 )
        obj.options[ obj.options.length - 1 ] = null;
    //crear opcion por defecto (n/a para select múltiple)...
    if ( valor != null && texto != null ) {
        var opcion = document.createElement( "option" );
        opcion.value = valor;
        opcion.text = texto;
        obj.options.add(opcion);
    }
    //crear grupo de opciones...
    var aOptions = [];
    var oOptGroup = document.createElement( "optgroup" );
    for ( var i = 0; i < (arr.length); i++ ) {
        aOptions[i] = document.createElement( "option" );
        aOptions[i].value = arr[i][0];
        aOptions[i].text = arr[i][1];
        //Para opciones con etiquetas...
        if ( arr[i][2] != undefined )
            aOptions[i].label = arr[i][2];
        oOptGroup.appendChild( aOptions[i] );
    }	
    //colocar grupo de opciones en el elemento select...
    obj.innerHTML += oOptGroup.innerHTML;
}

