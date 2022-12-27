


const tomarJSON = async (productos) => {
    const response = await fetch(productos)
    const stock = await response.json();
    return stock;
}

export {tomarJSON}
