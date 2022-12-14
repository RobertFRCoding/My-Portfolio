export async function getBlock(bloque) {
    console.log(bloque)
    const response = await fetch(`http://localhost:3334/explorer/bloque/${bloque.queryKey[1]}`)
    const data = await response.json()
    return data
}

export async function getTx(tx) {
    
    const response = await fetch(`http://localhost:3334/explorer/tx/${tx.queryKey[1]}`)
    const data = await response.json()
    return data
}

export async function getBalance(balance) {
    const response = await fetch(`http://localhost:3334/explorer/balance/${balance.queryKey[1]}`)
    const data = await response.json()
    return data
}