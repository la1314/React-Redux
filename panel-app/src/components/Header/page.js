
function page(props) {

  const {
    clock
  } = props;

  return (

    <div className='app_container_header'>

      {clock.working_day
        ? <div className='ach_text'>Fin de Jornada en</div>
        : <div className='ach_text'>Inicio de Jornada en</div>
      }

      {

      clock.c_days === undefined
        ?
        <div className='ach_value'>00:00:00</div>
        : (
          clock.c_days === '00'
            ? <div className='ach_value'>{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
            : <div className='ach_value'>{clock.c_days}:{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
        )


      }

    </div>
  )
}

export default page;
