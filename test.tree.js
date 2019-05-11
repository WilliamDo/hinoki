/* eslint-env node, mocha */

var tree = require('./tree.js');
var chai = require('chai');

describe('tree', function () {
    describe('#depth()', function () {
        it('should return depth of empty tree', function () {
            chai.assert.equal(tree.depth(null), 0);
        });

        it('should return depth of single-node tree', function () {
            chai.assert.equal(tree.depth({}), 1);
        });

        it('should return depth of two-node tree imbalanced', function () {
            chai.assert.equal(tree.depth({
                'left': {},
                'right': null
            }), 2);
        });

        it('should return depth of two-node tree balanced', function () {
            chai.assert.equal(tree.depth({
                'left': {},
                'right': {}
            }), 2);
        });

        it('should return depth of 3', function () {
            chai.assert.equal(tree.depth({
                'left': {
                    'left': {},
                    'right': {}
                },
                'right': {

                }
            }), 3);
        });
    });

});