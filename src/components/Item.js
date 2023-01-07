import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addItem, editItem, deleteItem } from "../redux/reducer";
import "../css/item.css";

function mapStateToProps(state) {
    return {
      items: state
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      addItem: (obj) => dispatch(addItem(obj)),
      editItem: (obj) => dispatch(editItem(obj)),
      deleteItem: (obj) => dispatch(deleteItem(obj)),
    }
  }

function Item(props) {
    const type = props.type;
    const itemId = typeof(props.item) !== 'undefined' ? props.item.id : 0;

    const [txt, setTxt] = useState('');

    useEffect(() => {
        if (typeof(props.item) !== 'undefined') {
            setTxt(props.item.txt);
            if (props.item.active) {
                document.getElementById(props.item.id).focus();
            }
        }
        
    }, [props.item]);

    const handleChange = (val) => {
        const value = val.trim();
        setTxt(value);
     if (value !== '') {
        if (typeof(props.item) === 'undefined') {
            props.addItem({
              type,
              item: {
                 id: Math.floor((Math.random() * 1000) + 1),
                 txt: value,
                 active:true
             }
            })
        } else {
            props.editItem({
                id: props.item.id,
                type,
                txt: value,
                active: false
            })
        }
     } else {
        console.log('deleteItem 1');
        props.deleteItem({
            type,
            id: props.item.id
          })
     }         
   }

    return (
        <li>
            <b>{props.number}.</b> 
            <input
             id={itemId}
             type="text"
             value={txt}
             onChange={ (e) => handleChange(e.target.value) }
            />
        </li> 
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);