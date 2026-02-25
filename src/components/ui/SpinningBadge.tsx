import React from 'react';

interface SpinningBadgeProps {
    text?: string;
    className?: string;
}

const SpinningBadge: React.FC<SpinningBadgeProps> = ({
    text = "OVER 15 YEARS OF EXPERIENCE",
    className = ""
}) => {
    return (
        <div className={`relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 ${className}`}>
            {/* Spinning Container */}
            <div className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                    {/* Ring Borders */}
                    <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-90" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-90" />

                    {/* Top Text Path (Clockwise) - Centered at r=40.5 */}
                    <path
                        id="topPath"
                        d="M 9.5,50 A 40.5,40.5 0 1,1 90.5,50"
                        fill="transparent"
                    />

                    {/* Bottom Text Path (Counter-Clockwise) - Centered at r=40.5 */}
                    <path
                        id="bottomPath"
                        d="M 9.5,50 A 40.5,40.5 0 0,0 90.5,50"
                        fill="transparent"
                    />

                    {/* Separator Dots at Start/End (Left/Right Anchors) */}
                    <circle cx="9.5" cy="50" r="1.5" fill="currentColor" />
                    <circle cx="90.5" cy="50" r="1.5" fill="currentColor" />

                    <text className="fill-current text-[10px] font-normal tracking-[0.3em] uppercase" dominantBaseline="middle">
                        <textPath href="#topPath" startOffset="50%" textAnchor="middle">
                            OVER 15 YEARS
                        </textPath>
                    </text>

                    <text className="fill-current text-[10px] font-normal tracking-[0.3em] uppercase" dominantBaseline="middle">
                        <textPath href="#bottomPath" startOffset="50%" textAnchor="middle">
                            OF EXPERIENCE
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default SpinningBadge;
