function page(props) {

  const { notes, delay, actual_iteration } = props;
  //TODO carrousel
  return (

    <div className='app_container_body_R'>

      {
        delay.carrousel.length ?
          <div className='acb_div_Urgencia'>
            <div className='acb_text_U'>
              {delay.carrousel[actual_iteration].map(
                (u, index) =>
                  <div className='acb_text_div_Urgencia' id={'urgencia_'+index} key={'urgencia_'+index} >
                    <div className='div_Urgencia_albaran'>
                      {u.tipo}                
                      {u.numero}
                    </div>
                    <div  className='div_Urgencia_'>
                      {u.nombre}
                    </div>
                  </div>
              )}
            </div>
          </div>
          :
          <div className='acb_div_Nota'>
            <div className='acb_text_R'>
              {notes.texto}
            </div>
            <div className='acb_text_by'>
              {notes.autor}
            </div>
          </div>

      }



    </div>
  )
}

export default page;
