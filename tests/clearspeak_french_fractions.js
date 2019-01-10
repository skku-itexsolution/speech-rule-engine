// Copyright 2017 Volker Sorge
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//
// With support from the Mozilla Foundation under a MOSS grant.
//


goog.provide('sre.ClearspeakFrenchFractions');

goog.require('sre.ClearspeakFrenchRuleTest');



/**
* @constructor
* @extends {sre.ClearspeakFrenchRuleTest}
*/
sre.ClearspeakFrenchFractions = function() {
  sre.ClearspeakFrenchFractions.base(this, 'constructor');

  /**
* @override
  */
  this.information = 'ClearspeakFrenchFractions rule tests.';

};
goog.inherits(sre.ClearspeakFrenchFractions, sre.ClearspeakFrenchRuleTest);



//
// Fractions
//


/**
 * Testing ClearspeakFrenchFractions Example Frac001
 */
sre.ClearspeakFrenchFractions.prototype.testFrac001 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = 'one half';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = '12 over 32';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002a
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002a = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mi>x</mi><mi>y</mi></mfrac></mrow></math>';
  var speech = 'x over y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002b
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002b = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow>' +
      '<mn>3</mn><mi>y</mi></mrow></mfrac></mrow></math>';
  var speech = '2 x over 3 y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002c
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002c = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mi>y</mi></mrow><mrow>' +
      '<mi>c</mi><mi>d</mi></mrow></mfrac></mrow></math>';
  var speech = 'x y over c d';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002d
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002d = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mn>1</mn><mn>2</mn>' +
      '</mfrac></mrow><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = 'one half over one third';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002e
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002e = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mo>−</mo><mi>x</mi></mrow><mi>y' +
      '</mi></mfrac></mrow></math>';
  var speech = 'negative x over y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002f
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002f = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mo>−</mo><mn>2</mn><mi>x</mi>' +
      '</mrow><mrow><mn>3</mn><mi>y</mi></mrow></mfrac></mrow></math>';
  var speech = 'negative 2 x over 3 y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002g
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002g = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mi>y</mi></mrow><mrow>' +
      '<mo>−</mo><mi>c</mi><mi>d</mi></mrow></mfrac></mrow></math>';
  var speech = 'x y over negative c d';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac002h
 */
sre.ClearspeakFrenchFractions.prototype.testFrac002h = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mn>1</mn><mn>2</mn>' +
      '</mfrac></mrow><mrow><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac>' +
      '</mrow></mfrac></mrow></math>';
  var speech = 'one half over negative one third';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac003
 */
sre.ClearspeakFrenchFractions.prototype.testFrac003 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 2 plus 3, and denominator 13';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac004
 */
sre.ClearspeakFrenchFractions.prototype.testFrac004 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac005
 */
sre.ClearspeakFrenchFractions.prototype.testFrac005 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac006
 */
sre.ClearspeakFrenchFractions.prototype.testFrac006 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y, plus two thirds';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac007
 */
sre.ClearspeakFrenchFractions.prototype.testFrac007 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallon</mtext></mrow></mfrac></mrow></math>';
  var speech = 'miles over gallon';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac008
 */
sre.ClearspeakFrenchFractions.prototype.testFrac008 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = '2 miles over 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac009
 */
sre.ClearspeakFrenchFractions.prototype.testFrac009 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = '1 over 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac010
 */
sre.ClearspeakFrenchFractions.prototype.testFrac010 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = '12 over 32';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac011
 */
sre.ClearspeakFrenchFractions.prototype.testFrac011 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = '2 plus 3 over 13';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac012
 */
sre.ClearspeakFrenchFractions.prototype.testFrac012 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'x plus y over 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac013
 */
sre.ClearspeakFrenchFractions.prototype.testFrac013 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'x plus y over x minus y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac014
 */
sre.ClearspeakFrenchFractions.prototype.testFrac014 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'x plus y over x minus y, plus, 2 over 3';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac015
 */
