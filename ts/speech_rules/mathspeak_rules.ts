//
// Copyright 2021-21 Volker Sorge
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

/**
 * @file Adds context function mappings to the global store.
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import * as StoreUtil from '../rule_engine/store_util';
import * as MathspeakFrenchUtil from './mathspeak_french_util';
import * as MathspeakKoreanUtil from './mathspeak_korean_util';
import * as MathspeakUtil from './mathspeak_util';
import * as NumbersUtil from './numbers_util';
import * as SpeechRules from './speech_rules';
import * as UnitUtil from './unit_util';

/**
 * Adds the custom functions for the mathspeak rules.
 */
export function MathspeakRules() {
  // Basic English
  SpeechRules.addStore('en.speech.mathspeak', '', {
    CQFspaceoutNumber: MathspeakUtil.spaceoutNumber,

    CQFspaceoutIdentifier: MathspeakUtil.spaceoutIdentifier,
    CSFspaceoutText: MathspeakUtil.spaceoutText,
    // Fraction function.
    CSFopenFracVerbose: MathspeakUtil.openingFractionVerbose,
    CSFcloseFracVerbose: MathspeakUtil.closingFractionVerbose,
    CSFoverFracVerbose: MathspeakUtil.overFractionVerbose,
    CSFopenFracBrief: MathspeakUtil.openingFractionBrief,
    CSFcloseFracBrief: MathspeakUtil.closingFractionBrief,
    CSFopenFracSbrief: MathspeakUtil.openingFractionSbrief,
    CSFcloseFracSbrief: MathspeakUtil.closingFractionSbrief,
    CSFoverFracSbrief: MathspeakUtil.overFractionSbrief,
    CSFvulgarFraction: NumbersUtil.vulgarFraction,

    CQFvulgarFractionSmall: MathspeakUtil.isSmallVulgarFraction,
    // Radical function.
    CSFopenRadicalVerbose: MathspeakUtil.openingRadicalVerbose,
    CSFcloseRadicalVerbose: MathspeakUtil.closingRadicalVerbose,
    CSFindexRadicalVerbose: MathspeakUtil.indexRadicalVerbose,
    CSFopenRadicalBrief: MathspeakUtil.openingRadicalBrief,
    CSFcloseRadicalBrief: MathspeakUtil.closingRadicalBrief,
    CSFindexRadicalBrief: MathspeakUtil.indexRadicalBrief,
    CSFopenRadicalSbrief: MathspeakUtil.openingRadicalSbrief,

    CSFindexRadicalSbrief: MathspeakUtil.indexRadicalSbrief,
    CQFisSmallRoot: MathspeakUtil.smallRoot,
    // Sub- Superscript.
    CSFsuperscriptVerbose: MathspeakUtil.superscriptVerbose,
    CSFsuperscriptBrief: MathspeakUtil.superscriptBrief,
    CSFsubscriptVerbose: MathspeakUtil.subscriptVerbose,
    CSFsubscriptBrief: MathspeakUtil.subscriptBrief,
    CSFbaselineVerbose: MathspeakUtil.baselineVerbose,
    CSFbaselineBrief: MathspeakUtil.baselineBrief,
    // Tensor specific.
    CSFleftsuperscriptVerbose: MathspeakUtil.superscriptVerbose,
    CSFleftsubscriptVerbose: MathspeakUtil.subscriptVerbose,
    CSFrightsuperscriptVerbose: MathspeakUtil.superscriptVerbose,
    CSFrightsubscriptVerbose: MathspeakUtil.subscriptVerbose,
    CSFleftsuperscriptBrief: MathspeakUtil.superscriptBrief,
    CSFleftsubscriptBrief: MathspeakUtil.subscriptBrief,
    CSFrightsuperscriptBrief: MathspeakUtil.superscriptBrief,

    CSFrightsubscriptBrief: MathspeakUtil.subscriptBrief,
    // Over- Underscore.
    CSFunderscript: MathspeakUtil.nestedUnderscript,
    CSFoverscript: MathspeakUtil.nestedOverscript,
    CSFendscripts: MathspeakUtil.endscripts,

    // Iteratros and counters
    CTFordinalCounter: NumbersUtil.ordinalCounter,
    CTFwordCounter: NumbersUtil.wordCounter,
    CTFcontentIterator: StoreUtil.contentIterator,

    // Layout related.
    CQFdetIsSimple: MathspeakUtil.determinantIsSimple,

    CSFRemoveParens: MathspeakUtil.removeParens,
    // Dummy.

    CQFresetNesting: MathspeakUtil.resetNestingDepth,
    // Generators.
    CGFbaselineConstraint: MathspeakUtil.generateBaselineConstraint,
    CGFtensorRules: MathspeakUtil.generateTensorRules
  });

  // Spanish
  SpeechRules.addStore('es.speech.mathspeak', 'en.speech.mathspeak', {
    CTFunitMultipliers: UnitUtil.unitMultipliers,
    CQFoneLeft: UnitUtil.oneLeft
  });

  // French
  SpeechRules.addStore('fr.speech.mathspeak', 'en.speech.mathspeak', {
    CSFbaselineVerbose: MathspeakFrenchUtil.baselineVerbose,
    CSFbaselineBrief: MathspeakFrenchUtil.baselineBrief,
    // Tensor specific:
    CSFleftsuperscriptVerbose: MathspeakFrenchUtil.leftSuperscriptVerbose,
    CSFleftsubscriptVerbose: MathspeakFrenchUtil.leftSubscriptVerbose,
    CSFleftsuperscriptBrief: MathspeakFrenchUtil.leftSuperscriptBrief,
    CSFleftsubscriptBrief: MathspeakFrenchUtil.leftSubscriptBrief
  });

  // Korean
  SpeechRules.addStore('ko.speech.mathspeak', 'en.speech.mathspeak', {
    CSFopenFracVerbose: MathspeakKoreanUtil.openingFractionVerbose,
    CSFcloseFracVerbose: MathspeakKoreanUtil.closingFractionVerbose,
    CSFopenFracBrief: MathspeakKoreanUtil.openingFractionBrief,
    CSFcloseFracBrief: MathspeakKoreanUtil.closingFractionBrief,
    CSFopenFracSbrief: MathspeakKoreanUtil.openingFractionSbrief,
    CSFoverFracSbrief: MathspeakKoreanUtil.overFractionSbrief,
    CSFcloseFracSbrief: MathspeakKoreanUtil.closingFractionSbrief,

    CQFisSimpleIndex: MathspeakKoreanUtil.isSimpleIndex,
    CSFindexRadicalVerbose: MathspeakKoreanUtil.indexRadicalVerbose,
    CSFindexRadicalBrief: MathspeakKoreanUtil.indexRadicalBrief,
    CSFindexRadicalSbrief: MathspeakKoreanUtil.indexRadicalSbrief,
    
    CSFopenRadicalVerbose: MathspeakKoreanUtil.openingRadicalVerbose,
    CSFcloseRadicalVerbose: MathspeakKoreanUtil.closingRadicalVerbose,
    CSFopenRadicalBrief: MathspeakKoreanUtil.openingRadicalBrief,
    CSFcloseRadicalBrief: MathspeakKoreanUtil.closingRadicalBrief,
    CSFopenRadicalSbrief: MathspeakKoreanUtil.openingRadicalSbrief
  });

}
