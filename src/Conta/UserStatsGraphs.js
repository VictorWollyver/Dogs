import React from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import { Graph, GraphItem } from "../Components/Styles/Graph.styled";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: +item.acessos,
      };
    });

    if (data.length)
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
    setGraph(graphData);
  }, [data]);
  return (
    <Graph>
      <GraphItem primary>
        <p>Acessos: {total}</p>
      </GraphItem>
      <GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </GraphItem>

      <GraphItem>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}></VictoryBar>
        </VictoryChart>
      </GraphItem>

    </Graph>
  );
};

export default UserStatsGraphs;
