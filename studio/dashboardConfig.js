export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc8241f7d8bfbaeb3910af0',
                  name: 'Content Studio',
                  siteId: '6cdeeab2-b0c1-48c3-aea9-a02c9e629e27'
                },
                {
                  buildHookId: '5cc8241fca001a95402c0bbc',
                  name: 'Portfolio Website',
                  siteId: '188c6c55-60dc-4f31-9754-6966324ccfa2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-portfolio-vb',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-portfolio-vb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
