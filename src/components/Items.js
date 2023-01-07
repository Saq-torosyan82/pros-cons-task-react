import React from "react";
import { connect } from "react-redux";
import "../css/items.css";
import Item from "./Item";

function mapStateToProps(state) {
  return {
    items: state
  }
}

function Items(props) {
    const type  = props.type || 'pros';
    const items = props.items[type] || [];

    return (
        <div className="list-content">
          <div className="list-header">{ type }</div>
          <div className="list">
            <ul>
              {
                items.map((item, i) => {
                    return(                      
                        <Item key={i} number={i + 1} item={item} type={type} />
                    )
                })
              }

              <Item key={items.length} number={ items.length + 1 } type={type} />
            </ul>            
          </div>
        </div>        
      );
}

export default connect(mapStateToProps, null)(Items);