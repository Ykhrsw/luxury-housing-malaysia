import Slideshow from '../components/Slideshow'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


export default function Home() {
    const { t } = useTranslation()


    return (
        <div className="space-y-8">
            <Slideshow height="28rem" />


            <section className="text-center">
                <h2 className="text-3xl font-semibold">{t('home.title')}</h2>
                <p className="mt-3 text-lg text-slate-600">{t('home.subtitle')}</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <Link to="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">Free initial consultation</Link>
                    <Link to="/addons" className="px-4 py-2 border rounded">Add-ons</Link>
                </div>
            </section>


            <section className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold">Why Malaysia</h3>
                    <p className="mt-2 text-sm text-slate-600">High-quality homes, reasonable prices, good healthcare access in major cities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold">Personalized Tours</h3>
                    <p className="mt-2 text-sm text-slate-600">Video tours with live Q&A connecting clients and local agents directly.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold">Concierge Support</h3>
                    <p className="mt-2 text-sm text-slate-600">Move-in support, furniture setup, internet checks — optional add-ons available.</p>
                </div>
            </section>
        </div>
    )
}