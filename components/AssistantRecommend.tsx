import { useState, useCallback, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { RefreshCcw } from 'lucide-react'
import AssistantMarket from '@/components/AssistantMarket'
import Button from '@/components/Button'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useAssistantStore } from '@/store/assistant'
import { useSettingStore } from '@/store/setting'
import AssistantMarketUrl from '@/utils/AssistantMarketUrl'

type Props = {
  initAssistant: (instruction: string) => void
}

function CardSkeleton() {
  return (
    <Card className="w-full cursor-pointer transition-colors hover:drop-shadow-md dark:hover:border-white/80">
      <CardHeader className="p-4 pb-2">
        <Skeleton className="my-0.5 h-5 w-[160px]" />
        <Skeleton className="my-0.5 h-4 w-full" />
        <Skeleton className="my-0.5 h-4 w-[100px]" />
      </CardHeader>
    </Card>
  )
}

function AssistantRecommend({ initAssistant }: Props) {
  const { t } = useTranslation()
  const settingStore = useSettingStore()
  const { recommendation } = useAssistantStore()
  const [assistantMarketOpen, setAssistantMarketOpen] = useState<boolean>(false)

  const initAssistantMarket = useCallback(() => {
    const { recommend } = useAssistantStore.getState()
    recommend(4)
  }, [])

  const handleSelectAssistant = useCallback(
    async (identifier: string) => {
      const assistantMarketUrl = new AssistantMarketUrl(settingStore.assistantIndexUrl)
      const response = await fetch(assistantMarketUrl.getAssistantUrl(identifier, settingStore.lang))
      const data: AssistantDetail = await response.json()
      initAssistant(data.config.systemRole)
    },
    [settingStore.lang, settingStore.assistantIndexUrl, initAssistant],
  )

  return ''
}

export default memo(AssistantRecommend)
