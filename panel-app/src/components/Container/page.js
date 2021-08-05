function page(props) {

  const {
    orders,
    deliveryNote
  } = props;

  return (

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
  )
}

export default page;
