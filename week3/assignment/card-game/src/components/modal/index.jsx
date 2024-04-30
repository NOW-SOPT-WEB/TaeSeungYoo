import { ModalContainer } from "./styles";
import Button from "@components/Button/index.jsx";

const Modal = ({ modalRef, controller }) => {
  const { handleClickModalClose } = controller;

  return (
    <ModalContainer
      ref={modalRef}
      onClick={(event) => {
        if (event.target.nodeName === "DIALOG") {
          handleClickModalClose();
        }
      }}
    >
      <div className="modal">
        <h1 className="modal__title">🔥성공! 축하합니다!🔥</h1>
        <Button
          className="modal__button"
          label={"메인으로 돌아가기"}
          onClick={handleClickModalClose}
        />
      </div>
    </ModalContainer>
  );
};

export default Modal;
