import React, {useState} from 'react'
import CustomAppBar from '../../../../_metronic/helpers/components/appbar/CustomAppBar'
import {TabWrapper} from '../../../../_metronic/helpers/components/appbar/TabWrapper'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Mysession} from './Taps/mysession/Mysession'
import {SessionHistoryListWrapper} from './Taps/sessionHistory/SessionHistory'
import {SessionProvider, SessionProviderInit, useSession} from './core/provider'
import {HeaderSession} from './components/Header'
const breadCrumbs: Array<PageLink> = [
  {
    title: 'Sessions',
    path: 'driver/session',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]
const SessionDriverPage: React.FC = () => {
  const [tab, setTab] = useState(0)


  return (
    <SessionProvider>
      <SessionProviderInit>
        <PageTitle breadcrumbs={breadCrumbs}>Session</PageTitle>
        <div className='card card-custom'>
          <CustomAppBar
            labels={['sessions', 'history']}
            setSelectedTab={setTab}
            selectedTab={tab}
          />
          <HeaderSession />
          <div className='tab-content pt-3'>
            <TabWrapper index={0} selectedTab={tab}>
              <Mysession  />
            </TabWrapper>
            <TabWrapper index={1} selectedTab={tab}>
              <SessionHistoryListWrapper />
            </TabWrapper>
          </div>
        </div>
      </SessionProviderInit>
    </SessionProvider>
  )
}

export default SessionDriverPage
