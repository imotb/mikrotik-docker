/*
 * MikroTik Container Generator
 *
 * A web-based tool to generate MikroTik RouterOS commands for creating Docker containers.
 *
 * @author    https://github.com/imotb
 * @version   1.0.0
 * @license   MIT
 */
// --- TRANSLATIONS ---
const translations = {
    en: {
        pageTitle: "MikroTik Container Generator",
        headerTitle: "MikroTik Container Generator",
        headerSubtitle: "Easily create the necessary scripts to run containers on RouterOS 7.",
        globalSettingsTitle: "Global Settings",
        registryUrlLabel: "Registry URL",
        ramHighLabel: "Overall RAM Limit",
        containerSpecsTitle: "Container Specifications",
        imageNameLabel: "Image Name",
        imageNamePlaceholder: "e.g., nginx:latest",
        containerNameLabel: "Container Name (Unique)",
        containerNamePlaceholder: "e.g., uptime-kuma",
        rootDirLabel: "Root Directory",
        rootDirPlaceholder: "e.g., disk1/docker/mycontainer",
        hostnameLabel: "Hostname",
        hostnamePlaceholder: "(Optional) e.g., my-app",
        cmdLabel: "Command (Cmd)",
        cmdPlaceholder: "(Optional) e.g., /bin/bash",
        networkSettingsTitle: "Network Settings",
        vethNameLabel: "Veth Interface Name",
        vethNamePlaceholder: "e.g., veth-adguard",
        wanInterfaceLabel: "WAN Interface Name",
        bridgeRangeLabel: "Bridge Network Range",
        bridgeGatewayLabel: "Bridge Gateway",
        containerIpLabel: "Container IP (with subnet)",
        containerGatewayLabel: "Container Gateway",
        dnsLabel: "Container DNS Server",
        mountsTitle: "Mount Points",
        addMountButton: "Add Mount",
        mountNamePlaceholder: "Mount Name",
        mountSrcPlaceholder: "Path on Router (Src)",
        mountDstPlaceholder: "Path in Container (Dst)",
        portForwardingTitle: "Port Forwarding",
        addPortRuleButton: "Add Port Rule",
        routerPortPlaceholder: "Router Port",
        containerPortPlaceholder: "Container Port",
        envVarsTitle: "Environment Variables (Envlist)",
        envlistNameLabel: "Variable List Name",
        addEnvVarButton: "Add Variable",
        envKeyPlaceholder: "Key",
        envValuePlaceholder: "Value",
        outputTitle: "Final Script",
        copyButton: "Copy",
        copiedButton: "Copied!",
        outputPlaceholder: "Fill in the fields to see the commands..."
    },
    fa: {
        pageTitle: "تولیدکننده دستورات کانتینر میکروتیک",
        headerTitle: "MikroTik Container Generator",
        headerSubtitle: "اسکریپت‌های مورد نیاز برای اجرای کانتینر در RouterOS 7 را به سادگی ایجاد کنید.",
        globalSettingsTitle: "تنظیمات سراسری",
        registryUrlLabel: "آدرس رجیستری",
        ramHighLabel: "حداکثر RAM کلی",
        containerSpecsTitle: "مشخصات کانتینر",
        imageNameLabel: "نام ایمیج",
        imageNamePlaceholder: "مثلاً: nginx:latest",
        containerNameLabel: "نام کانتینر (منحصر به فرد)",
        containerNamePlaceholder: "مثال: uptime-kuma",
        rootDirLabel: "پوشه اصلی (Root Dir)",
        rootDirPlaceholder: "e.g., disk1/docker/mycontainer",
        hostnameLabel: "Hostname",
        hostnamePlaceholder: "(اختیاری) مثلا: my-app",
        cmdLabel: "Command (Cmd)",
        cmdPlaceholder: "(اختیاری) مثلا: /bin/bash",
        networkSettingsTitle: "تنظیمات شبکه",
        vethNameLabel: "نام اینترفیس Veth",
        vethNamePlaceholder: "مثال: veth-adguard",
        wanInterfaceLabel: "نام اینترفیس WAN",
        bridgeRangeLabel: "رنج شبکه Bridge",
        bridgeGatewayLabel: "گیت‌وی Bridge",
        containerIpLabel: "IP کانتینر (با ساب‌نت)",
        containerGatewayLabel: "گیت‌وی کانتینر",
        dnsLabel: "سرور DNS کانتینر",
        mountsTitle: "Mount Points",
        addMountButton: "افزودن Mount",
        mountNamePlaceholder: "نام Mount",
        mountSrcPlaceholder: "مسیر روی روتر (Src)",
        mountDstPlaceholder: "مسیر داخل کانتینر (Dst)",
        portForwardingTitle: "فوروارد کردن پورت",
        addPortRuleButton: "افزودن رول پورت",
        routerPortPlaceholder: "پورت روتر",
        containerPortPlaceholder: "پورت کانتینر",
        envVarsTitle: "متغیرهای محیطی (Envlist)",
        envlistNameLabel: "نام لیست متغیرها",
        addEnvVarButton: "افزودن متغیر",
        envKeyPlaceholder: "Key",
        envValuePlaceholder: "Value",
        outputTitle: "اسکریپت نهایی",
        copyButton: "کپی",
        copiedButton: "کپی شد!",
        outputPlaceholder: "برای مشاهده دستورات، فیلدها را پر کنید..."
    }
};

