import plugins from "../plugins";

export async function processCommand(input) {

  for (const plugin of plugins) {
    const match = input.match(plugin.pattern);
    if (match) {
      try {
        const result = await plugin.execute(match);
        // return {
        //   ...result,
        //   content: result.pluginData,
        // };
        return result;
      } catch (error) {
        return {
          type: "text",
          content: `Error: ${error.message}`,
        };
      }
    }
  }

  if (/(?:weather|temperature).*?\bin\b\s+(.+)/i.test(input)) {
    const city = input.match(/(?:weather|temperature).*?\bin\b\s+(.+)/i)[1];
    return city && processCommand(`/weather ${city}`);
  }

  if (/(?:meaning\s+of|define|what is)\s+(\w+)/i.test(input)) {
    const word = input.match(/(?:meaning\s+of|define|what is)\s+(\w+)/i)[1];
    return word && processCommand(`/define ${word}`);
  }

  return {
    type: "text",
    content:
      "Sorry, I didn't understand that command. Try using slash commands like /weather London",
  };
}
