import ButtonMailto from './ButtonMailto.tsx';

import "./assets/scss/_styles.scss";
import codeIcon from './assets/svg/code.svg'
import editContentIcon from './assets/svg/edit-content.svg'
import hourglassIcon from './assets/svg/hourglass.svg'
import searchIcon from './assets/svg/search.svg'
import pencilIcon from './assets/svg/pencil.svg'
import brushIcon from './assets/svg/brush.svg'
import uploadDesktop from './assets/svg/upload-desktop.svg'
import userCheckIcon from './assets/svg/user-check.svg'
import wvLogo from './assets/svg/wv-logo.svg'
import cwLogo from './assets/svg/countrywide-logo.svg'
import mtLogo from './assets/svg/momentum-logo.svg'
import apllLogo from './assets/svg/apl-logo.svg'
import edcomsLogo from './assets/svg/edcoms-logo.svg'
import amlLogo from './assets/svg/aml-logo.svg'
import lrdLogo from './assets/svg/lrd-logo.svg'

function App() {

  return (
		<>
			<header role="banner">
				<div className="headline">
					<img src={lrdLogo} className="icon" alt="Little Red Diesel Logo" />
					<h1>Little Red Diesel</h1>
				</div>
				<h2>Websites</h2>
				<ButtonMailto label="Contact us" mailto="mailto:webmaster@littlereddiesel.com" />
			</header>
			<div className="content">
				<h1>Who we are</h1>
				<p>We're a creative web solutions agency with over a decade of experience working on websites. We build fast, dynamic websites and deliver them on time. We are passionate about web accessibility and this is reflected in our work.</p>
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
							<img src={brushIcon} className="icon" alt="Brush icon" />
							Web design
						</span>
						<p>We can update the existing look and feel of your site or offer something fresh.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={editContentIcon} className="icon" alt="Editing content icon" />
							Content management systems
						</span>
						<p>We can edit your site's content or enable you to do this yourself.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={uploadDesktop} className="icon" alt="Upload icon" />
							Website hosting
						</span>
						<p>We can host and manage your website for you and automate backups so it never goes down.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={pencilIcon} className="icon" alt="Pencil icon" />
							Copywriting
						</span>
						<p>We understand the importance of good copy and will happily advise on this.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={userCheckIcon} className="icon" alt="User tick icon" />
							Accessibility auditing
						</span>
						<p>We can perform accessibility audits on your site to check it adheres to WCAG standards.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={hourglassIcon} className="icon" alt="Hourglass icon" />
							Speed testing
						</span>
						<p>If your site is slow or underperforming we can make improvements.</p>
					</li>
					<li className="icon-list__item">
						<span>
							<img src={searchIcon} className="icon" alt="Search icon" />
							SEO auditing
						</span>
						<p>We can perform SEO audits on your site to ensure your business is always visible.</p>
					</li>
				</ul>
			</div>
			<div className="content">
				<h2>Clients</h2>
				<p>We have worked with clients of all sizes including:</p>
				<ul className="icon-list">
					<li className="icon-list__item--col">
						<img src={wvLogo} className="logo" alt="World Vision Logo" />
					</li>
					<li className="icon-list__item--col">
						<img src={mtLogo} className="logo" alt="Momentum Training Logo" />
					</li>
					<li className="icon-list__item--col">
						<img src={cwLogo} className="logo" alt="Countrywide Logo" />
					</li>
					<li className="icon-list__item--col">
						<img src={apllLogo} className="logo" alt="APL Logistics Logo" />
					</li>
					<li className="icon-list__item--col">
						<img src={edcomsLogo} className="logo" alt="EdComs Logo" />
					</li>
					<li className="icon-list__item--col">
						<img src={amlLogo} className="logo" alt="AML Group Logo" />
					</li>
				</ul>
			</div>
			<div className="content">
				<h2>Contact us</h2>
				<p>We'd love to help with your next project.</p>
				<ButtonMailto label="Get in touch" mailto="mailto:webmaster@littlereddiesel.com" />
			</div>
		</>
	)
}

export default App