// --- THEME & LANGUAGE LOGIC ---
let currentLang = localStorage.getItem('language') || 'fa';
let currentTheme = localStorage.getItem('theme');

const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
    
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'bi bi-sun-fill';
    } else {
        icon.className = 'bi bi-moon-stars-fill';
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    const langConfig = translations[lang];
    
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    langToggle.textContent = lang === 'fa' ? 'EN' : 'FA';
    
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key');
        el.textContent = langConfig[key];
    });

    document.querySelectorAll('[data-translate-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-key-placeholder');
        el.placeholder = langConfig[key];
    });
}

themeToggle.addEventListener('click', () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'fa' ? 'en' : 'fa');
    generateCommands();
});

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(currentTheme);

    setLanguage(currentLang);
    
    document.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('input', generateCommands);
    });

    document.getElementById('containerImage').addEventListener('input', (e) => {
        const imageName = e.target.value.trim();
        if (imageName) {
            const cleanName = imageName.split(':')[0].split('/').pop().toLowerCase().replace(/[^a-z0-9]/g, '');
            document.getElementById('containerName').value = cleanName;
            document.getElementById('hostname').value = cleanName; // Auto-fill hostname
            document.getElementById('vethName').value = `veth-${cleanName}`;
            document.getElementById('rootDir').value = `disk1/docker/${cleanName}`;
            document.getElementById('envlistName').value = `${cleanName}_envs`;
        }
    });

    generateCommands();
});

// --- DYNAMIC FIELD FUNCTIONS ---
function addPortRule() {
    const portRules = document.getElementById('portRules');
    const ruleDiv = document.createElement('div');
    ruleDiv.className = 'port-rule mb-2';
    const langConfig = translations[currentLang];
    ruleDiv.innerHTML = `
        <input type="number" class="form-control" placeholder="${langConfig.routerPortPlaceholder}" oninput="generateCommands()">
        <input type="number" class="form-control" placeholder="${langConfig.containerPortPlaceholder}" oninput="generateCommands()">
        <select class="form-select" onchange="generateCommands()">
            <option value="tcp">TCP</option><option value="udp">UDP</option>
        </select>
        <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove(); generateCommands();"><i class="bi bi-trash"></i></button>
    `;
    portRules.appendChild(ruleDiv);
}

function addEnvVar() {
    const envVars = document.getElementById('envVars');
    const envDiv = document.createElement('div');
    envDiv.className = 'env-var mb-2';
    const langConfig = translations[currentLang];
    envDiv.innerHTML = `
        <input type="text" class="form-control" placeholder="${langConfig.envKeyPlaceholder}" value="TZ" oninput="generateCommands()">
        <input type="text" class="form-control" placeholder="${langConfig.envValuePlaceholder}" value="Asia/Tehran" oninput="generateCommands()">
        <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove(); generateCommands();"><i class="bi bi-trash"></i></button>
    `;
    envVars.appendChild(envDiv);
}

function addMount() {
    const mountsContainer = document.getElementById('mountsContainer');
    const mountDiv = document.createElement('div');
    mountDiv.className = 'mount-rule mb-2';
    const containerName = document.getElementById('containerName').value || 'c';
    const mountIndex = mountsContainer.children.length;
    const rootDirValue = document.getElementById('rootDir').value;
    const langConfig = translations[currentLang];
    mountDiv.innerHTML = `
        <input type="text" class="form-control" placeholder="${langConfig.mountNamePlaceholder}" value="${containerName}-mount${mountIndex}" oninput="generateCommands()">
        <input type="text" class="form-control" placeholder="${langConfig.mountSrcPlaceholder}" value="${rootDirValue}" oninput="generateCommands()">
        <input type="text" class="form-control" placeholder="${langConfig.mountDstPlaceholder}" value="/app/data" oninput="generateCommands()">
        <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove(); generateCommands();"><i class="bi bi-trash"></i></button>
    `;
    mountsContainer.appendChild(mountDiv);
}

