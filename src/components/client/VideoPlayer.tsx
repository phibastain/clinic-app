'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
    videoId: string;
    title: string;
    thumbnail?: string;
}

/**
 * VideoPlayer - Client Island for YouTube Embed
 * Uses 'use client' for useState (play state)
 */
export default function VideoPlayer({ videoId, title, thumbnail }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    if (!isPlaying) {
        return (
            <button
                onClick={() => setIsPlaying(true)}
                className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900"
                aria-label={`Play video: ${title}`}
            >
                {/* Thumbnail */}
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75" />
                        <Play className="relative z-10 text-white fill-white ml-1" size={36} />
                    </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold">{title}</p>
                </div>
            </button>
        );
    }

    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
