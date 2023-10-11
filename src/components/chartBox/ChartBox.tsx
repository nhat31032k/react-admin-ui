import { Link } from "react-router-dom";
import "./charBox.scss";
import { LineChart, ResponsiveContainer, Line, Tooltip } from "recharts";
interface propsData {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}
const ChartBox = ({ dataChart }: { dataChart: propsData }) => {
    const { color, icon, title, dataKey, number, percentage, chartData } = dataChart
    return (
        <div className="char-box">
            <div className="box-info">
                <div className="title">
                    <img src={icon} alt="" />
                    <span>{title}</span>
                </div>
                <h1>{number}</h1>
                <Link to="/" style={{ color: color }}>View all</Link>
            </div>
            <div className="chart-info">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart width={300} height={100} data={chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }} />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text">
                    <span className="percentage" style={{ color: percentage < 0 ? "tomato" : "limegreen" }}>
                        {percentage}%
                    </span>
                    <span className="duration" >
                        this month
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox