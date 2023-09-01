import { React, Component } from 'react'
//import {Ex01} from "./Pokemon/Components/index";
import Pokemones from './Pokemon/Components/Pokemones';


class App extends Component {
    render() {
        return (
            <div className='App'>
                <Pokemones />
            </div>
        );

    }

}



// class App extends Component {
//     render() {
//         return (
//             <div className='App'>
//                 <Ex01 />
//             </div>
//         );

//     }

// }

export default App;