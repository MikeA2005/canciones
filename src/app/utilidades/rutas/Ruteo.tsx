import { Route, Routes } from 'react-router-dom';
import { Inicio } from '../../componentes/contenedor/Inicio';
import { CancionCrear } from '../../componentes/canciones/CancionCrear';
import { CancionListar } from '../../componentes/canciones/CancionListar';
import { CancionAdmin } from '../../componentes/canciones/CancionAdmin';
import { CancionActualizar } from '../../componentes/canciones/CancionActualizar';
import { NoEncontrado } from '../../componentes/contenedor/NoEncontrado';
import { Acerca } from '../../componentes/otros/Acerca';

export const Ruteo = () => {
    return (
        <Routes>
            <Route path='/' element={<Inicio />} />

            <Route path='/cancre' element={<CancionCrear />} />
            <Route path='/canlis' element={<CancionListar />}/>
            <Route path='/canadmin' element={<CancionAdmin />}/>
            <Route path='/acer' element={<Acerca />}/>

            <Route path='/canact/:codigo' element={<CancionActualizar />}/>

            <Route path='*' element={<NoEncontrado />}/>

        </Routes>
    );
}