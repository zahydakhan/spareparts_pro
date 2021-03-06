import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import BasicTable from "./cart-page.component";
import Button from "@material-ui/core/Button";
import axiosInstance from "../../axios";
import { useHistory } from "react-router-dom";

const Example = ({ cart, setCart, inputSite, setInputSite }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(inputSite);
  var pr_num = Math.floor(1000 + Math.random() * 90000000);

  const handleSubmit = (e) => {
    e.preventDefault();

    cart.forEach((crt, index) => {
      axiosInstance
        .post(`/parts/admin-order/create-order/`, {
          part_number: crt.part_number,
          description: crt.description,
          vendor_name: crt.vendor_name,
          unit_price: crt.aud,
          quantity: crt.quantity,
          total_price: crt.aud * crt.quantity,
          pr_number: pr_num,
          line_number: index + 1,
          site_name: inputSite,
        })
        .then((res) => console.log(crt));
    });
  };

  return (
    <div className="bg-gray-200 p-6">
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrint}
        style={{ marginLeft: "9em" }}
      >
        Print PDF
      </Button>
      <Button
        onClick={handleSubmit}
        variant="contained"
        type="submit"
        style={{ marginLeft: "0.5em" }}
      >
        Save Order
      </Button>

      <BasicTable
        cart={cart}
        setCart={setCart}
        inputSite={inputSite}
        setInputSite={setInputSite}
        ref={componentRef}
      />
    </div>
  );
};

export default Example;
