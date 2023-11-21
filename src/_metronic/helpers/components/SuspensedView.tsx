import { FC, Suspense } from "react"
import { WithChildren } from ".."
import TopBarProgress from 'react-topbar-progress-indicator'
import { getCSSVariableValue } from "../../assets/ts/_utils"
export const SuspensedView: FC<WithChildren> = ({ children }) => {
    const baseColor = getCSSVariableValue('--bs-primary')
    TopBarProgress.config({
      barColors: {
        '0': baseColor,
      },
      barThickness: 1,
      shadowBlur: 5,
    })
    return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
  }