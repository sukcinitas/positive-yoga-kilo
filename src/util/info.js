import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";

import plan from "../assets/plan.svg";
import group from "../assets/Group.svg";
import shoe from "../assets/shoe.svg";
import diet from "../assets/diet.svg";
import whistle from "../assets/whistle.svg";
import smartwatch from "../assets/smartwatch.svg";
import bookcheck from "../assets/bookcheck.svg";

export const stories = [
  {
    id: 1,
    name: "Emily",
    age: 28,
    city: "Delaware, NJ",
    story:
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
    image: image1,
  },
  {
    id: 2,
    name: "Kyle",
    age: 40,
    city: "Los Angeles",
    story:
      "I will be very straightforward - I hate sports and working out. <span>Positive Yoga</span> put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
    image: image2,
  },
  {
    id: 3,
    name: "Jesica",
    age: 51,
    city: "San Francisco, CA",
    story:
      "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With <span>Positive Yoga</span> program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
    image: image3,
  },
];

export const program = [
  {
    id: 1,
    point: "A personalized yoga program",
    details: "Completely safe and focused on your key goals",
    icon: plan,
  },
  {
    id: 2,
    point: "Easy & enjoyable yoga workouts for your level",
    details: "Program adjusts to your level and pace",
    icon: group,
  },
  {
    id: 3,
    point: "No special preparation needed",
    details:
      "Perfect for begginners! Requires no special preparation or equipment",
    icon: shoe,
  },
  {
    id: 4,
    point: "Daily motivation & accountability",
    details:
      "Track your progress, develop a healthy routine, reach goals faster",
    icon: diet,
  },
  {
    id: 5,
    point: "Browse from various yoga challenges",
    details:
      "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
    icon: whistle,
  },
  {
    id: 6,
    point:
      "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
    details: "Easy access on any device",
    icon: smartwatch,
  },
  {
    id: 7,
    point: "A complete guide to get started",
    details:
      "Best tips, guidelines, advice, and recommendations for successful practice",
    icon: bookcheck,
  },
];

export const points = [
  "Each program adapts to your age or fitness level",
  "Mindful way to exercise and get real results",
  "Effective and long-term lasting results",
  "Suited activities that benefit both the mind and body",
  "Low-intensity but highly-effective workouts",
  "Extra attention to muscle, joint and back health",
];
