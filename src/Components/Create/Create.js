import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              onChange={(e)=>setName(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="Honda"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              onChange={(e)=>setCategory(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="Vehicle"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e)=>setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
            <br />
            <br />
            <img alt="Posts" width="200px" height="200px" src=""></img>
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn">upload and Submit</button>
      
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
