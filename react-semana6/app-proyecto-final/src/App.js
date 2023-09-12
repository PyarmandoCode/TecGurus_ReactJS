import AutoList from './components/AutoList'
import Profile from './components/Profile';
import AutosState from './context/autos/AutosState';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppPri from './components/app';


// function App() {
//     return (
//         <AutosState>
//             <div className='container p-4'>
//                 <h1>Listado de Autos</h1>
//                 <div className='row' >
//                     <div className='col-md-7'>
//                         <AutoList />
//                     </div>

//                     <div className='col-md-5'>
//                         <Profile />
//                     </div>
//                 </div>
//             </div>
//         </AutosState>
//     )
// }

function App() {
    return (
        <div>
            <AppPri/>

        </div>
    )
}

export default App;
