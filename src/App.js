import React from 'react';
import Simpson from "./components/simpson/Simpson";


const App = () => {
    return (
        <div>

            <Simpson name={'Bart'} surname={"Simpson"} age={10}
                     photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>

            <Simpson name={'Homer'} surname={"Simpson"} age={38}
                     photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>

        </div>
    );
};

export default App;
