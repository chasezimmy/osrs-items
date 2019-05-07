import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { term: '' }

    handleSearch = term => {
        this.setState({ term : term });
    }

    render() {
        return (
            <div className="ui contianer">
                <SearchBar 
                    onSearch={this.handleSearch}
                />
                <div>{this.state.term}</div>
            </div>
        );
    }
}

export default App