const PlanCard = ({heading,price,account,features}) => {
    return ( 
        <div className="plan__card">
            <div className="card__top">
            <div className="months__perios">
                1 month free
            </div>
            <h3>{heading}</h3>
            <p className="price_per_month">
                ${price}/month after offer period
            </p>
            <p className="accounts">{account} account</p>
            </div>
            <div className="card__divider">

            </div>
            <ul className="card__plan__features">
                
                {
                    features.map((feature)=>{
                        return (<li>
                            <p>{feature}</p>
                        </li>)
                    })
                }
            </ul>
            <a href="#" className="get_start_button">GET STARTED</a>
        </div>
     );
}
 
export default PlanCard;