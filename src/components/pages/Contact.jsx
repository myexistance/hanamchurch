import React from "react";

export const Contact = () => {
  return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                {/* Map goes here */}
                <img src="map.jpg" alt="Map" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1, padding: '0 20px' }}>
                {/* Paragraph goes here */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
        </div>
    );
};

