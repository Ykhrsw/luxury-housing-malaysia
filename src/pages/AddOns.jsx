import { useTranslation } from 'react-i18next'


export default function AddOns() {
    const { t } = useTranslation()
    const items = t('addons.items', { returnObjects: true })


    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold">{t('addons.title')}</h2>
            <ul className="space-y-3">
                {items.map((it, idx) => (
                    <li key={idx} className="bg-white p-4 rounded shadow flex justify-between items-center">
                        <div>{it}</div>
                        <button className="text-sm px-3 py-1 border rounded">Select</button>
                    </li>
                ))}
            </ul>
            <div className="text-sm text-slate-500">Note: Prices are examples (RM). Actual pricing may vary.</div>
        </div>
    )
}