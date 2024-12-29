import React, { useEffect, useState } from "react";
import "./TypingEffect.scss";

const TypingEffect = ({ colors }) => {
  const textArr = ["web developer.", "designer.", "freelencer."];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const typingSpeed = 150; // milliseconds per character
  const deletingSpeed = 100;
  const pauseDuration = 1500; // pause before deleting or moving to the next word

  useEffect(() => {
    const handleTyping = () => {
      const fullText = textArr[loopIndex];
      if (isDeleting) {
        // Deleting characters
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
      } else {
        // Adding characters
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
      }

      // Pause when word is fully typed or deleted
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % textArr.length); // Move to next word
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, loopIndex, textArr]);

  return (
    <span className={`typewriter border-r-10 ${colors ? colors : "text-white border-white"}`}>{currentText}</span>
  );
};

export default TypingEffect;