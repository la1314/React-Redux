function page(props) {

  const { notes, delay } = props;
  //TODO carrousel
  return (

    <div className='app_container_body_R'>

      {
        delay.data.length ?
          <div className='acb_div_Urgencia'>
            <div className='acb_text_U'>
              {delay.data.map(
                (u, index) =>
                  <div className='acb_text_div_Urgencia' id={'urgencia_'+index} key={'urgencia_'+index} >
                    <div>
                      {u.tipo}
                    </div>
                    <div>
                      {u.numero}
                    </div>
                    <div>
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
