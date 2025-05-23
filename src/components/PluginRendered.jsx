import plugins from '../plugins'; 

export default function PluginRenderer({ plugin }) {
  // Find the matching plugin by name
  const matchedPlugin = plugins.find(p => p.name === plugin.pluginName);
  
  if (!matchedPlugin?.render) return null;

  return (
    <div className="plugin-content">
      {matchedPlugin.render(plugin.pluginData)}
    </div>
  );
}