import React from "react"
import DatePicker from "react-datepicker"
import setMinutes from "date-fns"
import setHours from "date-fns"
import { registerLocale, setDefaultLocale } from  "react-datepicker"
import fr from 'date-fns/locale/fr'
import "react-datepicker/dist/react-datepicker.css"

registerLocale('fr', fr)
setDefaultLocale('fr');

export default class ExcludeTimes extends React.Component {
  state = {
    startDate: setHours(setMinutes(new Date(), 30), 16)
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="">
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            locale="fr"
            showTimeSelect
            injectTimes={[
              setHours(setMinutes(new Date(), 1), 0),
              setHours(setMinutes(new Date(), 5), 12),
              setHours(setMinutes(new Date(), 59), 23)
            ]}
            minDate={new Date()} 
            minTime={setHours(setMinutes(new Date(), 0), 11)} 
            maxTime={setHours(setMinutes(new Date(), 0), 23)}
            timeCaption="Heure"
            dateFormat="EEEE dd MMMM yyyy HH:mm"
          />
        </div>
      </div>
    );
  }
}