import React, { useEffect } from 'react';
const G6 = window.G6;

const data = {
  // The array of nodes
  nodes: [
    {
      id: 'node1', // String, unique and required
      x: 100, // Number, the x coordinate
      y: 200, // Number, the y coordinate
    },
    {
      id: 'node2', // String, unique and required
      x: 300, // Number, the x coordinate
      y: 200, // Number, the y coordinate
    },
  ],
  // The array of edges
  edges: [
    {
      source: 'node1', // String, required, the id of the source node
      target: 'node2', // String, required, the id of the target node
    },
  ],
};

const ElementTree = (props) => {
  useEffect(() => {
    const graph = new G6.Graph({
      container: 'tree-container', // String | HTMLElement, required, the id of DOM element or an HTML node
      width: 500, // Number, required, the width of the graph
      height: 700, // Number, required, the height of the graph
    });
    graph.data(data); // Load the data defined in Step 2
    graph.render(); // Render the graph
  }, []);

  return <div id="tree-container" />
};

export default ElementTree;
