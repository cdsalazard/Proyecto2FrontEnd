function calcularProgreso(progress) {
    if (progress === 1) {
        return '0%';
      } else if (progress == 2) {
        return '20%';
      } else if (progress == 3) {
        return '40%';
      } else if (progress == 4) {
        return '60%';
      } else if (progress == 5) {
        return '75%'; 
      }else {
        return '90%';
      }
}



const BarraProgreso = ({ progress = 1 }) => {
  return (
    <main>
        <div className="progreso-contenedor">
            <div className="progreso" id = 'progreso' style={{ width: calcularProgreso(progress)}}>

            </div>
            <div className={`circle   ${progress >= 1 ? 'active' : '' }`} ><h3>1</h3></div>
            <div className={`circle   ${progress >= 2 ? 'active' : '' }`} ><h3>2</h3></div>
            <div className={`circle   ${progress >= 3 ? 'active' : '' }`} ><h3>3</h3></div>
            <div className={`circle   ${progress >= 4 ? 'active' : '' }`} ><h3>4</h3></div>
            <div className={`circle   ${progress >= 5 ? 'active' : '' }`} ><h3>5</h3></div>
            <div className={`circle   ${progress == 6 ? 'active' : '' }`} ><h3>6</h3></div>
        </div>    
    </main>

  )
}

export default BarraProgreso