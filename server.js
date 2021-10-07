let express = require('express')
let path = require('path')
let SocketIO = require('socket.io')
let qrcode = require('qrcode')

function connect(conn, PORT) {
    let app = global.app = express()

    app.use(express.static(path.join(__dirname, 'views')))
    let _qr = 'invalid'
    app.use(async (req, res) => {
        res.setHeader('content-type', 'image/png')
        res.end(await qrcode.toBuffer(_qr))
    })
    conn.on('qr', qr => {
        _qr = qr
    })
    
    let server = app.listen(PORT, () => console.log('App listened on port', PORT))
    let io = SocketIO(server)
    io.on('connection', socket => {
        let { unpipeEmit } = pipeEmit(conn, socket, 'conn-')
        socket.on('disconnect', unpipeEmit)
    })
}

function pipeEmit(event, event2, prefix = '') {
    let old = event.emit
    event.emit = function (event, ...args) {
        old.emit(event, ...args)
        event2.emit(prefix + event, ...args)
    }
    return {
        unpipeEmit() {
            event.emit = old
        }
    }
}


module.exports = connectlet express = require('express')

let PORT = process.env.PORT || '8080'

function connect(conn) {let express = require('express')

let path = require('path')

let SocketIO = require('socket.io')

let qrcode = require('qrcode')

function connect(conn, PORT) {

    let app = global.app = express()

    app.use(express.static(path.join(__dirname, 'views')))

    let _qr = 'invalid'

    app.use(async (req, res) => {

        res.setHeader('content-type', 'image/png')

        res.end(await qrcode.toBuffer(_qr))

    })

    conn.on('qr', qr => {

        _qr = qr

    })

    

    let server = app.listen(PORT, () => console.log('App listened on port', PORT))

    let io = SocketIO(server)

    io.on('connection', socket => {

        let { unpipeEmit } = pipeEmit(conn, socket, 'conn-')

        socket.on('disconnect', unpipeEmit)

    })

}

function pipeEmit(event, event2, prefix = '') {

    let old = event.emit

    event.emit = function (event, ...args) {

        old.emit(event, ...args)

        event2.emit(prefix + event, ...args)

    }

    return {

        unpipeEmit() {

            event.emit = old

        }

    }

}

module.exports = connect

    let app = express()

    app.set("json spaces", 2)

    app.use(async (req, res) => {

        if (req.path == '/status') {

        let chats = conn.chats.array.filter(a => !a.jid.includes('status@broadcast'))

    let totalgc = chats.filter(a => a.jid.endsWith("g.us")).length

    let totalpc = chats.length - totalgc

        res.setHeader("User-Agent", "GoogleBot")

        res.send({ status:200, 

        user: conn.user, 

        chats: { 

        all: chats.length, 

       group: totalgc, 

     personal: totalpc 

         }, 

         author: {

         instagram: 'https://instagram.com/melcanz.io',

         github: 'https://github.com/Xmell91',

},

        source_code: 'https://github.com/Xmell91/Bot-weah'

})

    } else res.redirect("https://github.com/Xmell91/Bot-weah")

    })

    

 app.listen(PORT, () => console.log('App listened on port', PORT))

}

module.exports = connect
