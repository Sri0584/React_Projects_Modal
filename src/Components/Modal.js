import React, { useCallback, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineArrowForward } from "react-icons/md";
import styled from "styled-components";

const Modal = ({ showModal, setShowModal }) => {
  const Background = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const modalRef = useRef();
  const closeModal = () => {
    setShowModal(!showModal);
  };

  const modalRefClose = (e) => {
    console.log(e.target);
    if (modalRef.current === e.target) {
      setShowModal(!showModal);
    }
  };
  const keyPress = useCallback(
    (e) => {
      console.log(e.key);
      if (e.key === "Escape" && showModal) {
        setShowModal(!showModal);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <Background ref={modalRef} onClick={modalRefClose}>
      <div className="modal">
        <img src={require("../assets/pic.png")} alt="first" className="first" />
        <div className="second">
          <h2>Another exciting news coming soon!!</h2>
          <h2>Get your Cameras ready!! and..</h2>
          <h3>Stay tuned!! </h3>
          <div className="btn-grp">
            <button className="bc-btn" onClick={closeModal}>
              <BiArrowBack />
              Go Back
            </button>
            <button className="bc-btn">
              continue
              <MdOutlineArrowForward />
            </button>
          </div>
        </div>
        <MdClose
          aria-label="Close Modal"
          className="close-btn"
          onClick={closeModal}
        />
      </div>
    </Background>
  );
};

export default Modal;
