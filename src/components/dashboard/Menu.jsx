const Menu = () => {
    return(
        <div className="menu">
            <button onClick={() => onSelect('geral')}>Ocupação Geral</button>
            {[1, 2, 3, 4].map((num) => (
                <button key={num} onClick={() => onSelect(`consultorio-${num}`)}>
                    Consultório {num}
                </button>
            ))}
        </div>
    )
}

export default Menu