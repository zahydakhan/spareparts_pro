import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import MainOrderContainer from "./MainOrderContainer";
import Button from "@material-ui/core/Button";
import axiosInstance from "../../axios";
import { useHistory } from "react-router-dom";

const MainOrderPdf = ({ mainOrder }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(mainOrder);

  const handleSubmit = (e) => {
    e.preventDefault();

    mainOrder.forEach((order, index) => {
      axiosInstance
        .post(`/parts/admin-mainorder/create-mainorder/`, {
          part_number: order.part_number,
          description: order.description,
          vendor_name: order.vendor_name,
          unit_price: order.unit_price,
          quantity: order.quantity,
          total_price: order.total_price,
          pr_number: order.pr_number,
          line_number: order.line_number,
          site_name: order.site_name,
          month: order.month,
        })
        .then((res) => console.log("Success"));
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

      <MainOrderContainer mainOrder={mainOrder} ref={componentRef} />
    </div>
  );
};

export default MainOrderPdf;
