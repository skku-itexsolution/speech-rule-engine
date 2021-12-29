//
// Copyright 2018-21 Volker Sorge
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
 * @file Default mappings for semantic interpretation.
 * @author volker.sorge@gmail.com (Volker Sorge)
 */

import * as SemanticAttr from './semantic_attr';
import { SemanticFont, SemanticMeaning } from './semantic_meaning';
import { SemanticNode } from './semantic_node';
import { reduce } from './semantic_ordering';

// TODO: Combine default and collator with a common superclass mapping.
export class SemanticDefault {
  /**
   * Mapping for default meaning.
   */
  public map: { [key: string]: SemanticMeaning } = {};

  /**
   * Generates the key from symbol and font.
   *
   * @param symbol The symbol or text content of a node.
   * @param font The name of its font if it exists.
   * @returns A uniform key for the default mapping.
   */
  public static key(symbol: string, font: SemanticFont): string {
    return font ? symbol + ':' + font : symbol;
  }

  /**
   * Adds a semantic meaning to the structure. It will overwrite existing
   * content.
   *
   * @param symbol A symbol.
   * @param meaning It's semantic meaning.
   */
  public add(symbol: string, meaning: SemanticMeaning) {
    this.map[SemanticDefault.key(symbol, meaning.font)] = meaning;
  }

  /**
   * Adds a semantic node to the default structure.
   *
   * @param node A semantic node.
   */
  public addNode(node: SemanticNode) {
    this.add(node.textContent, node.meaning());
  }

  /**
   * Retrieves a semantic meaning for a symbol and its font.
   *
   * @param symbol A symbol.
   * @param font The font of the symbol.
   * @returns The semantic meaning of the symbol if it is in
   *     the structure.
   */
  public retrieve(symbol: string, font: SemanticFont): SemanticMeaning {
    return this.map[SemanticDefault.key(symbol, font)];
  }

  /**
   * Retrieves a semantic node to the default structure.
   *
   * @param node A semantic node.
   * @returns The semantic meaning of the symbol if it is in
   *     the structure.
   */
  public retrieveNode(node: SemanticNode): SemanticMeaning {
    return this.retrieve(node.textContent, node.font);
  }

  /**
   * @returns Size of the default mapping.
   */
  public size(): number {
    return Object.keys(this.map).length;
  }
}

abstract class SemanticCollator<T> {
  /**
   * Mapping to collate meaning.
   */
  public map: { [key: string]: T[] } = {};

  /**
   * @returns An empty copy of the collator.
   */
  public abstract copyCollator(): SemanticCollator<T>;

  /**
   * Adds a semantic node to the structure by appending it to the already
   * existing one for a particular symbol.
   *
   * @param symbol A symbol.
   * @param entry A semantic entry.
   */
  public add(symbol: string, entry: T) {
    const list = this.map[symbol];
    if (list) {
      list.push(entry);
    } else {
      this.map[symbol] = [entry];
    }
  }

  /**
   * Adds a semantic node to the default structure.
   *
   * @param node A semantic node.
   */
  public abstract addNode(node: SemanticNode): void;

  /**
   * Retrieves a semantic meaning for a symbol and its font.
   *
   * @param symbol A symbol.
   * @param font The font of the symbol.
   * @returns A list of semantic nodes.
   */
  public retrieve(symbol: string, font: SemanticFont): T[] {
    return this.map[SemanticDefault.key(symbol, font)];
  }

  /**
   * Retrieves a semantic node to the default structure.
   *
   * @param node A semantic node.
   * @returns The semantic meaning of the symbol if it is in
   *     the structure.
   */
  public retrieveNode(node: SemanticNode): T[] {
    return this.retrieve(node.textContent, node.font);
  }

  /**
   * @returns A copy of the collator. Note, this is NOT a
   *     deep copy!
   */
  public copy(): SemanticCollator<T> {
    const collator = this.copyCollator();
    for (const key in this.map) {
      collator.map[key] = this.map[key];
    }
    return collator;
  }

  /**
   * Minimizes a semantic collator, removing every non-ambiguous entry.
   */
  public minimize() {
    for (const key in this.map) {
      if (this.map[key].length === 1) {
        delete this.map[key];
      }
    }
  }

