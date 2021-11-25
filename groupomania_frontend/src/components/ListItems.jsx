import React from 'react';

const ListItems = ({ children }) => {
	return <ul className="d-flex flex-column-reverse">{children}</ul>;
};

export default ListItems;
