/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the standard deviation of a strided array using a two-pass algorithm.
*
* @module @stdlib/stats-base-stdevpn
*
* @example
* var stdevpn = require( '@stdlib/stats-base-stdevpn' );
*
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = stdevpn( x.length, 1, x, 1 );
* // returns ~2.0817
*
* @example
* var floor = require( '@stdlib/math-base-special-floor' );
* var stdevpn = require( '@stdlib/stats-base-stdevpn' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var N = floor( x.length / 2 );
*
* var v = stdevpn.ndarray( N, 1, x, 2, 1 );
* // returns 2.5
*/

// MODULES //

var stdevpn = require( './main.js' );


// EXPORTS //

module.exports = stdevpn;