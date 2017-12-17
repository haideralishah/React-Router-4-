import React, { Component } from 'react';
import firebase from 'firebase';
class CreatePollForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pollName: '',
            question: '',
            a: '',
            b: '',
            c: '',
            d: ''
        }
    }


    formContainr = {
        width: '60%',
        margin: '0 auto'
    }

    updateFormState(formLabel, ev) {
        let currentState = {}
        currentState[formLabel] = ev.target.value;
        this.setState(currentState)
    }

    saveToFirebase() {
        console.log(this.state, 'states');
        let db = firebase.database();
        let that = this;
        db.ref('/polls/' + this.state.pollName + '/').once('value', function (snapshot) {
            if (snapshot.val() === null) {
                // console.log(this,'this',that.state.a, 'that');
                that.setState({
                    a: { option: that.state.a, vote: 0 },
                    b: { option: that.state.b, vote: 0 },
                    c: { option: that.state.c, vote: 0 },
                    d: { option: that.state.d, vote: 0 }
                })
                // console.log(that.state);
                let thatIs = that;
                db.ref('/polls/' + that.state.pollName + '/').set(that.state)
                    .then((success) => {
                        console.log(success, 'success');
                        thatIs.setState({
                            pollName: '',
                            question: '',
                            a: '',
                            b: '',
                            c: '',
                            d: ''
                        })
                    })
                    .catch((error) => {
                        console.log(error, 'error');
                    })
            }
            else {
                alert('This poll name is already exist, kindly change the poll name.');
            }
        })


    }

    render() {
        return (
            <div style={this.formContainr}>
                <div className="form-group">
                    <label htmlFor="pollname">Poll Name:</label>
                    <input type="text" value={this.state.pollName} onChange={this.updateFormState.bind(this, 'pollName')} className="form-control" id="pollname" />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Question:</label>
                    <textarea className="form-control" value={this.state.question} onChange={this.updateFormState.bind(this, 'question')} rows="3" id="comment"></textarea>
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="a">A:</label>
                    <input type="text" className="form-control customeForms" value={this.state.a} onChange={this.updateFormState.bind(this, 'a')} id="a" />
                    <label htmlFor="b">B:</label>
                    <input type="text" className="form-control customeForms" value={this.state.b} onChange={this.updateFormState.bind(this, 'b')} id="b" />
                </div>
                <div className="form-group form-inline">
                    <label htmlFor="c">C:</label>
                    <input type="text" className="form-control customeForms" value={this.state.c} onChange={this.updateFormState.bind(this, 'c')} id="c" />
                    <label htmlFor="d">D:</label>
                    <input type="text" className="form-control customeForms" value={this.state.d} onChange={this.updateFormState.bind(this, 'd')} id="d" />
                </div>
                <button type="submit" onClick={this.saveToFirebase.bind(this)} className="btn btn-default">Add Poll</button>
            </div>
        )
    }


}

export default CreatePollForm;