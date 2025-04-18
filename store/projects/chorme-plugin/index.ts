import {
  MilestoneDetailLabel,
  MilestoneStatus,
  TPureMilestone,
} from "@/types/Milestonne";
import { TProject } from "@/types/Project";

const chromePluginMilestone: TPureMilestone[] = [
  {
    id: "0",
    currentHint: 0,
    description: "Initial setup",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "Introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "Add socks",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "Add shoes",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "Add laces",
      },
    ],
    isReveal: false,
    label: "1. Initial Setup",
    totalHint: 4,
    url: "/projects/chrome-extension/1/description",
  },

  {
    id: "1",
    currentHint: 0,
    description: "Understanding the template",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "2. Overview",
    totalHint: 4,
    url: "/projects/chrome-extension/2/description",
  },

  {
    id: "2",
    currentHint: 0,
    description: "Updating Popup",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "3. Update Popup",
    totalHint: 4,
    url: "/projects/chrome-extension/3/description",
  },

  {
    id: "3",
    currentHint: 0,
    description: "Lets count till BINGO!",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "4. BINGO!",
    totalHint: 4,
    url: "/projects/chrome-extension/4/description",
  },

  {
    id: "4",
    currentHint: 0,
    description: "Combining things",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "5. Combining things ",
    totalHint: 4,
    url: "/projects/chrome-extension/5/description",
  },

  {
    id: "5",
    currentHint: 0,
    description: "Open a newtab",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "6. Open a new tab",
    totalHint: 4,
    url: "/projects/chrome-extension/6/description",
  },

  {
    id: "6",
    currentHint: 0,
    description: "Combining things",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "7. On/Off ",
    totalHint: 4,
    url: "/projects/chrome-extension/7/description",
  },

  {
    id: "7",
    currentHint: 0,
    description: "Combining things",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "8. Add quiz",
    totalHint: 4,
    url: "/projects/chrome-extension/8/description",
  },

  {
    id: "8",
    currentHint: 0,
    description: "Combining things",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "9. Choose Category",
    totalHint: 4,
    url: "/projects/chrome-extension/9/description",
  },

  {
    id: "9",
    currentHint: 0,
    description: "Combining things",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "10. Filter 2 ",
    totalHint: 4,
    url: "/projects/chrome-extension/10/description",
  },

  {
    id: "10",
    currentHint: 0,
    description: "Combining things",
    status: MilestoneStatus.TO_DO,
    hints: [
      {
        label: MilestoneDetailLabel.description,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint1,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint2,
        markdown: "This is the introduction",
      },
      {
        label: MilestoneDetailLabel.hint3,
        markdown: "This is the introduction",
      },
    ],
    isReveal: false,
    label: "11. Make it pretty. ",
    totalHint: 4,
    url: "/projects/chrome-extension/11/description",
  },
];

export const ChromePluginProject: TProject = {
  type: "purple",
  date: "26 June 2024",
  title: "Chrome Plugin",
  description: "Quiz Chrome Plugin, similar to I like content. Perfect for developers who have some knowledge of React and now want to make a Project.",
  difficulty: "Easy",
  category: "Frontend",
  tags: ["React", "Tailwindcss", "Chrome"],
  price: "Free",
  image: "/project-1.png",
  url: "projects/chrome-extension/introduction",
  milestones: chromePluginMilestone,
  projectName: "chrome-extension",
};
