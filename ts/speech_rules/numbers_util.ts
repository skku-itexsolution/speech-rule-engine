//
// Copyright 2019-21 Volker Sorge
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
 * @file Utility functions for translating numbers.
 * @author volker.sorge@gmail.com (Volker Sorge)
 */

import { Span } from '../audio/span';
import * as DomUtil from '../common/dom_util';
import { LOCALE } from '../l10n/locale';
import { convertVulgarFraction } from '../l10n/transformers';

// Number transformation
/**
 * Simple counter function for counting ordinals.
 *
 * @param _node The node for the context function.
 * @param context The context string.
 * @returns The context function returning ordinals.
 */
export function ordinalCounter(_node: Node, context: string): () => string {
  let counter = 0;
  return function () {
    return LOCALE.NUMBERS.simpleOrdinal(++counter) + ' ' + context;
  };
}

/**
 * Simple counter function for counting ordinals.
 *
 * @param _node The node for the context function.
 * @param context The context string.
 * @returns The context function returning ordinals.
 */
export function wordCounter(_node: Element, context: string): () => string {
  let counter = 0;
  return function () {
    return LOCALE.NUMBERS.numberToOrdinal(++counter, false) + ' ' + context;
  };
}

/**
 * Converts a vulgar fraction into string representation of enumerator and
 * denominator as ordinal.
 *
 * @param node Fraction node to be translated.
 * @returns The string representation if it is a valid
 *     vulgar fraction.
 */
export function vulgarFraction(node: Element): string | Span[] {
  const conversion = convertVulgarFraction(node, LOCALE.MESSAGES.MS.FRAC_OVER);
  if (
    conversion.convertible &&
    conversion.enumerator &&
    conversion.denominator
  ) {
    return [
      new Span(LOCALE.NUMBERS.numberToWords(conversion.enumerator), {
        extid: (node.childNodes[0].childNodes[0] as Element).getAttribute(
          'extid'
        ),
        separator: ''
      }),
      new Span(LOCALE.NUMBERS.vulgarSep, { separator: '' }),
      new Span(
        LOCALE.NUMBERS.numberToOrdinal(
          conversion.denominator,
          conversion.enumerator !== 1
        ),
        {
          extid: (node.childNodes[0].childNodes[1] as Element).getAttribute(
            'extid'
          )
        }
      )
    ];
  }
  return [
    new Span(conversion.content || '', { extid: node.getAttribute('extid') })
  ];
}

/**
 * String function to turn a child position into an ordinal.
 *
 * @param node The node for the string function.
 * @returns The ordinal string corresponding to the child position of
 *     the node.
 */
export function ordinalPosition(node: Node): string {
  const children = DomUtil.toArray(node.parentNode.childNodes);
  return LOCALE.NUMBERS.simpleOrdinal(children.indexOf(node) + 1).toString();
}