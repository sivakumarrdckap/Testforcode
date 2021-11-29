import React, { useEffect, useLayoutEffect, useState } from "react";
import "./temp.scss";

var thumbsize = 14;

export const MultiRangeSlider = ({
    min,
    max,
    setPriceFilter,
    priceFilter,
    triggerFilterRequest,
}) => {
    // const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(priceFilter.min || 0);
    const [maxVal, setMaxVal] = useState(priceFilter.max);

    // const width = 300;
    // const minWidth =
    //     thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
    // const minPercent = ((minVal - min) / (avg - min)) * 100;
    // const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
    // const styles = {
    //     min: {
    //         width: minWidth,
    //         left: 0,
    //         "--minRangePercent": `${minPercent}%`,
    //     },
    //     max: {
    //         width:
    //             thumbsize +
    //             ((max - avg) / (max - min)) * (width - 2 * thumbsize),
    //         left: minWidth,
    //         "--maxRangePercent": `${maxPercent}%`,
    //     },
    // };

    // useLayoutEffect(() => {
    //     setAvg((maxVal + minVal) / 2);
    // }, [minVal, maxVal]);

    // useEffect(() => {
    //     if (priceFilter?.max && priceFilter?.min) {
    //         setMaxVal(priceFilter?.max);
    //         setMinVal(priceFilter?.min);
    //     }
    // }, [priceFilter]);
    return (
        <>
            {/* <div
                className="min-max-slider"
                data-legendnum="2"
                data-rangemin={min}
                data-rangemax={max}
                data-thumbsize={thumbsize}
                data-rangewidth={width}
            >
                <label htmlFor="min">Minimum price</label>
                <input
                    id="min"
                    className="min"
                    style={styles.min}
                    name="min"
                    type="range"
                    step="1"
                    min={min}
                    max={avg}
                    value={minVal}
                    onChange={({ target }) => {
                        setMinVal(Number(target.value));
                    }}
                />
                <label htmlFor="max">Maximum price</label>
                <input
                    id="max"
                    className="max"
                    style={styles.max}
                    name="max"
                    type="range"
                    step="1"
                    min={avg}
                    max={max}
                    value={maxVal}
                    onChange={({ target }) => {
                        setMaxVal(Number(target.value));
                    }}
                />
            </div> */}
            <div className="inputs">
                ${" "}
                <input
                    type="number"
                    onChange={({ target: { value } }) => setMinVal(value)}
                    onBlur={({ target: { value } }) =>
                        setPriceFilter((priceFilter) => ({
                            ...priceFilter,
                            min: Number(value),
                        }))
                    }
                    value={minVal}
                    name="min-val"
                    id="min-val"
                />{" "}
                - ${" "}
                <input
                    type="number"
                    name="max-val"
                    onChange={({ target: { value } }) => setMaxVal(value)}
                    onBlur={({ target: { value } }) =>
                        setPriceFilter((priceFilter) => ({
                            ...priceFilter,
                            max: Number(value),
                        }))
                    }
                    value={maxVal}
                    id="max-val"
                />
                <button onClick={triggerFilterRequest}>GO</button>
            </div>
        </>
    );
};
