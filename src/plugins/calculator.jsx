import { evaluate } from 'mathjs';

export default {
  name: 'calc',
  pattern: /^\/calc(?:ulate)?\s+(.+)/i, 
  execute: async ([, expression]) => {
    try {
      const cleanExpr = expression.replace(/\s+/g, ''); 
      const result = evaluate(cleanExpr);
      return {
        type: 'plugin',
        pluginName: 'calc',
        pluginData: { expression: cleanExpr, result },
      };
    } catch (error) {
      throw new Error('Invalid mathematical expression');
    }
  },

  render: ({ expression, result }) => (
    <div className="bg-green-100 p-3 rounded-lg">
      <h3 className="font-bold">Calculation Result</h3>
      <p>{expression} = <strong>{result}</strong></p>
    </div>
  ),
};