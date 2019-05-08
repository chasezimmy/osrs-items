import React from 'react';
import _ from 'lodash';

import SearchBar from './SearchBar';
import ItemTable from './ItemTable';

const items = require("../items-complete.json");

class App extends React.Component {

    state = { 
        term: '',
        results: []
    }

    mapThatShit = (item, term) => {
        console.log(item.name, term);
        return item.name.startsWith(this.state.term);
    };

    handleSearch = term => {
        this.setState({ term });

        const results = _.filter(items, (item) => {
            if (item.name.toLowerCase().startsWith(term)) {
                return item
            }
        });

        this.setState({ results });
    };

    componentDidMount() {
        this.handleSearch('');
    }

    render() {
        return (
            <div className="ui container segment" style={{ marginTop: '10px'}}>
                <SearchBar 
                    onSearch={this.handleSearch}
                />
                <ItemTable
                    results={this.state.results}
                />
            </div>
        );
    }
}

export default App