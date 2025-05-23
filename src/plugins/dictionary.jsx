import React from 'react';
import axios from 'axios';

export default {
  name: 'define',
  pattern: /^\/define\s+(\w+)/i,
  execute: async ([, word]) => {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return {
      type: 'plugin',
      pluginName: 'define',
      pluginData: data[0],
    };
  },
  render: (data) => (
    <div className="bg-yellow-100 p-3 rounded-lg">
      <h3 className="font-bold">Definition of {data.word}</h3>
      {data.meanings.map((meaning, index) => (
        <div key={index} className="mt-2">
          <p className="font-medium">{meaning.partOfSpeech}</p>
          <p>{meaning.definitions[0].definition}</p>
        </div>
      ))}
    </div>
  ),
};