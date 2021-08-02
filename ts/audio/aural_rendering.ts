//
// Copyright 2017-21 Volker Sorge
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
 * @fileoverview A factory for rendering speech output depending on the selected
 *     markup.
 *
 * @author volker.sorge@gmail.com (Volker Sorge)
 */


import {Engine, EngineConst} from '../common/engine';
import {AcssRenderer} from './acss_renderer';
import {AudioRenderer} from './audio_renderer';
import {AuditoryDescription} from './auditory_description';
import {PunctuationRenderer} from './punctuation_renderer';
import {SableRenderer} from './sable_renderer';
import {Span} from './span';
import {SsmlRenderer} from './ssml_renderer';
import {SsmlStepRenderer} from './ssml_step_renderer';
import {StringRenderer} from './string_renderer';
import {XmlRenderer} from './xml_renderer';


// TODO (TS): Factory has same interface as AudioRenderer. Not sure how to tell
//            it typescript!
namespace AuralRendering {

  const xmlInstance = new SsmlRenderer();
  const renderers: Map<EngineConst.Markup, AudioRenderer> = new Map([
    [EngineConst.Markup.NONE, new StringRenderer()],
    [EngineConst.Markup.PUNCTUATION, new PunctuationRenderer()],
    [EngineConst.Markup.ACSS, new AcssRenderer()],
    [EngineConst.Markup.SABLE, new SableRenderer()],
    [EngineConst.Markup.VOICEXML, xmlInstance],
    [EngineConst.Markup.SSML, xmlInstance],
    [EngineConst.Markup.SSML_STEP, new SsmlStepRenderer()],
  ]);


  /**
   * @override
   */
  export function setSeparator(sep: string) {
    let renderer = renderers.get(Engine.getInstance().markup);
    if (renderer) {
      renderer.setSeparator(sep);
    }
  }


  /**
   * @override
   */
  export function getSeparator() {
    let renderer = renderers.get(Engine.getInstance().markup);
    return renderer ? renderer.getSeparator() : '';
  }


  /**
   * @override
   */
  export function markup(descrs: AuditoryDescription[]) {
    let renderer = renderers.get(Engine.getInstance().markup);
    if (!renderer) {
      return '';
    }
    return renderer.markup(descrs);
  }


  /**
   * @override
   */
  export function merge(strs: (Span|string)[]) {
    // TODO (TS): Ensure that these are all spans!
    let span = strs.map(s => {
      return (typeof s === 'string') ? new Span(s, {}) : s;
    });
    let renderer = renderers.get(Engine.getInstance().markup);
    if (!renderer) {
      return strs.join();
    }
    return renderer.merge(span);
  }


  /**
   * @override
   */
  export function finalize(str: string) {
    let renderer = renderers.get(Engine.getInstance().markup);

    var searchvalue = " 등호";
    let pos = 0;
    while (true) {
        let foundPos = str.indexOf(searchvalue, pos);
        if (foundPos == -1) break;
        str = str.replace(searchvalue, checkPreviousChar(str[foundPos - 1]));
        pos = foundPos + 1; 
    }

    if (!renderer) {
      return str;
    }
    return renderer.finalize(str);
  }

  export function checkPreviousChar(char: string) {
    const preCharC = char.charCodeAt(char.length - 1);
    const finalConsonantCode = (preCharC - 44032) % 28;
    if(char.match(/[a-z]/i)){
      if (char === 'r' || char === 'l' || char === 'n' || char === 'm')
          return "은";
      return "는";
    }
    return finalConsonantCode !== 0 ? "은" : "는";
  }


  /**
   * @override
   */
  export function error(key: string) {
    let renderer = renderers.get(Engine.getInstance().markup);
    if (!renderer) {
      return '';
    }
    return renderer.error(key);
  }


  /**
   * Registers a new renderer.
   * @param type The markup type.
   * @param renderer The audio renderer.
   */
  export function registerRenderer(type: EngineConst.Markup,
                                   renderer: AudioRenderer) {
    renderers.set(type, renderer);
  }


  /**
   * Checks if the current renderer is of a given type.
   * @return True if it is an instance of the given type.
   */
  export function isXml(): boolean {
    return renderers.get(Engine.getInstance().markup) instanceof XmlRenderer;
  }

}


export default AuralRendering;
