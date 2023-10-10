import { topDealUsers } from "../../data";
import "./topbox.scss";
const TopBox = () => {
    return (
        <div className="top-box">
            <h1>Top deals</h1>
            <div className="list">
                {
                    topDealUsers.map(user => (
                        <div className="list-item" key={user.id}>
                            <div className="user">
                                <img src={user.img} alt="" />
                                <div className="user-text">
                                    <span className="use-name">
                                        {user.username}
                                    </span>
                                    <span className="use-email">
                                        {user.email}
                                    </span>
                                </div>
                            </div>
                            <span className="amount">{user.amount}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopBox