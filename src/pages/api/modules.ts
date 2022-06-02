// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Quiz } from "interface/interface";
import type { NextApiRequest, NextApiResponse } from "next";

interface SubMenu {
  type: string;
  title: string;
  videoUrl?: string;
  quizzes?: Quiz[];
}

interface Data {
  id: string;
  title: string;
  submenu: SubMenu[];
}

const data = [
  {
    id: "1",
    title: "Module 1: Preventive Maintenance",
    submenu: [
      {
        type: "video",
        title: "Topic A",
        videoUrl: "https://youtu.be/TsDsE9fePLk",
      },
      {
        type: "video",
        title: "Topic A - Demo 1 -Preventive Maintenance",
        videoUrl: "https://www.youtube.com/watch?v=cwP1vTqVaR4",
      },
      {
        type: "quiz",
        title: "Review Quiz",
        quizzes: [
          {
            id: "11",
            question: "MS-Word is an example of_____",
            options: [
              {
                id: "1",
                option: " An operating system",
                isCorrect: false,
              },
              {
                id: "2",
                option: "A processing device",
                isCorrect: false,
              },
              {
                id: "3",
                option: "Application software",
                isCorrect: true,
              },
              {
                id: "4",
                option: "An input device",
                isCorrect: false,
              },
            ],
            right_answer: "3",
            level: "beginner",
          },
          {
            id: "12",
            question: "Ctrl, Shift and Alt are called .......... keys.",
            options: [
              {
                id: "1",
                option: "Because routines create negative levels of stress",
                isCorrect: false,
              },
              {
                id: "2",
                option: "modifier",
                isCorrect: true,
              },
              {
                id: "3",
                option:
                  "Because it decreases focus and boosts our mental health",
                isCorrect: false,
              },
              {
                id: "4",
                option:
                  "Because it increases the symptoms of bipolar affective disorder",
                isCorrect: false,
              },
            ],
            right_answer: "2",
            level: "beginner",
          },
          {
            id: "13",
            question: "A computer cannot boot if it does not have the _____",
            options: [
              {
                id: "1",
                option:
                  "A sudden loss of blood supply to part of the heart muscles",
                isCorrect: false,
              },
              {
                id: "2",
                option: "Operating system",
                isCorrect: true,
              },
              {
                id: "3",
                option: "When blood flow to an area in the brain is cut off",
                isCorrect: false,
              },
              {
                id: "4",
                option: "When a person becomes paralysed in sleep",
                isCorrect: false,
              },
            ],
            right_answer: "2",
            level: "beginner",
          },
          {
            id: "14",
            question:
              "________ is the process of dividing the disk into tracks and sectors",
            options: [
              {
                id: "1",
                option: "People with hyperactive behaviour",
                isCorrect: false,
              },
              {
                id: "2",
                option: "People with constant fidgeting behaviour",
                isCorrect: false,
              },
              {
                id: "3",
                option: "Formatting",
                isCorrect: true,
              },
              {
                id: "4",
                option: "People with a neurodevelopmental disorder",
                isCorrect: false,
              },
            ],
            right_answer: "3",
            level: "beginner",
          },
          {
            id: "15",
            question: "Junk e-mail is also called ______",
            options: [
              {
                id: "1",
                option:
                  "A sudden loss of blood supply to part of the heart muscles",
                isCorrect: false,
              },
              {
                id: "2",
                option: "Spam",
                isCorrect: true,
              },
              {
                id: "3",
                option: "When blood flow to an area in the brain is cut off",
                isCorrect: false,
              },
              {
                id: "4",
                option: "When a person becomes paralysed in sleep",
                isCorrect: false,
              },
            ],
            right_answer: "2",
            level: "intermediate",
          },
          {
            id: "16",
            question: "Microsoft Office is an example of a",
            options: [
              {
                id: "1",
                option: "Horizontal market software",
                isCorrect: true,
              },
              {
                id: "2",
                option: "Genetics",
                isCorrect: false,
              },
              {
                id: "3",
                option: "Pregnancy complications",
                isCorrect: false,
              },
              {
                id: "4",
                option: "Brain changes",
                isCorrect: false,
              },
            ],
            right_answer: "1",
            level: "intermediate",
          },
          {
            id: "17",
            question: "By default, your documents print in ________ mode",
            options: [
              {
                id: "1",
                option: "Portrait",
                isCorrect: true,
              },
              {
                id: "2",
                option: "Tightness in chest",
                isCorrect: false,
              },
              {
                id: "3",
                option: "Persistent wheezing",
                isCorrect: false,
              },
              {
                id: "4",
                option: "Reduced ability to exercise",
                isCorrect: false,
              },
            ],
            right_answer: "1",
            level: "intermediate",
          },
          {
            id: "18",
            question:
              "Several computers linked to a server to share programs and storage space________",
            options: [
              {
                id: "1",
                option: "Have recurrent thoughts about death",
                isCorrect: false,
              },
              {
                id: "2",
                option: "Network",
                isCorrect: true,
              },
              {
                id: "3",
                option: "Think that other people are constantly judging them",
                isCorrect: false,
              },
              {
                id: "4",
                option:
                  "Binge eat lots of unhealthy food to escape from reality",
                isCorrect: false,
              },
            ],
            right_answer: "2",
            level: "intermediate",
          },
          {
            id: "19",
            question: "Where is RAM located?",
            options: [
              {
                id: "1",
                option: "Emergency evacuation",
                isCorrect: false,
              },
              {
                id: "2",
                option: "Mother Board",
                isCorrect: true,
              },
              {
                id: "3",
                option: "Emergency escalation",
                isCorrect: false,
              },
              {
                id: "4",
                option: "Emergency detection",
                isCorrect: false,
              },
            ],
            right_answer: "2",
            level: "advanced",
          },
          {
            id: "20",
            question: "A _______ is a software program used to view Web pages.",
            options: [
              {
                id: "1",
                option: "Acute stress disorder",
                isCorrect: false,
              },
              {
                id: "2",
                option: "Browser",
                isCorrect: true,
              },
              {
                id: "3",
                option: "Generalised anxiety disorder",
                isCorrect: false,
              },
              {
                id: "4",
                option: "Obsessive-compulsive disorder",
                isCorrect: false,
              },
            ],
            right_answer: "2",
            level: "advanced",
          },
        ],
      },
    ],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json()
}
