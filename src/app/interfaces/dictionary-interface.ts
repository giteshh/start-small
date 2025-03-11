export interface PhoneticInterface {
  text: string;
  audio: string;
  sourceUrl: string;
  license: {
    name: string;
    url: string;
  };
}

export interface MeaningInterface {
  partOfSpeech: string;
  definitions: Array<{
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }>;
  synonyms: string[];
  antonyms: string[];
}

export interface DictionaryInterface {
  word: string;
  phonetic: string;
  phonetics: PhoneticInterface[];
  meanings: MeaningInterface[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}
