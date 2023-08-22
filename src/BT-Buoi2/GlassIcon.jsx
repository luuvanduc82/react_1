import React from "react";

export default function GlassIcon({ GlassIcon }) {
  if (!GlassIcon) {
    return null;
  }
  return (
    <>
      <div className="glass">
        <img src={GlassIcon.url} alt="" height="50px" width="150px" />
      </div>
      <div className="glass-txt" style={{ width: 286 }}>
        <div className="bg-success opacity-75">
          <h3 className="text-warning">{GlassIcon.name}</h3>
          <p className="text-white">{GlassIcon.desc}</p>
        </div>
      </div>
    </>
  );
}
