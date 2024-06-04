import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div class="control-warning">
        <button
          type="button"
          class="btn btn-warning mywarning "
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          class="btn btn-primary "
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          class="btn btn-outline-danger "
          onClick={handleReset}
        >
          Reset
        </button>
        <button type="button" class="btn btn-success" onClick={handleDecrement}>
          -1
        </button>
      </div>

      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" class="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button type="button" class="btn btn-danger" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
