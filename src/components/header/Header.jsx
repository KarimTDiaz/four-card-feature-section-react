import style from './header.module.scss'

const Header = () => {
	return (
		<header className={style.header}>
			<h1 className={style['header-title']}>Reliable, efficient delivery</h1>
			<h2 className={style['header-subtitle']}>Powered by Technology</h2>
			<p className={style['header-data']}>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            </header>
	);
};

export default Header