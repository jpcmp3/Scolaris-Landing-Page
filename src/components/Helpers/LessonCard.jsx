import { useState } from "react";
import "./LessonCard.css";

function Card({ title, text, icon: Icon }) {
  const [hover] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cardStyle = {
    "--mouse-x": `${mousePos.x}px`,
    "--mouse-y": `${mousePos.y}px`,
  };

  return (
    <div
      className={`card ${hover ? "card-hovered" : ""}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="card-content">
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              {/* Top row: icon + title */}
              <div className="flex items-center gap-5 mb-10">
                <Icon className="w-14 h-14 text-blue-400 shrink-0" />
                <h3 className="whitespace-pre-line">{title}</h3>
              </div>
              {/* Text under both */}
              {text.split("\n").map((line, index) => (
                <h4 key={index}>{line}</h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
