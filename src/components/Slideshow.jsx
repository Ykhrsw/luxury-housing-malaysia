import { useEffect, useState } from 'react'


const IMAGES = [
    'https://images.unsplash.com/photo-1560184897-6bfa3b6b1bca?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b6f3b9d4e7b1a3c55f59a0b7b9c3fde',
    'https://images.unsplash.com/photo-1600607681807-8aa59e7b8a3d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d1f7aef9fca7b5849d73e2c1a249f36',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9fa1b27b7f95d9b8b3b4c9de9c1f0a1b',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c2b3d6a9a2d5f4c8b1d1b6d8c3f5e2a'
]


export default function Slideshow({ height = '24rem' }) {
    const [index, setIndex] = useState(0)


    useEffect(() => {
        const id = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 4500)
        return () => clearInterval(id)
    }, [])


    return (
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ height }}>
            {IMAGES.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`property-${i}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                />
            ))}
            <div className="absolute bottom-6 left-6 bg-black/40 text-white px-4 py-2 rounded">
                <div className="text-sm">Exclusive Listing</div>
            </div>
        </div>
    )
}