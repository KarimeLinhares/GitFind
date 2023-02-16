import React, { useState } from 'react';
import styles from './Body.module.css';
import ItemList from '../ItemList';

const Body = () => {
	const [user, setUser] = useState('');
	const [currentUser, setCurrentUser] = useState(null);
	const [repos, setRepos] = useState(null);

	const handleGetData = async () => {
		const userData = await fetch(`https://api.github.com/users/${user}`);
		const newUser = await userData.json();

		if (newUser.name) {
			const { name, avatar_url, bio, login } = newUser;
			setCurrentUser({ name, avatar_url, bio, login });

			const reposData = await fetch(
				`https://api.github.com/users/${user}/repos`,
			);
			const newRepos = await reposData.json();

			if (newRepos.length) {
				setRepos(newRepos);
			}
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.sub}>
				<h4>Digite o @ do usuário que deseja pesquisar no GitHub</h4>
			</div>
			<div className={styles.search}>
				<input
					className={styles.input}
					name='usuario'
					value={user}
					onChange={(event) => {
						setUser(event.target.value);
					}}
					placeholder='digite o @username'
				/>
				<button type='submit' onClick={handleGetData} className={styles.button}>
					Buscar
				</button>
			</div>

			<section className={styles.wrapper}>
				{currentUser?.name ? (
					<>
						<div className={styles.perfil}>
							<img
								src={currentUser.avatar_url}
								className={styles.profile}
								alt='Profile'
							/>
							<div className={styles.title}>
								<h3>{currentUser.name}</h3>
								<span>@{currentUser.login}</span>
								<p>{currentUser.bio}</p>
							</div>
						</div>
					</>
				) : null}

				{repos?.length ? (
					<div className={styles.repoTitle}>
						<h3>Repositórios</h3>
						{repos.map((repo) => (
							<ItemList title={repo.name} description={repo.description} />
						))}
					</div>
				) : null}
			</section>
		</section>
	);
};

export default Body;
