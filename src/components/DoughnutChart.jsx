import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const DoughnutChart = ({ title, cx, cy, height, width, colors }) => {
  return (
    <div className="">
      <p className="text-general text-[16px] font-[500]">{title}</p>
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default DoughnutChart;
