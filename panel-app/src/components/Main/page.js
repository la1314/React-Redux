// Container
import HEADER from '../Scoreboard/Header';
import BODY from '../Scoreboard/Body';
import HEADER_R from '../Scoreboard_reduced/Header';
import BODY_R from '../Scoreboard_reduced/Body';

/**
 * Muestra unos componentes dependiendo al valor actual del state panel
 */
function page(props) {

  const {
    panel
  } = props;


  return (
    <div className='app_container'>

      {panel ?
        <HEADER />
        :
        <HEADER_R />
      }

      {panel ?
        <BODY />
        :
        <BODY_R />
      }

    </div>
  )
}

export default page;
