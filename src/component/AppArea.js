import React, {Component} from 'react';
import Main from './Main';
import Social from './Social';
import Style from './Style';

export default class AppArea extends Component {
	render() {
		const aStyle = {
			fontSize: '20px'
		}
		return (
			<div className="col-sm-6 col-xs-12">
				<h2 style={aStyle}>Your Information.</h2>
				<ul className="nav nav-tabs col-sm-12 ">
					<li className="active">
						<a data-toggle="tab" href="#home">Main</a>
					</li>
					<li>
						<a data-toggle="tab" href="#menu1">Social</a>
					</li>
					<li>
						<a data-toggle="tab" href="#menu2">Style</a>
					</li>
				</ul>
				<div className="tab-content gone">
					<div id="home" className="tab-pane fade in active">
						<Main updateSign={this.props.updateSign} Social={this.props.Social} addSign={this.props.addSign}/>
					</div>
					<div id="menu1" className="tab-pane fade">
						<Social updateSign={this.props.updateSign} Social={this.props.Social} addSign={this.props.addSign}/>
					</div>
					<div id="menu2" className="tab-pane fade">
						<Style updateSign={this.props.updateSign} Social={this.props.Social} addSign={this.props.addSign}/>
					</div>
				</div>
			</div>
		);
	}
}