sre.ClearspeakFrenchFractions.prototype.testFrac015 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallon</mtext></mrow></mfrac></mrow></math>';
  var speech = 'miles over gallon';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac016
 */
sre.ClearspeakFrenchFractions.prototype.testFrac016 = function() {
  var preference = 'Fraction_Over';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = '2 miles over 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac017
 */
sre.ClearspeakFrenchFractions.prototype.testFrac017 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = '1 over 2, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac018
 */
sre.ClearspeakFrenchFractions.prototype.testFrac018 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = '12 over 32, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac019
 */
sre.ClearspeakFrenchFractions.prototype.testFrac019 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = '2 plus 3 over 13, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac020
 */
sre.ClearspeakFrenchFractions.prototype.testFrac020 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'x plus y over 2, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac021
 */
sre.ClearspeakFrenchFractions.prototype.testFrac021 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'x plus y over x minus y, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac022
 */
sre.ClearspeakFrenchFractions.prototype.testFrac022 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'x plus y over x minus y, end fraction, plus, 2 over 3, end' +
      ' fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac023
 */
sre.ClearspeakFrenchFractions.prototype.testFrac023 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallons</mtext></mrow></mfrac></mrow></math>';
  var speech = 'miles over gallons, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac024
 */
sre.ClearspeakFrenchFractions.prototype.testFrac024 = function() {
  var preference = 'Fraction_OverEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = '2 miles over 3 gallons, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac025
 */
sre.ClearspeakFrenchFractions.prototype.testFrac025 = function() {
  var preference = 'Fraction_GeneralEndFrac';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1, and denominator 2, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac026
 */
sre.ClearspeakFrenchFractions.prototype.testFrac026 = function() {
  var preference = 'Fraction_GeneralEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 12, and denominator 32, end' +
      ' fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac027
 */
sre.ClearspeakFrenchFractions.prototype.testFrac027 = function() {
  var preference = 'Fraction_GeneralEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 2 plus 3, and denominator 13,' +
      ' end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac028
 */
sre.ClearspeakFrenchFractions.prototype.testFrac028 = function() {
  var preference = 'Fraction_GeneralEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator 2,' +
      ' end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac029
 */
sre.ClearspeakFrenchFractions.prototype.testFrac029 = function() {
  var preference = 'Fraction_GeneralEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac030
 */
sre.ClearspeakFrenchFractions.prototype.testFrac030 = function() {
  var preference = 'Fraction_GeneralEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y, end fraction, plus, the fraction with numerator 2, and' +
      ' denominator 3, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac031
 */
sre.ClearspeakFrenchFractions.prototype.testFrac031 = function() {
  var preference = 'Fraction_GeneralEndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallon</mtext></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator miles, and denominator gallon,' +
      ' end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac032
 */
sre.ClearspeakFrenchFractions.prototype.testFrac032 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1, and denominator 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac033
 */
sre.ClearspeakFrenchFractions.prototype.testFrac033 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 12, and denominator 32';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac034
 */
sre.ClearspeakFrenchFractions.prototype.testFrac034 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 2 plus 3, and denominator 13';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac035
 */
sre.ClearspeakFrenchFractions.prototype.testFrac035 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac036
 */
sre.ClearspeakFrenchFractions.prototype.testFrac036 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac037
 */
sre.ClearspeakFrenchFractions.prototype.testFrac037 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y, plus, the fraction with numerator 2, and denominator 3';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac038
 */
sre.ClearspeakFrenchFractions.prototype.testFrac038 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallon</mtext></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator miles, and denominator gallon';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac039
 */
sre.ClearspeakFrenchFractions.prototype.testFrac039 = function() {
  var preference = 'Fraction_General';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator 2 miles, and denominator 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac040
 */
sre.ClearspeakFrenchFractions.prototype.testFrac040 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction 1 over 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac041
 */
sre.ClearspeakFrenchFractions.prototype.testFrac041 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction 12 over 32';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac042
 */
sre.ClearspeakFrenchFractions.prototype.testFrac042 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction 2 plus 3 over 13';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac043
 */
sre.ClearspeakFrenchFractions.prototype.testFrac043 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction x plus y over 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac044
 */
sre.ClearspeakFrenchFractions.prototype.testFrac044 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction x plus y over x minus y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac045
 */
sre.ClearspeakFrenchFractions.prototype.testFrac045 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'the fraction x plus y over x minus y, plus, the fraction 2' +
      ' over 3';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac046
 */
sre.ClearspeakFrenchFractions.prototype.testFrac046 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallon</mtext></mrow></mfrac></mrow></math>';
  var speech = 'the fraction miles over gallon';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac047
 */
sre.ClearspeakFrenchFractions.prototype.testFrac047 = function() {
  var preference = 'Fraction_FracOver';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction 2 miles over 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac048
 */
sre.ClearspeakFrenchFractions.prototype.testFrac048 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = '1 per 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac049
 */
sre.ClearspeakFrenchFractions.prototype.testFrac049 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = '12 per 32';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac050
 */
sre.ClearspeakFrenchFractions.prototype.testFrac050 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = '2 plus 3 per 13';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac051
 */
sre.ClearspeakFrenchFractions.prototype.testFrac051 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'x plus y per 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac052
 */
sre.ClearspeakFrenchFractions.prototype.testFrac052 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'x plus y per x minus y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac053
 */
sre.ClearspeakFrenchFractions.prototype.testFrac053 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'x plus y per x minus y, plus, 2 per 3';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac054
 */
sre.ClearspeakFrenchFractions.prototype.testFrac054 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallon</mtext></mrow></mfrac></mrow></math>';
  var speech = 'miles per gallon';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac055
 */
sre.ClearspeakFrenchFractions.prototype.testFrac055 = function() {
  var preference = 'Fraction_Per';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = '2 miles per 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac056
 */
sre.ClearspeakFrenchFractions.prototype.testFrac056 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = 'one half';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac057
 */
sre.ClearspeakFrenchFractions.prototype.testFrac057 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = 'twelve thirty-seconds';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac058
 */
sre.ClearspeakFrenchFractions.prototype.testFrac058 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 2 plus 3, and denominator 13';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac059
 */
sre.ClearspeakFrenchFractions.prototype.testFrac059 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac060
 */
sre.ClearspeakFrenchFractions.prototype.testFrac060 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac061
 */
sre.ClearspeakFrenchFractions.prototype.testFrac061 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y, plus two thirds';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac062
 */
sre.ClearspeakFrenchFractions.prototype.testFrac062 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallon</mtext></mrow></mfrac></mrow></math>';
  var speech = 'miles over gallon';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac063
 */
sre.ClearspeakFrenchFractions.prototype.testFrac063 = function() {
  var preference = 'Fraction_Ordinal';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = '2 miles over 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac064
 */
sre.ClearspeakFrenchFractions.prototype.testFrac064 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>';
  var speech = 'one half';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac065
 */
sre.ClearspeakFrenchFractions.prototype.testFrac065 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>12</mn></mrow><mrow><mn>32' +
      '</mn></mrow></mfrac></mrow></math>';
  var speech = '12 over 32, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac066
 */
sre.ClearspeakFrenchFractions.prototype.testFrac066 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn>' +
      '</mrow><mrow><mn>13</mn></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 2 plus 3, and denominator 13,' +
      ' end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac067
 */
sre.ClearspeakFrenchFractions.prototype.testFrac067 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator 2,' +
      ' end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac068
 */
sre.ClearspeakFrenchFractions.prototype.testFrac068 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac069
 */
sre.ClearspeakFrenchFractions.prototype.testFrac069 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></mfrac><mo>+</mo>' +
      '<mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator x plus y, and denominator x' +
      ' minus y, end fraction, plus two thirds';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac070
 */
sre.ClearspeakFrenchFractions.prototype.testFrac070 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mtext>miles</mtext></mrow><mrow>' +
      '<mtext>gallons</mtext></mrow></mfrac></mrow></math>';
  var speech = 'miles over gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Frac071
 */
sre.ClearspeakFrenchFractions.prototype.testFrac071 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext>miles</mtext>' +
      '</mrow><mrow><mn>3</mn><mtext>gallons</mtext></mrow></mfrac></mrow>' +
      '</math>';
  var speech = '2 miles over 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


//
// Fraction (with Text in Numerator and/or denominator)
//


/**
 * Testing ClearspeakFrenchFractions Example FrTxt001
 */
sre.ClearspeakFrenchFractions.prototype.testFrTxt001 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>2</mn><mtext></mtext>' +
      '<mtext>miles</mtext></mrow><mrow><mn>3</mn><mtext></mtext>' +
      '<mtext>gallons</mtext></mrow></mfrac></mrow></math>';
  var speech = '2 miles over 3 gallons';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example FrTxt002
 */
sre.ClearspeakFrenchFractions.prototype.testFrTxt002 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mtext>rise</mtext></mrow><mrow>' +
      '<mtext>run</mtext></mrow></mfrac></mrow></math>';
  var speech = 'rise over run';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example FrTxt003
 */
sre.ClearspeakFrenchFractions.prototype.testFrTxt003 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mfrac><mtext>successful outcomes</mtext><mtext>total' +
      ' outcomes</mtext></mfrac></math>';
  var speech = 'successful outcomes over total outcomes';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example FrTxt004
 */
sre.ClearspeakFrenchFractions.prototype.testFrTxt004 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>6</mn><mtext>ways of rolling a' +
      ' 7</mtext></mrow><mrow><mn>36</mn><mtext>ways of rolling the pair of' +
      ' dice</mtext></mrow></mfrac></mrow></math>';
  var speech = '6 ways of rolling a 7 over 36 ways of rolling the pair of dice';
  this.executeRuleTest(mathml, speech, preference);
};


//
// Nested Fractions
//


/**
 * Testing ClearspeakFrenchFractions Example NestFrac001
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac001 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mn>1</mn><mn>2</mn>' +
      '</mfrac></mrow><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = 'one half over one third';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac002
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac002 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mrow><mfrac><mn>2</mn><mrow>' +
      '<mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></mfrac></mrow></mfrac>' +
      '</mrow></math>';
  var speech = 'the fraction with numerator 1, and denominator, 2 over one' +
      ' third';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac003
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac003 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mn>1</mn><mn>2</mn>' +
      '</mfrac></mrow><mn>3</mn></mfrac></mrow></math>';
  var speech = 'one half over 3';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac004
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac004 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mrow><mfrac><mn>2</mn><mn>3' +
      '</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = '1 over two thirds';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac005
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac005 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mn>11</mn></mrow>' +
      '<mrow><mn>32</mn></mrow></mfrac></mrow><mrow><mfrac><mrow><mn>16' +
      '</mn></mrow><mrow><mn>51</mn></mrow></mfrac></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator, 11 over 32, and denominator,' +
      ' 16 over 51';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac006
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac006 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mfrac>' +
      '<mrow><mn>32</mn></mrow><mrow><mfrac><mrow><mn>16</mn></mrow><mrow>' +
      '<mn>51</mn></mrow></mfrac></mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 11, and denominator, the' +
      ' fraction with numerator 32, and denominator, 16 over 51';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac007
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac007 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mfrac><mn>4' +
      '</mn><mi>x</mi></mfrac></mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1 plus, 4 over x, and' +
      ' denominator 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac008
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac008 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mn>3</mn><mrow><mn>2</mn><mo>+</mo>' +
      '<mfrac><mn>4</mn><mi>x</mi></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 3, and denominator 2 plus, 4' +
      ' over x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac009
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac009 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mn>10</mn></mrow>' +
      '<mrow><mn>22</mn></mrow></mfrac></mrow><mrow><mfrac><mn>1</mn><mn>2' +
      '</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator, 10 over 22, and denominator' +
      ' one half';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac010
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac010 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mfrac><mn>2' +
      '</mn><mn>3</mn></mfrac></mrow><mrow><mn>1</mn><mo>−</mo><mfrac><mn>2' +
      '</mn><mn>3</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1 plus two thirds, and' +
      ' denominator 1 minus two thirds';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac011
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac011 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mfrac><mi>x' +
      '</mi><mn>2</mn></mfrac></mrow><mrow><mn>1</mn><mo>−</mo><mfrac><mi>x' +
      '</mi><mn>2</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1 plus, x over 2, and' +
      ' denominator 1 minus, x over 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac012
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac012 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mi>x</mi><mo>+</mo>' +
      '<mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac>' +
      '<mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn>' +
      '</mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator, the fraction with numerator x' +
      ' plus 1, and denominator x minus 1, plus 1, and denominator x plus 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac013
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac013 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mi>x</mi><mo>+</mo>' +
      '<mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>4</mn></mrow></mfrac>' +
      '<mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mrow><mi>x</mi>' +
      '<mo>+</mo><mfrac><mn>1</mn><mrow><mn>16</mn></mrow></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = 'the fraction with numerator, the fraction with numerator x' +
      ' plus 1, and denominator x minus 4, plus one half, and denominator x' +
      ' plus, 1 over 16';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac014
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac014 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mi>x</mi><mrow>' +
      '<mn>1</mn><mo>+</mo><mfrac><mn>2</mn><mi>x</mi></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator x, and denominator 1' +
      ' plus, 2 over x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac015
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac015 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mi>x</mi>' +
      '<mo>+</mo><mn>3</mn></mrow><mrow><mn>1</mn><mo>+</mo><mfrac><mn>2' +
      '</mn><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator x plus 3, and' +
      ' denominator 1 plus, the fraction with numerator 2, and denominator' +
      ' x plus 3';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac016
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac016 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow>' +
      '<mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mn>1</mn></mrow></mfrac>' +
      '</mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator 1, and denominator 1' +
      ' plus, the fraction with numerator 1, and denominator 1 plus, the' +
      ' fraction with numerator 1, and denominator 1 plus 1';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac017
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac017 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow>' +
      '<mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mo>⋯</mo></mrow></mfrac>' +
      '</mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator 1, and denominator 1' +
      ' plus, the fraction with numerator 1, and denominator 1 plus, the' +
      ' fraction with numerator 1, and denominator 1 plus dot dot dot';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac018
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac018 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>+</mo>' +
      '<mo>⋯</mo></mrow></mfrac></mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'a sub 0, plus, the fraction with numerator 1, and' +
      ' denominator, a sub 1, plus, the fraction with numerator 1, and' +
      ' denominator, a sub 2, plus, the fraction with numerator 1, and' +
      ' denominator, a sub 3, plus dot dot dot';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac019
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac019 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mn>1</mn><mn>2</mn>' +
      '</mfrac></mrow><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = 'one half over one third';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac020
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac020 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mrow><mfrac><mn>2</mn><mrow>' +
      '<mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></mfrac></mrow></mfrac>' +
      '</mrow></math>';
  var speech = 'the fraction with numerator 1, and denominator, 2 over one' +
      ' third, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac021
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac021 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mn>1</mn><mn>2</mn>' +
      '</mfrac></mrow><mn>3</mn></mfrac></mrow></math>';
  var speech = 'one half over 3, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac022
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac022 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mn>1</mn><mrow><mfrac><mn>2</mn><mn>3' +
      '</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = '1 over two thirds, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac023
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac023 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mn>11</mn></mrow>' +
      '<mrow><mn>32</mn></mrow></mfrac></mrow><mrow><mfrac><mrow><mn>16' +
      '</mn></mrow><mrow><mn>51</mn></mrow></mfrac></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the fraction with numerator, 11 over 32, and denominator,' +
      ' 16 over 51, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac024
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac024 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>11</mn></mrow><mrow><mfrac>' +
      '<mrow><mn>32</mn></mrow><mrow><mfrac><mrow><mn>16</mn></mrow><mrow>' +
      '<mn>51</mn></mrow></mfrac></mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 11, and denominator, the' +
      ' fraction with numerator 32, and denominator, 16 over 51, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac025
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac025 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mfrac><mn>4' +
      '</mn><mi>x</mi></mfrac></mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1 plus, 4 over x, and' +
      ' denominator 2, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac026
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac026 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mn>3</mn><mrow><mn>2</mn><mo>+</mo>' +
      '<mfrac><mn>4</mn><mi>x</mi></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 3, and denominator 2 plus, 4' +
      ' over x, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac027
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac027 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mn>10</mn></mrow>' +
      '<mrow><mn>22</mn></mrow></mfrac></mrow><mrow><mfrac><mn>1</mn><mn>2' +
      '</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator, 10 over 22, and denominator' +
      ' one half, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac028
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac028 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mfrac><mn>2' +
      '</mn><mn>3</mn></mfrac></mrow><mrow><mn>1</mn><mo>−</mo><mfrac><mn>2' +
      '</mn><mn>3</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1 plus two thirds, and' +
      ' denominator 1 minus two thirds, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac029
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac029 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mfrac><mi>x' +
      '</mi><mn>2</mn></mfrac></mrow><mrow><mn>1</mn><mo>−</mo><mfrac><mi>x' +
      '</mi><mn>2</mn></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 1 plus, x over 2, and' +
      ' denominator 1 minus, x over 2, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac030
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac030 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mi>x</mi><mo>+</mo>' +
      '<mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac>' +
      '<mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn>' +
      '</mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator, the fraction with numerator x' +
      ' plus 1, and denominator x minus 1, plus 1, and denominator x plus' +
      ' 1, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac031
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac031 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mfrac><mrow><mfrac><mrow><mi>x</mi><mo>+</mo>' +
      '<mn>1</mn></mrow><mrow><mi>x</mi><mo>−</mo><mn>4</mn></mrow></mfrac>' +
      '<mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mrow><mi>x</mi>' +
      '<mo>+</mo><mfrac><mn>1</mn><mrow><mn>16</mn></mrow></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = 'the fraction with numerator, the fraction with numerator x' +
      ' plus 1, and denominator x minus 4, plus one half, and denominator x' +
      ' plus, 1 over 16, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac032
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac032 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mi>x</mi><mrow>' +
      '<mn>1</mn><mo>+</mo><mfrac><mn>2</mn><mi>x</mi></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator x, and denominator 1' +
      ' plus, 2 over x, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac033
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac033 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mi>x</mi>' +
      '<mo>+</mo><mn>3</mn></mrow><mrow><mn>1</mn><mo>+</mo><mfrac><mn>2' +
      '</mn><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow></mfrac></mrow>' +
      '</mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator x plus 3, and' +
      ' denominator 1 plus, the fraction with numerator 2, and denominator' +
      ' x plus 3, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac034
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac034 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow>' +
      '<mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mn>1</mn></mrow></mfrac>' +
      '</mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator 1, and denominator 1' +
      ' plus, the fraction with numerator 1, and denominator 1 plus, the' +
      ' fraction with numerator 1, and denominator 1 plus 1, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac035
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac035 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow>' +
      '<mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mo>⋯</mo></mrow></mfrac>' +
      '</mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = '1 plus, the fraction with numerator 1, and denominator 1' +
      ' plus, the fraction with numerator 1, and denominator 1 plus, the' +
      ' fraction with numerator 1, and denominator 1 plus dot dot dot, end' +
      ' fraction';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example NestFrac036
 */
sre.ClearspeakFrenchFractions.prototype.testNestFrac036 = function() {
  var preference = 'Fraction_EndFrac';
  var mathml = '<math><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo>' +
      '<mfrac><mn>1</mn><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>+</mo>' +
      '<mo>⋯</mo></mrow></mfrac></mrow></mfrac></mrow></mfrac></mrow></math>';
  var speech = 'a sub 0, plus, the fraction with numerator 1, and' +
      ' denominator, a sub 1, plus, the fraction with numerator 1, and' +
      ' denominator, a sub 2, plus, the fraction with numerator 1, and' +
      ' denominator, a sub 3, plus dot dot dot, end fraction';
  this.executeRuleTest(mathml, speech, preference);
};


//
// Fractions with Functions
//


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct001
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct001 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>f</mi><mrow><mo>(</mo><mi>x' +
      '</mi><mo>)</mo></mrow></mrow><mrow><mi>g</mi><mrow><mo>(</mo><mi>x' +
      '</mi><mo>)</mo></mrow></mrow></mfrac></mrow></math>';
  var speech = 'f of x, over g of x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct002
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct002 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>f</mi><mrow><mo>(</mo><mi>x' +
      '</mi><mo>)</mo></mrow><mo>+</mo><mi>g</mi><mrow><mo>(</mo><mi>x</mi>' +
      '<mo>)</mo></mrow></mrow><mrow><mi>g</mi><mrow><mo>(</mo><mi>x</mi>' +
      '<mo>)</mo></mrow></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator f of x, plus g of x, and' +
      ' denominator g of x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct003
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct003 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>f</mi><mrow><mo>(</mo><mrow>' +
      '<mi>x</mi><mo>+</mo><mn>1</mn></mrow><mo>)</mo></mrow></mrow><mrow>' +
      '<mi>g</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow></mfrac>' +
      '</mrow></math>';
  var speech = 'the fraction with numerator f of, open paren, x plus 1,' +
      ' close paren, and denominator g of x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct004
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct004 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>f</mi><mrow><mo>(</mo><mi>x' +
      '</mi><mo>)</mo></mrow></mrow><mn>2</mn></mfrac></mrow></math>';
  var speech = 'f of x, over 2';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct005
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct005 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mn>2</mn><mrow><mi>f</mi><mrow><mo>(' +
      '</mo><mi>x</mi><mo>)</mo></mrow></mrow></mfrac></mrow></math>';
  var speech = '2 over f of x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct006
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct006 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mn>2</mn><mrow><mi>g</mi><mrow><mo>(' +
      '</mo><mi>x</mi><mo>)</mo></mrow><mo>+</mo><mi>g</mi><mo' +
      ' stretchy="false">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo' +
      ' stretchy="false">)</mo></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator 2, and denominator g of x, plus' +
      ' g of, open paren, x plus 1, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct007
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct007 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>sin</mi><mi>x</mi></mrow>' +
      '<mrow><mi>cos</mi><mi>x</mi></mrow></mfrac></mrow></math>';
  var speech = 'sine x over cosine x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct008
 *
 * This is the same as 011. Mistake in Examples file.
 */
sre.ClearspeakFrenchFractions.prototype.untestFracfunct008 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>sin</mi><mo>(</mo><mi>x</mi>' +
      '<mo>+</mo><mi>y</mi><mo>)</mo></mrow><mrow><mi>cos</mi><mo>(</mo>' +
      '<mi>x</mi><mo>+</mo><mi>y</mi><mo>)</mo></mrow></mfrac></mrow></math>';
  var speech = 'sine, open paren, x plus y, close paren, over, cosine, open' +
      ' paren, x plus y, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct009
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct009 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>sin</mi><mi>x</mi><mo>+</mo>' +
      '<mi>cos</mi><mi>x</mi></mrow><mrow><mi>cos</mi><mi>x</mi></mrow>' +
      '</mfrac></mrow></math>';
  var speech = 'the fraction with numerator sine x plus cosine x, and' +
      ' denominator cosine x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct010
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct010 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>sin</mi><mn>2</mn><mi>x</mi>' +
      '</mrow><mrow><mi>cos</mi><mn>3</mn><mi>x</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'sine 2 x over cosine 3 x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct011
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct011 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>sin</mi><mrow><mo>(</mo><mrow>' +
      '<mi>x</mi><mo>+</mo><mi>y</mi></mrow><mo>)</mo></mrow></mrow><mrow>' +
      '<mi>cos</mi><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><mi>y</mi>' +
      '</mrow><mo>)</mo></mrow></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator, the sine of, open paren, x' +
      ' plus y, close paren, and denominator, the cosine of, open paren, x' +
      ' plus y, close paren';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct012
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct012 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>f</mi><mrow><mo>(</mo><mrow>' +
      '<mn>2</mn><mi>x</mi></mrow><mo>)</mo></mrow></mrow><mrow><mi>g</mi>' +
      '<mrow><mo>(</mo><mrow><mn>3</mn><mi>x</mi></mrow><mo>)</mo></mrow>' +
      '</mrow></mfrac></mrow></math>';
  var speech = 'f of 2 x, over g of 3 x';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct013
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct013 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>log</mi><mi>x</mi></mrow>' +
      '<mrow><mi>log</mi><mi>y</mi></mrow></mfrac></mrow></math>';
  var speech = 'log x over log y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct014
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct014 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>log</mi><mn>2</mn><mi>x</mi>' +
      '</mrow><mrow><mi>log</mi><mn>3</mn><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'log 2 x over log 3 y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct015
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct015 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><msub><mrow><mi>log</mi></mrow>' +
      '<mrow><mn>10</mn></mrow></msub><mi>x</mi></mrow><mrow><msub><mrow>' +
      '<mi>log</mi></mrow><mn>5</mn></msub><mi>y</mi></mrow></mfrac></mrow>' +
      '</math>';
  var speech = 'the log base 10 of, x, over, the log base 5 of, y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct016
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct016 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><msub><mrow><mi>log</mi></mrow>' +
      '<mrow><mn>10</mn></mrow></msub><mn>2</mn><mi>x</mi></mrow><mrow>' +
      '<msub><mrow><mi>log</mi></mrow><mn>5</mn></msub><mn>3</mn><mi>y</mi>' +
      '</mrow></mfrac></mrow></math>';
  var speech = 'the log base 10 of, 2 x, over, the log base 5 of, 3 y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct017
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct017 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><mi>log</mi><mrow><mo>(</mo><mrow>' +
      '<mi>x</mi><mo>+</mo><mn>1</mn></mrow><mo>)</mo></mrow></mrow><mrow>' +
      '<mi>log</mi><mi>y</mi></mrow></mfrac></mrow></math>';
  var speech = 'the fraction with numerator, the log of, open paren, x plus' +
      ' 1, close paren, and denominator log y';
  this.executeRuleTest(mathml, speech, preference);
};


/**
 * Testing ClearspeakFrenchFractions Example Fracfunct018
 */
sre.ClearspeakFrenchFractions.prototype.testFracfunct018 = function() {
  var preference = 'Fraction_Auto';
  var mathml = '<math><mrow><mfrac><mrow><msub><mi>f</mi><mn>1</mn></msub>' +
      '<mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mrow><msub><mi>g' +
      '</mi><mn>1</mn></msub><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow>' +
      '</mrow></mfrac></mrow></math>';
  var speech = 'f sub 1, of x, over, g sub 1, of x';
  this.executeRuleTest(mathml, speech, preference);
};
