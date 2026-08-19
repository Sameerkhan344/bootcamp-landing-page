import handLeft from "../assets/images/journey-images/hand_left.webp";
import roboHand from "../assets/images/journey-images/robo_hand.webp";
import foundations from "../assets/images/journey-images/foundations.webp";
import fullStack from "../assets/images/journey-images/full-stack.webp";
import aiEngineering from "../assets/images/journey-images/ai-engineering.webp";
import placementPrep from "../assets/images/journey-images/placement-prep.webp";

export const skills = [
  {
    title: "Foundations",
    description: "Think and reason like an engineer, not just write syntax.",
    image: foundations,
    alt: "Foundations",
  },
  {
    title: "Full Stack Dev",
    description: "Ship real, deployed products end to end.",
    image: fullStack,
    alt: "Full Stack Dev",
  },
  {
    title: "AI Engineering",
    description: "Build with LLMs, not just talk about them.",
    image: aiEngineering,
    alt: "AI Engineering",
  },
  {
    title: "Placement Prep",
    description:
      "Mock interviews, resume, and referrals until you land it.",
    image: placementPrep,
    alt: "Placement Prep",
  },
];

export const hands = [
  {
    image: handLeft,
    alt: "Human Hand",
    position: "right-1/2",
    transform: "translateX(-17.974vw) translateY(-50%)",
    shadow: "drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]",
  },
  {
    image: roboHand,
    alt: "Robot Hand",
    position: "left-1/2",
    transform: "translateX(17.974vw) translateY(-50%)",
    shadow: "drop-shadow-[0_0_30px_rgba(114,0,255,0.25)]",
  },
];