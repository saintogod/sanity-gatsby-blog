export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3f6f3f7b5bc0669a706142',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-d55wfc2d',
                  apiId: '883fae97-8ec5-4a92-954e-5cd8b181e5ee'
                },
                {
                  buildHookId: '5e3f6f3f6e99cde5b1725cb1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e7g5b8am',
                  apiId: '421cb953-2dd2-4d86-a043-84e5530e3f6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saintogod/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e7g5b8am.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
