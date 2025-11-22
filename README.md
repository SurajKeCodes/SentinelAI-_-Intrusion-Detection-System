<div align="center">
  <img src="https://github.com/user-attachments/assets/9dafc4ac-9029-438a-9af1-3677f07c45a9" width="100" alt="SentinelAI Shield Banner"/>
  <h1>🛡️ SentinelAI Intrusion Detection System</h1>
  <h3><i>🧩 AI-Powered Cyber Defense • Real-Time Threat Monitoring • Deep Packet Inspection</i></h3>
</div>




<div align="center"> <img src="https://img.shields.io/badge/React-AB47FF?style=for-the-badge&logo=react&logoColor=white&labelColor=1a0033" /> <img src="https://img.shields.io/badge/TypeScript-AB47FF?style=for-the-badge&logo=typescript&logoColor=white&labelColor=1a0033" /> <img src="https://img.shields.io/badge/Vite-AB47FF?style=for-the-badge&logo=vite&logoColor=white&labelColor=1a0033" /> <img src="https://img.shields.io/badge/Gemini_AI-AB47FF?style=for-the-badge&logo=google&logoColor=white&labelColor=1a0033" /> <img src="https://img.shields.io/badge/Cybersecurity-IDS_System-AB47FF?style=for-the-badge&logo=shield&logoColor=white&labelColor=1a0033" /> </div>


# 🖼️ Project Screenshots

<div align="center">

<table>
<tr>
<td align="center"><img src="https://github.com/user-attachments/assets/9cc1cc01-779c-46f1-968c-afd2f753118f" width="450"><br><b>Live Threat Dashboard</b></td>
<td align="center"><img src="https://github.com/user-attachments/assets/e889aa5a-930f-4330-8f65-2c2b88f6ba16" width="450"><br><b>System Metrics + Traffic Filters</b></td>
</tr>
<tr>
<td align="center"><img src="https://github.com/user-attachments/assets/6cc59a31-4ad7-4f82-97ef-7d92d0940b30" width="550"><br><b>Packet Stream + Deep Inspector</b></td>
<td align="center"><img src="https://github.com/user-attachments/assets/663b500f-eea4-4931-a28b-820a2d3140a4" width="350"><br><b>Cybersecurity Artwork</b></td>
</tr>
</table>

</div>

---

# 🌐 Overview

SentinelAI is a next-gen AI-powered Intrusion Detection System (IDS) designed with a modern SOC dashboard aesthetic. It simulates real-time network traffic, detects anomalies, analyzes packets with AI, visualizes attacks globally, supports deep packet inspection, provides smart filtering, and exports logs — all in a fast, beautiful interface built with React + TypeScript + Vite.

# 🌟 Features Overview (Complete List)

This README includes **EVERY feature** of SentinelAI:

✔ Real-time Traffic Simulation
✔ AI Threat Analyzer (Gemini)
✔ System Metrics (CPU, Memory, Active Connections, Bandwidth, Packets/sec)
✔ Live Net Threat Level
✔ Monitoring Active Indicator
✔ Global Attack Map
✔ Traffic Filters (Severity, Protocol, IP, Payload)
✔ Network Traffic Stream (Color-coded)
✔ Deep Packet Inspection (Hex + ASCII)
✔ Export Logs (Excel)
✔ Block IP / Block Packet
✔ Real-time Traffic Volume Graph
✔ Packet Metadata (protocol, origin, coordinates, port, score)
✔ Signature Detection (XSS, SQLi, Directory Traversal, Brute Force etc.)
✔ Clean & modern UI
✔ SOC-style panels
✔ Fully responsive dashboard

---

