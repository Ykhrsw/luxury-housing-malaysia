import { useTranslation } from 'react-i18next'


export default function LanguageSelector() {
    const { i18n } = useTranslation()
    const value = i18n.language || 'en'


    return (
        <select
            value={value}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
            aria-label="Select language"
        >
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
        </select>
    )
}