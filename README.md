# 🚀 MikroTik Docker Command Generator

A web-based tool to generate MikroTik RouterOS commands for creating Docker containers.

---

## 📦 About

This project helps you easily deploy Docker containers on MikroTik devices using the built-in Container package. It generates the necessary RouterOS commands to pull images, configure containers, and set up port forwarding—all through a simple web interface.

---

## 🌟 Key Features
- Complete setup for Container package on RouterOS
- Docker Hub package management
- Optimized registry configuration for Iranian users
- Port forwarding techniques
- Support for both default and custom registries

<img width="991" height="602" alt="Image" src="https://github.com/user-attachments/assets/64d12d54-569f-41e6-bf39-80f3aa9ca1cb" />

---

## 🛠️ Prerequisites

To use this tool effectively, make sure your MikroTik device meets the following requirements:

- RouterOS **v7.5 or later**
- Installed **Container** package
- Sufficient storage (preferably USB or external drive)
- Internet access (or local Docker registry)

---

## 📥 Installing the Container Package

To enable Docker container support on your MikroTik device, follow these steps:

1. Visit MikroTik's [official download page](https://mikrotik.com/download).
2. Select your device architecture and download the **Container** package (`container.npk`).
3. Upload the `.npk` file to your MikroTik device using **Winbox**, **WebFig**, or **FTP**.
4. Reboot the device to install the package.
5. After reboot, enable container mode by running the following command in the terminal:

```bash
/system/device-mode/update container=yes
```
6. Once the mode is updated, you must power off the device completely and then power it back on (a soft reboot is not sufficient).

7. After powering on, verify that the container service is available:
```bash
/container/print
```
> ✅ Your MikroTik is now ready to run Docker containers using the Container package.

    
## 🗝 Access container shell
```bash
/container/shell [containerID]
```

---

## 🐳 Docker Registry Options

By default, this tool uses the ArvanCloud Docker registry:

#### https://docker.arvancloud.ir (Recommended for Iran)

> This registry is selected to bypass Docker Hub's restrictions for users in **Iran**.

If you prefer, you can switch to the official Docker registry:

#### https://registry-1.docker.io (Global)


Just update the registry URL in your MikroTik configuration accordingly.

---

## 🔧 How It Works

<img width="727" height="348" alt="Image" src="https://github.com/user-attachments/assets/455883ab-06cc-4aea-a4eb-6e94f04ccc71" />


1. Select your desired Docker image from the registry.
2. Configure environment variables, ports, and volumes.
3. Generate RouterOS commands.
4. Copy and paste the commands into your MikroTik terminal.

---

## 🌐 Port Forwarding

To expose container services to the internet or your local network, use a NAT rule like this:

```bash
/ip firewall nat add chain=dstnat dst-port=8080 action=dst-nat to-addresses=127.0.0.1 to-ports=80
```
Replace 8080 with your public port and 80 with the container's internal port.

---

## 💡 Tips
Use external storage for better performance.

Monitor container logs via /container/logs.

Keep your RouterOS updated for security and stability.

---

## 📄 License
This project is licensed under the [MIT License](https://raw.githubusercontent.com/imotb/mikrotik-docker/refs/heads/main/LICENSE).

