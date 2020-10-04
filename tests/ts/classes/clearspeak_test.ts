/**
 * @fileoverview Abstract class for clearspeak rule tests.
 * @author Volker.Sorge@gmail.com (Volker Sorge)
 */ 
//
// Copyright 2019 Volker Sorge 
//
//
// Copyright (c) 2019 The MathJax Consortium 
//
// Licensed under the Apache License, Version 2.0 (the "License"); 
// you may not use this file except in compliance with the License. 
// You may obtain a copy of the License at 
//      http://www.apache.org/licenses/LICENSE-2.0 
// Unless required by applicable law or agreed to in writing, software 
// distributed under the License is distributed on an "AS IS" BASIS, 
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
// See the License for the specific language governing permissions and 
// limitations under the License. 



import{SpeechTest}from './speech_test';



export class ClearspeakTest extends SpeechTest {

  /**
     * @override
     */ 
  domain = 'clearspeak';
  constructor() {
    super();
  }


  /**
   * @override
   */ 
  setUpTest() {
    super.setUpTest();
    sretest.TestExternal.sre.System.getInstance().setupEngine(
    {markup:sretest.TestExternal.sre.Engine.Markup.PUNCTUATION});
  }


  /**
   * @override
   */ 
  tearDownTest() {
    sretest.TestExternal.sre.System.getInstance().setupEngine(
    {markup:sretest.TestExternal.sre.Engine.Markup.NONE});
    super.tearDownTest();
  }
}

