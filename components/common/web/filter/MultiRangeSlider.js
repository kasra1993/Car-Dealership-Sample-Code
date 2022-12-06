import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classes from "../../../../assets/css/multiRangeSlider.module.css";
import { Form } from "react-bootstrap";
import { priceComma } from "../../../../utils/common/price_odometer_handler";

const MultiRangeSlider = ({
  min,
  max,
  text = "",
  symbol = "",
  step = 1,
  type,
  onChange,
  formik,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className={classes.container}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${classes["thumb"]} ${classes["thumb--left"]}`}
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${classes["thumb"]} ${classes["thumb--right"]}`}
      />

      <div className={classes.slider}>
        <div className={classes["slider__track"]} />
        <div ref={range} className={classes["slider__range"]} />
        <div className={`${classes["slider__left-value"]} d-flex flex-column`}>
          <span>
            {text} {symbol} {type === "year" ? minVal : priceComma(minVal, 2)}{" "}
          </span>
          {type && type === "odometer" && (
            <Form.Check
              type="switch"
              id="odometer_type"
              label={formik.values.odometer_type === 1 ? "Mile" : "Km"}
              style={{
                display: "inline",
              }}
              className="mx-2"
              onChange={(e) => {
                if (e.target.checked) {
                  formik.setFieldValue("odometer_type", 1);
                } else {
                  formik.setFieldValue("odometer_type", 2);
                }
              }}
            />
          )}
        </div>
        <div className={classes["slider__right-value"]}>
          {symbol} {type === "year" ? maxVal : priceComma(maxVal, 2)}{" "}
          {type && type === "odometer" && (
            <span>{formik.values.odometer_type === 1 ? "Mile" : "Km"}</span>
          )}
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
