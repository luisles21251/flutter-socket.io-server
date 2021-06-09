
const { io } = require('../index');





//Mensajes de sockets
io.on('connection', client => {
console.log('Cliente conectado');

client.on('disconnect', () => {
  console.log('Cliente desconectado');
   });


/*client.emit('active-bands', bands.getBands() );*/



 /* client.on('disconnect', () => {
  console.log('Cliente desconectado');
   });

 client.on('mensaje' , (payload)=>{
 console.log('Mensaje', payload);

 io.emit('mensaje', {admin: 'nuevo mensaje'});

 });

 client.on('vote-band', (payload) => {
//console.log(payload);

 bands.voteBand(payload.id);
  io.emit('active-bands', bands.getBands() );
 });




 client.on('add-band', (payload)=>{
   const newBand = new Band(payload.name);
bands.addBand(newBand);
io.emit('active-bands', bands.getBands() );

});

client.on('delete-band', (payload)=>{
bands.deleteBand(payload.id);
io.emit('active-bands', bands.getBands());

});
*/

/*client.on('nuevo-mensaje', (payload)=> {
 // console.log(payload);

  //io.emit('nuevo-mensaje', payload);
  client.broadcast.emit('nuevo-mensaje', payload);
});*/


});