  /**
   * Minimizes a semantic collator, removing every non-ambiguous entry.
   * As opposed to minimize this is non-destructive.
   *
   * @returns The new collator.
   */
  public minimalCollator(): SemanticCollator<T> {
    const collator = this.copy();
    for (const key in collator.map) {
      if (collator.map[key].length === 1) {
        delete collator.map[key];
      }
    }
    return collator;
  }

  /**
   * @returns True if the collator is multi-valued.
   */
  public isMultiValued(): boolean {
    for (const key in this.map) {
      if (this.map[key].length > 1) {
        return true;
      }
    }
    return false;
  }

  /**
   * @returns True if the collator is empty.
   */
  public isEmpty(): boolean {
    return !Object.keys(this.map).length;
  }
}

export class SemanticNodeCollator extends SemanticCollator<SemanticNode> {
  /**
   * @override
   */
  public copyCollator() {
    return new SemanticNodeCollator();
  }

  /**
   * @override
   */
  public add(symbol: string, entry: SemanticNode) {
    /// TODO:  Handle the font better?
    const key = SemanticDefault.key(symbol, entry.font);
    super.add(key, entry);
  }

  /**
   * @override
   */
  public addNode(node: SemanticNode) {
    this.add(node.textContent, node);
  }

  /**
   * @override
   */
  public toString() {
    const outer = [];
    for (const key in this.map) {
      const length = Array(key.length + 3).join(' ');
      const nodes = this.map[key];
      const inner = [];
      for (let i = 0, node; (node = nodes[i]); i++) {
        inner.push(node.toString());
      }
      outer.push(key + ': ' + inner.join('\n' + length));
    }
    return outer.join('\n');
  }

  /**
   * @returns Collation of the meaning of the nodes.
   */
  public collateMeaning(): SemanticMeaningCollator {
    const collator = new SemanticMeaningCollator();
    for (const key in this.map) {
      collator.map[key] = this.map[key].map(function (node) {
        return node.meaning();
      });
    }
    return collator;
  }
}

export class SemanticMeaningCollator extends SemanticCollator<SemanticMeaning> {
  /**
   * @override
   */
  public copyCollator() {
    return new SemanticMeaningCollator();
  }

  /**
   * @override
   */
  public add(symbol: string, entry: SemanticMeaning) {
    const list = this.retrieve(symbol, entry.font);
    if (
      !list ||
      !list.find(function (x) {
        return SemanticAttr.equal(x, entry);
      })
    ) {
      const key = SemanticDefault.key(symbol, entry.font);
      super.add(key, entry);
    }
  }

  /**
   * @override
   */
  public addNode(node: SemanticNode) {
    this.add(node.textContent, node.meaning());
  }

  /**
   * @override
   */
  public toString() {
    const outer = [];
    for (const key in this.map) {
      const length = Array(key.length + 3).join(' ');
      const nodes = this.map[key];
      const inner = [];
      for (let i = 0, node; (node = nodes[i]); i++) {
        inner.push(
          '{type: ' +
            node.type +
            ', role: ' +
            node.role +
            ', font: ' +
            node.font +
            '}'
        );
      }
      outer.push(key + ': ' + inner.join('\n' + length));
    }
    return outer.join('\n');
  }

  /**
   * Reduces a semantic collator to one meaning per entry.
   */
  public reduce() {
    for (const key in this.map) {
      if (this.map[key].length !== 1) {
        this.map[key] = reduce(this.map[key]);
      }
    }
  }

  /**
   * Derives a default mapping from the collator.
   *
   * @returns The unambiguous default mapping.
   */
  public default(): SemanticDefault {
    const def = new SemanticDefault();
    for (const key in this.map) {
      if (this.map[key].length === 1) {
        def.map[key] = this.map[key][0];
      }
    }
    return def;
  }

  /**
   * Derives a default mapping from the collator if there is a possible
   * reduction.
   *
   * @returns The unambiguous default mapping. Null, if no
   *     reduction can be achieved.
   */
  public newDefault(): SemanticDefault | null {
    const oldDefault = this.default();
    this.reduce();
    const newDefault = this.default();
    return oldDefault.size() !== newDefault.size() ? newDefault : null;
  }
}
