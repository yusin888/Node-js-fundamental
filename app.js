//CORE MODULES
const fs = require('fs');
const readline = require('readline');
const http = require('http');
const url = require('url');
const event = require('events');

//USER DEFINED MODULES /custom module
const replaceHtmlModule = require('./module/replaceHtml');
const user = require('./module/user')

/*LECTURE 4: CODE EXAMPLE************
READING INPUT & WRITING OUTPUT
*************************************/

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("what is your name ", (name)=>{
//   console.log("hi there "+ name);
//   rl.close();
// })

// rl.on('close', ()=>{
//   console.log("successfully exicted the program")
// });

/*LECTURE 5: CODE EXAMPLE************
READING & WRITING TO A FILE
*************************************/


// let textIn = fs.readFileSync('./files/input.txt', 'utf-8');
// console.log(textIn);


// let content = `\n Data read from input.txt : ${textIn} \n ${new Date()}`;
// fs.writeFileSync('./files/output.txt', content);
// console.log(content);



/*LECTURE 7: CODE EXAMPLE*****
READING & WRITING TO FILE ASYNCHRONOUSLY
**************/

// fs.readFile('./files/start.txt', 'utf-8', (error, data1) => {
//   console.log(data1)
//   fs.readFile(`./files/${data1}.txt`, 'utf-8', (error2, data2) => {
//     console.log(data2);
//     fs.readFile('./files/append.txt', 'utf-8', (error3, data3) => {
//       console.log(data3)
//       fs.writeFile('./files/output.txt',`${data2} \n\n${data3} \n\nDate created:${new Date()}`, ()=> {
//         console.log("File written successfully");
//       })
//     })
//   })


// })

// console.log("Reading file ....");


/*LECTURE 8: CODE EXAMPLE**************
CREATING A SIMPLE WEB SERVER
***************************************/

// const html = fs.readFileSync('./templates/index.html','utf-8');
// // create the server
// const server = http.createServer((request, response) => {
//   // response.end("Hello from the server");
//   // response.end('<h1>Hello word</h1>');
//   response.end(html);

//   console.log("A new request have been received");
//   // console.log(response);
//   //console.log(request);
// })

// // start the server
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log("listening to port 8000");
// })

/*LECTURE 12: CODE EXAMPLE**************
CREATING Routes in Node js 
***************************************/

// const html = fs.readFileSync('./templates/index.html','utf-8');
// // create the server
// const server = http.createServer((request, response) => {
//   let path = request.url;
//   if(path=== '/' || path.toLocaleLowerCase() === '/home'){
//     response.end("you are in the home page")
//   }else if(path.toLocaleLowerCase() === '/about'){
//     response.end("Youre in the about page");
//   } else {
//     response.end("Error 404: page not found");

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log("listening to port 8000");
// })

/*LECTURE 13: CODE EXAMPLE**************
sending html response
***************************************/

// const html = fs.readFileSync('./templates/index2.html','utf-8');
// // create the server
// const server = http.createServer((request, response) => {
//   let path = request.url;
//   if(path=== '/' || path.toLocaleLowerCase() === '/home'){

//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   }else if(path.toLocaleLowerCase() === '/about'){

//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if(path.toLocaleLowerCase() === '/contact'){

//     response.end(html.replace('{{%CONTENT%}}',"Youre in the contact page"));
//   }  else {

//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log("listening to port 8000");
// })



/*LECTURE 14: CODE EXAMPLE**************
Setting Headers for Response
***************************************/

// const html = fs.readFileSync('./templates/index2.html','utf-8');
// // create the server
// const server = http.createServer((request, response) => {
//   let path = request.url;
//   if(path=== '/' || path.toLocaleLowerCase() === '/home'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   }else if(path.toLocaleLowerCase() === '/about'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if(path.toLocaleLowerCase() === '/contact'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}',"Youre in the contact page"));
//   }  else {
//     response.writeHead(404,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log("listening to port 8000");
// })



/*LECTURE 15: CODE EXAMPLE**************
working with Json data
***************************************/

// const html = fs.readFileSync('./templates/index2.html','utf-8');
// let product = JSON.parse(fs.readFileSync('./Data/product.json','utf-8'));
// // create the server
// const server = http.createServer((request, response) => {
//   let path = request.url;
//   if(path=== '/' || path.toLocaleLowerCase() === '/home'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   }else if(path.toLocaleLowerCase() === '/about'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if(path.toLocaleLowerCase() === '/contact'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}',"Youre in the contact page"));
//   }  else if(path.toLocaleLowerCase() === '/products'){
//     response.writeHead(200,{'Content-Type': 'application/json'});
//     response.end("Youre in the products page");
//     console.log(product);

//   }  else {
//     response.writeHead(404,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log("listening to port 8000");
// })


/*LECTURE 16: CODE EXAMPLE**************
Transforming JSON data into Html
***************************************/

// const html = fs.readFileSync('./templates/index2.html','utf-8');
// let product = JSON.parse(fs.readFileSync('./Data/product.json','utf-8'));
// let  productListHtml = fs.readFileSync('./templates/product-list.html','utf-8');

// let productHtmlArray = product.map((prod)=>{
//   let output = productListHtml.replace('{{%IMAGE%}}',prod.productImage);
//   output= output.replace('{{%NAME%}}', prod.name);
//   output= output.replace('{{%MODELNAME%}}', prod.modeName);
//   output= output.replace('{{%MODELNO%}}', prod.modelNumber);
//   output= output.replace('{{%SIZE%}}', prod.size);
//   output= output.replace('{{%CAMERA%}}', prod.camera);
//   output= output.replace('{{%PRIZE%}}', prod.price);
//   output= output.replace('{{%COLOR%}}', prod.color);

//   return output;
// })
// // create the server
// const server = http.createServer((request, response) => {
//   let path = request.url;
//   if(path=== '/' || path.toLocaleLowerCase() === '/home'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   }else if(path.toLocaleLowerCase() === '/about'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if(path.toLocaleLowerCase() === '/contact'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}',"Youre in the contact page"));
//   }  else if(path.toLocaleLowerCase() === '/products'){
//     let responseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//     response.writeHead(200,{'Content-Type': 'text/html'});
//     response.end(responseHtml);

//   }  else {
//     response.writeHead(404,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log("listening to port 8000");
// })




/*LECTURE 17: CODE EXAMPLE**************
Parsing a query string from URL
***************************************/

// const html = fs.readFileSync('./templates/index2.html','utf-8');
// let product = JSON.parse(fs.readFileSync('./Data/product.json','utf-8'));
// let  productListHtml = fs.readFileSync('./templates/product-list.html','utf-8');

// let productHtmlArray = product.map((prod)=>{
//   let output = productListHtml.replace('{{%IMAGE%}}',prod.productImage);
//   output= output.replace('{{%NAME%}}', prod.name);
//   output= output.replace('{{%MODELNAME%}}', prod.modeName);
//   output= output.replace('{{%MODELNO%}}', prod.modelNumber);
//   output= output.replace('{{%SIZE%}}', prod.size);
//   output= output.replace('{{%CAMERA%}}', prod.camera);
//   output= output.replace('{{%PRIZE%}}', prod.price);
//   output= output.replace('{{%COLOR%}}', prod.color);
//   output= output.replace('{{%ID%}}', prod.id);

//   return output;

// })
// // create the server
// const server = http.createServer((request, response) => {
//   let {query, pathname:path} = url.parse(request.url, true);

//   // let path = request.url;
//   if(path=== '/' || path.toLocaleLowerCase() === '/home'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   }else if(path.toLocaleLowerCase() === '/about'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if(path.toLocaleLowerCase() === '/contact'){
//     response.writeHead(200,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}',"Youre in the contact page"));
//   }  else if(path.toLocaleLowerCase() === '/products'){
//     if(!query.id){
//     let responseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//     response.writeHead(200,{'Content-Type': 'text/html'});
//     response.end(responseHtml);
//     } else{
//       response.end("This product id is "+query.id);
//     }
//   }  else {
//     response.writeHead(404,{
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', ()=>{
//   console.log("listening to port 8000");
// })

//TODO: THE image and price property aren't render properly
/*LECTURE 18: CODE EXAMPLE**************
Creating reusable function to populates the products in product.json to any template html file
***************************************/

// const html = fs.readFileSync('./templates/index2.html', 'utf-8');
// let products = JSON.parse(fs.readFileSync('./Data/product.json', 'utf-8'));
// let productListHtml = fs.readFileSync('./templates/product-list.html', 'utf-8');
// let productDetailHtml = fs.readFileSync('./templates/product-details.html', 'utf-8');



// function replacehtml(template, product) {
//   let output = template.replace('{{%IMAGE%}}', product.productImage);
//   output = output.replace('{{%NAME%}}', product.name);
//   output = output.replace('{{%MODELNAME%}}', product.modeName);
//   output = output.replace('{{%MODELNO%}}', product.modelNumber);
//   output = output.replace('{{%SIZE%}}', product.size);
//   output = output.replace('{{%CAMERA%}}', product.camera);
//   output = output.replace('{{%PRIZE%}}', product.price);
//   output = output.replace('{{%COLOR%}}', product.color);
//   output = output.replace('{{%ID%}}', product.id);
//   output = output.replace('{{%ROM%}}', product.ROM);
//   output = output.replace('{{%DESC%}}', product.Description);

//   return output;
// }
// // create the server
// const server = http.createServer((request, response) => {
//   let { query, pathname: path } = url.parse(request.url, true);

//   // let path = request.url;
//   if (path === '/' || path.toLocaleLowerCase() === '/home') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   } else if (path.toLocaleLowerCase() === '/about') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if (path.toLocaleLowerCase() === '/contact') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', "Youre in the contact page"));
//   } else if (path.toLocaleLowerCase() === '/products') {
//     if (!query.id) {
//       let productHtmlArray = products.map((prod) => {
//         return replacehtml(productListHtml, prod);
//       });
//       let responseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.end(responseHtml);
//     } else {
//       let prod = products[query.id]
//       let productDetailResponseHtml = replacehtml(productDetailHtml, prod);
//       response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//     }
//   } else {
//     response.writeHead(404, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', () => {
//   console.log("listening to port 8000");
// })



/*LECTURE 19: CODE EXAMPLE**************
creating and using a custom module for replacehtml function
***************************************/

// const html = fs.readFileSync('./templates/index2.html', 'utf-8');
// let products = JSON.parse(fs.readFileSync('./Data/product.json', 'utf-8'));
// let productListHtml = fs.readFileSync('./templates/product-list.html', 'utf-8');
// let productDetailHtml = fs.readFileSync('./templates/product-details.html', 'utf-8');




// // create the server
// const server = http.createServer((request, response) => {
//   let { query, pathname: path } = url.parse(request.url, true);

//   // let path = request.url;
//   if (path === '/' || path.toLocaleLowerCase() === '/home') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   } else if (path.toLocaleLowerCase() === '/about') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if (path.toLocaleLowerCase() === '/contact') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', "Youre in the contact page"));
//   } else if (path.toLocaleLowerCase() === '/products') {
//     if (!query.id) {
//       let productHtmlArray = products.map((prod) => {
//         return replaceHtmlModule(productListHtml, prod);
//       });
//       let responseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.end(responseHtml);
//     } else {
//       let prod = products[query.id]
//       let productDetailResponseHtml = replaceHtmlModule(productDetailHtml, prod);
//       response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//     }
//   } else {
//     response.writeHead(404, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// })

// // start the server
// server.listen(8000, '127.0.0.1', () => {
//   console.log("listening to port 8000");
// })



/*LECTURE 20: CODE EXAMPLE**************
Understanding and implemeting a Node driven architecture
 ***************************************/

// const html = fs.readFileSync('./templates/index2.html', 'utf-8');
// let products = JSON.parse(fs.readFileSync('./Data/product.json', 'utf-8'));
// let productListHtml = fs.readFileSync('./templates/product-list.html', 'utf-8');
// let productDetailHtml = fs.readFileSync('./templates/product-details.html', 'utf-8');

// // create the server
// const server = http.createServer();

// // start the server
// server.listen(8000, '127.0.0.1', () => {
//   console.log("listening to port 8000");
// })

// server.on('request',(request, response) => {
//   let { query, pathname: path } = url.parse(request.url, true);

//   // let path = request.url;
//   if (path === '/' || path.toLocaleLowerCase() === '/home') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the home page'));
//   } else if (path.toLocaleLowerCase() === '/about') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', 'Youre in the about page'));
//   } else if (path.toLocaleLowerCase() === '/contact') {
//     response.writeHead(200, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', "Youre in the contact page"));
//   } else if (path.toLocaleLowerCase() === '/products') {
//     if (!query.id) {
//       let productHtmlArray = products.map((prod) => {
//         return replaceHtmlModule(productListHtml, prod);
//       });
//       let responseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.end(responseHtml);
//     } else {
//       let prod = products[query.id]
//       let productDetailResponseHtml = replaceHtmlModule(productDetailHtml, prod);
//       response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//     }
//   } else {
//     response.writeHead(404, {
//       'Content-Type': 'text/html',
//       'my-header': 'hello, world'
//     });
//     response.end(html.replace('{{%CONTENT%}}', '"Error 404: page not found"'));

//   }

//   console.log("A new request have been received");
// });


/*LECTURE 21: CODE EXAMPLE**************
EMITTING & HANDLING CUSTOM EVENTS
***************************************/
//using an instance of the event.Emitter class to emit and listener to events
//let myEmitter = new event.EventEmitter();
//using an instance of the user class that internally inherit from event.Emitter class to emit and listener to events

// let myEmitter = new user();

// myEmitter.on('userCreated',(id,name)=>{
//   console.log('A new user profile is created')
//   console.log(`A new user ${name} with ID ${id} is created`)
// })

// myEmitter.on('userCreated',(id,name)=>{
//   console.log('A new user profile is added in database')
//   console.log(`A new user ${name} with ID ${id} is added in database`)
// })

// myEmitter.emit('userCreated',101, "john");


/*LECTURE 23: CODE EXAMPLE**************
UNDERSTANDING STREAMS IN PRACTICE
***************************************/
//SOLUTION 1: WITHOUT READABLE OR WRITABLE STREAM
// create the server
// const server = http.createServer();

// // start the server
// server.listen(8000, '127.0.0.1', () => {
//   console.log("listening to port 8000");
// })

// server.on('request', (request,response)=>{
//   fs.readFile('./files/large-file.txt','utf-8',(err, data)=>{
//     if(err){
//       response.end("Somethinng went wrong")
//     }
//     response.end(data);
//   })
// })

//SOLUTION 2: USING READABLE OR WRITABLE STREAM
//CREATE SERVER
// const server = http.createServer();

// // start the server
// server.listen(8000, '127.0.0.1', () => {
//   console.log("listening to port 8000");
// })

// server.on('request', (request, response) => {
//   let rs = fs.createReadStream('./files/large-file.txt');

//   rs.on('data', (chunks) => {
//     response.write(chunks)
//   })


//   rs.on('error', (error) => {
//     response.end(error.message)
//   })

//   rs.on('end', () => {
//     response.end()
//   })

// })

// using pipe method

// const server = http.createServer();

// server.listen(8000, '127.0.0.1', () => {
//   console.log('listening to port 8000')
// })

// server.on('request', (req, res) => {
//   let rs = fs.createReadStream('./files/large-file.txt');

//   rs.pipe(res)
// })


/*LECTURE 29: CODE EXAMPLE**************
EVENT LOOP IN PRACTICE
***************************************/
console.log('Program started ');



//STORED IN 2 PHASE
fs.readFile('./files/input.txt', 'utf-8', () => {
  console.log('file read complete')

  //STORED IN 1 PHASE
  setTimeout(() => {
    console.log('Timer callback executed')
  })
  //STORED IN 3 PHASE
  setImmediate(() => {
    console.log('setImmediate callback executed')
  })
  //stored in process.nextTick queue
  process.nextTick(() => {
    console.log('Process.nextTick callback executed')
  })
})



console.log('program complete')