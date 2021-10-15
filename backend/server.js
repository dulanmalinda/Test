const express = require("express")
const cors = require("cors")
const mongooseMorgan = require("mongoose-morgan")
const db = require("./app/models")
const app = express()
app.use(cors())
app.use(express.json())


app.use(mongooseMorgan({
    connectionString: db.url,
}))

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
  ];
  
  // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }
  
  // Enable preflight requests for all routes
  app.options('*', cors(corsOptions));

const Role = require("./app/models/role.model")

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database Sucessfully!")
        initial()
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err)
        process.exit()
    })


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "cashier"
            }).save((err) => {
                if (err) {
                    console.log("error", err)
                }

                console.log("added 'cashier' to roles collection")
            })

            new Role({
                name: "admin"
            }).save((err) => {
                if (err) {
                    console.log("error", err)
                }

                console.log("added 'admin' to roles collection")
            })

        }
    })
}


require("./app/routes/category.route")(app)
require("./app/routes/auth.route")(app)
require("./app/routes/item.route")(app)
require("./app/routes/stock.route")(app)
require("./app/routes/brand.route")(app)
require("./app/routes/branch.route")(app)
require("./app/routes/tag.route")(app)
require("./app/routes/stockLog.route")(app)
require("./app/routes/user.route")(app)
require("./app/routes/exchange.route")(app)
require("./app/routes/purchase.route")(app)
require("./app/routes/invoice.route")(app)
require("./app/routes/report.route")(app)

app.get("/", (req, res) => {
    res.json("Welcome to Gneefer-Server")
})

const PORT = process.env.PORT || 8096
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})