import { ModalContainer } from "./styles";
import Button from "@components/Button/index.jsx";

const Modal = ({ modalRef, controller }) => {
  const { handleClickReset } = controller;

  return (
    <ModalContainer
      ref={modalRef}
      onClick={(event) => {
        if (event.target.nodeName === "DIALOG") {
          modalRef.current.close();
          handleClickReset();
        }
      }}
    >
      <div className="modal">
        <h1 className="modal__title">🔥성공! 축하합니다!🔥</h1>
        <Button
          className="modal__button"
          label={"메인으로 돌아가기"}
          onClick={() => {
            modalRef.current.close();
            handleClickReset();
          }}
        />
      </div>
    </ModalContainer>
  );
};

export default Modal;
