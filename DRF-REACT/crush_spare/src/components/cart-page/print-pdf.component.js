import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import BasicTable from "./cart-page.component";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <table ref={ref}>
      <thead>
        <th>column 1</th>
        <th>column 2</th>
        <th>column 3</th>
      </thead>
      <tbody>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
      </tbody>
    </table>
  );
});

const Example = ({ cart, setCart }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="bg-gray-200 p-6">
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint}
      >
        {" "}
        Print Resume{" "}
      </button>
      <BasicTable cart={cart} setCart={setCart} ref={componentRef} />
    </div>
  );
};

export default Example;
