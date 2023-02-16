import React from 'react';
import styles from './index.module.css';

const ItemList = ({ title, description }) => {
	return (
		<div className={styles.itens}>
			<strong>{title}</strong>
			<p>{description}</p>
		</div>
	);
};

export default ItemList;
