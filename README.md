
<h1 align="center">
🌐OLX-CLONE
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs
</p>



## Project structure
```terminal
package.json
server.js
client/
   public
   src
   package.json
Model
Routes
...
```



## Client-side usage(PORT: 3000)
```terminal
$ cd client   // go to client folder
$ npm i       // npm install packages
$ npm start // run it locally


```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> ./.env
```

### Start

```terminal
$ npm i       // npm install packages
$ nodemon server.js  //run locally
```


# Dependencies(tech-stacks)
```

$Client-side 
$npm i axios
$npm i react-router-dom
$npm i @material-ui/icons
$npm i fuse.js
$npm i @material-ui/core



Server side

$npm i jsonwebtoken
$npm i bcrypt
$npm i formidable
$npm i express
$npm i dotenv
$npm i mongoose
$npm i nodemon

```



