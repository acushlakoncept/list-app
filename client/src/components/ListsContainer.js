import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';
class ListsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
        this.addNewList = this.addNewList.bind(this)
    }
    addNewList(title, excerpt) {
        axios.post( '/api/v1/lists', { list: {title, excerpt} })
        .then(response => {
            console.log(response)
            const lists = [ ...this.state.lists, response.data ]
            this.setState({lists})
        })
        .catch(error => {
            console.log(error)
        })
    }
    componentDidMount() {
        axios.get('api/v1/lists.json')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lists-container">
                {this.state.lists.map( list => {
                    return ( <div>
                    <List list={list} key={list.id} />
                    <NewListForm onNewList={this.addNewList} />
                    </div>)
                })}
            </div>
        )
    }
}
export default ListsContainer;