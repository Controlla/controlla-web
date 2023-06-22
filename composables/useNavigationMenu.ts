import { NavigationItem } from './types'

export const useNavigationMenu = () => {
  const { t } = useI18n()

  const globalNavigation = ref<Array<NavigationItem>>([
    {
      name: t('navigation.home'),
      id: 1,
      url: '/',
      type: 'link'
    },
    {
      name: t('navigation.friendshore'),
      id: 2,
      url: '/friendshore',
      type: 'link'
    },
    {
      name: t('navigation.team'),
      id: 3,
      url: '/team',
      type: 'link'
    },
    {
      name: t('navigation.contact_us'),
      id: 4,
      url: '/contact-us',
      type: 'button'
    }
  ])

  return { globalNavigation }
}
