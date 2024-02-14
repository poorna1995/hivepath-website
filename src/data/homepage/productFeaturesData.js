import { ReactComponent as goalTracker } from "../../assets/homepage/product-features/goal-tracker.svg";
import { ReactComponent as session } from "../../assets/homepage/product-features/1-on-1-session.svg";

import { ReactComponent as tools } from "../../assets/homepage/product-features/high-end-tools.svg";

import { ReactComponent as feedbackSystem } from "../../assets/homepage/product-features/feedback-system.svg";

export const productFeaturesData = [
  {
    id: "card_1",
    direction: "fade-right",
    // anchor:"center center",
    icon: tools,
    description:
      "Various high-end tools to make your networking journey successful and hassle-free.",
    delay: "1000",
    title: "High-End Tools",
  },
  {
    id: "card_2",
    icon: goalTracker,
    description:
      "Set and keep track of your goals with us. Improve skill gaps and connections for your professional success. ",
    direction: "fade-left",
    // anchor:"center center",
    delay: "1000",
    title: "Goal Tracker",
  },
  {
    id: "card_3",
    icon: feedbackSystem,
    description:
      "Improve your engagement with our highly advanced feedback system and receive useful suggestions.  ",
    direction: "fade-right",
    // anchor:"center center",
    delay: "1000",
    title: "Feedback System",
  },

  {
    id: "card_4",
    icon: session,
    description:
      "Instantly connect to the right professional match with our AI-powered platform on a 1-on-1 discussion panel.",
    direction: "fade-left",
    // anchor:"center center",
    delay: "1000",
    title: "1-on-1 Professional Insights",
  },
  // {
  //   id: "card_5",
  //   description:
  //     "Get a personalized Digital business card for your profile and use them across Social media for efficient networking.",
  //   title: "Personal Branding ",
  // },
];
