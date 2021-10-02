import React from 'react';

const Represent = (props) => {

    // console.log(props);
    const { represents, name } = props;
    console.log(name);
    let total = 0;
    for (const represent of represents) {
        total = total + represent.salary;
    }

    return (
        <>
            <div>
                <h3>Total Summery</h3>
                <h3>Total Author: {props.represents.length}</h3>
                <br></br>
                <h4>Total Representation fee: {total} $</h4>
                <br></br>
                {
                    represents.map(representSingle => <h5>{representSingle.name}<br /></h5>)
                }
            </div>
        </>
    );
};

export default Represent;