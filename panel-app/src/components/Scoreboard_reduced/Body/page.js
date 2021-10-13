function page(props) {

  const {notes} = props;

  return (

    <div className='app_container_body_R'>
      <div className='acb_text_R'>
        {notes}
      </div>
    </div>
  )
}

export default page;
