import React from 'react';


class History extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let current = this.props.current;
        let items = this.props.items.map( (el, index) => {
            let name = (index == current) ? 'active' : '';
            return (
                <li key={index}>
                    <button 
                        className={name} 
                        onClick={ () => this.props.changeSilde(current, index) }
                    ></button>
                </li>
            )
        });
    
        return (
            <div>
                <ul>{items}</ul>
                <hr style={{border: '1px solid #d2a75f',marginTop:"-4px"}}/>
            </div>
        )
    }
}