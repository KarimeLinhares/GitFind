import React from 'react';
import { ReactComponent as Icon } from '../../Assets/github-icon.svg';
import styles from './Header.module.css';

const Header = () => {
	return (
		<>
			<header>
				<div className={styles.title}>
					<Icon />
					<h1>GitFind</h1>
				</div>
				<p>With GitHub API</p>
			</header>
			<div></div>
		</>
	);
};

export default Header;
