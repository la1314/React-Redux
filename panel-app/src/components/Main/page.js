function page(props) {

  const {
    clock,
    orders,
    deliveryNote
  } = props;

  return (
    <div className='app_container'>

      <div className='app_container_header'>

        {clock.working_day
          ? <div className='ach_text'>Fin de Jornada en</div>
          : <div className='ach_text'>Inicio de Jornada en</div>
        }
        
        {clock.c_days === '00'
        ? <div className='ach_value'>{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
        : <div className='ach_value'>{clock.c_days}:{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
        }

        
      </div>

      <div className='app_container_body'>
        <div className='acb_deliveryNotes'>
          <div className='acb_dn_text'>Albaranes</div>
          <div className='acb_dn_value'>{deliveryNote.data}</div>
        </div>

        <div className='acb_total'>
          <div className='acb_t_text'>Total</div>
          <div className='acb_t_value'>{deliveryNote.data + orders.data}</div>
        </div>

        <div className='acb_orders'>
          <div className='acb_o_text'>Pedidos</div>
          <div className='acb_o_value'>{orders.data}</div>
        </div>
      </div>

    </div>
  )
}

export default page;
