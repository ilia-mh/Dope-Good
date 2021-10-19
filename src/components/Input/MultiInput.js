import React from "react";

import "./multiInputs.scss";

export default function MultiInput({
  vals,
  setter,
  name,
  type,
  plcHolder,
  err,
  isOption,
}) {
  const changeVals = (newVal, idx) => {
    const newArr = vals.map((oldVal, oldIdx) =>
      oldIdx === idx ? newVal : oldVal
    );

    setter(newArr);
  };

  const changeOptionName = (newVal, idx) => {
    const newArr = vals.map(({ name, code }, oldIdx) =>
      oldIdx === idx ? { name: newVal, code } : { name, code }
    );

    setter(newArr);

    console.log(vals);
  };

  const changeOptionCode = (newVal, idx) => {
    const newArr = vals.map(({ name, code }, oldIdx) =>
      oldIdx === idx ? { name, code: newVal } : { name, code }
    );

    setter(newArr);

    console.log(vals);
  };

  const createNewVal = () => {
    if (!vals.length) setter([""]);
    else if (vals[vals.length - 1].length > 0) setter([...vals, ""]);
  };

  const createNewOption = () => {
    if (!vals.length)
      setter([
        {
          code: "",
          name: "",
        },
      ]);
    else if (
      vals[vals.length - 1].code.length &&
      vals[vals.length - 1].name.length
    ) {
      setter([
        ...vals,
        {
          code: "",
          name: "",
        },
      ]);
    }
  };

  return (
    <>
      <div className="multi-input-form">
        <div className="first-row">
          <label htmlFor={name}>Enter {name}s:</label>

          {!isOption ? (
            <button className="add-input" onClick={createNewVal}>
              +
            </button>
          ) : (
            <button className={`add-option`} onClick={createNewOption}>
              Add {name[0].toUpperCase() + name.slice(1)}
            </button>
          )}
        </div>

        <div className="inputs-holder">
          {!isOption
            ? vals.map((val, idx) =>
                type === "text" ? (
                  <input
                    key={idx}
                    type={type}
                    name={name}
                    id={name}
                    value={val}
                    placeholder={
                      plcHolder ? plcHolder + (idx + 1) : name + " " + (idx + 1)
                    }
                    onChange={(e) => changeVals(e.target.value, idx)}
                  />
                ) : (
                  <textarea
                    key={idx}
                    name={name}
                    id={name}
                    value={val}
                    cols="60"
                    rows="6"
                    placeholder={
                      plcHolder ? plcHolder + (idx + 1) : name + " " + (idx + 1)
                    }
                    onChange={(e) => changeVals(e.target.value, idx)}
                  ></textarea>
                )
              )
            : vals.length
            ? vals.map((val, idx) => {
                return (
                  <div
                    className={`option-holder ${name}-${idx}`}
                    key={name + idx}
                  >
                    <input
                      key={`name${idx}`}
                      type="text"
                      name={`${name}-name-${idx}`}
                      id={`${name}-name-${idx}`}
                      value={val.name}
                      placeholder={
                        plcHolder
                          ? plcHolder + (idx + 1)
                          : name + " " + (idx + 1) + " name"
                      }
                      onChange={(e) => changeOptionName(e.target.value, idx)}
                    />
                    <p>:</p>
                    <input
                      key={`code${idx}`}
                      type="text"
                      name={`${name}-code-${idx}`}
                      id={`${name}-code-${idx}`}
                      value={val.code}
                      placeholder={
                        plcHolder
                          ? plcHolder + (idx + 1)
                          : name + " " + (idx + 1) + " code"
                      }
                      onChange={(e) => changeOptionCode(e.target.value, idx)}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
