import { BarChart } from "@mui/x-charts";

export default function SimpleCharts() {
  return (
    <div className="flex flex-wrap justify-center">
      <div>
        <p className="mx-10 mt-4 text-4xl">First Diagramme</p>
        <BarChart
          xAxis={[
            {
              id: "level",
              data: ["Level 1", "Level 2", "Level 3", "Level 4"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 10],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div>
        <p className="mx-10 mt-4 text-4xl">Second Diagramme</p>
        <BarChart
          xAxis={[
            {
              id: "level",
              data: ["Level 1", "Level 2", "Level 3"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div>
        <p className="mx-10 mt-4 text-4xl">Third Diagramme</p>
        <BarChart
          xAxis={[
            {
              id: "level",
              data: ["Level 1", "Level 2", "Level 3"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div>
        <p className="mx-10 mt-4 text-4xl">Fourth Diagramme</p>
        <BarChart
          xAxis={[
            {
              id: "level",
              data: ["Level 1", "Level 2", "Level 3"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div>
        <p className="mx-10 mt-4 text-4xl">Five Diagramme</p>
        <BarChart
          xAxis={[
            {
              id: "level",
              data: ["Level 1", "Level 2", "Level 3"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div>
        <p className="mx-10 mt-4 text-4xl">Six Diagramme</p>
        <BarChart
          xAxis={[
            {
              id: "level",
              data: ["Level 1", "Level 2", "Level 3"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
