import { useBSModal } from '@/context/ModalContext';
import { Button, Modal } from 'react-bootstrap';
import style from './bsmodal.module.css';

export default function BSModal() {
  const bsModal = useBSModal();

  const onHide = () => {
    bsModal.setShow(false);
  };

  return (
    <Modal show={bsModal.show} onHide={onHide}>
      <Modal.Body>
        <div className={style.body}>
          <div>Нажата кнопка: {bsModal.content.btnName}</div>
          <div>ИД компании: {bsModal.content.companyId}</div>
        </div>
        <div className={style.footer}>
          <Button className={style.btn} onClick={onHide}>
            Хорошо
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
