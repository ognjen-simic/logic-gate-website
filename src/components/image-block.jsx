import PropTypes from "prop-types";
import { useState } from "react";

function ImageBlock({ image, alt, items = [], logic }) {
  const [states, setStates] = useState(
    (items || []).map((item) => (item.type === "input" ? false : null))
  );

  function toggleInput(index) {
    const newState = [...states];
    newState[index] = !newState[index];
    setStates(newState);
  }

  const output = (() => {
    const inputs = states.filter((s) => s !== null);
    switch (logic) {
      case "AND": return inputs.every(Boolean);
      case "OR": return inputs.some(Boolean);
      case "NOT": return !inputs[0];
      case "NAND": return !inputs.every(Boolean);
      case "NOR": return !inputs.some(Boolean);
      case "XOR": return inputs.filter(Boolean).length === 1;
      case "XNOR": return inputs.filter(Boolean).length !== 1;
      default: return false;
    }
  })();

  return (
    <div className="image-block">
      <div className="image-wrapper">
        <img src={image} alt={alt} />
        {items.map((item, i) => {
          if (item.type === "input") {
            return (
              <button
                key={i}
                className="gate-node input-node"
                style={{
                  top: `${item.top}%`,
                  left: `${item.left}%`,
                }}
                data-state={states[i] ? "1" : "0"}
                onClick={() => toggleInput(i)}
              >
                {states[i] ? "1" : "0"}
              </button>
            );
          }
          if (item.type === "output") {
            return (
              <div
                key={i}
                className="gate-node output-node"
                style={{
                  top: `${item.top}%`,
                  left: `${item.left}%`,
                }}
              >
                {output ? "1" : "0"}
              </div>
            );
          }
          return null;
        })}
      </div>
      <p>
        <i>
          Screenshot taken from{" "}
          <a href="https://circuitverse.org/">CircuitVerse.org</a>
        </i>
      </p>
    </div>
  );
}

ImageBlock.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["input", "output"]).isRequired,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default ImageBlock;
