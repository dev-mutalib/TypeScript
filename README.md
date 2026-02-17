# 🚀 TypeScript Practice Repository

## 📌 Overview

The goal of this repository is to:

- Learn core TypeScript syntax and concepts
- Understand TypeScript’s type system
- Practice writing type-safe functions and variables
- Learn module imports and exports
- Get comfortable with `tsc` and `ts-node`
- Prepare for real-world TypeScript usage

This repository focuses on **learning core TypeScript**, not frameworks.

---

## 📁 Project Structure

```
TypeScript/
│
├── src/
│   ├── index.ts              # Entry / runner file
│   ├── basic.ts              # TypeScript basics
│   ├── ArrayEnum.ts          # Arrays & Enums examples
│   ├── typesInTs.ts          # Core type system examples
│   ├── unionAndany.ts        # Union & any type examples
│   ├── interface.ts          # Interface examples
│   ├── interfaceTs.ts        # Extended interface examples
│   ├── objectTs.ts           # Object type examples
│   ├── functionTs.ts         # Function typing examples
│   ├── genericsTs.ts         # Generics examples
│   ├── typeNarrowing.ts      # Type narrowing examples
│   ├── moreTypes.ts          # Advanced type concepts
│   ├── oops.ts               # OOP concepts in TypeScript
│   ├── fetchReq.ts           # Fetch API example
│   └── WebReq.ts             # Web request examples
│
├── dist/                     # Compiled JavaScript output (ignored by git)
├── node_modules/             # Dependencies
│
├── package.json              # Project metadata & scripts
├── pnpm-lock.yaml            # Dependency lock file
├── tsconfig.json             # TypeScript configuration
├── .gitignore                # Ignored files
└── README.md                 # Project documentation
```

---

## 🛠 Installation

Install dependencies using:

```bash
pnpm install
```

---

## ▶️ Compile TypeScript

```bash
pnpm tsc
```

This will generate compiled JavaScript files inside the `dist/` folder.

---

## ▶️ Run Using ts-node

```bash
pnpm ts-node src/index.ts
```

---

## 📚 Topics Covered

- Type Annotations
- Primitive & Complex Types
- Arrays & Enums
- Union & Intersection Types
- Interfaces
- Generics
- Type Narrowing
- Function Typing
- Object Typing
- OOP in TypeScript
- API Requests with Types

---

## ⚙️ Tech Stack

- TypeScript
- Node.js
- pnpm

---

## 🎯 Purpose

This repository is structured purely for **hands-on TypeScript practice** to strengthen core fundamentals and build confidence for real-world TypeScript development.

---

## 📌 Notes

- `dist/` is generated automatically after compilation.
- `node_modules/` is managed by pnpm.
- This project uses **pnpm exclusively** (no npm, no npx).
- The focus is mastering core TypeScript before moving to frameworks.
