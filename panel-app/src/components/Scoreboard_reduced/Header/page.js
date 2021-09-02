function page(props) {

  const {
    clock,
    orders,
    deliveryNote
  } = props;

  return (

    <div className='app_container_header'>

      <div className='ach_data'>
        <div className='ach_deliveryNotes'>
          <div className='ach_dn_value'>{deliveryNote.data}</div>
        </div>
        <div className='ach_total'>
          <div className='ach_t_value'>{deliveryNote.data + orders.data}</div>
        </div>
        <div className='ach_orders'>
          <div className='ach_o_value'>{orders.data}</div>
        </div>
      </div>

      <div className='ach_countdown'>
        {clock.c_days === undefined
          ? <div className='ach_c_value'>00:00:00</div>
          : (clock.c_days === '00'
            ? <div className='ach_c_value'>{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
            : <div className='ach_c_value'>{clock.c_days}:{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
          )
        }
      </div>

    </div>
  )
}

export default page;
