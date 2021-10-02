import React from 'react';
import './Writer.css';

const Writer = (props) => {
    const { id, name, salary, book, title, img } = props.author;
    // console.log(props);
    return (
        <>
            <div className="card">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="container">
                    <h1><b>{name}</b></h1>
                    <h5>Author of {book}</h5>
                    <h5>Known as: {title}</h5>
                    <h3>Represent Fee {salary}$</h3>
                    <button onClick={() => props.handleRepresent(props.author)} className="button button-hover"> Be a Representer</button>
                </div>
            </div>
        </>
    );
};

export default Writer;