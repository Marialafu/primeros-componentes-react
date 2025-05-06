const Ejercicio3 = props => {
    const leftoverCandies = props.candies % props.groups
    return <p>{props.title} {leftoverCandies} caramelos sobran</p>
}

export default Ejercicio3