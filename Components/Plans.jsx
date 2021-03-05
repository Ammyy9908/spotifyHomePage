import PlanCard from "./PlanCard"
import plans from "../data/plans"

const Plans = () => {
    return ( 
        <div className="plans">
           <div className="plan__wrapper">
               <div className="heading__plan">
                   <h1>Pick your Premium</h1>
               </div>
               <br/>
               <div className="plans__cards">
                   {
                       plans.map((item) =>{
                           return(<PlanCard heading={item.heading} price={item.price} account={item.accounts} features={item.features}/>)
                       })
                   }
               </div>
           </div>
        </div>
     );
}
 
export default Plans;