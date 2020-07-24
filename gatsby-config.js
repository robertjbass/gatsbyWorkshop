module.exports = {
	siteMetadata: {
		title: 'Resources',
		author: 'Bob Bass',
		description: 'A blog created in Gatsby and hosted on Netlify',
		siteUrl: 'https://gatsbydatabassblog.netlify.app',
		social: [
			{
				name: 'Twitter',
				url: 'https://twitter.com/716green'
			},
			{
				name: 'GitHub',
				url: 'https://github.com/716green'
			}
		]
	},
	plugins: [
		'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-theme-blog',
			options: {
				basePath: '/blog',
				mdxOtherwiseConfigured: true
			}
		}
	]
};
