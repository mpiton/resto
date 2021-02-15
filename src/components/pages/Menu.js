import React, {Component} from 'react'
import Header from '../../components/interface/Header'
import Gallerie from '../../components/modules/Gallerie'
import PillsMenu from '../../components/modules/PillsMenu'

export default class Menu extends Component {
	render() {
		return (
			<div className="contenu contenu-menu">
        <Header/>
				<div className='flexmode'>
				<div className="carrousel ">
					<Gallerie/>
				</div>
				<div className="menudujour">
					{/* <h1>&#10038; Men&ugrave; &#10038;</h1>
					<ul>
							<li><span>Pizza</span><span>6,00 &euro;</span></li>
							<li><span>Pasta</span><span>5,00 &euro;</span></li>
							<li><span>Vino</span><span>7,00 &euro;</span></li>
							<li><span>Coca Cola</span><span>2,00 &euro;</span></li>
							<li><span>Grigliata</span><span>5,00 &euro;</span></li>
					</ul> */}
					
						<PillsMenu/>
				</div>
			</div>
			</div>
		)
	}
}