import React, {Component} from 'react'
import Header from '../../components/interface/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Calendrier from '../modules/Calendrier'


export default class Reserver extends Component {
	render() {
		return (
			<div className="contenu">
        <Header/>
  <div className="book form-inline">
                <div className="input-group mb-3 w-50">
                    <div className="input-group-prepend couverts">
                    <label className="input-group-text" htmlFor="couverts"><FontAwesomeIcon icon={faUtensils} /></label>
                    </div>
                  <select defaultValue={'DEFAULT'} className="custom-select" id="couverts">
                  <option value="DEFAULT" disabled>Nombre de couvert(s)</option>
                  <option value="1">1 couvert</option>
                  <option value="2">2 couverts</option>
                  <option value="3">3 couverts</option>
                  <option value="4">4 couverts</option>
                  <option value="5">5 couverts</option>
                  <option value="6">6 couverts</option>
                </select>
                </div>

         <div className="input-group mb-3 ml-4">
  <div className="input-group-prepend couverts">
    <label className="input-group-text" htmlFor="calendrier"><FontAwesomeIcon icon={faCalendarAlt} /></label>
<Calendrier/>
</div> </div> 

<form>
  <div className="form-row noms">
    <div className="col-xs-6">
      <input type="text" className="form-control " placeholder="Nom"/>
    </div>
    <div className="col-xs-6 ">
      <input type="text" className="form-control" placeholder="Prénom"/>
    </div>
  </div>
</form>
<input type="submit" className="btn btn-info btn-reserver" value="Réserver !"></input>
      
</div>
			</div>
		)
	}
}






