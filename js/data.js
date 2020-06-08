// Sample data

/// <reference path="./index.d.ts" />

/** @type {Guide[]} */
const guides = [
  {
    id: "guide-0",
    title: "Totally awesome Teemo guide",
    tier: "gold",
    author: "tom",
    createdAt: "2020-06-06T13:39:41.382Z",
    upvotes: 100,
    downvotes: 50,
    views: 150,
    content: [
      {
        type: "empty",
        summary: "Step 1. Learn how to use the E skill",
      },
      {
        type: "text",
        summary: "Step 2. Use Teemo's long attack range to poke",
        content:
          "There are two ways of consuming the opponent's life.\n1. When your opponent wants to kill minions, attack him so that he cannot resist soon.\n Buy shoes ASAP to increase your speed, so that you can escape",
      },
      {
        type: "video",
        summary: "Plant mushrooms along the wall to prevent ganks",
        videoUrl: "https://www.youtube.com/embed?v=UVmgwL3tOAg",
      },
    ],
  },
  {
    id: "guide-1",
    title: "Items must but ASAP for Teemo",
    tier: "diamond",
    author: "jack",
    createdAt: "2020-05-12T14:20:21.382Z",
    upvotes: 10000,
    downvotes: 2350,
    views: 1121150,
    content: [
      {
        type: "empty",
        summary: "Step 1. Buy long sword as your first small item",
      },
      {
        type: "empty",
        summary: "Step 2. Buy the hourglass as your first complete item",
      },
      {
        type: "video",
        summary: "Plant mushrooms along the wall to prevent ganks",
        videoUrl: "https://www.youtube.com/embed?v=UVmgwL3tOAg",
      },
    ],
  },
  {
    id: "guide-2",
    title: "Guides by SKT Faker",
    tier: "master",
    author: "Faker_Forever",
    createdAt: "2020-05-01T04:25:25.382Z",
    upvotes: 9433,
    downvotes: 251,
    views: 12493,
    content: [
      {
        type: "video",
        summary: "HOW TO READ THE MAP by Faker",
        videoUrl: "https://www.youtube.com/embed?v=-iD8Ab05N1s",
      },
      {
        type: "video",
        summary: "RYZE GUIDE by Faker",
        videoUrl: "https://www.youtube.com/embed?v=Pd5dp2f_yUg",
      },
      {
        type: "video",
        summary: "Unique ZED GUIDE by Faker",
        videoUrl: "https://www.youtube.com/embed?v=mvGVELBadT8",
      },
      {
        type: "video",
        summary: "Faker's HOW TO ZOE",
        videoUrl: "https://www.youtube.com/embed?v=18kgAyq0Rxw",
      },
    ],
  },
  {
    id: "guide-3",
    title: "Empty guide (for testing)",
    tier: "bronze",
    author: "SomeUser123",
    createdAt: "2020-05-15T06:21:45.448Z",
    upvotes: 12,
    downvotes: 124,
    views: 178,
    content: [],
  },
  {
    id: "guide-4",
    title: "How to control lanes in bottom",
    tier: ["gold", "platinum"],
    author: "Sangyoon",
    createdAt: "2020-06-01T01:12:33.382Z",
    upvotes: 1236,
    downvotes: 349,
    views: 2981,
    content: [
      {
        type: "text",
        summary: "Q : When is the timing to push lane?",
        content: "When you are winning against the opponent and wants to kill him through dive",
      },
      {
        type: "text",
        summary: "Q : When is the time to pull lane?",
        content: "When you are winning but dive is not available",
      },
      {
        type: "video",
        summary: "Example of how to control lanes to win",
        videoUrl: "https://www.youtube.com/embed?v=UVmgwL3tOAg",
      },
    ],
  },
  {
    id: "guide-5",
    title: "Way to GOLD",
    tier: ["bronze", "silver"],
    author: "Goldmaster",
    createdAt: "2020-04-21T04:11:12.448Z",
    upvotes: 2501,
    downvotes: 1321,
    views: 4100,
    content: [
      {
        type: "text",
        summary: "Champions good at low tier",
        content: "Malphite, Wukong, Trundle",
      },
      {
        type: "text",
        summary: "Lanes good at low tier",
        content: "Choose one of two lane which is top and jungle",
      },
    ],
  },
  {
    id: "guide-6",
    title: "Useful combo for Fizz",
    tier: ["gold", "platinum", "diamond"],
    author: "FizzLOL",
    createdAt: "2020-02-02T01:23:54.448Z",
    upvotes: 900,
    downvotes: 41,
    views: 1080,
    content: [
      {
        type: "video",
        summary: "Combo to delete full-hp enemy",
        videoUrl: "https://www.youtube.com/embed?v=UVmgwL3tOAg",
      },
      {
        type: "video",
        summary: "Combo to chase low-hp enemy",
        videoUrl: "https://www.youtube.com/embed?v=UVmgwL3tOAg",
      },
    ],
  },
  {
    id: "guide-7",
    title: "Basic information to carry with Wukong",
    tier: ["platinum", "diamond", "master"],
    author: "Monkey",
    createdAt: "2020-06-07T19:56:00.448Z",
    upvotes: 7097,
    downvotes: 642,
    views: 8794,
    content: [
      {
        type: "video",
        summary: "Madmovie of Challenger Wukong player Monkey",
        videoUrl: "https://www.youtube.com/embed?v=UVmgwL3tOAg",
      },
      {
        type: "text",
        summary: "Counterpick",
        content: "Darius, Teemo, Queen",
      },
      {
        type: "text",
        summary: "Items",
        content: "Bloodthirster, Phage, BF Sword",
      }
    ],
  },
  {
    id: "guide-8",
    title: "Pray Montage",
    tier: ["iron", "bronze", "silver", "gold", "platinum", "diamond", "master", "grandmaster", "challenger"],
    author: "PrayFan",
    createdAt: "2019-11-19T16:20:26.448Z",
    upvotes: 10028,
    downvotes: 7,
    views: 11002,
    content: [
      {
        type: "video",
        summary: "Pray Montage",
        videoUrl: "https://www.youtube.com/embed?v=UVmgwL3tOAg",
      },
    ],
  },
  {
    id: "guide-9",
    title: "Winning habits of pro player - Series 1",
    tier: ["diamond", "master", "grandmaster", "challenger"],
    author: "ProSpectator",
    createdAt: "2020-01-22T09:41:32.448Z",
    upvotes: 5491,
    downvotes: 812,
    views: 6755,
    content: [
      {
        type: "text",
        summary: "Winning picks",
        content: "1st : Syndra 2nd : Talon 3rd : Brand",
      },
      {
        type: "text",
        summary: "Most banned",
        content: "1st : Maokai, 2nd : Leblanc, 3rd : Nunu",
      },
    ],
  },
  {
    id: "guide-10",
    title: "Winning habits of pro player - Series 2",
    tier: ["diamond", "master", "grandmaster", "challenger"],
    author: "ProSpectator",
    createdAt: "2020-02-22T09:40:22.448Z",
    upvotes: 6689,
    downvotes: 1011,
    views: 8326,
    content: [
      {
        type: "text",
        summary: "Winning picks",
        content: "1st : Ezreal 2nd : Wukong 3rd : Yumi",
      },
      {
        type: "text",
        summary: "Most banned",
        content: "1st : Lucian, 2nd : Nunu, 3rd : Syndra",
      },
    ],
  },
  {
    id: "guide-11",
    title: "Winning habits of pro player - Series 3",
    tier: ["diamond", "master", "grandmaster", "challenger"],
    author: "ProSpectator",
    createdAt: "2020-03-22T09:41:59.448Z",
    upvotes: 7024,
    downvotes: 981,
    views: 8794,
    content: [
      {
        type: "text",
        summary: "Winning picks",
        content: "1st : Wukong 2nd : Maokai 3rd : Talon",
      },
      {
        type: "text",
        summary: "Most banned",
        content: "1st : Lucian, 2nd : Syndra, 3rd : Ezreal",
      },
    ],
  },
  {
    id: "guide-12",
    title: "Winning habits of pro player - Series 4",
    tier: ["diamond", "master", "grandmaster", "challenger"],
    author: "ProSpectator",
    createdAt: "2020-04-22T09:40:22.448Z",
    upvotes: 7466,
    downvotes: 739,
    views: 9416,
    content: [
      {
        type: "text",
        summary: "Winning picks",
        content: "1st : Varus 2nd : Shako 3rd : Ezreal",
      },
      {
        type: "text",
        summary: "Most banned",
        content: "1st : Poppi, 2nd : Wukong, 3rd : Talon",
      },
    ],
  },
];
