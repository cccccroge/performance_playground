import React, { useEffect, useRef } from 'react';
const G6 = window.G6;

const data = {
	nodes: [
		{
			id: 'Test1',
			label: 'Test1: ',
		},
		{
			id: 'FieldA',
			label: 'FieldA: ',
		},
		{
			id: 'FieldB',
			label: 'FieldB: ',
		},
		{
			id: 'FieldC',
			label: 'FieldC: ',
		},
	],
	edges: [
		{
			source: 'Test1',
			target: 'FieldA',
		},
		{
			source: 'Test1',
			target: 'FieldB',
		},
		{
			source: 'Test1',
			target: 'FieldC',
		},
	],
};

const ElementTree = props => {
	const { counts } = props;
  const graph = useRef(null);
	useEffect(() => {
		graph.current = new G6.Graph({
			container: 'tree-container',
			width: 800,
			height: 700,
			modes: {
				default: ['drag-canvas'],
			},
			layout: {
				type: 'dagre',
				rankdir: 'LR',
			},
			defaultNode: {
				type: 'node',
				labelCfg: {
					style: {
						fontSize: 20,
						fill: '#fff',
						background: {
							fill: 'black',
							stroke: 'green',
							padding: [5, 10, 5, 10],
							radius: 10,
							lineWidth: 1,
						},
					},
				},
				style: {
					stroke: '#72CC4A',
					width: 150,
				},
			},
			defaultEdge: {
				type: 'polyline',
			},
		});
		graph.current.data(data);
		graph.current.render();
  }, []);
  useEffect(() => {
    data.nodes = [
      {
        id: 'Test1',
        label: 'Test1: ' + counts.test1,
      },
      {
        id: 'FieldA',
        label: 'FieldA: ' + counts.test1FieldA,
      },
      {
        id: 'FieldB',
        label: 'FieldB: ' + counts.test1FieldB,
      },
      {
        id: 'FieldC',
        label: 'FieldC: ' + counts.test1FieldC,
      },
    ];
    graph.current.data(data);
		graph.current.render();
  }, [counts]);

	return <div id="tree-container" />;
};

export default ElementTree;
