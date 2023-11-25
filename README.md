# Phaser3 Project

Welcome to the Phaser3 project! This repository contains the source code for an exciting Phaser3-based game. To get started, follow the instructions below.

## Fork the Repository

First, fork this repository by clicking the "Fork" button at the top-right corner of the page. This will create a copy of the project in your GitHub account.

## Clone the Repository

Clone your forked repository to your local machine using either GitHub Desktop or the `git clone` command. Here's how you can do it using the command line:

```bash
git clone https://github.com/your-username/Phaser3-project.git
```

Replace `your-username` with your GitHub username.

## Install Dependencies

Navigate to the project's root directory and install the dependencies using Yarn. If you don't have Yarn installed, you can get it [here](https://yarnpkg.com/).

```bash
cd Phaser3-project
yarn install
```

This will install all the necessary packages listed in the `package.json` file.

## Run the Project

Once the dependencies are installed, you can run the project using the following command:

```bash
yarn dev
```

This command will start a development server, and you can access the game in your browser at `http://localhost:3000` (or another port specified in the console).

Feel free to explore and modify the code to create your own unique game using Phaser3!

---

Sure, I'll create a README guide that describes the key elements and properties used in your `GameScene` class from Phaser. This guide will be formatted as instructions, outlining the names of assets with their paths, origins, scales, positions, and the update function.

---

# GameScene Assets and Properties Guide

## Introduction
This guide provides detailed information about the assets and properties used in the `GameScene` class for a Phaser game project. Each asset's name, file path, origin, scale, position, and specific animations or functions are explained.

## Background Elements
1. **Background (bg)**
   - **Path:** `assets/image/game-scene/background/background-dark.png`
   - **Origin:** (0, 0)
   - **Scale:** Default
   - **Position:** (0, 0)

2. **Background Layer 1 (bgLayer1)**
   - **Path:** `assets/image/game-scene/background/bg-dark-layer1.png`
   - **Origin:** (0, 0)
   - **Scale:** Default
   - **Position:** (0, 0)

3. **Background Layer 2 (bgLayer2)**
   - **Path:** `assets/image/game-scene/background/bg-dark-layer2.png`
   - **Origin:** (0, 0)
   - **Scale:** Default
   - **Position:** (0, 0)

## Cloud Platforms
1. **Cloud 1 (cloud1)**
   - **Path:** `assets/image/game-scene/platforms/cl-long.png`
   - **Origin:** (0, 1)
   - **Scale:** 0.6
   - **Position:** (100, 500)

2. **Cloud 2 (cloud2)**
   - **Path:** `assets/image/game-scene/platforms/cl.png`
   - **Origin:** (1, 1)
   - **Scale:** 0.6
   - **Position:** (1240, 330)

3. **Cloud 3 (cloud3)**
   - **Path:** `assets/image/game-scene/platforms/cl-long2.png`
   - **Origin:** (0, 1)
   - **Scale:** 0.6
   - **Position:** (200, 200)

## Animated Sakura
- **Sakura (sakura)**
  - **Path:** `assets/image/game-scene/spritesheets/sakuraAnim.png`
  - **Origin:** (0.5, 1)
  - **Scale:** 0.6
  - **Position:** (890, 660)
  - **Animation Key:** `sakuraAnim`
  - **Frames:** From 0 to 5
  - **Frame Rate:** 5
  - **Repeat:** Infinite Loop

## Platform Base
- **Platform Base (platformBase)**
  - **Path:** `assets/image/game-scene/platforms/platform-long4.png`
  - **Origin:** (0.5, 1)
  - **Position:** (640, 730)

## Player
- **Player (player)**
  - **Path:** `assets/image/_dev/ufo.png`
  - **Origin:** (0.5, 0.5)
  - **Scale:** 0.05
  - **Position:** (460, 360)
  - **Size:** (2000, 1000)

## Update Function
- The `update()` function in `GameScene` continuously moves the background layers horizontally to create a parallax effect.
  - **Background:** Moves at a speed of `0.03`
  - **Background Layer 1:** Moves at a speed of `0.07`
  - **Background Layer 2:** Moves at a speed of `0.1`

## Conclusion
This guide provides a comprehensive overview of the assets used in the `GameScene` of your Phaser project, including their paths, origins, scales, positions, and specific animations or functions.

---