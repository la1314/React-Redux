function page(props) {

  const {
    clock,
    pending,
    deliveryNote
  } = props;

  return (
    <div>
      <h1>countDown Hora:{clock.c_hour} Minutos:{clock.c_min} Segundos:{clock.c_seg}</h1>
      <h1>Albaraner: {deliveryNote.data}</h1>
      <h1>Total: {deliveryNote.data + pending.data}</h1>
      <h1>Pedidos: {pending.data}</h1>
    </div>
  )
}



export default page;
