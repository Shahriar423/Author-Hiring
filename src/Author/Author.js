import React from 'react';
import { useState, useEffect } from 'react';
import './../representer/Represent';
import Writer from '../Writer/Writer';
import './Author.css'
import Represent from './../representer/Represent';

const Author = () => {

    const [authors, setAuthors] = useState([]);
    const [represents, setRepresents] = useState([]);

    useEffect(() => {
        fetch('./writers.JSON')
            .then(res => res.json())
            .then(data => {
                setAuthors(data)
            })
    }, [])

    const handleRepresent = (authorItem) => {
        const newRepresents = [...represents, authorItem];
        setRepresents(newRepresents);
    }

    return (
        <>
            <div className="main-container">
                <div className="author-container">
                    {
                        authors.map(author => <Writer
                            key={author.id}
                            author={author}
                            handleRepresent={handleRepresent}
                        ></Writer>)
                    }
                </div>
                <div className="delegate-container">
                    <Represent represents={represents}></Represent>
                </div>
            </div>
        </>
    );
};

export default Author;