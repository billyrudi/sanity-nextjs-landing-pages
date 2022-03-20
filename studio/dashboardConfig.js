export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62379c30e420996d23b7ba96',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ubanzog2',
                  apiId: '4ef3a4fd-380b-4962-92e6-99c655559d2f'
                },
                {
                  buildHookId: '62379c300de2cc3d58112d97',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ts9hj1nn',
                  apiId: 'ef64328d-9c87-41c8-bcb4-82fa341562ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/billyrudi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ts9hj1nn.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
