import Axios from "axios";

export const GetYotpoData = (setStar, setYotpo, prod_id) => {
    Axios.get(
        `https://api.yotpo.com/v1/widget/${process.env.REACT_APP_YOTPO_REVIEW}/products/${prod_id}/reviews.json`
    ).then(
        ({
            data: {
                status: { code },
                response,
            },
        }) => {
            if (code === 200) {
                setYotpo(response);
                let temp = 0;
                response.bottomline.star_distribution &&
                    Object.keys(response.bottomline.star_distribution).map(
                        (key) => {
                            temp += response.bottomline.star_distribution[key];
                        }
                    );
                setStar(temp);
            }
        }
    );
};