# 🛡️ Full Feature Breakdown

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-007ACC?style=for-the-badge\&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite)
![Gemini](https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=for-the-badge\&logo=google)
![Cybersecurity](https://img.shields.io/badge/Cybersecurity-IDS-ff0033?style=for-the-badge\&logo=protonvpn)
![Recharts](https://img.shields.io/badge/Recharts-Visualization-orange?style=for-the-badge)

</div>


## 🔥 1. Real-Time Net Threat Level

Displays the overall danger score of the network in real time based on:

* anomaly score
* suspicious traffic spikes
* severity distribution
* attack frequency

Color-coded: **Green → Yellow → Red**.

---

## 🧮 2. System Metrics Panel (LIVE)

Includes:

| Metric                 | Description                              |
| ---------------------- | ---------------------------------------- |
| **Threats Blocked**    | Packets automatically blocked by the IDS |
| **Active Connections** | Number of simulated ongoing connections  |
| **Bandwidth (MB/s)**   | Real-time network throughput             |
| **Packets/sec**        | Incoming packet rate                     |
| **CPU Load**           | Live CPU bar indicator                   |
| **Memory Usage**       | RAM bar indicator                        |
| **Monitoring Active**  | Status indicator (green pulsing LED)     |

---

## 🔍 3. Advanced Traffic Filtering

### 🔹 Search Filters

* By **Payload**
* By **Source/Destination IP**
* Instantly filters table rows

### 🔹 Severity Levels

* **Low**
* **Medium**
* **High**
* **Critical**

### 🔹 Protocol Filters

* **HTTP**
* **TCP**
* **UDP**
* **SSH**

The UI auto-highlights rows with matching properties.

---

## 🌐 4. Global Threat Map

Shows attack origins and paths with:

* Animated red lines
* Latitude/Longitude
* Country detection
* Pulse effects for active threats

Helps visualize global attack surface.

---

## 📈 5. Network Traffic Volume Graph

Real-time line graph showing:

* MB/s
* Traffic spikes
* Attack bursts
* Suspicious anomalies

Uses smooth animations for visibility.

---

## 📋 6. Network Traffic Stream Table

Shows every packet with:

| Column         | Description                  |
| -------------- | ---------------------------- |
| Timestamp      | Exact time                   |
| Severity       | Color-coded level            |
| Score          | Anomaly score                |
| Source IP      | Attacker                     |
| Destination IP | Target                       |
| Protocol       | HTTP/TCP/UDP/SSH             |
| Signature      | XSS, SQLi, Brute Force, etc. |
| Action         | Block / Inspect / Analyze    |

Rows animate on new events.

---

## 📤 7. Export Logs (Excel Format)

One click exports:

* All packets
* Time
* Date
* IPs
* Protocol
* Payload
* Hex
* Severity
* Anomaly score
* Signature
* Metadata

Excellent for cybersecurity training or audit.

---

## 🔬 8. Deep Packet Inspection (DPI)

Includes:

### **ASCII Payload Viewer**

Readable text version of packet payload.

### **Hex Viewer**

Hex dump with:

* Offset
* Hex bytes
* ASCII translation

Perfect for:

* Malware reversing
* IDS demonstration
* Payload analysis

---

## 🤖 9. AI Threat Analyzer (Gemini)

Ask AI to:

* Classify the packet
* Identify attack type
* Predict threat level
* Recommend blocking
* Explain payload
* Provide risk assessment

AI Modal returns:

* Detailed reasoning
* Risk score
* Attack category
* Suggested mitigation

---

## 🚫 10. Block IP / Block Packet

Includes:

* **Block IP button**
* **Block packet**
* Applies simulated firewall rules
* Removes traffic from attacker instantly

---

# 🧱 Project Structure

```
sentinel-ai/
│── App.tsx
│── index.tsx
│── index.html
│── vite.config.ts
│── package.json
│── README.md
│── .env.local
│── types.ts
│
├── components/
│   ├── AiModal.tsx
│   ├── NetworkChart.tsx
│   ├── WorldMap.tsx
│   ├── HexViewer.tsx
│   └── Icons.tsx
│
└── services/
    ├── geminiService.ts
    └── trafficSimulator.ts
```

---

# 📥 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/sentinel-ai.git
cd sentinel-ai
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add Gemini API key

Create `.env.local`:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

### 4️⃣ Run the development server

```bash
npm run dev
```

---

# 📞 Contact

<div align="left">

<a href="mailto:surajborkute9881392842@gmail.com">
  <img src="https://img.shields.io/badge/Email- surajborkute9881392842%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>

<a href="https://github.com/SurajKeCode">
  <img src="https://img.shields.io/badge/GitHub-SurajKeCode-181717?style=for-the-badge&logo=github&logoColor=white">
</a>

<a href="https://www.linkedin.com/in/suraj-borkute-512665341">
  <img src="https://img.shields.io/badge/LinkedIn-Suraj_Borkute-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white">
</a>

<a href="https://wa.me/919518772281">
  <img src="https://img.shields.io/badge/WhatsApp-Chat%20Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">
</a>

</div>

---

# 📜 License

SentinelAI is released under the MIT License.  
You may use, modify, distribute, and improve this project for personal, educational, and cybersecurity research purposes.

---
