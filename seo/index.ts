type SEOData = {
  title?: string
  url?: string
  image?: string
  description?: string
}

export const overwriteSEO = (seo?: SEOData) => ({
  title: seo?.title ? `${seo?.title} | Controlla` : 'Controlla Connecting dots',
  meta: [
    { charset: 'utf-8' },
    {
      hid: 'lang',
      property: 'lang',
      key: 'lang',
      content: 'es'
    },
    {
      hid: 'language',
      key: 'language',
      property: 'language',
      content: 'Spanish'
    },
    {
      hid: 'name',
      key: 'name',
      property: 'name',
      content: 'Controlla Connecting dots'
    },
    {
      hid: 'author',
      key: 'author',
      property: 'author',
      content: 'Controlla Connecting dots'
    },
    {
      hid: 'description',
      key: 'description',
      name: 'description',
      content:
        seo?.description ||
        'Transform your company. with world class software. We design and develop high-quality digital solutions with methodic strategy through trusted alliances.'
    },
    { name: 'keywords', content: '' },

    // OG TAGS
    {
      hid: 'og:url',
      key: 'og:url',
      property: 'og:url',
      content: `https://www.controlla.com.mx${seo?.url || '/'}`
    },
    {
      hid: 'og:type',
      key: 'og:type',
      property: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:site_name',
      key: 'og:site_name',
      property: 'og:site_name',
      content: 'Controlla Connecting dots'
    },
    {
      hid: 'og:image',
      key: 'og:image',
      property: 'og:image',
      content: 'https://www.controlla.com.mx/seo.webp'
    },
    {
      hid: 'og:image:alt',
      key: 'og:image:alt',
      property: 'og:image:alt',
      content: 'Controlla Connecting dots'
    },
    {
      hid: 'og:image:width',
      key: 'og:image:width',
      property: 'og:image:width',
      content: '1200'
    },
    {
      hid: 'og:image:height',
      key: 'og:image:height',
      property: 'og:image:height',
      content: '630'
    },
    {
      hid: 'og:title',
      key: 'og:title',
      property: 'og:title',
      content: seo?.title || 'Controlla Connecting dots'
    },
    {
      hid: 'og:description',
      key: 'og:description',
      property: 'og:description',
      content:
        seo?.description ||
        'Transform your company. with world class software. We design and develop high-quality digital solutions with methodic strategy through trusted alliances.'
    },
    // facebook
    {
      hid: 'fb:app_id',
      key: 'fb:app_id',
      property: 'fb:app_id',
      content: ''
    },
    {
      hid: 'fb:page_id',
      key: 'fb:page_id',
      property: 'fb:page_id',
      content: ''
    },
    // twitter
    {
      hid: 'twitter:title',
      key: 'twitter:title',
      property: 'twitter:title',
      content: seo?.title || 'Controlla Connecting dots'
    },
    {
      hid: 'twitter:description',
      key: 'twitter:description',
      property: 'twitter:description',
      content:
        seo?.description ||
        'Transform your company. with world class software. We design and develop high-quality digital solutions with methodic strategy through trusted alliances.'
    },
    {
      hid: 'twitter:card',
      key: 'twitter:card',
      property: 'twitter:card',
      content: 'summary_large_image'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://www.controlla.com.mx${seo?.url || '/'}`
    }
  ]
})
