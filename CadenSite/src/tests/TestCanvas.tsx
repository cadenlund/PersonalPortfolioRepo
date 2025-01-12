// src/components/TestCanvas.tsx
import React, { useEffect, useRef } from "react";

const TestCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                // Set canvas background
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Draw a red circle
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(100, 100, 50, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }, []);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
};

export default TestCanvas;
