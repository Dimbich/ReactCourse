import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

export default class ModalForm extends Component {
    state = {
        modal: false,
        labelText: this.props.label
    };

  toggle = () => {
    this.setState(({modal})=>({modal:!modal, labelText: this.props.label}));
  }

  
  handleChange = (e) => {
     this.setState({ labelText: e.target.value })     
  }

  render() {
    const {id, className, onAction, type, label} = this.props;
    const {modal, labelText}= this.state;

    //инициализация переменных модпльного окна
    let modalTitle, btnActionStyle, modalBodyText, btnActionText, iconBtn = "";

    switch (type) {
      case "edit":
        modalTitle = 'Редактирование записи';
        btnActionStyle = "primary";
        modalBodyText = <Input value={labelText} onChange={this.handleChange}/>;
        btnActionText = "Редактировать";
        iconBtn = "fa fa-edit"
        break;
      case "delete":
        modalTitle = 'Удаление записи';
        btnActionStyle = "danger";
        modalBodyText =`Вы действительно хотите удалить запись "${label}"?`;
        btnActionText = "Удалить";
        iconBtn = "fa fa-trash-o"
        break;
      default:
       modalTitle = 'Действие не определено';
        break;
    }

    return (
      <div>
        <button
            type="button"
            className="btn-edit btn-sm"
            onClick={this.toggle}>
            <i className={iconBtn}></i>
        </button>
       {/* <Button color="danger" onClick={this.toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={modal} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
          <ModalBody>{modalBodyText}</ModalBody>
          <ModalFooter>
            <Button color={btnActionStyle} onClick={()=>{onAction(id, labelText); this.toggle()}}>{btnActionText}</Button>
            <Button color="secondary" onClick={this.toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

