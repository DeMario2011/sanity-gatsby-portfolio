export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '624b8fc6cda1995c7818811a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dt1ptvmb',
                  apiId: '83e94627-7131-441c-9787-13273e20ee21'
                },
                {
                  buildHookId: '624b8fc792ca6261190f1610',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k2c338is',
                  apiId: '04b5a1b7-cc30-4041-b68d-b8c17a404e52'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DeMario2011/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k2c338is.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
