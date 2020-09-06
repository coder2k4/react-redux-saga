import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import Alert from "./Alert";

class PostForm extends Component {

    state = {
        title: ''
    };

    submitHandler = event => {
        event.preventDefault();

        const title = this.state.title;

        if (!title.trim())
        {
            this.props.showAlert('Введине заголовок! Не может быть пустым!');
            return null
        }


        const post = {
            title,
            id: Date.now().toString()
        };

        this.props.createPost(post)


    };

    changeInputHandler = event => {
        event.persist(); // Помогает взаимодействовать с tartget
        this.setState((prev) => ({...prev, ...{[event.target.name]: event.target.value}}));
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert}/>}
                <div className="form-group">
                    <label htmlFor="title">Заголовок текста</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           placeholder="Заголовок"
                           value={this.state.title}
                           onChange={this.changeInputHandler}
                           name='title'
                    />
                </div>
                <button type="submit" className="btn btn-success">Отправить</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost, showAlert
};

const mapStateToProps = (state) => {
    return {alert: state.app.alert}
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);