import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import BasicTable from "./cart-page.component";
import Button from "@material-ui/core/Button";

const Example = ({ cart, setCart }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="bg-gray-200 p-6">
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrint}
      >
        Print PDF
      </Button>

      <BasicTable cart={cart} setCart={setCart} ref={componentRef} />
    </div>
  );
};

export default Example;
