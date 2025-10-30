import { useState } from 'react'
import { useTranslation } from 'react-i18next'


export default function Contact() {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const fd = new FormData(e.target)
        const data = Object.fromEntries(fd.entries())
        // 擬似送信: 実運用では API を用意してサーバーへ送る
        await new Promise(r => setTimeout(r, 700))
        console.log('Contact form submitted', data)
        setLoading(false)
        setResult('success')
    }


    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold">{t('contact.title')}</h2>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm mb-1">{t('contact.name')}</label>
                    <input name="name" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block text-sm mb-1">{t('contact.email')}</label>
                    <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block text-sm mb-1">{t('contact.message')}</label>
                    <textarea name="message" rows="6" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
                        {loading ? 'Sending...' : t('contact.send')}
                    </button>
                    {result === 'success' && <div className="mt-3 text-sm text-green-600">Message sent (prototype).</div>}
                </div>
            </form>
        </div>
    )
}