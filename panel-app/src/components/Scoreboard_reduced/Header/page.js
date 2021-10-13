function page(props) {

  const {
    clock,
    orders,
    deliveryNote
  } = props;

  return (

    <div className='app_container_header_R'>

      <div className='ach_data_R'>
        <div className='ach_deliveryNotes_R'>
          <div className='ach_dn_value_R'>{deliveryNote.data}</div>
        </div>
        <div className='ach_total_R'>
          <div className='ach_t_value_R'>{deliveryNote.data + orders.data}</div>
        </div>
        <div className='ach_orders_R'>
          <div className='ach_o_value_R'>{orders.data}</div>
        </div>
      </div>

      <div className='ach_countdown_R'>
        {clock.c_days === undefined
          ? <div className='ach_c_value_R'>00:00:00</div>
          : (clock.c_days === '00'
            ? <div className='ach_c_value_R'>{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
            : <div className='ach_c_value_R_4'>{clock.c_days}:{clock.c_hour}:{clock.c_min}:{clock.c_seg}</div>
          )
        }
      </div>

    </div>
  )
}

export default page;
