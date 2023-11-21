import {FC} from 'react'
import {getConfig, useLang} from './Metronici18n'
import {IntlProvider, createIntl, createIntlCache} from 'react-intl'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'
import '@formatjs/intl-relativetimeformat/locale-data/de'
import '@formatjs/intl-relativetimeformat/locale-data/es'
import '@formatjs/intl-relativetimeformat/locale-data/fr'
import '@formatjs/intl-relativetimeformat/locale-data/ja'
import '@formatjs/intl-relativetimeformat/locale-data/zh'
const cache = createIntlCache();
import deMessages from './messages/de.json'
import enMessages from './messages/en.json'
import esMessages from './messages/es.json'
import frMessages from './messages/fr.json'
import jaMessages from './messages/ja.json'
import zhMessages from './messages/zh.json'
import {WithChildren} from '../helpers'

const allMessages = {
  de: deMessages,
  en: enMessages,
  es: esMessages,
  fr: frMessages,
  ja: jaMessages,
  zh: zhMessages,
}

const I18nProvider: FC<WithChildren> = ({children}) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
const intlNonCom = createIntl({ locale:getConfig().selectedLang, messages: allMessages[getConfig().selectedLang], }, cache);

export {I18nProvider,intlNonCom}


