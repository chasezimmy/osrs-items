import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    handleInputChange = (event) => {
        this.setState({ term: event.target.value });
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className="ui">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.handleInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;