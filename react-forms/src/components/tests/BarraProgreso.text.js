import BarraProgreso from "../BarraProgreso";
import {render, screen} from '@react-library/react'

describe('Funciones dentro de la Barra de progreso', () => {

       test('debe retornar un numero', () =>{
          render(<BarraProgreso />);
          const contenedor = screen.getByRole('div', {name: 'progreso'});
          expect(div).toBeInTheDocument();
        

        });

});
