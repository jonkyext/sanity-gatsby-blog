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
                  buildHookId: '5f8ee63a67edaa0c3e49d3e3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-i1r5rh2c',
                  apiId: '0b6c2f80-91b1-45ff-9295-e0b38f57ed30'
                },
                {
                  buildHookId: '5f8ee63a9f66ab0b41419f9d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-w79ayx7j',
                  apiId: 'e82c9148-42bf-4f62-95b0-6aba60342414'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonkyext/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-w79ayx7j.netlify.app', category: 'apps' }
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
