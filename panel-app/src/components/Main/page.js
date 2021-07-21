function page(props) {

  const {
    clock,
    countDown
  } = props;

  return (
    <div>
      <h1>Reloj Hora:{clock.hour} Minutos:{clock.min} Segundos:{clock.seg}</h1>
      <h1>countDown Hora:{countDown.hour} Minutos:{countDown.min} Segundos:{countDown.seg}</h1>
    </div>
  )
}



export default page;
