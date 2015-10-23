import Hero from './hero';

(function() {
  'use strict';

  describe('About My Hero', function() {

    beforeEach( function() {
      window.x = new Hero();
    });

    describe('creating a hero', function() {
      it('should create an instance of Hero', function () {
        expect(x instanceof Hero).to.equal(true);
      });
    });

    describe('my player health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(100);
      });
    });

    describe('player taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(100);
      })
    });

  });

}());


// Hero

// Bad Guy


// Both will have attack methods
// Both will have health