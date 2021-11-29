import React from "react";

export default function Options({
    options,
    setOption_type_id,
    setOption_type_data,
    option_type_data,
    option_type_id,
    fields_required,
    editValue
}) {
    return (
        <div>
            <div
                className="product-options-wrapper"
                id="product-options-wrapper"
                data-hasrequired="* Required Fields"
            >
                <div className="fieldset">
                    {options.length &&
                        options.map((val) => {
                            return (
                                <div className="field " data-option_id={50005}>
                                    <label
                                        className="customOptionLadel label"
                                        htmlFor="select_50005"
                                    >
                                        <span>{val.title}</span>
                                        {val.is_require==='1' && <span>*</span>}
                                    </label>
                                    <div className="control">
                                        {/* <p>{editValue && editValue.product_option.extension_attributes.custom_options[0].option_value}</p> */}
                                        <select
                                            // value={
                                            //     editValue ? (editValue.product_option.extension_attributes.custom_options[0].option_value) : ''
                                            //     // option_type_id
                                            //     //     ? option_type_id[
                                            //     //           val.title.replace(
                                            //     //               /" "/g,
                                            //     //               "_"
                                            //     //           )
                                            //     //       ]
                                            //     //     : ""
                                            // }
                                            value={!option_type_id ? (editValue ? editValue.product_option.extension_attributes.custom_options[0].option_value : '') : (option_type_id[val.title.replace(/" "/g,"_")])}
                                            className={`product-custom-option admin__control-select ${
                                                val.is_require==='1'
                                                    ? fields_required
                                                        ? option_type_data
                                                            ? option_type_data[
                                                                  val.title.replace(
                                                                      /" "/g,
                                                                      "_"
                                                                  )
                                                              ]
                                                                ? ""
                                                                : "validation-error"
                                                            : "validation-error"
                                                        : ""
                                                    : ""
                                            }`}
                                            title
                                            onChange={(e) => {
                                                if (
                                                    e.target.value !==
                                                    "selectoption"
                                                ) {
                                                    setOption_type_id(
                                                        (option_type_id) => ({
                                                            ...option_type_id,
                                                            [val.option_id]:
                                                                parseInt(
                                                                    e.target
                                                                        .value
                                                                ),
                                                        })
                                                    );
                                                    setOption_type_data(
                                                        (option_type_data) => ({
                                                            ...option_type_data,
                                                            [val.title.replace(
                                                                /" "/g,
                                                                "_"
                                                            )]: {
                                                                title: e.target[
                                                                    e.target
                                                                        .options
                                                                        .selectedIndex
                                                                ].text,
                                                                price: val
                                                                    .values[
                                                                    e.target
                                                                        .options
                                                                        .selectedIndex -
                                                                        1
                                                                ].price,
                                                            },
                                                        })
                                                    );
                                                } else {
                                                    setOption_type_id(
                                                        (option_type_id) => {
                                                            let temp = {};
                                                            option_type_id?.length && Object.keys(
                                                                option_type_id
                                                            ).map((key) => {
                                                                if (
                                                                    key !==
                                                                    val.option_id.toString()
                                                                ) {
                                                                    temp[key] =
                                                                        option_type_id[
                                                                            key
                                                                        ];
                                                                }
                                                            });
                                                            return temp;
                                                        }
                                                    );
                                                    setOption_type_data(
                                                        (option_type_data) => {
                                                            let temp = {};
                                                            option_type_data?.length && Object.keys(
                                                                option_type_data
                                                            ).map((key) => {
                                                                console.log(
                                                                    key,
                                                                    val.title.replace(
                                                                        /" "/g,
                                                                        "_"
                                                                    )
                                                                );
                                                                if (
                                                                    key !==
                                                                    val.title.replace(
                                                                        /" "/g,
                                                                        "_"
                                                                    )
                                                                ) {
                                                                    temp[key] =
                                                                        option_type_data[
                                                                            key
                                                                        ];
                                                                }
                                                            });
                                                            return temp;
                                                        }
                                                    );
                                                }
                                            }}
                                        >
                                            <option value="selectoption">
                                                -- Please {val.title} --
                                            </option>
                                            {val.values.map((option) => {
                                                return (
                                                    <option
                                                        disabled={
                                                            option &&
                                                            option.qty > 0
                                                                ? false
                                                                : true
                                                        }
                                                        value={
                                                            option.option_type_id
                                                        }
                                                    >
                                                        {`${
                                                            option.title
                                                        } + $${parseFloat(
                                                            option.price
                                                        ).toFixed(2)} (${
                                                            option.qty
                                                                ? parseFloat(
                                                                      option.qty
                                                                  ).toFixed(0)
                                                                : 0
                                                        })`}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
