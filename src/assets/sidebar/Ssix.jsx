import React from "react";

const Ssix = ({ color }) => {
  return (
    <>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3807 12.9837C11.9595 12.7964 13.4819 12.4252 14.9259 11.8921C13.7286 10.5631 12.9998 8.8036 12.9998 6.8739V6.28989C12.9999 6.27624 13 6.26258 13 6.2489C13 3.48748 10.7614 1.2489 8 1.2489C5.23858 1.2489 3 3.48748 3 6.2489L2.99984 6.8739C2.99984 8.8036 2.27106 10.5631 1.07373 11.8921C2.51784 12.4252 4.04036 12.7964 5.61928 12.9837M10.3807 12.9837C9.59999 13.0763 8.80547 13.1239 7.99984 13.1239C7.19431 13.1239 6.3999 13.0763 5.61928 12.9837M10.3807 12.9837C10.4582 13.2248 10.5 13.482 10.5 13.7489C10.5 15.1296 9.38071 16.2489 8 16.2489C6.61929 16.2489 5.5 15.1296 5.5 13.7489C5.5 13.482 5.54183 13.2249 5.61928 12.9837"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Ssix;
