import React, {Component} from 'react';


class SearchBar extends Component{
    constructor(props){
        super (props);

        this.state ={ term: ''};
    }

    render() {
                            //either this
        return (
            <div className="search-bar">

        <input 
        value ={this.state.term}
        //change text value
        onChange={event => this.onInputChange(event.target.value)} />
        </div>
    
        );
    }

    onInputChange(term){
            this.setState({term});
            this.props.onSearchTermChange(term);
    }
    // or this 
   // onInputChange(event){
  //      console.log(event.target.value)
  //  }
}

export default SearchBar;