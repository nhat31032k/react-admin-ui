import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";
interface dataProps {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[]
}
const BarChartBox = ({ barChartdata }: { barChartdata: dataProps }) => {
    const { title, color, dataKey, chartData } = barChartdata;
    return (
        <div className="bar-chart">
            <h1>{title}</h1>
            <ResponsiveContainer width="100%" height={150}>
                <BarChart width={150} height={40} data={chartData}>
                    <Tooltip
                        contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                        labelStyle={{ display: "none" }}
                        cursor={{ fill: "none" }}
                    />
                    <Bar dataKey={dataKey} fill={color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartBox