import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="box box-1">
                <TopBox />
            </div>
            <div className="box box-2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box-3">
                <ChartBox {...chartBoxProduct} />

            </div>
            <div className="box box-4">
                <ChartBox {...chartBoxConversion} />

            </div>
            <div className="box box-5">
                <ChartBox {...chartBoxRevenue} />

            </div>
            <div className="box box-6">
                Box6
            </div>
            <div className="box box-7">
                Box7
            </div>
            <div className="box box-8">
                Box8
            </div>
            <div className="box box-9">
                Box9
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