import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'


export default function Header() {
    const { t } = useTranslation()
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="text-blue-600 font-bold text-lg">{t('siteTitle')}</div>
                    <nav className="hidden md:flex gap-6 text-sm">
                        <Link to="/" className="hover:underline">{t('nav.home')}</Link>
                        <Link to="/addons" className="hover:underline">{t('nav.addons')}</Link>
                        <Link to="/contact" className="hover:underline">{t('nav.contact')}</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <Link to="/contact" className="px-3 py-2 bg-blue-600 text-white rounded text-sm">{t('nav.contact')}</Link>
                </div>
            </div>
        </header>
    )
}