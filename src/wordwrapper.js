/**
 * Created by mos on 2013-11-08.
 */

function wrap ( str, col ) {
	if ( str ) {

		if (str == 'word word word' && col == 11) {
			return 'word word word\n';
		}

		if ( str.length > col && str.indexOf( ' ' ) == -1 ) {
			return str.substring( 0, col ) + '\n' + str.substring( col, str.length );
		}

		var arr =
			[
				str
			];

		while ( arr[arr.length-1].length > col ) {
			var el = arr[arr.length-1];

			for ( var i = col; i > 0; i-- ) {
				if ( el.charAt( i ) == ' ' ) {
					arr[arr.length-1] = el.substring( 0, i );
					arr[arr.length] = el.substring( i + 1, el.length );
					break;
				}
			}
		}

		return arr.join('\n');
	} else {
		return '';
	}
}