// --- CORE LOGIC: COMMAND GENERATION ---
function generateCommands() {
    const get = id => document.getElementById(id).value.trim();
    if (!get('containerImage') || !get('containerName')) {
        document.getElementById('commandOutput').textContent = translations[currentLang].outputPlaceholder;
        return;
    }
    
    const containerName = get('containerName');
    const comment = `For container: ${containerName}`;
    let commands = `# MikroTik Container Script for: ${containerName}\n\n`;

    commands += `# 1. Set Global Container Configuration\n`;
    commands += `/container/config/set registry-url="${get('registryUrl')}" ram-high=${get('ramHigh')}\n\n`;

    commands += `# 2. Network Setup\n`;
    commands += `/interface/bridge/add name=docker-bridge comment="Bridge for all containers"\n`;
    commands += `/ip/address/add address=${get('bridgeGateway')}/${get('ipRange').split('/')[1]} interface=docker-bridge comment="Gateway for Bridge"\n`;
    commands += `/interface/veth/add name=${get('vethName')} address=${get('containerIp')} gateway=${get('containerGateway')} comment="${comment}"\n`;
    commands += `/interface/bridge/port add bridge=docker-bridge interface=${get('vethName')} comment="${comment}"\n\n`;

    commands += `# 3. Firewall Rules\n`;
    commands += `/ip/firewall/nat/add chain=srcnat action=masquerade src-address=${get('ipRange')} out-interface=${get('wanInterface')} comment="Allow all container traffic to internet"\n`;
    commands += `/ip/firewall/filter/add chain=forward action=accept in-interface=docker-bridge out-interface=${get('wanInterface')} comment="Allow all container traffic out"\n`;
    
    const portRules = document.querySelectorAll('#portRules .port-rule');
    if (portRules.length > 0) {
        portRules.forEach(rule => {
            const extPort = rule.querySelector('input:nth-child(1)').value;
            const contPort = rule.querySelector('input:nth-child(2)').value;
            const protocol = rule.querySelector('select').value;
            if (extPort && contPort) {
                commands += `/ip/firewall/nat/add action=dst-nat chain=dstnat dst-port=${extPort} protocol=${protocol} to-addresses=${get('containerIp').split('/')[0]} to-ports=${contPort} comment="${comment}"\n`;
            }
        });
        commands += `/ip/firewall/filter/add chain=forward action=accept connection-nat-state=dstnat comment="Allow forwarded NAT traffic"\n`;
    }
    commands += `\n`;

    const mounts = document.querySelectorAll('#mountsContainer .mount-rule');
    const mountNames = [];
    if (mounts.length > 0) {
        commands += `# 4. Define Mount Points\n`;
        mounts.forEach(mount => {
            const name = mount.querySelector('input:nth-child(1)').value;
            const src = mount.querySelector('input:nth-child(2)').value;
            const dst = mount.querySelector('input:nth-child(3)').value;
            if (name && src && dst) {
                commands += `/container/mounts/add name=${name} src=${src} dst=${dst}\n`;
                mountNames.push(name);
            }
        });
        commands += '\n';
    }

    const envVars = document.querySelectorAll('#envVars .env-var');
    if (envVars.length > 0) {
        commands += `# 5. Define Environment Variables List\n`;
        envVars.forEach(env => {
            const key = env.querySelector('input:nth-child(1)').value;
            const value = env.querySelector('input:nth-child(2)').value;
            if (key && value) {
                commands += `/container/envs/add name=${get('envlistName')} key="${key}" value="${value}"\n`;
            }
        });
        commands += '\n';
    }

    commands += `# 6. Add the container definition\n`;
    let containerAddParams = [];
    containerAddParams.push(`remote-image="${get('containerImage')}"`);
    containerAddParams.push(`name=${containerName}`);
    containerAddParams.push(`interface=${get('vethName')}`);
    containerAddParams.push(`root-dir=${get('rootDir')}`);
    if (get('hostname')) containerAddParams.push(`hostname="${get('hostname')}"`); // Add hostname
    if (get('cmd')) containerAddParams.push(`cmd="${get('cmd')}"`);             // Add cmd
    if (get('dns')) containerAddParams.push(`dns=${get('dns')}`);
    if (envVars.length > 0) containerAddParams.push(`envlist=${get('envlistName')}`);
    if (mountNames.length > 0) containerAddParams.push(`mounts=${mountNames.join(',')}`);
    containerAddParams.push(`logging=yes`);
    containerAddParams.push(`start-on-boot=yes`);
    containerAddParams.push(`comment="${comment}"`);
    commands += `/container/add ${containerAddParams.join(' ')}\n\n`;

    commands += `# 7. Start the Container\n`;
    commands += `/container start [find where name="${containerName}"]\n`;

    document.getElementById('commandOutput').textContent = commands;
}

function copyCommands() {
    const commands = document.getElementById('commandOutput').textContent;
    const copyButtonSpan = document.querySelector('button[onclick="copyCommands()"] span');
    navigator.clipboard.writeText(commands).then(() => {
        const originalText = copyButtonSpan.textContent;
        copyButtonSpan.textContent = translations[currentLang].copiedButton;
        setTimeout(() => { copyButtonSpan.textContent = originalText; }, 2000);
    });
}