import React , {useState , useEffect} from "react";
import axios from "axios";

export default function Reward({
    cartid,
    setRewords,
    rewords,
    setRewordsLoading,
    setMaximumRewardpoints,
    maximumRewardpoints,
}) {
    const [rewordsApplyed, setrewordsApplyed] = useState(null);
    const [rewordsApplyedError, setrewordsApplyedError] = useState("");
    const [rewordsApplyedsuccess, setrewordsApplyedsuccess] = useState("");
    const [maximumRewords, setmaximumRewords] = useState(false);
    const rewordQtyreciver = (e) =>{
        setrewordsApplyedError("")
        if(e.target.type === "checkbox"){
            if(maximumRewords){
                setmaximumRewords(!maximumRewords)
                setrewordsApplyed(null)
            }
            else{
                setmaximumRewords(true)
                setrewordsApplyed(e.target.value)
            }
        }
        else{
            setrewordsApplyed(e.target.value)
        }
    }
    const applyRewords = () =>{
        let errorCount = 0;
        if(!rewordsApplyed){
            setrewordsApplyedError("Please enter the reword you want to apply.")
            errorCount = errorCount + 1;
        }
        else if(rewordsApplyed <= 0){
            setrewordsApplyedError("Reword point must be greater than zero.")
            errorCount = errorCount + 1;
        }
        else if(rewordsApplyed > maximumRewardpoints){
            setrewordsApplyedError("oops you do not have sufficient reward points")
            errorCount = errorCount + 1;
        }
        else{
            setRewordsLoading(true)
            axios.post(process.env.REACT_APP_MAGENTO_URI+"rewards/mine/apply/",
            {
                "cart_id": cartid,
                "pointAmount" : rewordsApplyed
            }
            ,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:"Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
            }}
            ).then((res) => {
                if (res.data === true) {
                    setRewords(rewordsApplyed);
                    setrewordsApplyedsuccess("Reword point applied successfully.")
                    setrewordsApplyed(null)
                    setRewordsLoading(false);
                    setTimeout(() => {
                        setrewordsApplyedsuccess("")
                        setrewordsApplyedError("")
                    }, 4000);
                }
                else{
                    setRewordsLoading(false); 
                    setTimeout(() => {
                        setrewordsApplyedError("")
                    }, 4000);
                }
            })
            .catch((err) => {
                setrewordsApplyedError(err?.response?.data?.message)
                setTimeout(() => {
                    setrewordsApplyedsuccess("")
                }, 4000);
                setRewordsLoading(false)
            });
        }
    }
    const cancelReward = () =>{
        if(rewords){
            setRewordsLoading(true)
            axios.post(process.env.REACT_APP_MAGENTO_URI+"rewards/mine/apply/",
            {
                "cart_id": cartid,
                "pointAmount" : 0
            }
            ,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:"Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
            }}
            ).then((res) => {
                if (res.data === true){
                    setRewords(null)
                    setrewordsApplyedsuccess("Reward point canceled successfully.")
                    setRewordsLoading(false);
                    setTimeout(() => {
                        setrewordsApplyedsuccess("")
                        setrewordsApplyedError("")
                    }, 4000);
                }
                else{
                    setRewordsLoading(false); 
                    setTimeout(() => {
                        setrewordsApplyedError("")
                    }, 4000);
                }
            })
            .catch((err) => {
                setrewordsApplyedError(err?.response?.data?.message)
                setTimeout(() => {
                    setrewordsApplyedsuccess("")
                }, 4000);
                setRewordsLoading(false)
            });
        }
        else {
            setrewordsApplyedError("No Reward point Applied.")
            setTimeout(() => {
                setrewordsApplyedsuccess("")
                setrewordsApplyedError("")
            }, 4000); 
        }
    }
    return (
        <div className="reword_drop_down">
            <div className="reward_count">
                You have <span>{maximumRewardpoints} Reward Points</span> available.
            </div>
            {rewordsApplyedError && <div className="errorRewords"><i class="fal fa-times-octagon"></i> {rewordsApplyedError}</div>}
            {rewordsApplyedsuccess && <div className="successRewords"><i class="fal fa-badge-check"></i> {rewords} {rewordsApplyedsuccess}</div>}
            <div className="apply_cupon_intial_wrap reward_customization">
                <input
                    type="number"
                    className="cupon_code_input"
                    placeholder="Enter amount of points to spend"
                    name="rewords_qty"
                    onChange={(e) => rewordQtyreciver(e)}
                    value={rewordsApplyed || ""}
                />
                <button className="apply_btn" onClick={applyRewords}>Apply</button>
            </div>
            <div className="reword_chck_wrap">
                <div className="checkout-agreements">
                    <input
                        type="checkbox"
                        id="rewards"
                        className="custom_check_hiden"
                        name="maximumRewords"
                        value={maximumRewardpoints || 0}
                        checked={maximumRewords}
                        onChange={(e) => rewordQtyreciver(e)}
                    />
                    <label
                        htmlFor="rewards"
                        className="custom_check_box"
                    >
                        Use maximum <span>{maximumRewardpoints} Reward Points</span>
                    </label>
                </div>
                <a className="cancel_rewards" onClick={cancelReward}>Cancel</a>
            </div>
        </div>
    );
}
