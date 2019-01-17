import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

export default class EditModalForm extends Component {
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
    const {id, className, OnEdit} = this.props;
    const {modal, labelText}= this.state;
    
    return (
      <div>
        <button
            type="button"
            className="btn-edit btn-sm"
            onClick={this.toggle}>
            <i className="fa fa-edit"></i>
        </button>
       {/* <Button color="danger" onClick={this.toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={modal} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Input value={labelText} onChange={this.handleChange}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{OnEdit(id, labelText); this.toggle()}}>Do Something</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

