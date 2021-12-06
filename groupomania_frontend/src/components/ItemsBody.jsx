import React, { Component } from 'react';
import ListItem from './ListItem';
import ListItems from './ListItems';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			publications: {},
		};
	}
	componentDidMount() {
		axios
			.get('http://localhost:8081/api/publication/')
			.then((response) => {
				this.setState({
					loading: false,
					publications: response.data,
				});
			})
			.catch((error) => {
				console.error(`Error:${error}`);
				//alert('Back End NOT ready');
			});
	}

	render() {
		if (this.state.loading === true) {
			return <h1> Loading...</h1>;
		}
		return <ListItems>{this.renderPublications()}</ListItems>;
	}

	renderPublications() {
		return _.map(this.state.publications, (publication) => {
			return (
				<ListItem
					key={publication.id}
					id={publication.id}
					titre={publication.titre}
					text={publication.text}
					utilisateur={publication.utilisateur_id}
					prenom={publication.prenom}
					imageUrl={publication.imageUrl}
					comment={publication.comment}
					date={publication.date_cre}
				/>
			);
		});
	}
}

export default ItemsBody;
