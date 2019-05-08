import React from 'react';

/*
const ItemTable = (props) => {

    const items = props.results.map((item) => {
        return <div key={item.id}>{item.name}</div>
    });

    return (
        <div>{items}</div>
    );

};
*/
class ItemTable extends React.Component {

    handleProp() {
        return this.props.results.map((item) => {
            return (
                <tr>
                    <td data-label="ID"><img src={`https://www.osrsbox.com/osrsbox-db/items-icons/${item.id}.png`} />{item.id}</td>
                    <td data-label="Name"><a href={item.url}>{item.name}</a></td>
                    <td data-label="Weight">{item.weight}</td>
                </tr>
            );
        });
    }


    render() {
        console.log(this.props.results);
        return(
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {this.handleProp()}
                </tbody>
            </table>
        );
    }
}

export default ItemTable;
