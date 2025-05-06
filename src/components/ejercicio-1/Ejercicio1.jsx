const Ejercicio1 = props => {
    const amountMailsPerHour = props.mails / props.hours
    return <p>{props.title} {amountMailsPerHour + ' correos por hora'}</p>
}

export default Ejercicio1