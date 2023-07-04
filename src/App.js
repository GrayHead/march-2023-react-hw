import React from 'react';
import Character from "./componsnts/character/Character";

const App = () => {
    return (
        <div>
            <Character id={1} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"}
                       image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>


        </div>
    );
};

export default App;
