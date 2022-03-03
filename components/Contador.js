const Contador = () => {
    const [contador, setcontador] = React.useState(0);
    const Aumentar = () => setcontador(contador + 1)
    const Disminuir = () => setcontador(contador - 1)
    
    
    return (
        <><>
            <div>
                <h1 className={contador<0 ? "menor":"mayor"}>Conador:{contador}</h1>
            </div><hr /></>
            <button  onClick={Aumentar} type=""  >Aumentar</button>
            <button onClick={Disminuir} type="">Disminuir</button>
        
        </>
    );
};