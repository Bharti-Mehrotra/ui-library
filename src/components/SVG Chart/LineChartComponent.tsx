import {
  LineChart,
  Line as ReLine,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
  CartesianGrid,
  Legend as ReLegend,
  ResponsiveContainer
} from 'recharts';

const svgData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 35 },
  { name: 'Apr', value: 60 },
  { name: 'May', value: 70 },
];

const LineChartComponent: React.FC = () => (
  <div className="p-4 border rounded shadow bg-white">
    <h2 className="text-lg font-semibold mb-2">Recharts (SVG)</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={svgData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ReTooltip />
        <ReLegend />
        <ReLine type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
export default LineChartComponent;
