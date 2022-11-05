const express = require("express")
const Web3 = require("web3")
const router = express.Router()

module.exports = router

// toma el fichero.env y crea variables accesible por process.env.nombre
require("dotenv").config()

const web3 = new Web3("http://localhost:9947")//Modificar puerto

router.get("/ping", (req, res) => {
    res.send({fecha:new Date().toISOString()})
})

router.get("/balance/:cuenta", async (req, res) => {
    const balance = await web3.eth.getBalance(req.params.cuenta)
    res.send({balance:balance})
});

router.get("/enviar/:cuenta", async (req, res) => {
    //tx desde la cuenta minera 
    const tx = await web3.eth.accounts.signTransaction({
        to: req.params.cuenta,
        from: process.env.ADDRESS,// la cuenta viene desde el archivo .env
        value: 10E18,
        gas: 200000
    },  process.env.PRIVATE_KEY)// llave privada desde archivo .enc
     //enviar la tx al provider
    const txSended = await web3.eth.sendSignedTransaction(
        tx.rawTransaction
    )
    //enviar el nuevo saldo
    const balance = await web3.eth.getBalance(req.params.cuenta)
    res.send({balance})
})