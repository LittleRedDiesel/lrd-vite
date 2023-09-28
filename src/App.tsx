import { useState } from 'react'
import "./assets/scss/_styles.scss";

function App() {
  return (
		<>
			<div className="content">
				<p>We're a creative web solutions agency with over a decade of experience providing websites for small and large businesses. We build fast, dynamic and accessible customer-oriented websites and deliver them on time. We are passionate about web accessibility and this is reflected in our work. </p>
			</div>
			<div className="content">
				<h2>Services</h2>
				<ul>
					<li>
						Web development
						<p>We love coding and web languages and have years of experience working with them.</p>
					</li>
					<li>
						Website hosting
						<p>We can host and manage your website for you and automate backups so it never goes down.</p>
					</li>
					<li>
						Content management systems (CMS)
						<p>We can edit your site's content or enable you to do this yourself.</p>
					</li>
					<li>
						Copywriting
						<p>We understand the importance of good copy and will happily advise on this.</p>
					</li>
					<li>
						Accessibility auditing
						<p>We can perform accessibility audits on your site to check it adheres to WCAG standards.</p>
					</li>
					<li>
						Speed testing
						<p>If your site is slow or underperforming we can make improvements.</p>
					</li>
					<li>
						SEO auditing
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
