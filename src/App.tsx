import "./assets/scss/_styles.scss";
import codeIcon from './assets/svg/code.svg'
import editContentIcon from './assets/svg/edit-content.svg'
import hourglassIcon from './assets/svg/hourglass.svg'
import searchIcon from './assets/svg/search.svg'
import pencilIcon from './assets/svg/pencil.svg'
import uploadDesktop from './assets/svg/upload-desktop.svg'
import userCheckIcon from './assets/svg/user-check.svg'

function App() {
  return (
		<>
			<div className="content">
				<p>We're a creative web solutions agency with over a decade of experience providing websites for small and large businesses. We build fast and dynamic websites and deliver them on time. We are passionate about web accessibility and this is reflected in our work. </p>
			</div>
			<div className="content">
				<h2>Services</h2>
				<ul className="icon-list">
					<li className="icon-list__item">
						<span>
							<img src={codeIcon} className="icon" alt="Code icon" />
							Web development
						</span>
						<p>We love coding and web languages and have years of experience working with them.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={editContentIcon} className="icon" alt="Bar chart icon" />
							Content management systems (CMS)
						</span>
						<p>We can edit your site's content or enable you to do this yourself.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={uploadDesktop} className="icon" alt="Bar chart icon" />
							Website hosting
						</span>
						<p>We can host and manage your website for you and automate backups so it never goes down.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={pencilIcon} className="icon" alt="Bar chart icon" />
							Copywriting
						</span>
						<p>We understand the importance of good copy and will happily advise on this.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={userCheckIcon} className="icon" alt="Bar chart icon" />
							Accessibility auditing
						</span>
						<p>We can perform accessibility audits on your site to check it adheres to WCAG standards.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={hourglassIcon} className="icon" alt="Bar chart icon" />
							Speed testing
						</span>
						<p>If your site is slow or underperforming we can make improvements.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={searchIcon} className="icon" alt="Bar chart icon" />
							SEO auditing
						</span>
						<p>We can perform SEO audits on your site to ensure your business is always visible.</p>
					</li>
				</ul>
			</div>
			<div className="content">
				<h2>Clients</h2>
				<p>We have worked with clients of all sizes including:</p>
				<ul>
					<li>World Vision</li>
					<li>Countrywide</li>
					<li>Momentum Training</li>
					<li>APL Logistics</li>
					<li>EdComs</li>
					<li>AML Group</li>
				</ul>
			</div>
			<div className="content">
				<h2>Contact us</h2>
				<p>We'd love to help with your next project.</p>
				<button>Get in touch</button>
			</div>
		</>
	)
}

export default App
