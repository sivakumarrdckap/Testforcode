import React, { useState } from "react";
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

export default function AccordionElement({
    data,
    i,
    label,
    filterObj,
    setFilterObj,
    loadingComplete,
    setfilterDetails,
    filterDetails,
}) {
    const [displayItem, setdisplayItem] = useState(true);

    const onFilterClick = (key) => {
        if (loadingComplete === false) return;
        console.log({ key: label[key], data: filterObj[data] });
        let currentlabel = label[key];
        if (filterObj[data]) {
            let temp = filterObj[data];
            if (!temp.includes(key)) {
                temp.push(key);
                setFilterObj((filterObj) => ({
                    ...filterObj,
                    [data]: temp,
                }));
            } else {
                if (temp.includes(data)) {
                    if (temp.length <= 1) {
                        const { [data]: foo, ...newobj } = filterObj;
                        setFilterObj(newobj);
                    } else {
                        setFilterObj((filterObj) => ({
                            ...filterObj,
                            [data]: temp.filter((val) => val !== key),
                        }));
                    }
                } else {
                    setFilterObj((filterObj) => ({
                        ...filterObj,
                        [data]: temp.filter((val) => val !== key),
                    }));
                }
            }
        } else {
            setFilterObj((filterObj) => ({
                ...filterObj,
                [data]: [key],
            }));
        }
        if (filterDetails[data]) {
            let temp = filterDetails[data];
            if (!temp.includes(currentlabel)) {
                temp.push(currentlabel);
                setfilterDetails((filterDetails) => ({
                    ...filterDetails,
                    [data]: temp,
                }));
            } else {
                if (temp.includes(data)) {
                    if (temp.length <= 1) {
                        const { [data]: foo, ...newobj } = filterDetails;
                        setfilterDetails(newobj);
                    } else {
                        setfilterDetails((filterDetails) => ({
                            ...filterDetails,
                            [data]: temp.filter((val) => val !== currentlabel),
                        }));
                    }
                } else {
                    setfilterDetails((filterDetails) => ({
                        ...filterDetails,
                        [data]: temp.filter((val) => val !== currentlabel),
                    }));
                }
            }
        } else {
            setfilterDetails((filterDetails) => ({
                ...filterDetails,
                [data]: [currentlabel],
            }));
        }
    };

    let HTML = (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {data.replaceAll("_", " ")}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                {Object.keys(label).map((key, i) => {
                    return (
                        <div>
                            <input
                                style={{
                                    appearance: "revert",
                                    margin: "7px 7px",
                                    position: "initial",
                                    zoom: " 1 !important",
                                    width: "15px",
                                    height: "15px",
                                    padding: "0",
                                }}
                                className="filter-check-box"
                                type="checkbox"
                                checked={
                                    loadingComplete
                                        ? filterObj[data]?.includes(key)
                                        : loadingComplete
                                }
                                onClick={() => onFilterClick(key)}
                                name={label[key]}
                            />
                            <span>{label[key]}</span>
                        </div>
                    );
                })}
            </AccordionItemPanel>
        </AccordionItem>
    );
    return HTML;
}
