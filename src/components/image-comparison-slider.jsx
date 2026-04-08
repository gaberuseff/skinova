"use client";

import Image from "next/image";
import {useCallback, useEffect, useRef, useState} from "react";

// This component takes two image URLs (before and after) and creates a slider to compare them.
export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
}) => {
  // State to track the slider's position (from 0 to 100)
  const [sliderPosition, setSliderPosition] = useState(50);
  // State to track if the user is currently dragging the slider
  const [isDragging, setIsDragging] = useState(false);

  // Ref to the main container element to get its dimensions
  const containerRef = useRef(null);

  // Function to handle the slider movement (for both mouse and touch)
  const handleMove = useCallback(
    (clientX) => {
      // If not dragging or no container ref, do nothing
      if (!isDragging || !containerRef.current) return;

      // Get the bounding box of the container
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate the new slider position as a percentage
      let newPosition = ((clientX - rect.left) / rect.width) * 100;

      // Clamp the position to be between 0 and 100 to prevent it from going out of bounds
      newPosition = Math.max(0, Math.min(100, newPosition));

      setSliderPosition(newPosition);
    },
    [isDragging],
  );

  // Mouse event handlers
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e) => handleMove(e.clientX);

  // Touch event handlers
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  // Effect to add and clean up global event listeners for mouse up/leave
  // This ensures dragging stops even if the cursor leaves the component area
  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label="Before and after image comparison"
      className="relative w-full max-w-4xl mx-auto select-none rounded-xl overflow-hidden h-80 sm:h-96 lg:h-128"
      onMouseMove={handleMouseMove}
      // Stop dragging if mouse leaves the container
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src={beforeImage}
          alt={altBefore}
          className="h-full w-full object-cover object-left"
          draggable="false"
        />
      </div>

      {/* After Image (Top Layer) - its visibility is controlled by the clip-path */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}>
        <Image
          fill
          src={afterImage}
          alt={altAfter}
          className="h-full w-full object-cover object-left"
          draggable="false"
        />
      </div>
      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1.5 bg-white/80 cursor-ew-resize flex items-center justify-center"
        // Center the handle on the line
        style={{left: `calc(${sliderPosition}% - 0.375rem)`}}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        aria-hidden="true">
        <div
          className={`bg-white rounded-full h-12 w-12 flex items-center justify-center shadow-md transition-all duration-200 ease-in-out ${isDragging ? "scale-110 shadow-xl" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700">
            <line x1="15" y1="18" x2="9" y2="12"></line>
            <line x1="9" y1="6" x2="15" y2="12"></line>
          </svg>
        </div>
      </div>

      <label htmlFor="image-comparison-slider" className="sr-only">
        Move slider to compare before and after images
      </label>
      <input
        id="image-comparison-slider"
        className="sr-only"
        type="range"
        min={0}
        max={100}
        value={Math.round(sliderPosition)}
        onChange={(event) => setSliderPosition(Number(event.target.value))}
        aria-label="Before and after slider"
      />
    </div>
  );
};
