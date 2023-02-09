import type { ComposerTranslation } from 'vue-i18n'
import type Link from '~/interfaces/Link'

export default function (t: ComposerTranslation): Array<Link> {
  return [
    {
      to: "/",
      text: t("home"),
    },
    {
      to: "/team",
      text: t("team"),
    },
    {
      to: "/friendshore",
      text: t("friendshore"),
    },
  ];
}
