function page(props) {

  const {
    clock,
    pending,
    deliveryNote
  } = props;

  return (
    <div className='app_container'>

      <div className='app_container_header'>
        <h1>{clock.c_hour}:{clock.c_min}:{clock.c_seg}</h1>
      </div>

      <div className='app_container_body'>
        <div className='acb_deliveryNotes'>
          <div className='acb_dn_text'>Albaranes</div>
          <div className='acb_dn_value'>{deliveryNote.data}</div>
        </div>

        <div className='acb_total'>
          <div className='acb_t_text'>Total</div>
          <div className='acb_t_text'>{deliveryNote.data + pending.data}</div>
        </div>

        <div className='acb_pending'>
          <div className='acb_p_text'>Pedidos</div>
          <div className='acb_p_value'>{pending.data}</div>
        </div>

      </div>
    </div>
  )
}



export default page;
