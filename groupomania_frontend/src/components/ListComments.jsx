import ShowComments from './ShowComments';

const ListComments = (props) => {
	return (
		<div>
			{props.comments.map((comment) => (
				<ShowComments
					key={comment.id}
					comment={comment.comment}
					id={comment.id}
					date={comment.date_cre}
					user={comment.utilisateur_id}
					post_id={comment.publication_id}
				/>
			))}
		</div>
	);
};

export default ListComments;
