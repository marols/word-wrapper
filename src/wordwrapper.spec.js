/**
 * Created by mos on 2013-11-08.
 */

describe( 'Word wrapper', function () {
	describe( 'wrap', function () {
		it( 'should be a function', function () {
			expect( wrap ).to.be.a( 'function' );
		} )

		it( 'should return a string', function () {
			expect( wrap() ).to.be.a( 'string' );
		} )

		it( 'should return an empty string for...', function () {
			expect( wrap( null, 10 ) ).to.equal( '' );

			expect( wrap( '', 10 ) ).to.equal( '' );
		} )

		it( 'should return word without newline', function () {
			expect(wrap('word', 5) ).to.equal('word');
		})

		it ('should insert line break', function () {
			expect(wrap('word word',6) ).to.equal('word\nword');
		})

		it('should insert line break at space before position', function () {
			expect(wrap('word word word', 9 )).to.equal('word word\nword');
		})

		it('should insert line break at position if no space', function () {
			expect(wrap('longword',4)).to.equal('long\nword');
			expect(wrap('longerword',6)).to.equal('longer\nword');
		})

		it('should insert line break ', function () {
			expect(wrap('word word word', 6) ).to.equal('word\nword\nword');
		})

		it('should return a special result outside of the rule', function () {
			expect(wrap('word word word', 11) ).to.equal('word word word\n');
		})
	} )
} )