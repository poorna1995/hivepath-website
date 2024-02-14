import HivePathLogin from "../assets/how-it-works/hivepath-login1.png";
import profile from "../assets/how-it-works/profile-edit.png";
import matches from "../assets/how-it-works/matching-profiles.png";
import schedule from "../assets/how-it-works/calendar-schedule1.png";
import counselling from "../assets/how-it-works/career-counselling.png";
import progress from "../assets/how-it-works/progress-tracker1.png";

export const howItWorksData = [
  {
    number: "01",
    id: "join-network",
    title: "Join our network",
    description:
      "A hassle-free experience to sign in to Hivepath platform, With LinkedIn and Email integration. At Hivepath, we give you full control over your network and enjoy the benefits of being a part of our hive.",
    imgSrc: HivePathLogin,
    polygonUp: "-70%",
  },
  {
    number: "02",
    id: "create-profile",
    poly: "poly",
    imgSrc: profile,
    reverse: "reverse",
    bgPos: "50%",
    title: "Create your user profile",
    description:
      "Brand your profile at Hivepath and stand out from the crowd. Customize every detail that makes you unique and craft the perfect profile and grow your network with Hivepath",
  },
  {
    number: "03",
    title: "Get personalized connections/ Discover your network",
    description:
      "With the AI powered matching algo get personalized connections and identify the right network that matches your Professional/business/personal interests",
    id: "get-personalized-connections",
    imgSrc: matches,
    padding: "20%",
  },
  {
    number: "04",
    title: "Schedule a meeting",
    description:
      "Schedule 1 on 1 calls with the filtered connections in a few clicks by posting a request for the purpose and expectations from the call",
    id: "schedule-meeting",
    reverse: "reverse",
    bgPos: "40%",
    imgSrc: schedule,
  },
  {
    number: "05",
    title: "Join the 1:1 session",
    description:
      "It’s the time to get your questions answered and get fresh insights and feedback for your professional, personal and business requirements",
    id: "join-session",
    imgSrc: counselling,
    padding: "20%",
  },
  {
    number: "06",
    title: "Track your goals",
    description:
      "Keep track of your goals with efficient goal management tools and achieve your goals with Hivepath",
    id: "track-goals",
    imgSrc: progress,
    reverse: "reverse",
    bgPos: "40%",
  },
];
