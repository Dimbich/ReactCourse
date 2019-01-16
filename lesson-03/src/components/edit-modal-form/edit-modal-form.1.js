import React, {Component} from 'react';

export default class EditModalForm extends Component {
    render() {

    const {visable, onClose, title}=this.props;
    const divClass = visable ? {display:'block', backgroundColor: 'rgba(0, 0, 0, 0.5)'} :{display:'none'};
  
      return (
        <div className="modal" tabIndex="-1" role="dialog" style={divClass}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={console.log('sdfd')}>Изменить</button>
                    <button type="reset" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
                </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
 

