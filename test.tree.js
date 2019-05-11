/* eslint-env node, mocha */

var tree = require('./tree.js');
var assert = require('chai').assert;

describe('tree', function () {
    describe('#depth()', function () {
        it('should return depth of empty tree', function () {
            assert.equal(tree.depth(null), 0);
        });

        it('should return depth of single-node tree', function () {
            assert.equal(tree.depth({}), 1);
        });

        it('should return depth of two-node tree imbalanced', function () {
            assert.equal(tree.depth({
                'left': {},
                'right': null
            }), 2);
        });

        it('should return depth of two-node tree balanced', function () {
            assert.equal(tree.depth({
                'left': {},
                'right': {}
            }), 2);
        });

        it('should return depth of 3', function () {
            assert.equal(tree.depth({
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