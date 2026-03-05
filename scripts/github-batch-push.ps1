# GitHub 分批推送脚本（3D 模型较大时使用）
# 用法：在项目根目录执行
#   .\scripts\github-batch-push.ps1 -RemoteUrl "https://github.com/你的用户名/huaxia-treasures.git"
# 或先设置远程再执行：
#   git remote add origin https://github.com/你的用户名/huaxia-treasures.git
#   .\scripts\github-batch-push.ps1

param(
    [string]$RemoteUrl = "",
    [string]$Branch = "main",
    [switch]$SkipInit
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot | Split-Path -Parent

function Ensure-GitRepo {
    if (-not (Test-Path (Join-Path $root ".git"))) {
        Write-Host "正在初始化 Git 仓库..." -ForegroundColor Cyan
        Set-Location $root
        git init
        git branch -M $Branch
    }
}

function Ensure-LFS {
    $lfs = git lfs version 2>$null
    if (-not $lfs) {
        Write-Host "未检测到 Git LFS。请先安装: https://git-lfs.com" -ForegroundColor Yellow
        exit 1
    }
    git lfs install
}

function Ensure-Remote {
    if ($RemoteUrl) {
        if ((git remote 2>$null) -match "origin") { git remote set-url origin $RemoteUrl }
        else { git remote add origin $RemoteUrl }
        Write-Host "已设置远程: $RemoteUrl" -ForegroundColor Green
    }
    $url = git remote get-url origin 2>$null
    if (-not $url) {
        Write-Host "请先添加远程仓库: git remote add origin <你的仓库URL>" -ForegroundColor Yellow
        exit 1
    }
}

function Add-Commit-Push {
    param([string[]]$PathArray, [string]$Message)
    $exist = $false
    foreach ($p in $PathArray) {
        $full = Join-Path $root $p
        if (Test-Path $full) { $exist = $true; break }
    }
    if (-not $exist) {
        Write-Host "  跳过（路径不存在）: $($PathArray -join ', ')" -ForegroundColor DarkGray
        return
    }
    foreach ($p in $PathArray) {
        $full = Join-Path $root $p
        if (Test-Path $full) { git add $p }
    }
    $status = git status --short
    if (-not $status) {
        Write-Host "  无新变更: $Message" -ForegroundColor DarkGray
        return
    }
    git commit -m $Message
    Write-Host "  推送: $Message" -ForegroundColor Cyan
    git push -u origin $Branch
}

# 各省/区 model 子目录（与 public/model 下一致）
$modelSubdirs = @(
    "anhui", "beijing", "chognqing", "fujian", "gansu", "guangdong", "guangxi", "guizhou",
    "hainan", "hebeisheng", "heilongjiang", "henan", "hubei", "hunan", "jiangsusheng",
    "jiangxi", "jilin", "liaoning", "neimemggu", "ningxia", "qinghai", "shandong",
    "shanghaishi", "shanxi01", "shanxi02", "sichuan", "tianjin", "xinjiang", "xizang",
    "yunnan", "zhejiang"
)

Set-Location $root

if (-not $SkipInit) {
    Ensure-GitRepo
    Ensure-LFS
}
Ensure-Remote

# ========== 第 1 批：代码与配置（不含 public/model 和 public/photosOrvideos） ==========
Write-Host "`n[1/3] 提交代码与配置..." -ForegroundColor Magenta
git add .gitattributes .gitignore
git add package.json package-lock.json vite.config.js index.html server.js
git add index.html
git add src
git add scripts
if (Test-Path (Join-Path $root "文物非遗汇总.md")) { git add "文物非遗汇总.md" }
if (Test-Path (Join-Path $root "summary.md")) { git add "summary.md" }
$status = git status --short
if ($status) {
    git commit -m "chore: project skeleton, config and source code"
    git push -u origin $Branch
}

# ========== 第 2 批：背景图 ==========
Write-Host "`n[2/3] 提交 public/background..." -ForegroundColor Magenta
Add-Commit-Push -PathArray @("public/background") -Message "assets: add background images"

# ========== 第 3 批：model 根目录下的模型（仅根目录 .glb/.fbx） ==========
Write-Host "`n[3/3] 提交 public/model 根目录..." -ForegroundColor Magenta
$modelRoot = Join-Path $root "public\model"
if (Test-Path $modelRoot) {
    Get-ChildItem -Path $modelRoot -File | ForEach-Object { git add "public/model/$($_.Name)" }
    $status = git status --short
    if ($status) {
        git commit -m "assets: add root 3D models (map overlay)"
        git push -u origin $Branch
    }
}

# ========== 第 4~N 批：按省/区提交 model 子目录 ==========
$i = 4
foreach ($dir in $modelSubdirs) {
    $path = "public/model/$dir"
    if (Test-Path (Join-Path $root $path)) {
        Write-Host "`n[$i/...] 提交 $path ..." -ForegroundColor Magenta
        Add-Commit-Push -PathArray @($path) -Message "assets: add 3D models - $dir"
        $i++
    }
}

# ========== 最后一批：照片/视频资源 ==========
Write-Host "`n[最后] 提交 public/photosOrvideos..." -ForegroundColor Magenta
Add-Commit-Push -PathArray @("public/photosOrvideos") -Message "assets: add photos and videos for artifacts"

$doneMsg = "`n" + "Batch push completed."
Write-Host $doneMsg -ForegroundColor Green
