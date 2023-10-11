import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, data, dataBigChart } from "../../data";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="box box-1">
                <TopBox />
            </div>
            <div className="box box-2">
                <ChartBox dataChart={chartBoxUser} />
            </div>
            <div className="box box-3">
                <ChartBox dataChart={chartBoxProduct} />

            </div>
            <div className="box box-4">
                <PieChartBox pieChartdata={data} />
            </div>
            <div className="box box-5">
                <ChartBox dataChart={chartBoxConversion} />
            </div>
            <div className="box box-6">
                <ChartBox dataChart={chartBoxRevenue} />

            </div>
            <div className="box box-7">
                <BigChartBox data={dataBigChart} />
            </div>
            <div className="box box-8">
                <BarChartBox barChartdata={barChartBoxVisit} />
            </div>
            <div className="box box-9">
                <BarChartBox barChartdata={barChartBoxRevenue} />
            </div>
            <div className="box box-10">
                Box10
            </div>
            <div className="box box-11">
                Box11
            </div>
        </div>
    )
}

export default Home