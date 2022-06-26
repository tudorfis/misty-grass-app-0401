import { Page } from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'
import { QRCodeForm } from '/components'
import { useParams } from 'react-router-dom'
import { useAppQuery } from '../../hooks'

export default function QRCodeEdit() {
    const breadcrumbs = [{ content: 'QR codes', url: '/' }]
    const { id } = useParams()

    const {
        data: QRCode,
        isLoading,
        isRefetching,
    } = useAppQuery({
        url: `/api/qrcodes/${id}`,
        reactQueryOptions: {
            refetchOnReconnect: false,
        },
    })

    return (
        <Page>
            <TitleBar
                title="Edit QR code"
                breadcrumbs={breadcrumbs}
                primaryAction={null}
            />
            <QRCodeForm
                QRCode={QRCode}
                isLoading={isLoading}
                isRefetching={isRefetching}
            />
        </Page>
    )
}
