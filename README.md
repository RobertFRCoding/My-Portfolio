Que se puede hacer con esta Dapp:

> Crear tu propia Blockchain Privada
> Crear tus propios Nodos
> Conectar tu red a Metamask

> Escanear Tu Blockchain:
    >Escanear Bloques
    >Escanear transacciones
    >Escanear Wallets

> Crear tu propio Token
> Fondear tus Wallets
> Transferir Tokens

> Envio de mensages encriptados
    > Crear llave publica
    > Crear llave Privada
    > Crear mensaje 
    > Encriptar mensaje
    > Enviar mensaje
    > Desencriptar mensaje


    * Inicializar la Dapp una vez hecho el Fork:

        > Vamos a un terminal abrimos la ruta ./frontend
        > Dentro del terminal hacemos un yarn
        > Despues un yarn dev

    
    * Inicializar Backend:
        > Vamos a un nuevo terminal y abrimos la ruta ./backend
        > En el mismo terminal: npx nodemon app.js
Crear tu Propia Blockchain: > Entramos a la Dapp y clicamos en Networks > Clicamos en Crea tu Blockchain Privada > Entramos en el apartado Nodos > Creamos el primer Nodos > Vamos al terminal app.js y Buscamos el Comando:

======================================================================================================================================= geth --datadir ETH/eth20/nodo1 --http --http.port 9946 --http.api admin,eth,miner,net,txpool,personal,web3 --allow-insecure-unlock --unlock "7dee8fee32991d81853518e400b512fe0ab1c6b7" --password ETH/eth20/nodo1/pwd --port 30805 --mine --ipcdisable console
> Pegamos este comando en un nuevo terminal con la ruta ./backend
> Entramos en la carpeta de nuestro Nodo 2

> Abrimos el archivo paramsNodo.json
> Modificamos los siguientes Inputs desde "paramsNodo A Comando terminal:
    > nodo1 => (numero nodo creado)
    > http.port => (puerto el nodo creado)
    > Direccion wallet => (Direccion Wallet del Nodo)
    > port => (puerto Nodo)
    > Lanzamos comando y vemos el nodo trabajando 
Conectar Bockchain a Metamask:

Abrimos Metamask > Add Netwok > Network name: > URL: http://localhost: buscar dentro del archivo paramsNodo el http.port > Chain Id: buscar dentro del archivo paramsNodo el ChainId > Current symbol: > Save

Conectar Explorer:

Abrimos archivo ./backend/explorer.js
Cambiar puerto http://localhost: por puerto de "paramsNodo"