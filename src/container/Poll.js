import React, { Component } from 'react';
import firebase from 'firebase';
class Polling extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.pollname, 'param');
        let db = firebase.database();
        this.state = {
            poll: '',
            pollName: '',
            question: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            voteA: 0,
            voteB: 0,
            voteC: 0,
            voteD: 0,
        }
        let providedParam = this.props.match.params.pollname;
        let that = this;
        db.ref('/polls/' + providedParam + '/').once('value', function (snapshot) {
            // console.log(snapshot.val(), 'data');
            if (snapshot.val() === null) {
                alert('You wrote wrong poll name.');
            }
            else {
                // console.log(snapshot.val(), 'db');
                let db = snapshot.val();
                that.setState({
                    poll: db,
                    pollName: db.pollName,
                    question: db.question,
                    optionA: db.a.option,
                    optionB: db.b.option,
                    optionC: db.c.option,
                    optionD: db.d.option,

                })
            }
        })

    }

    casteVote(option, ev) {
        // console.log(option, ev.target.value);
        let cloneToDb = this.state.poll;
        if (option === 'a') {
            cloneToDb.a.vote = cloneToDb.a.vote + 1;
        }
        else if (option === 'b') {
            cloneToDb.b.vote += 1;
        }
        else if (option === 'c') {
            cloneToDb.c.vote += 1;
        }
        else if (option === 'd') {
            cloneToDb.d.vote += 1;
        }

        console.log(cloneToDb, 'cloneToDb');
        this.setState({ poll: cloneToDb });
        firebase.database().ref('/polls/' + this.state.pollName).set(cloneToDb)

    }

    render() {
        return (
            <div className='custome-container'>

                <div>
                    <h1>{this.state.question}</h1 >
                    <div className='btn-container'>
                        <button type="button" onClick={this.casteVote.bind(this, 'a')} className="btn btn-warning custome-btn">{this.state.optionA}</button>
                        <button type="button" onClick={this.casteVote.bind(this, 'b')} className="btn btn-primary custome-btn">{this.state.optionB}</button>
                        <br />
                        <button type="button" onClick={this.casteVote.bind(this, 'c')} className="btn btn-success custome-btn">{this.state.optionC}</button>
                        <button type="button" onClick={this.casteVote.bind(this, 'd')} className="btn btn-info custome-btn">{this.state.optionD}</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Polling;