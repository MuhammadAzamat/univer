import "./style.scss";
import PaymentList from "./list";
import { useEffect, useState } from "react";
import { PAYMENT_LIST } from "../redux/constants";
import { useDispatch, useSelector } from "react-redux";
import Pay from "./pay";
const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const dispatch = useDispatch();
  const list = useSelector((state) => state.payment.list);
  useEffect(() => {
    // dispatch({ type: PAYMENT_LIST, payload: [] });
  }, []);
  const showModal = () => setIsModalOpen(true);
  const paymentProps = {
    isModalOpen,
    setIsModalOpen,
    handleOk: () => setIsModalOpen(false),
    handleCancel: () => setIsModalOpen(false),
  };
  const listProps = {
    size: "middle",
    dataSource: list,
    showModal,
    pagination: {
      // page: 1,
      total: 100,
      // current: 1,
      pageSize: 25,
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ["25", "50", "100"],
      showLessItems: true,
      showTitle: true,
    },
  };
  return (
    <>
      <Pay {...paymentProps} />
      <PaymentList {...listProps} />
    </>
  );
};

export default Payment;
