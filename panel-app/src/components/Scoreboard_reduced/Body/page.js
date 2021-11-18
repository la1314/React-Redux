function page(props) {

  const { notes } = props;

  return (

    <div className='app_container_body_R'>
      <div className='acb_text_R'>
        {notes.texto}
      </div>
      <div className='acb_text_by'>
        {notes.autor}
      </div>
    </div>
  )
}

export default page;
