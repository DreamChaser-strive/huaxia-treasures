# Project Context: ar

## 1. Directory Structure（树状 + 注释）

```text
ar/
├── .gitignore  # 忽略规则
├── ar.iml
├── index.html  # 页面入口
├── package-lock.json
├── package.json  # 依赖清单
├── public/  # 静态资源 (图标、模型文件)
│   ├── model/
│   │   ├── 李白.glb
│   │   ├── anhui/
│   │   │   ├── hefei/
│   │   │   │   ├── xifu.glb
│   │   │   ├── huangshan/
│   │   │       └── paifang.glb
│   │   ├── beijing/
│   │   │   ├── gugong.glb
│   │   │   ├── jingjumianju.glb
│   │   │   ├── jingtailan.glb
│   │   │   ├── tuerye.glb
│   │   ├── bingmayong.glb
│   │   ├── chognqing/
│   │   │   ├── chongqingshiqu/
│   │   │       └── dazushike.glb
│   │   ├── fujian/
│   │   │   ├── dehuaxian/
│   │   │   │   ├── guanyin.glb
│   │   │   ├── fuzhoushi/
│   │   │   │   ├── shidiao.glb
│   │   │   ├── longyan/
│   │   │   │   ├── kejiatulou.glb
│   │   │   ├── xiamen/
│   │   │       └── nanyinyueqi.glb
│   │   ├── gansu/
│   │   │   ├── jiayuguan/
│   │   │   │   ├── jiayuguan.glb
│   │   │   ├── lanzhou/
│   │   │   │   ├── shuiche.glb
│   │   │   ├── tianshui/
│   │   │       └── maijishan.glb
│   │   ├── guangdong/
│   │   │   ├── choahzou/
│   │   │   │   ├── mudiao.glb
│   │   │   ├── foshan/
│   │   │   │   ├── foshan.glb
│   │   │   ├── guangzhoushi/
│   │   │   │   ├── guangcai.glb
│   │   │       └── yueju.glb
│   │   ├── guangxi/
│   │   │   ├── liuzhou/
│   │   │   │   ├── gulou.glb
│   │   │   ├── nanning/
│   │   │   │   ├── zhuangjin.glb
│   │   │   ├── wuzhou/
│   │   │       └── liubaohca.glb
│   │   ├── guizhou/
│   │   │   ├── anshun/
│   │   │       └── dixi.glb
│   │   ├── hainan/
│   │   │   ├── sanya/
│   │   │       └── yediao.glb
│   │   ├── hebeisheng/
│   │   │   ├── baoding/
│   │   │   │   ├── yishuiyan.glb
│   │   │   ├── handan/
│   │   │   │   ├── cizhouyaoqi.glb
│   │   │   ├── shijiazhuang/
│   │   │   │   ├── changshanzhangu.glb
│   │   │   ├── tangshan/
│   │   │       └── piyingxi.glb
│   │   ├── heilongjiang/
│   │   │   ├── haerbin/
│   │   │   │   ├── bingdiao.glb
│   │   │   │   ├── suofeiya.glb
│   │   │   ├── jiamusi/
│   │   │   │   ├── yupiyi.glb
│   │   │   ├── qiqihaer/
│   │   │       └── huapichuan.glb
│   │   ├── henan/
│   │   │   ├── anyang/
│   │   │   │   ├── simuwuding.glb
│   │   │   ├── luoyang/
│   │   │   │   ├── caima.glb
│   │   │   ├── xuchang/
│   │   │   │   ├── junci.glb
│   │   │   ├── zhengzhou/
│   │   │       └── talin.glb
│   │   ├── hubei/
│   │   │   ├── jingzhou/
│   │   │   │   ├── chsuhiqiqi.glb
│   │   │   ├── wuhan/
│   │   │   │   ├── bianzhong.glb
│   │   │       └── huanghelou.glb
│   │   ├── hunan/
│   │   │   ├── changsha/
│   │   │   │   ├── xiangxiupingfeng.glb
│   │   │   ├── hengyang/
│   │   │   │   ├── nanyuedamiao.glb
│   │   │   ├── xiangtan/
│   │   │   │   ├── diaoke.glb
│   │   │   ├── xiangxizhou/
│   │   │       └── miazu.glb
│   │   ├── jiahugudi.com_JJI54554159882.fbx
│   │   ├── jiangsusheng/
│   │   │   ├── changzhoushi/
│   │   │   │   ├── zhuke.glb
│   │   │   ├── jiangsushi/
│   │   │   │   ├── pinfeng.glb
│   │   │   │   ├── zishahu.glb
│   │   │   ├── wuxishi/
│   │   │   │   ├── niren.glb
│   │   │   ├── yangzhoushi/
│   │   │       └── yanzghou.glb
│   │   ├── jiangxi/
│   │   │   ├── jingdezhen/
│   │   │   │   ├── fenci.glb
│   │   │   │   ├── qinghuaci.glb
│   │   │   ├── nanchang/
│   │   │       └── tengwangge.glb
│   │   ├── jilin/
│   │   │   ├── jilin/
│   │   │       └── huoguo.glb
│   │   ├── jingjurenwu.glb
│   │   ├── liaoning/
│   │   │   ├── anshan/
│   │   │   │   ├── yudiao.glb
│   │   │   ├── dalian/
│   │   │   │   ├── beidiao.glb
│   │   │   ├── shenyang/
│   │   │   │   ├── dazhengdian.glb
│   │   │       └── manzuqipao.glb
│   │   ├── menggubao.glb
│   │   ├── neimemggu/
│   │   │   ├── baotou/
│   │   │   │   ├── mengguyinshi.glb
│   │   │   ├── chifeng/
│   │   │   │   ├── balinshidiao.glb
│   │   │   ├── huhehaote/
│   │   │   │   ├── matouqin.glb
│   │   │       └── menggubao.glb
│   │   ├── ningxia/
│   │   │   ├── zhongwei/
│   │   │       └── pifa.glb
│   │   ├── pipa.glb
│   │   ├── qinghai/
│   │   │   ├── yushu/
│   │   │       └── tongxiang.glb
│   │   ├── qingtongniu.glb
│   │   ├── shandong/
│   │   │   ├── jinan/
│   │   │   │   ├── heitao.glb
│   │   │   │   ├── paifang.glb
│   │   │   ├── qingdao/
│   │   │   │   ├── beiuke.glb
│   │   │   ├── qufu/
│   │   │   │   ├── kongmiao.glb
│   │   │   ├── weifang/
│   │   │       └── fengzheng.glb
│   │   ├── shanghaishi/
│   │   │   ├── qipao.glb
│   │   ├── shanxi01/
│   │   │   ├── pingyao/
│   │   │   │   ├── pingyaotuiguangqiqi.glb
│   │   │   ├── taiyuan/
│   │   │       └── jincishengmudian.glb
│   │   ├── shanxi02/
│   │   │   ├── baoji/
│   │   │   │   ├── hezun1.glb
│   │   │   ├── xi'an/
│   │   │   │   ├── bingmayontg.glb
│   │   │   │   ├── dayanta.glb
│   │   │   ├── xianyang/
│   │   │   │   ├── maoling.glb
│   │   │   ├── yanan/
│   │   │       └── yaogu.glb
│   │   ├── sichuan/
│   │   │   ├── chengdu/
│   │   │   │   ├── mianju.glb
│   │   │   ├── leshan/
│   │   │       └── leshandafo.glb
│   │   ├── tianjin/
│   │   │   ├── nirenzhang.glb
│   │   ├── xinjiang/
│   │   │   ├── hetian/
│   │   │   │   ├── yu.glb
│   │   │   ├── tuluufan/
│   │   │   │   ├── putaigan.glb
│   │   │   ├── wulumuqi/
│   │   │       └── maozi.glb
│   │   ├── xizang/
│   │   │   ├── lasa/
│   │   │   │   ├── budalagong.glb
│   │   │   │   ├── tangka.glb
│   │   │   ├── linhzi/
│   │   │   │   ├── zangdao.glb
│   │   │       └── zangxianglu.glb
│   │   ├── yuhaungdadi.glb
│   │   ├── yunnan/
│   │   │   ├── dali/
│   │   │   │   ├── santa.glb
│   │   │   ├── kunming/
│   │   │   │   ├── qimin.glb
│   │   │   ├── lijiang/
│   │   │   │   ├── beihua.glb
│   │   │   ├── puer/
│   │   │       └── puer.glb
│   │   └── zhejiang/
│   │   │   ├── hangzhou/
│   │   │   │   ├── leifengta.glb
│   │   │   │   ├── longjing.glb
│   │   │   ├── ningbo/
│   │   │   │   ├── QINGCI.glb
│   │   │   └── shaoxing/
│               └── wupengchuan.glb
├── server.cjs
├── server.js
├── src/  # 源代码
│   ├── ar-overlay-final.js
│   ├── ar-overlay-v2.js
│   ├── ar-overlay.js
│   ├── AR.html
│   └── henanMuseum.html
└── vite.config.js  # Vite 配置
```

## 2. File Contents（所有代码文件完整内容）

### File: index.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0; url=/src/AR.html">
  <title>跳转中...</title>
  <script>location.replace('/src/AR.html');</script>
</head>
<body>
  <p>正在跳转到 AR 页面…</p>
  <a href="./src/AR.html">若未自动跳转，请点击此处</a>
</body>
</html>
```

### File: package-lock.json

```json
{
  "name": "ar",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "ar",
      "version": "0.0.0",
      "dependencies": {
        "three": "^0.182.0"
      },
      "devDependencies": {
        "vite": "^5.4.11"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.57.0.tgz",
      "integrity": "sha512-tPgXB6cDTndIe1ah7u6amCI1T0SsnlOuKgg10Xh3uizJk4e5M1JGaUMk7J4ciuAUcFpbOiNhm2XIjP9ON0dUqA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.57.0.tgz",
      "integrity": "sha512-sa4LyseLLXr1onr97StkU1Nb7fWcg6niokTwEVNOO7awaKaoRObQ54+V/hrF/BP1noMEaaAW6Fg2d/CfLiq3Mg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.57.0.tgz",
      "integrity": "sha512-/NNIj9A7yLjKdmkx5dC2XQ9DmjIECpGpwHoGmA5E1AhU0fuICSqSWScPhN1yLCkEdkCwJIDu2xIeLPs60MNIVg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.57.0.tgz",
      "integrity": "sha512-xoh8abqgPrPYPr7pTYipqnUi1V3em56JzE/HgDgitTqZBZ3yKCWI+7KUkceM6tNweyUKYru1UMi7FC060RyKwA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.57.0.tgz",
      "integrity": "sha512-PCkMh7fNahWSbA0OTUQ2OpYHpjZZr0hPr8lId8twD7a7SeWrvT3xJVyza+dQwXSSq4yEQTMoXgNOfMCsn8584g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.57.0.tgz",
      "integrity": "sha512-1j3stGx+qbhXql4OCDZhnK7b01s6rBKNybfsX+TNrEe9JNq4DLi1yGiR1xW+nL+FNVvI4D02PUnl6gJ/2y6WJA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.57.0.tgz",
      "integrity": "sha512-eyrr5W08Ms9uM0mLcKfM/Uzx7hjhz2bcjv8P2uynfj0yU8GGPdz8iYrBPhiLOZqahoAMB8ZiolRZPbbU2MAi6Q==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.57.0.tgz",
      "integrity": "sha512-Xds90ITXJCNyX9pDhqf85MKWUI4lqjiPAipJ8OLp8xqI2Ehk+TCVhF9rvOoN8xTbcafow3QOThkNnrM33uCFQA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.57.0.tgz",
      "integrity": "sha512-Xws2KA4CLvZmXjy46SQaXSejuKPhwVdaNinldoYfqruZBaJHqVo6hnRa8SDo9z7PBW5x84SH64+izmldCgbezw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.57.0.tgz",
      "integrity": "sha512-hrKXKbX5FdaRJj7lTMusmvKbhMJSGWJ+w++4KmjiDhpTgNlhYobMvKfDoIWecy4O60K6yA4SnztGuNTQF+Lplw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.57.0.tgz",
      "integrity": "sha512-6A+nccfSDGKsPm00d3xKcrsBcbqzCTAukjwWK6rbuAnB2bHaL3r9720HBVZ/no7+FhZLz/U3GwwZZEh6tOSI8Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-musl": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.57.0.tgz",
      "integrity": "sha512-4P1VyYUe6XAJtQH1Hh99THxr0GKMMwIXsRNOceLrJnaHTDgk1FTcTimDgneRJPvB3LqDQxUmroBclQ1S0cIJwQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.57.0.tgz",
      "integrity": "sha512-8Vv6pLuIZCMcgXre6c3nOPhE0gjz1+nZP6T+hwWjr7sVH8k0jRkH+XnfjjOTglyMBdSKBPPz54/y1gToSKwrSQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-musl": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.57.0.tgz",
      "integrity": "sha512-r1te1M0Sm2TBVD/RxBPC6RZVwNqUTwJTA7w+C/IW5v9Ssu6xmxWEi+iJQlpBhtUiT1raJ5b48pI8tBvEjEFnFA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.57.0.tgz",
      "integrity": "sha512-say0uMU/RaPm3CDQLxUUTF2oNWL8ysvHkAjcCzV2znxBr23kFfaxocS9qJm+NdkRhF8wtdEEAJuYcLPhSPbjuQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.57.0.tgz",
      "integrity": "sha512-/MU7/HizQGsnBREtRpcSbSV1zfkoxSTR7wLsRmBPQ8FwUj5sykrP1MyJTvsxP5KBq9SyE6kH8UQQQwa0ASeoQQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.57.0.tgz",
      "integrity": "sha512-Q9eh+gUGILIHEaJf66aF6a414jQbDnn29zeu0eX3dHMuysnhTvsUvZTCAyZ6tJhUjnvzBKE4FtuaYxutxRZpOg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.57.0.tgz",
      "integrity": "sha512-OR5p5yG5OKSxHReWmwvM0P+VTPMwoBS45PXTMYaskKQqybkS3Kmugq1W+YbNWArF8/s7jQScgzXUhArzEQ7x0A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.57.0.tgz",
      "integrity": "sha512-XeatKzo4lHDsVEbm1XDHZlhYZZSQYym6dg2X/Ko0kSFgio+KXLsxwJQprnR48GvdIKDOpqWqssC3iBCjoMcMpw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openbsd-x64": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.57.0.tgz",
      "integrity": "sha512-Lu71y78F5qOfYmubYLHPcJm74GZLU6UJ4THkf/a1K7Tz2ycwC2VUbsqbJAXaR6Bx70SRdlVrt2+n5l7F0agTUw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openbsd"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.57.0.tgz",
      "integrity": "sha512-v5xwKDWcu7qhAEcsUubiav7r+48Uk/ENWdr82MBZZRIm7zThSxCIVDfb3ZeRRq9yqk+oIzMdDo6fCcA5DHfMyA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.57.0.tgz",
      "integrity": "sha512-XnaaaSMGSI6Wk8F4KK3QP7GfuuhjGchElsVerCplUuxRIzdvZ7hRBpLR0omCmw+kI2RFJB80nenhOoGXlJ5TfQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.57.0.tgz",
      "integrity": "sha512-3K1lP+3BXY4t4VihLw5MEg6IZD3ojSYzqzBG571W3kNQe4G4CcFpSUQVgurYgib5d+YaCjeFow8QivWp8vuSvA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.57.0.tgz",
      "integrity": "sha512-MDk610P/vJGc5L5ImE4k5s+GZT3en0KoK1MKPXCRgzmksAMk79j4h3k1IerxTNqwDLxsGxStEZVBqG0gIqZqoA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.57.0.tgz",
      "integrity": "sha512-Zv7v6q6aV+VslnpwzqKAmrk5JdVkLUzok2208ZXGipjb+msxBr/fJPZyeEXiFgH7k62Ak0SLIfxQRZQvTuf7rQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmmirror.com/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmmirror.com/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "optional": true,
      "peer": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmmirror.com/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss/-/lightningcss-1.31.1.tgz",
      "integrity": "sha512-l51N2r93WmGUye3WuFoN5k10zyvrVs0qfKBhyC5ogUQ6Ew6JUSswh78mbSO+IU3nTWsyOArqPCcShdQSadghBQ==",
      "dev": true,
      "optional": true,
      "peer": true,
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.31.1",
        "lightningcss-darwin-arm64": "1.31.1",
        "lightningcss-darwin-x64": "1.31.1",
        "lightningcss-freebsd-x64": "1.31.1",
        "lightningcss-linux-arm-gnueabihf": "1.31.1",
        "lightningcss-linux-arm64-gnu": "1.31.1",
        "lightningcss-linux-arm64-musl": "1.31.1",
        "lightningcss-linux-x64-gnu": "1.31.1",
        "lightningcss-linux-x64-musl": "1.31.1",
        "lightningcss-win32-arm64-msvc": "1.31.1",
        "lightningcss-win32-x64-msvc": "1.31.1"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-android-arm64/-/lightningcss-android-arm64-1.31.1.tgz",
      "integrity": "sha512-HXJF3x8w9nQ4jbXRiNppBCqeZPIAfUo8zE/kOEGbW5NZvGc/K7nMxbhIr+YlFlHW5mpbg/YFPdbnCh1wAXCKFg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "android"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.31.1.tgz",
      "integrity": "sha512-02uTEqf3vIfNMq3h/z2cJfcOXnQ0GRwQrkmPafhueLb2h7mqEidiCzkE4gBMEH65abHRiQvhdcQ+aP0D0g67sg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.31.1.tgz",
      "integrity": "sha512-1ObhyoCY+tGxtsz1lSx5NXCj3nirk0Y0kB/g8B8DT+sSx4G9djitg9ejFnjb3gJNWo7qXH4DIy2SUHvpoFwfTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.31.1.tgz",
      "integrity": "sha512-1RINmQKAItO6ISxYgPwszQE1BrsVU5aB45ho6O42mu96UiZBxEXsuQ7cJW4zs4CEodPUioj/QrXW1r9pLUM74A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "freebsd"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.31.1.tgz",
      "integrity": "sha512-OOCm2//MZJ87CdDK62rZIu+aw9gBv4azMJuA8/KB74wmfS3lnC4yoPHm0uXZ/dvNNHmnZnB8XLAZzObeG0nS1g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.31.1.tgz",
      "integrity": "sha512-WKyLWztD71rTnou4xAD5kQT+982wvca7E6QoLpoawZ1gP9JM0GJj4Tp5jMUh9B3AitHbRZ2/H3W5xQmdEOUlLg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.31.1.tgz",
      "integrity": "sha512-mVZ7Pg2zIbe3XlNbZJdjs86YViQFoJSpc41CbVmKBPiGmC4YrfeOyz65ms2qpAobVd7WQsbW4PdsSJEMymyIMg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.31.1.tgz",
      "integrity": "sha512-xGlFWRMl+0KvUhgySdIaReQdB4FNudfUTARn7q0hh/V67PVGCs3ADFjw+6++kG1RNd0zdGRlEKa+T13/tQjPMA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.31.1.tgz",
      "integrity": "sha512-eowF8PrKHw9LpoZii5tdZwnBcYDxRw2rRCyvAXLi34iyeYfqCQNA9rmUM0ce62NlPhCvof1+9ivRaTY6pSKDaA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "linux"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.31.1.tgz",
      "integrity": "sha512-aJReEbSEQzx1uBlQizAOBSjcmr9dCdL3XuC/6HLXAxmtErsj2ICo5yYggg1qOODQMtnjNQv2UHb9NpOuFtYe4w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.31.1",
      "resolved": "https://registry.npmmirror.com/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.31.1.tgz",
      "integrity": "sha512-I9aiFrbd7oYHwlnQDqr1Roz+fTz61oDDJX7n9tYF9FJymH1cIN1DtKw3iYt6b8WZgEjoNwVSncwF4wx/ZedMhw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "optional": true,
      "os": [
        "win32"
      ],
      "peer": true,
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmmirror.com/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmmirror.com/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/rollup": {
      "version": "4.57.0",
      "resolved": "https://registry.npmmirror.com/rollup/-/rollup-4.57.0.tgz",
      "integrity": "sha512-e5lPJi/aui4TO1LpAXIRLySmwXSE8k3b9zoGfd42p67wzxog4WHjiZF3M2uheQih4DGyc25QEV4yRBbpueNiUA==",
      "dev": true,
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.57.0",
        "@rollup/rollup-android-arm64": "4.57.0",
        "@rollup/rollup-darwin-arm64": "4.57.0",
        "@rollup/rollup-darwin-x64": "4.57.0",
        "@rollup/rollup-freebsd-arm64": "4.57.0",
        "@rollup/rollup-freebsd-x64": "4.57.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.57.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.57.0",
        "@rollup/rollup-linux-arm64-gnu": "4.57.0",
        "@rollup/rollup-linux-arm64-musl": "4.57.0",
        "@rollup/rollup-linux-loong64-gnu": "4.57.0",
        "@rollup/rollup-linux-loong64-musl": "4.57.0",
        "@rollup/rollup-linux-ppc64-gnu": "4.57.0",
        "@rollup/rollup-linux-ppc64-musl": "4.57.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.57.0",
        "@rollup/rollup-linux-riscv64-musl": "4.57.0",
        "@rollup/rollup-linux-s390x-gnu": "4.57.0",
        "@rollup/rollup-linux-x64-gnu": "4.57.0",
        "@rollup/rollup-linux-x64-musl": "4.57.0",
        "@rollup/rollup-openbsd-x64": "4.57.0",
        "@rollup/rollup-openharmony-arm64": "4.57.0",
        "@rollup/rollup-win32-arm64-msvc": "4.57.0",
        "@rollup/rollup-win32-ia32-msvc": "4.57.0",
        "@rollup/rollup-win32-x64-gnu": "4.57.0",
        "@rollup/rollup-win32-x64-msvc": "4.57.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/three": {
      "version": "0.182.0",
      "resolved": "https://registry.npmmirror.com/three/-/three-0.182.0.tgz",
      "integrity": "sha512-GbHabT+Irv+ihI1/f5kIIsZ+Ef9Sl5A1Y7imvS5RQjWgtTPfPnZ43JmlYI7NtCRDK9zir20lQpfg8/9Yd02OvQ=="
    },
    "node_modules/vite": {
      "version": "5.4.21",
      "resolved": "https://registry.npmmirror.com/vite/-/vite-5.4.21.tgz",
      "integrity": "sha512-o5a9xKjbtuhY6Bi5S3+HvbRERmouabWbyUcpXXUA1u+GNUKoROi9byOJ8M0nHbHYHkYICiMlqxkg1KkYmm25Sw==",
      "dev": true,
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    }
  }
}

```

### File: package.json

```json
{
  "name": "ar",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "three": "^0.182.0"
  },
  "devDependencies": {
    "vite": "^5.4.11"
  }
}

```

### File: server.cjs

```javascript
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    let filePath = req.url === '/' ? '/src/AR.html' : req.url;
    
    // 处理路径
    if (filePath === '/') {
      filePath = '/src/AR.html';
    }
    
    // 确保路径安全
    if (filePath.includes('..')) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    // 读取文件
    const fullPath = path.join(__dirname, filePath);
    const fileContent = await fs.readFile(fullPath);

    // 设置正确的 MIME 类型
    let contentType = 'text/html';
    if (filePath.endsWith('.css')) {
      contentType = 'text/css';
    } else if (filePath.endsWith('.js')) {
      contentType = 'application/javascript';
    } else if (filePath.endsWith('.json')) {
      contentType = 'application/json';
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fileContent);
  } catch (error) {
    console.error('Error:', error);
    if (error.code === 'ENOENT') {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(500);
      res.end('Internal Server Error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('访问 http://localhost:3000/ 将直接打开中国地图页面');
});

// 添加 Ctrl+C 退出处理
process.on('SIGINT', () => {
  console.log('\nServer shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
```

### File: server.js

```javascript
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    // 处理根路径重定向
    if (req.url === '/') {
      res.writeHead(302, { 'Location': '/src/AR.html' });
      res.end();
      return;
    }

    // 处理 AR.html 请求
    if (req.url === '/src/AR.html') {
      const filePath = path.join(__dirname, 'src', 'AR.html');
      const content = await fs.readFile(filePath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
      return;
    }

    // 处理 /model/* 请求（STL 等模型文件，对应 public/model）
    if (req.url.startsWith('/model/')) {
      const raw = req.url.slice('/model/'.length).split('?')[0];
      const name = path.basename(decodeURIComponent(raw));
      if (name.includes('..')) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      const filePath = path.join(__dirname, 'public', 'model', name);
      const content = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
      res.end(content);
      return;
    }

    // 处理其他静态文件
    let filePath = path.join(__dirname, req.url);
    
    // 如果是目录，尝试添加 index.html
    try {
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
    } catch (e) {
      // 文件不存在，继续处理
    }

    const content = await fs.readFile(filePath);
    const contentType = getContentType(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html';
    case '.css': return 'text/css';
    case '.js': return 'application/javascript';
    case '.json': return 'application/json';
    default: return 'application/octet-stream';
  }
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('访问 http://localhost:3000/ 将自动跳转到中国地图页面');
});

// 添加 Ctrl+C 退出处理
process.on('SIGINT', () => {
  console.log('\nServer shutting down...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
```

### File: src/ar-overlay-final.js

```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 模型地址：优先使用本地 public/model 下的模型
const MODEL_BASE = '/model/';

// 模型配置列表
const MODELS_CONFIG = [
    {
        name: '京剧人物',
        province: '四川省',
        coord: [104.06, 30.67], // 默认值
        url: MODEL_BASE + 'jingjurenwu.glb',
        scale: 50
    },
    {
        name: '玉皇大帝',
        province: '河南省',
        coord: [113.65, 34.76], // 默认值
        url: MODEL_BASE + 'yuhaungdadi.glb',
        scale: 55
    },
    {
        name: '兵马俑',
        province: '陕西省',
        coord: [109.10, 35.00], // 修正为陕西省中部偏北的视觉中心
        url: MODEL_BASE + 'bingmayong.glb',
        scale: 80
    },
    {
        name: '蒙古包',
        province: '内蒙古自治区',
        coord: [111.76, 41.50], // 内蒙古中部偏南
        url: MODEL_BASE + 'menggubao.glb',
        scale: 50
    },
    {
        name: '琵琶',
        province: '甘肃省',
        coord: [102.82, 37.06], // 稍微向西北移动，避开宁夏文字
        url: MODEL_BASE + 'pipa.glb',
        scale: 50
    },
    {
        name: '青铜牛',
        province: '云南省',
        coord: [101.50, 24.50], // 云南省中部
        url: MODEL_BASE + 'qingtongniu.glb',
        scale: 50
    }
];

let scene, camera, renderer, overlayEl;
let width, height;
let modelInstances = new Map(); // 使用 Map 存储，防止重复
let modelLoadQueue = [];
let loadingModels = false;

function scheduleModelLoad() {
    if (loadingModels) return;
    loadingModels = true;
    modelLoadQueue = MODELS_CONFIG.slice();

    const loadNext = () => {
        if (!modelLoadQueue.length) {
            loadingModels = false;
            return;
        }
        const config = modelLoadQueue.shift();
        loadModel(config).finally(() => {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(loadNext, { timeout: 1200 });
            } else {
                setTimeout(loadNext, 80);
            }
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadNext, { timeout: 1200 });
    } else {
        setTimeout(loadNext, 0);
    }
}

function getContainerSize() {
    const el = document.getElementById('map-container');
    return { w: el.clientWidth, h: el.clientHeight };
}

function pixelToWorld(x, y) {
    // ECharts Y轴向下，Three.js Y轴向上
    return new THREE.Vector3(x, height - y, 0);
}

function updateModelsPosition() {
    const myChart = window.__mapChart;
    if (!myChart || modelInstances.size === 0) return;

    const w = myChart.getWidth();
    const h = myChart.getHeight();
    width = w; 
    height = h;

    const option = myChart.getOption();
    const currentZoom = (option.geo && option.geo[0] && option.geo[0].zoom) || 1.1;
    const zoomFactor = currentZoom / 1.1;

    modelInstances.forEach((instance) => {
        const { config, anchor } = instance;
        
        // 使用 GeoJSON 动态坐标覆盖默认坐标
        if (window.__provCoords && config.province && window.__provCoords[config.province]) {
            const dynamicCoord = window.__provCoords[config.province];
            // 兵马俑强制使用硬编码坐标，防止动态提取错误导致"飞到湖南"
            if (config.name !== '兵马俑' && Array.isArray(dynamicCoord) && !isNaN(dynamicCoord[0])) {
                config.coord = dynamicCoord;
            }
        }
        
        // 1. 优先尝试 geoIndex: 0 (对应 geo 组件)
        let p = myChart.convertToPixel({ geoIndex: 0 }, config.coord);
        
        // 2. 如果失败，尝试 'geo' 字符串方式
        if (!p || isNaN(p[0])) {
            p = myChart.convertToPixel('geo', config.coord);
        }

        // 3. 再次尝试 seriesIndex: 0 (对应 map series)
        if (!p || isNaN(p[0])) {
             p = myChart.convertToPixel({ seriesIndex: 0 }, config.coord);
        }
        
        if (p && Array.isArray(p) && !isNaN(p[0]) && !isNaN(p[1])) {
            // 只有成功获取到地图坐标时，才显示模型
            anchor.visible = true;
            const worldPos = pixelToWorld(p[0], p[1]);
            
            // 兵马俑层级更高
            const z = config.name === '兵马俑' ? 100 : 50;
            
            // 彻底移除所有偏移逻辑，相信 loadModel 中的几何中心归位
            // 安全检查：防止 NaN
            if (!isNaN(worldPos.x) && !isNaN(worldPos.y)) {
                anchor.position.set(worldPos.x, worldPos.y, z);
                anchor.scale.setScalar(zoomFactor);
            }

        } else {
            // 转换失败（如地图未加载完），隐藏模型而不是显示在错误位置
            anchor.visible = false;
        }

    });
}

function setupCamera() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    camera = new THREE.OrthographicCamera(0, w, h, 0, 0.1, 2000);
    camera.position.set(0, 0, 1000);
    camera.lookAt(0, 0, 0);
}

function setupRenderer() {
    const { w, h } = getContainerSize();
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.0;

    overlayEl = document.getElementById('model-overlay');
    overlayEl.appendChild(renderer.domElement);
}

function setupScene() {
    const { w, h } = getContainerSize();
    scene = new THREE.Scene();
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2.5);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(w / 2, h / 2, 1000);
    scene.add(dirLight);
}

async function loadModel(config) {
    console.log(`[AR] 正在加载模型: ${config.name} (${config.url})`);
    
    if (modelInstances.has(config.name)) {
        const old = modelInstances.get(config.name);
        scene.remove(old.anchor);
        modelInstances.delete(config.name);
    }

    const anchor = new THREE.Group();
    scene.add(anchor);
    anchor.visible = false; // 初始隐藏

    // 暖色局部点光：营造展陈聚光
    const warmLight = new THREE.PointLight(0xffd1a1, 1.4, 600, 2);
    warmLight.position.set(0, 0, 180);
    anchor.add(warmLight);
    
    // 地标光束：金色辉光底座（文脉升腾）
    const glowGeo = new THREE.RingGeometry(14, 32, 24);
    const glowMat = new THREE.MeshBasicMaterial({
        color: 0xE8C547,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
        depthTest: false
    });
    const glowBase = new THREE.Mesh(glowGeo, glowMat);
    glowBase.rotation.x = -Math.PI / 2;
    glowBase.position.set(0, 0, -5);
    glowBase.renderOrder = -1;
    glowBase.visible = false; // 模型加载后设为可见
    anchor.add(glowBase);

    modelInstances.set(config.name, { config, anchor });

    const loader = new GLTFLoader();
    try {
        const gltf = await loader.loadAsync(config.url);
        console.log(`[AR] 模型加载成功: ${config.name}`);
        
        // 差异化处理：
        // 京剧人物、玉皇大帝：使用原始 gltf.scene（之前是正常的）
        // 兵马俑：使用 Mesh 提取和强制归零（因为它有问题）
        if (config.name !== '兵马俑') {
            const object3d = gltf.scene;
            const box = new THREE.Box3().setFromObject(object3d);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            
            // 简单的中心对齐
            object3d.position.sub(center);
            object3d.position.y += size.y / 2;
            object3d.scale.setScalar((config.scale || 50) / maxDim);
            
            // 琵琶特殊旋转修正：从侧面转到正面
            if (config.name === '琵琶') {
                object3d.rotation.y = -Math.PI / 2;
            }
            
            // 青铜牛特殊旋转修正：展示侧面
            if (config.name === '青铜牛') {
                object3d.rotation.y = Math.PI / 2;
            }

            // 统一材质
            object3d.traverse((child) => {
                if (child.isMesh) {
                    child.frustumCulled = false;
                    if (child.material) {
                        child.material.metalness = 0.0;
                        child.material.roughness = 0.6;
                        child.material.emissive = new THREE.Color(0x333333);
                        child.material.emissiveIntensity = 0.2;
                    }
                }
            });
            
            anchor.add(object3d);
            const bbox = new THREE.Box3().setFromObject(object3d);
            glowBase.position.y = bbox.min.y - 4;
            glowBase.visible = true;
            
        } else {
            // 兵马俑的特殊处理逻辑：提取所有 Mesh 组成一个新 Group
            // 解决"只提取第一个 Mesh 导致显示了奇怪的纸张背景"的问题
            const meshes = [];
            gltf.scene.traverse(child => {
                if (child.isMesh) {
                    meshes.push(child);
                }
            });

            if (meshes.length > 0) {
                console.log(`[AR] 兵马俑提取到 ${meshes.length} 个 Mesh，进行组合重置`);
                // ... 省略中间计算逻辑 ...
                
                // 重新构建这部分的完整逻辑以确保 context 正确
                const object3d = gltf.scene;
                object3d.position.set(0, 0, 0);
                object3d.rotation.set(0, 0, 0);
                object3d.scale.set(1, 1, 1);
                object3d.updateMatrixWorld(true);

                const box = new THREE.Box3();
                object3d.traverse(child => {
                    if (child.isMesh) {
                        child.updateMatrixWorld(true);
                        if (child.geometry) {
                            child.geometry.computeBoundingBox();
                            const meshBox = child.geometry.boundingBox.clone();
                            meshBox.applyMatrix4(child.matrixWorld);
                            box.union(meshBox);
                        }
                    }
                });

                if (!box.isEmpty()) {
                    const center = new THREE.Vector3();
                    box.getCenter(center);
                    const size = new THREE.Vector3();
                    box.getSize(size);
                    
                    const offset = center.clone().negate();
                    offset.y += size.y / 2;
                    object3d.position.copy(offset);
                    
                    const finalWrapper = new THREE.Group();
                    finalWrapper.add(object3d);
                    
                    const maxDim = Math.max(size.x, size.y, size.z) || 1;
                    const scale = (config.scale || 50) / maxDim;
                    finalWrapper.scale.setScalar(scale);
                    
                    anchor.add(finalWrapper);
                    const bbox = new THREE.Box3().setFromObject(finalWrapper);
                    glowBase.position.y = bbox.min.y - 4;
                    glowBase.visible = true;
                } else {
                    anchor.add(object3d);
                    const bbox = new THREE.Box3().setFromObject(object3d);
                    glowBase.position.y = bbox.min.y - 4;
                    glowBase.visible = true;
                }

                object3d.traverse((child) => {
                    if (child.isMesh) {
                        child.frustumCulled = false;
                        if (child.material) {
                            child.material.metalness = 0.0;
                            child.material.roughness = 0.6;
                            child.material.emissive = new THREE.Color(0x333333);
                            child.material.emissiveIntensity = 0.2;
                        }
                    }
                });
            } else {
                 const object3d = gltf.scene;
                 anchor.add(object3d);
                 const bbox = new THREE.Box3().setFromObject(object3d);
                 glowBase.position.y = bbox.min.y - 4;
                 glowBase.visible = true;
            }
        }

        requestRender();

    } catch (e) {
        console.error(`[AR] ${config.name} 模型加载失败:`, e);
    }
}

let rafId = 0;
let lastFrameTime = 0;
let needsRender = false;
const IDLE_FRAME_INTERVAL = 200;
const BUSY_FRAME_INTERVAL = 33;

function requestRender() {
    needsRender = true;
    if (!rafId) rafId = requestAnimationFrame(tick);
}

function tick(now) {
    const interval = window.__mapInteracting ? BUSY_FRAME_INTERVAL : IDLE_FRAME_INTERVAL;
    if (now - lastFrameTime < interval) {
        rafId = requestAnimationFrame(tick);
        return;
    }
    lastFrameTime = now;
    if (needsRender) {
        updateModelsPosition();
        if (renderer && scene && camera) renderer.render(scene, camera);
        needsRender = window.__mapInteracting;
    }
    if (needsRender) rafId = requestAnimationFrame(tick);
    else rafId = 0;
}

function onResize() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    if (camera) {
        camera.left = 0; camera.right = w; camera.top = h; camera.bottom = 0;
        camera.updateProjectionMatrix();
    }
    if (renderer) renderer.setSize(w, h);
    requestRender();
}

let inited = false;
async function init() {
    if (window.__liteMapMode) return; // 轻量模式：跳过 3D 叠加，提升地图流畅度
    const myChart = window.__mapChart;
    if (!myChart || inited) return;
    inited = true;

    // 关键修复：应用 AR.html 中获取的动态坐标
    if (window.__provCoords) {
        console.log('[AR] 已检测到动态省份坐标:', window.__provCoords);
    }

    const container = document.getElementById('map-container');
    const existingOverlay = document.getElementById('model-overlay');
    if (existingOverlay) existingOverlay.remove();

    overlayEl = document.createElement('div');
    overlayEl.id = 'model-overlay';
    overlayEl.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none;';
    container.appendChild(overlayEl);

    setupCamera();
    setupRenderer();
    setupScene();

    modelInstances.clear();

    // 状态条：确认 JS 已加载
    // const status = document.createElement('div');
    // status.style.cssText = 'position:fixed;top:10px;right:10px;background:orange;color:white;padding:10px;z-index:99999;font-weight:bold;';
    // status.innerText = '调试 v6 - 纯净展示版';
    // document.body.appendChild(status);

    scheduleModelLoad();

    window.addEventListener('resize', onResize);
    myChart.on('georoam', requestRender);
    myChart.on('finished', requestRender);

    // 省份视图下隐藏 3D 模型（点击任意省份进入市级地图时）
    window.addEventListener('viewModeChanged', (e) => {
        const isProvinceView = e.detail === 'province';
        if (overlayEl) overlayEl.style.display = isProvinceView ? 'none' : '';
        requestRender();
    });
    if (window.__viewMode === 'province' && overlayEl) overlayEl.style.display = 'none';
    requestRender();
}

const start = () => { if (window.__mapChart && !inited) requestAnimationFrame(init); };
if (window.__mapChart) setTimeout(start, 0);
else window.addEventListener('mapReady', start);
setTimeout(start, 500);

```

### File: src/ar-overlay-v2.js

```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 模型路径：Vite 下 public 在根，用 /model/；file:// 下用相对路径
const MODEL_BASE = (typeof window !== 'undefined' && window.location.protocol !== 'file:')
    ? '/model/'
    : ((typeof window !== 'undefined' && window.location.pathname.indexOf('/src/') !== -1) ? '../model/' : 'model/');

// 模型配置列表
const MODELS_CONFIG = [
    {
        name: '京剧人物',
        province: '四川省',
        coord: [104.06, 30.67], // 默认值
        url: MODEL_BASE + 'jingjurenwu.glb',
        scale: 50
    },
    {
        name: '玉皇大帝',
        province: '河南省',
        coord: [113.65, 34.76], // 默认值
        url: MODEL_BASE + 'yuhaungdadi.glb',
        scale: 55
    },
    {
        name: '兵马俑',
        province: '陕西省',
        coord: [109.10, 35.00], // 修正为陕西省中部偏北的视觉中心
        url: MODEL_BASE + 'bingmayong.glb',
        scale: 80,
        // 手动校准偏移：根据截图，模型偏南（Y轴偏大/屏幕下方），需要向上移动（Y轴减小）
        // 假设偏移约 150px (从湖南到陕西的距离)
        // Three.js 坐标系 Y 轴向上，屏幕坐标 Y 轴向下。
        // 如果模型在屏幕下方（湖南），说明 worldPos.y 太小了（或者太大了，取决于映射）
        // 我们的 pixelToWorld: y = height - screenY
        // 湖南 screenY 大，陕西 screenY 小。
        // 现在的现象是：目标点在陕西（screenY 小），但模型在湖南（screenY 大）。
        // 这意味着模型被绘制到了更靠下的位置。
        // 既然我们用了 position.copy(offset) 归零，说明模型原点确实归零了。
        // 那唯一的可能是：这个 GLB 模型本身的内容，是偏离其原点正下方很远的地方。
        // 我们需要手动把模型“提”起来。
        manualOffset: new THREE.Vector3(0, 180, 0) 
    }
];

let scene, camera, renderer, overlayEl;
let width, height;
let modelInstances = new Map(); // 使用 Map 存储，防止重复

function getContainerSize() {
    const el = document.getElementById('map-container');
    return { w: el.clientWidth, h: el.clientHeight };
}

function pixelToWorld(x, y) {
    // ECharts Y轴向下，Three.js Y轴向上
    return new THREE.Vector3(x, height - y, 0);
}

function updateModelsPosition() {
    const myChart = window.__mapChart;
    if (!myChart || modelInstances.size === 0) return;

    const w = myChart.getWidth();
    const h = myChart.getHeight();
    width = w; 
    height = h;

    const option = myChart.getOption();
    const currentZoom = (option.geo && option.geo[0] && option.geo[0].zoom) || 1.1;
    const zoomFactor = currentZoom / 1.1;

    // 清除旧的调试框
    const oldDebug = document.getElementById('ar-debug-box');
    if (oldDebug) oldDebug.remove();

    // 移除红色调试逻辑，因为已确认坐标正确
    // 只保留基础容器防止报错
    // const debugContainer = document.createElement('div'); ... 
    
    modelInstances.forEach((instance) => {
        const { config, anchor } = instance;
        
        // 使用 GeoJSON 动态坐标覆盖默认坐标
        if (window.__provCoords && config.province && window.__provCoords[config.province]) {
            const dynamicCoord = window.__provCoords[config.province];
            // 兵马俑强制使用硬编码坐标，防止动态提取错误导致“飞到湖南”
            if (config.name !== '兵马俑' && Array.isArray(dynamicCoord) && !isNaN(dynamicCoord[0])) {
                config.coord = dynamicCoord;
            }
        }
        
        // 1. 优先尝试 geoIndex: 0 (对应 geo 组件)
        let p = myChart.convertToPixel({ geoIndex: 0 }, config.coord);
        
        // 2. 如果失败，尝试 'geo' 字符串方式
        if (!p || isNaN(p[0])) {
            p = myChart.convertToPixel('geo', config.coord);
        }

        // 3. 再次尝试 seriesIndex: 0 (对应 map series)
        if (!p || isNaN(p[0])) {
             p = myChart.convertToPixel({ seriesIndex: 0 }, config.coord);
        }
        
        if (p && Array.isArray(p) && !isNaN(p[0]) && !isNaN(p[1])) {
            // 只有成功获取到地图坐标时，才显示模型
            anchor.visible = true;
            const worldPos = pixelToWorld(p[0], p[1]);
            
            // 兵马俑层级更高
            const z = config.name === '兵马俑' ? 100 : 50;
            anchor.position.set(worldPos.x, worldPos.y, z);
            anchor.scale.setScalar(zoomFactor);

            // 移除红色调试框逻辑
            // if (config.name === '兵马俑') { ... }

        } else {
            // 转换失败（如地图未加载完），隐藏模型而不是显示在错误位置
            anchor.visible = false;
        }

        anchor.traverse(node => {
            if (node.isMesh) node.frustumCulled = false;
        });
    });
}

function setupCamera() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    camera = new THREE.OrthographicCamera(0, w, h, 0, 0.1, 2000);
    camera.position.set(0, 0, 1000);
    camera.lookAt(0, 0, 0);
}

function setupRenderer() {
    const { w, h } = getContainerSize();
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.0;

    overlayEl = document.getElementById('model-overlay');
    overlayEl.appendChild(renderer.domElement);
}

function setupScene() {
    const { w, h } = getContainerSize();
    scene = new THREE.Scene();
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2.5);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(w / 2, h / 2, 1000);
    scene.add(dirLight);
}

async function loadModel(config) {
    console.log(`[AR] 正在加载模型: ${config.name} (${config.url})`);
    
    if (modelInstances.has(config.name)) {
        const old = modelInstances.get(config.name);
        scene.remove(old.anchor);
        modelInstances.delete(config.name);
    }

    const anchor = new THREE.Group();
    scene.add(anchor);
    anchor.visible = false; // 初始隐藏
    
    // 调试标记：红色圆锥 (兵马俑) 或金色球体 (其他)
    const markGeo = config.name === '兵马俑' ? new THREE.ConeGeometry(10, 60, 4) : new THREE.SphereGeometry(8);
    const markMat = new THREE.MeshBasicMaterial({ 
        color: config.name === '兵马俑' ? 0xff0000 : 0xffd700,
        depthTest: false 
    });
    const marker = new THREE.Mesh(markGeo, markMat);
    marker.renderOrder = 999;
    anchor.add(marker);
    
    modelInstances.set(config.name, { config, anchor });

    const loader = new GLTFLoader();
    try {
        const gltf = await loader.loadAsync(config.url);
        console.log(`[AR] 模型加载成功: ${config.name}`);
        const object3d = gltf.scene;

        // 调试：打印模型包含的 Mesh 数量，帮助排查是否包含多个分散的对象
        let meshCount = 0;
        object3d.traverse(c => { if (c.isMesh) meshCount++; });
        console.log(`[AR] ${config.name} 包含 ${meshCount} 个 Mesh`);
        
        // 加载成功后，保留地标的同时添加模型，方便调试位置
        const box = new THREE.Box3().setFromObject(object3d);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        
        // 修正模型位置：底部中心对齐 (0,0,0)
        // 关键：强制重置模型的原始位移
        object3d.position.set(0, 0, 0);
        object3d.rotation.set(0, 0, 0);
        object3d.scale.set(1, 1, 1);
        object3d.updateMatrixWorld(true);

        // 计算所有可见 Mesh 的精确包围盒（忽略空节点）
        const newBox = new THREE.Box3();
        let hasMesh = false;
        object3d.traverse(child => {
            if (child.isMesh) {
                // 确保 Mesh 的变换矩阵已更新
                child.updateMatrixWorld(true);
                // 计算该 Mesh 的世界坐标包围盒（相对于 object3d）
                if (child.geometry) {
                    child.geometry.computeBoundingBox();
                    const meshBox = child.geometry.boundingBox.clone();
                    meshBox.applyMatrix4(child.matrixWorld);
                    newBox.union(meshBox);
                    hasMesh = true;
                }
            }
        });

        if (hasMesh) {
            const center = new THREE.Vector3();
            box.getCenter(center);
            const size = new THREE.Vector3();
            box.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z) || 1;

            console.log(`[AR] ${config.name} 精确包围盒: Center[${center.x}, ${center.y}, ${center.z}], Size[${size.x}, ${size.y}, ${size.z}]`);

            // 移动模型：
            // 1. 将 object3d 内部的所有内容反向移动，使其几何中心回到 (0,0,0)
            // 2. 向上移动一半高度，使其底部对齐 (0,0,0)
            const offset = new THREE.Vector3().copy(center).negate();
            offset.y += size.y / 2;

            // 应用手动偏移校准
            if (config.manualOffset) {
                console.log(`[AR] ${config.name} 应用手动偏移:`, config.manualOffset);
                offset.add(config.manualOffset);
            }

            // 为了不修改原始 gltf 结构，我们在 object3d 外面再套一层 Wrapper 来应用这个修正
            // 或者直接修改 object3d 内部所有子元素的坐标（更彻底）
            const wrapper = new THREE.Group();
            wrapper.add(object3d);
            
            // 修正 Wrapper 位置
            object3d.position.copy(offset);
            
            // 归一化缩放应用在 Wrapper 上
            wrapper.scale.setScalar((config.scale || 50) / maxDim);
            
            // 移除绿色包围盒辅助线，界面还原整洁
            // const boxHelper = new THREE.BoxHelper(wrapper, 0x00ff00);
            // wrapper.add(boxHelper);
            // console.log(`[AR] ${config.name} 已添加绿色包围盒辅助线`);

            // 移除标记，添加 Wrapper
            anchor.remove(marker);
            anchor.add(wrapper);
        } else {
            console.warn(`[AR] ${config.name} 未发现可见 Mesh，使用原始 Scene`);
            anchor.remove(marker);
            anchor.add(object3d);
        }

        object3d.traverse((child) => {
            if (child.isMesh) {
                child.frustumCulled = false;
                if (child.material) {
                    child.material.metalness = 0.0;
                    child.material.roughness = 0.8;
                    child.material.emissive = new THREE.Color(0x222222);
                    child.material.emissiveIntensity = 0.5;
                }
            }
        });

        // 移除标记，添加模型
        anchor.remove(marker);
        anchor.add(object3d);
        
        updateModelsPosition();

    } catch (e) {
        console.error(`[AR] ${config.name} 模型加载失败:`, e);
    }
}

function animate() {
    updateModelsPosition();
    if (renderer && scene && camera) renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function onResize() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    if (camera) {
        camera.left = 0; camera.right = w; camera.top = h; camera.bottom = 0;
        camera.updateProjectionMatrix();
    }
    if (renderer) renderer.setSize(w, h);
    updateModelsPosition();
}

let inited = false;
async function init() {
    const myChart = window.__mapChart;
    if (!myChart || inited) return;
    inited = true;

    // 关键修复：应用 AR.html 中获取的动态坐标
    // 逻辑已移至 updateModelsPosition 中实时更新，此处仅打印日志
    if (window.__provCoords) {
        console.log('[AR] 已检测到动态省份坐标:', window.__provCoords);
    }

    const container = document.getElementById('map-container');
    const existingOverlay = document.getElementById('model-overlay');
    if (existingOverlay) existingOverlay.remove();

    overlayEl = document.createElement('div');
    overlayEl.id = 'model-overlay';
    overlayEl.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none;';
    container.appendChild(overlayEl);

    setupCamera();
    setupRenderer();
    setupScene();

    modelInstances.clear();
    // 调试：添加点击事件，打印坐标
    window.addEventListener('click', (e) => {
        const myChart = window.__mapChart;
        if (myChart) {
            const point = [e.clientX, e.clientY];
            const geo = myChart.convertFromPixel({ geoIndex: 0 }, point);
            console.log(`[AR-DEBUG] 点击位置: 屏幕[${point}], 经纬度[${geo}]`);
            
            // 实时移动红框到点击位置测试
            const box = document.getElementById('ar-debug-box');
            if (box) {
                const marker = document.createElement('div');
                marker.style.cssText = `position:absolute;left:${e.clientX}px;top:${e.clientY}px;width:10px;height:10px;background:blue;pointer-events:none;`;
                box.appendChild(marker);
            }
        }
    });

    // 状态条：确认 JS 已加载
    const status = document.createElement('div');
    status.style.cssText = 'position:fixed;top:10px;right:10px;background:green;color:white;padding:10px;z-index:99999;font-weight:bold;';
    status.innerText = 'AR模块已加载 - 调试模式 v2';
    document.body.appendChild(status);

    await Promise.all(MODELS_CONFIG.map(config => loadModel(config)));

    window.addEventListener('resize', onResize);
    myChart.on('georoam', updateModelsPosition);
    myChart.on('finished', updateModelsPosition);
    
    animate();
}

const start = () => { if (window.__mapChart && !inited) requestAnimationFrame(init); };
if (window.__mapChart) setTimeout(start, 0);
else window.addEventListener('mapReady', start);
setTimeout(start, 500);

```

### File: src/ar-overlay.js

```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 模型路径：Vite 下 public 在根，用 /model/；file:// 下用相对路径
const MODEL_BASE = (typeof window !== 'undefined' && window.location.protocol !== 'file:')
    ? '/model/'
    : ((typeof window !== 'undefined' && window.location.pathname.indexOf('/src/') !== -1) ? '../model/' : 'model/');

// 模型配置列表
const MODELS_CONFIG = [
    {
        name: '京剧人物',
        province: '四川省',
        coord: [104.06, 30.67], // 默认值
        url: MODEL_BASE + 'jingjurenwu.glb',
        scale: 50
    },
    {
        name: '玉皇大帝',
        province: '河南省',
        coord: [113.65, 34.76], // 默认值
        url: MODEL_BASE + 'yuhaungdadi.glb',
        scale: 55
    },
    {
        name: '兵马俑',
        province: '陕西省',
        coord: [109.10, 35.00], // 修正为陕西省中部偏北的视觉中心
        url: MODEL_BASE + 'bingmayong.glb',
        scale: 80
        // 移除 manualOffset，改为在 updateModelsPosition 中硬编码
    }
];

let scene, camera, renderer, overlayEl;
let width, height;
let modelInstances = new Map(); // 使用 Map 存储，防止重复

function getContainerSize() {
    const el = document.getElementById('map-container');
    return { w: el.clientWidth, h: el.clientHeight };
}

function pixelToWorld(x, y) {
    // ECharts Y轴向下，Three.js Y轴向上
    return new THREE.Vector3(x, height - y, 0);
}

function updateModelsPosition() {
    const myChart = window.__mapChart;
    if (!myChart || modelInstances.size === 0) return;

    const w = myChart.getWidth();
    const h = myChart.getHeight();
    width = w; 
    height = h;

    const option = myChart.getOption();
    const currentZoom = (option.geo && option.geo[0] && option.geo[0].zoom) || 1.1;
    const zoomFactor = currentZoom / 1.1;

    // 清除旧的调试框
    const oldDebug = document.getElementById('ar-debug-box');
    if (oldDebug) oldDebug.remove();
    
    modelInstances.forEach((instance) => {
        const { config, anchor } = instance;
        
        // 使用 GeoJSON 动态坐标覆盖默认坐标
        if (window.__provCoords && config.province && window.__provCoords[config.province]) {
            const dynamicCoord = window.__provCoords[config.province];
            // 兵马俑强制使用硬编码坐标，防止动态提取错误导致“飞到湖南”
            if (config.name !== '兵马俑' && Array.isArray(dynamicCoord) && !isNaN(dynamicCoord[0])) {
                config.coord = dynamicCoord;
            }
        }
        
        // 1. 优先尝试 geoIndex: 0 (对应 geo 组件)
        let p = myChart.convertToPixel({ geoIndex: 0 }, config.coord);
        
        // 2. 如果失败，尝试 'geo' 字符串方式
        if (!p || isNaN(p[0])) {
            p = myChart.convertToPixel('geo', config.coord);
        }

        // 3. 再次尝试 seriesIndex: 0 (对应 map series)
        if (!p || isNaN(p[0])) {
             p = myChart.convertToPixel({ seriesIndex: 0 }, config.coord);
        }
        
        if (p && Array.isArray(p) && !isNaN(p[0]) && !isNaN(p[1])) {
            // 只有成功获取到地图坐标时，才显示模型
            anchor.visible = true;
            const worldPos = pixelToWorld(p[0], p[1]);
            
            // 兵马俑层级更高
            const z = config.name === '兵马俑' ? 100 : 50;
            
            // 移除硬编码的屏幕偏移，解决“位置不随缩放变化”的问题
            anchor.position.set(worldPos.x, worldPos.y, z);
            anchor.scale.setScalar(zoomFactor);

        } else {
            // 转换失败（如地图未加载完），隐藏模型而不是显示在错误位置
            anchor.visible = false;
        }

        anchor.traverse(node => {
            if (node.isMesh) node.frustumCulled = false;
        });
    });
}

function setupCamera() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    camera = new THREE.OrthographicCamera(0, w, h, 0, 0.1, 2000);
    camera.position.set(0, 0, 1000);
    camera.lookAt(0, 0, 0);
}

function setupRenderer() {
    const { w, h } = getContainerSize();
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.0;

    overlayEl = document.getElementById('model-overlay');
    overlayEl.appendChild(renderer.domElement);
}

function setupScene() {
    const { w, h } = getContainerSize();
    scene = new THREE.Scene();
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2.5);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(w / 2, h / 2, 1000);
    scene.add(dirLight);
}

async function loadModel(config) {
    console.log(`[AR] 正在加载模型: ${config.name} (${config.url})`);
    
    if (modelInstances.has(config.name)) {
        const old = modelInstances.get(config.name);
        scene.remove(old.anchor);
        modelInstances.delete(config.name);
    }

    const anchor = new THREE.Group();
    scene.add(anchor);
    anchor.visible = false; // 初始隐藏
    
    // 调试标记：红色圆锥 (兵马俑) 或金色球体 (其他)
    const markGeo = config.name === '兵马俑' ? new THREE.ConeGeometry(10, 60, 4) : new THREE.SphereGeometry(8);
    const markMat = new THREE.MeshBasicMaterial({ 
        color: config.name === '兵马俑' ? 0xff0000 : 0xffd700,
        depthTest: false 
    });
    const marker = new THREE.Mesh(markGeo, markMat);
    marker.renderOrder = 999;
    anchor.add(marker);
    
    modelInstances.set(config.name, { config, anchor });

    const loader = new GLTFLoader();
    try {
        const gltf = await loader.loadAsync(config.url);
        console.log(`[AR] 模型加载成功: ${config.name}`);
        
        // 激进策略：不使用 gltf.scene，而是提取第一个 Mesh 并彻底重置
        // 这能消除 GLB 文件中可能存在的 Scene/Group 层级的复杂变换
        let targetMesh = null;
        gltf.scene.traverse(child => {
            if (child.isMesh && !targetMesh) {
                targetMesh = child;
            }
        });

        if (targetMesh) {
            console.log(`[AR] ${config.name} 提取到 Mesh，进行独立重置`);
            
            // 克隆 Mesh，脱离原有的 Scene 结构
            const mesh = targetMesh.clone();
            
            // 强行重置变换
            mesh.position.set(0, 0, 0);
            mesh.rotation.set(0, 0, 0);
            mesh.scale.set(1, 1, 1);
            mesh.updateMatrix();

            // 计算几何中心
            mesh.geometry.computeBoundingBox();
            const box = mesh.geometry.boundingBox;
            const center = new THREE.Vector3();
            box.getCenter(center);
            const size = new THREE.Vector3();
            box.getSize(size);
            
            // 归一化位置：几何中心对齐 (0,0,0)，底部对齐
            const offset = center.clone().negate();
            offset.y += size.y / 2;
            
            // 应用位置修正（移动几何体本身，或者移动 Mesh）
            // 这里移动 Mesh
            mesh.position.copy(offset);
            
            // 归一化大小
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            const scale = (config.scale || 50) / maxDim;
            
            // 创建一个 Wrapper 来应用缩放，避免和 position 混淆
            const wrapper = new THREE.Group();
            wrapper.add(mesh);
            wrapper.scale.setScalar(scale);

            // 如果是兵马俑，手动修正旋转（很多模型默认是趴着的）
            // if (config.name === '兵马俑') {
            //     wrapper.rotation.x = Math.PI / 2; 
            // }

            anchor.add(wrapper);
            
            // 保留红色标记球，用于证明坐标是对的
            // 如果红球在陕西，模型不在，说明模型 offset 还是有问题
            // anchor.remove(marker); 

        } else {
            console.warn(`[AR] ${config.name} 未找到 Mesh，回退到原始 Scene`);
            const object3d = gltf.scene;
            // ... 原始逻辑兜底 ...
            const box = new THREE.Box3().setFromObject(object3d);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            
            object3d.position.sub(center);
            object3d.position.y += size.y / 2;
            object3d.scale.setScalar((config.scale || 50) / maxDim);
            anchor.add(object3d);
        }

        // 统一材质处理
        anchor.traverse((child) => {
            if (child.isMesh) {
                child.frustumCulled = false;
                if (child.material) {
                    child.material.metalness = 0.0;
                    child.material.roughness = 0.6;
                    child.material.emissive = new THREE.Color(0x333333);
                    child.material.emissiveIntensity = 0.2;
                }
            }
        });

        updateModelsPosition();

    } catch (e) {
        console.error(`[AR] ${config.name} 模型加载失败:`, e);
    }
}

function animate() {
    updateModelsPosition();
    if (renderer && scene && camera) renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function onResize() {
    const { w, h } = getContainerSize();
    width = w; height = h;
    if (camera) {
        camera.left = 0; camera.right = w; camera.top = h; camera.bottom = 0;
        camera.updateProjectionMatrix();
    }
    if (renderer) renderer.setSize(w, h);
    updateModelsPosition();
}

let inited = false;
async function init() {
    const myChart = window.__mapChart;
    if (!myChart || inited) return;
    inited = true;

    // 关键修复：应用 AR.html 中获取的动态坐标
    if (window.__provCoords) {
        console.log('[AR] 已检测到动态省份坐标:', window.__provCoords);
    }

    const container = document.getElementById('map-container');
    const existingOverlay = document.getElementById('model-overlay');
    if (existingOverlay) existingOverlay.remove();

    overlayEl = document.createElement('div');
    overlayEl.id = 'model-overlay';
    overlayEl.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none;';
    container.appendChild(overlayEl);

    setupCamera();
    setupRenderer();
    setupScene();

    modelInstances.clear();

    // 状态条：确认 JS 已加载
    const status = document.createElement('div');
    status.style.cssText = 'position:fixed;top:10px;right:10px;background:green;color:white;padding:10px;z-index:99999;font-weight:bold;';
    status.innerText = 'AR模块已加载 - 最终修复版';
    document.body.appendChild(status);

    await Promise.all(MODELS_CONFIG.map(config => loadModel(config)));

    window.addEventListener('resize', onResize);
    myChart.on('georoam', updateModelsPosition);
    myChart.on('finished', updateModelsPosition);
    
    animate();
}

const start = () => { if (window.__mapChart && !inited) requestAnimationFrame(init); };
if (window.__mapChart) setTimeout(start, 0);
else window.addEventListener('mapReady', start);
setTimeout(start, 500);
```

### File: src/AR.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>华夏瑰宝 - 沉浸式数字人文展</title>
    <!-- 引入 Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- 引入 ECharts -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <!-- Three.js 与 GLTFLoader 由下方模块脚本引入 -->
    <!-- 引入图标库 -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <!-- Markdown 解析库 (AI 回复用) -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <!-- 启用地图 3D 叠加 -->
    <script>window.__liteMapMode = false;</script>
    <script type="module" src="./ar-overlay-final.js"></script>
    <!-- 引入谷歌字体 -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;500;700;900&family=Ma+Shan+Zheng&family=Zhi+Mang+Xing&family=Long+Cang&display=swap" rel="stylesheet">

    <style>
        /* --- 诗词浮层 (文脉) --- */
        .poetry-container {
            position: fixed; top: 10%; left: 5%; bottom: 10%; z-index: 5;
            writing-mode: vertical-rl; text-orientation: upright;
            font-family: 'Long Cang', 'Ma Shan Zheng', cursive;
            font-size: 3.4rem;
            letter-spacing: 0.5em;
            pointer-events: none;
            mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: -webkit-linear-gradient(transparent, black 15%, black 85%, transparent);
            display: flex; gap: 2rem;
            transform: translateX(-4%) rotate(-1deg);
        }
        .poetry-line {
            opacity: 0;
            transform: translateY(20px);
            transition: all 3s ease-out;
            /* 金书玉册·金粉书写于虚空 */
            background: linear-gradient(180deg,
                #FFF8D0 0%, #F5E6A8 12%, #E8D070 28%, #D4AF37 45%,
                #C6A56B 62%, #B8942E 78%, #8B7322 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            filter:
                drop-shadow(0 0 12px rgba(212,175,55,0.7))
                drop-shadow(0 0 32px rgba(198,165,107,0.4))
                drop-shadow(0 0 60px rgba(212,175,55,0.2));
            -webkit-mask-image: -webkit-linear-gradient(transparent 0%, black 25%, black 75%, transparent 100%);
            mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
            -webkit-mask-size: 100% 300%;
            mask-size: 100% 300%;
            -webkit-mask-position: 0 100%;
            mask-position: 0 100%;
        }
        .poetry-line.active {
            opacity: 1;
            transform: translateY(0);
            -webkit-mask-position: 0 50%;
            mask-position: 0 50%;
            animation: inkSoak 3.5s ease-out forwards;
        }
        @keyframes inkSoak {
            0% {
                -webkit-mask-position: 0 100%; mask-position: 0 100%; opacity: 0;
                -webkit-mask-size: 100% 280%; mask-size: 100% 280%;
                filter: drop-shadow(0 0 0px rgba(212,175,55,0));
            }
            25% {
                filter: drop-shadow(0 0 12px rgba(212,175,55,0.4)) drop-shadow(0 0 30px rgba(198,165,107,0.12));
            }
            100% {
                -webkit-mask-position: 0 50%; mask-position: 0 50%; opacity: 1;
                -webkit-mask-size: 100% 300%; mask-size: 100% 300%;
                filter:
                    drop-shadow(0 0 12px rgba(212,175,55,0.7))
                    drop-shadow(0 0 32px rgba(198,165,107,0.4))
                    drop-shadow(0 0 60px rgba(212,175,55,0.2));
            }
        }

        /* --- 钤印 (印章) --- */
        .seal-mark {
            display: inline-flex; align-items: center; justify-content: center;
            width: 3.5rem; height: 3.5rem;
            background-color: #9e2a2b; /* 硃砂红 */
            color: #f0f0f0;
            border-radius: 4px;
            font-family: 'Zhi Mang Xing', cursive;
            font-size: 1.8rem;
            line-height: 1;
            box-shadow:
                inset 0 0 0 2px #9e2a2b,
                inset 0 0 0 4px #f0f0f0; /* 双重边框模拟印泥 */
            transform: rotate(-3deg);
            margin-left: 1rem;
            opacity: 0.9;
            position: relative;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
            cursor: help;
        }
        /* 印章残缺纹理 */
        .seal-mark::after {
            content: ''; position: absolute; inset: 0;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E");
            opacity: 0.6; pointer-events: none;
        }

        /* --- 节气徽章 (时令铭牌) --- */
        .solar-term-badge {
            position: fixed; top: 32px; right: 40px; z-index: 60;
            display: flex; flex-direction: column; align-items: center;
            font-family: 'Noto Serif SC', serif;
            color: #C6A56B;
            opacity: 0.7;
            border-right: 1px solid rgba(198,165,107,0.4);
            padding-right: 12px;
            filter: drop-shadow(0 0 4px rgba(198,165,107,0.1));
        }
        .solar-term-badge .term { font-size: 1.5rem; font-weight: bold; letter-spacing: 0.2em; writing-mode: vertical-rl; margin-bottom: 4px; }
        .solar-term-badge .date { font-size: 0.75rem; writing-mode: vertical-rl; letter-spacing: 0.1em; opacity: 0.6; }

        /* --- 核心视觉变量 (玄金墨韵) --- */
        :root {
            --c-deep-bg: #030807;
            --c-primary: #1a4a3e;
            --c-secondary: #6a7d74;
            --c-accent: #B24A2F;
            --c-gold: #C6A56B;
            --c-gold-bright: #D4AF37;
            --c-gold-dim: #8C6A32;
            --c-ochre: #8B5B2E;
            --c-ink: #050706;
            --c-void: #020403;
            --drawer-width: 580px;
        }

        /* --- 商周回纹 (Lei-wen) 描边风格 --- */
        .lei-wen-border {
            position: relative;
            border: 1px solid rgba(198,165,107,0.3) !important;
            box-shadow: 0 0 0 1px #000, 0 0 0 2px rgba(198,165,107,0.6);
        }
        .lei-wen-border::after {
            content: ''; position: absolute; inset: -4px;
            border: 1px solid transparent;
            background: repeating-linear-gradient(45deg, #C6A56B 0, #C6A56B 1px, transparent 1px, transparent 5px) border-box;
            -webkit-mask: -webkit-linear-gradient(#fff, #fff);
            mask: linear-gradient(#fff, #fff);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0.5;
            pointer-events: none;
            z-index: -1;
        }

        /* --- 全局基础 --- */
        body {
            background-color: #05101a;
            margin: 0; padding: 0; overflow: hidden;
            font-family: 'Noto Serif SC', serif;
            color: #e0e0e0;
            cursor: none;
        }

        /* ========== 矿物材质 · 金碧山水 ========== */

        /* 容器 */
        #epic-shanshui-bg {
            position: fixed; inset: 0; z-index: -999;
            background: #020a0f; /* 深邃底色 */
            overflow: hidden; pointer-events: none;
        }

        /* 1. 光影基底：深邃的蓝绿矿物色，模拟《千里江山图》 */
        .bg-base {
            position: absolute; inset: 0;
            background: radial-gradient(
                120% 100% at 50% 100%,
                #1A5448 0%,      /* 底部中心：明亮的石绿 */
                #0F2E3D 40%,     /* 中间：深沉的石青 */
                #051218 80%,     /* 远处：墨色 */
                #000000 100%
            );
        }

        /* 2. 历史尘埃：噪点纹理，模拟绢本岩彩颗粒感 */
        .bg-noise {
            position: absolute; inset: 0;
            opacity: 0.1; /* 淡淡的颗粒感 */
            mix-blend-mode: overlay;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
            pointer-events: none;
        }

        /* 3. 远山剪影：层叠青影，不再是圆润的卡通波浪 */
        .bg-mountain {
            position: absolute; bottom: 0; left: 0; width: 100%;
            height: 40vh;
            background: linear-gradient(to top, #0d3a33 10%, transparent 100%);
            mask-image: linear-gradient(to top, black, transparent);
            -webkit-mask-image: linear-gradient(to top, black, transparent);
            opacity: 0.6;
            filter: blur(40px);
        }

        /* 4. 金色氛围光：底部微微发光，模拟博物馆展柜灯光 */
        .bg-glow {
            position: absolute; bottom: -100px; left: 50%;
            transform: translateX(-50%);
            width: 80vw; height: 300px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
            filter: blur(60px);
            mix-blend-mode: screen;
        }

        /* 5. 金沙画布 */
        #gold-particle-canvas {
            position: absolute; inset: 0;
        }

        /* --- 自定义探灯光标 (博物馆暗室探灯) --- */
        #cursor-lantern {
            position: fixed; z-index: 99999; pointer-events: none; will-change: transform;
            width: 32px; height: 32px; border-radius: 50%;
            border: 1px solid rgba(198,165,107,0.4);
            box-shadow:
                0 0 12px 2px rgba(198,165,107,0.08),
                0 0 30px 6px rgba(198,165,107,0.03),
                inset 0 0 6px rgba(198,165,107,0.06);
            transform: translate(-50%, -50%);
            transition: width 0.25s, height 0.25s, border-color 0.25s, box-shadow 0.25s;
            mix-blend-mode: screen;
            background: radial-gradient(circle, rgba(198,165,107,0.05) 0%, transparent 70%);
        }
        #cursor-lantern.hovering {
            width: 40px; height: 40px;
            border-color: rgba(212,175,55,0.65);
            box-shadow:
                0 0 20px 6px rgba(212,175,55,0.15),
                0 0 45px 12px rgba(212,175,55,0.05),
                inset 0 0 12px rgba(212,175,55,0.1);
        }
        #cursor-lantern-dot, #cursor-lantern {
            will-change: transform;
        }
        #cursor-lantern-dot {
            position: fixed; z-index: 99999; pointer-events: none; will-change: transform;
            width: 3px; height: 3px; border-radius: 50%;
            background: var(--c-gold);
            transform: translate(-50%, -50%);
            box-shadow: 0 0 4px rgba(212,175,55,0.7), 0 0 10px rgba(198,165,107,0.3);
        }
        /* 恢复可交互元素的默认光标 */
        a, button, input, textarea, select, [onclick], .cursor-pointer, .fab-contribute { cursor: none !important; }

        /* (山峦与金沙样式已整合入 #culture-bg) */

        .ink-bg-container { display: none; }

        #map-container {
            position: absolute; top: 0; left: 0; width: 100vw; height: 100vh;
            z-index: 10;
        }
        /* 地图轻微噪点 - 锐利不糊 */
        #map-container::after {
            content: ''; position: absolute; inset: 0; z-index: 11; pointer-events: none;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='bn'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23bn)' opacity='0.03'/%3E%3C/svg%3E");
            background-size: 32px 32px;
            opacity: 0.5;
        }
        /* 天顶聚光灯·地图中心明显聚焦 */
        #map-container::before {
            content: ''; position: absolute; inset: 0; z-index: 9; pointer-events: none;
            background: radial-gradient(ellipse 50% 45% at 50% 45%, rgba(50,75,68,0.35) 0%, rgba(28,48,42,0.15) 40%, transparent 70%);
            mix-blend-mode: screen;
        }

        .title-gradient {
            background: linear-gradient(to bottom, #FFF8D0, #F0D978, #D4AF37, #B8942E, #8B7322);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 2px 10px rgba(0,0,0,0.8);
            letter-spacing: 0.15em;
            filter: drop-shadow(0 0 8px rgba(212,175,55,0.2));
        }

        .holo-card {
            background: rgba(8, 14, 12, 0.75);
            border: 1px solid rgba(198, 165, 107, 0.18);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.7), inset 0 0 15px rgba(0,0,0,0.3);
            position: relative; overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .holo-card:hover {
            border-color: rgba(212, 175, 55, 0.5);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.08), inset 0 0 20px rgba(198,165,107,0.03);
            background: rgba(12, 20, 16, 0.8);
        }

        .artifact-card-3d {
            transform-style: preserve-3d;
            transform: perspective(1000px);
            transition: transform 0.05s linear;
        }
        .artifact-card-inner {
            background: linear-gradient(160deg, #1a2420 0%, #111815 60%, #0d1210 100%);
            border: 1px solid rgba(198,165,107,0.1);
            border-top: 1px solid rgba(212, 175, 55, 0.25);
            box-shadow: inset 0 0 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(198,165,107,0.08);
            transform: translateZ(0);
        }
        .artifact-card-inner::after {
            content: ''; position: absolute; inset: 0;
            background: radial-gradient(circle at center, rgba(212, 175, 55, 0.12), transparent 65%);
            opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .artifact-card-3d:hover .artifact-card-inner::after { opacity: 1; }

        /* --- 搜索框（寻宝匣·金丝镶嵌）--- */
        .magic-input {
            border: 1px solid rgba(198, 165, 107, 0.3);
            background: rgba(0, 0, 0, 0.6);
            box-shadow: 0 0 15px rgba(21, 40, 35, 0.8);
            color: #E8C547;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }
        /* 上下金线装饰 */
        .magic-input::before, .magic-input::after {
            content: ''; position: absolute; left: 10px; right: 10px; height: 1px;
            background: linear-gradient(90deg, transparent, #C6A56B, transparent);
            pointer-events: none;
        }
        .magic-input::before { top: 0; }
        .magic-input::after { bottom: 0; }
        .magic-input:focus-within {
            background: rgba(5,10,8,0.85);
            border-color: rgba(212,175,55,0.5);
            box-shadow:
                0 0 20px rgba(212,175,55,0.15),
                0 0 15px rgba(21, 40, 35, 0.8),
                inset 0 0 20px rgba(198,165,107,0.03);
        }
        .magic-input:focus-within::before, .magic-input:focus-within::after {
            background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }
        /* --- 全局搜索结果下拉 (保证可见、可点) --- */
        #search-results {
            max-height: 320px;
            overflow-y: auto;
            border-radius: 4px;
            border: 1px solid rgba(198,165,107,0.35);
            box-shadow: 0 8px 24px rgba(0,0,0,0.6);
            z-index: 250;
        }
        #search-results:not(.hidden) {
            display: block;
        }

        /* --- 书法标题 --- */
        .font-calligraphy { font-family: 'Ma Shan Zheng', cursive; }

        /* --- 加载动画 (玄金墨韵) --- */
        #loading-screen {
            position: fixed; inset: 0; z-index: 9999;
            background: radial-gradient(ellipse at 50% 45%, #0a1a15 0%, #050a08 40%, #020403 70%, #010201 100%);
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ink-loader {
            width: 80px; height: 80px;
            background: radial-gradient(circle, rgba(212,175,55,0.5) 0%, rgba(198,165,107,0.15) 40%, transparent 70%);
            border-radius: 50%;
            opacity: 0.7;
            animation: loaderPulse 2.5s ease-in-out infinite;
            box-shadow: 0 0 40px rgba(212,175,55,0.15), 0 0 80px rgba(198,165,107,0.05);
        }
        @keyframes loaderPulse {
            0%, 100% { transform: scale(0.9); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }

        /* --- 侧边栏 (文物抽屉·博物馆暗室) --- */
        #artifact-drawer {
            position: fixed; top: 0; right: 0; bottom: 0; width: var(--drawer-width);
            background: linear-gradient(180deg, #0a0e0c 0%, #080c0a 50%, #060908 100%);
            border-left: 1px solid rgba(198,165,107,0.25);
            box-shadow: -20px 0 80px rgba(0,0,0,0.95), -5px 0 20px rgba(0,0,0,0.5);
            transform: translateX(100%);
            transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1);
            z-index: 2000; display: flex; flex-direction: column;
        }
        #artifact-drawer::before {
            content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%;
            background-image: linear-gradient(0deg, transparent 15%, rgba(198,165,107,0.6) 50%, transparent 85%);
            background-size: 100% 200%;
            box-shadow: 0 0 12px rgba(198,165,107,0.15);
        }
        #artifact-drawer.active { transform: translateX(0); }
        body.drawer-open #avatar-stand-container {
            transform: translateX(calc(var(--drawer-width) * -1));
        }

        .tag-ink {
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.02);
            font-family: 'Noto Serif SC', serif;
        }

        /* --- 详情页媒体区 --- */
        #media-display-area {
            position: relative; width: 100%; height: 400px;
            background: #000;
        }

        /* --- 居中详情弹窗 (玄金风) --- */
        #detail-modal-overlay {
            position: fixed; inset: 0; z-index: 3000;
            background: rgba(0,0,0,0.9);
            display: none; align-items: center; justify-content: center;
            padding: 40px; opacity: 0; transition: opacity 0.3s;
        }
        #detail-modal-overlay.active { display: flex; opacity: 1; }
        #detail-modal-content {
            max-width: 1000px; width: 92vw; max-height: 90vh; overflow-y: auto;
            background: linear-gradient(180deg, #0e1412 0%, #0a0e0c 100%);
            border: 1px solid rgba(198,165,107,0.2);
            box-shadow: 0 20px 80px rgba(0,0,0,0.9), 0 0 1px rgba(198,165,107,0.15);
            transform: scale(0.95); transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        #detail-modal-overlay.active #detail-modal-content { transform: scale(1); }
        #detail-modal-close {
            position: absolute; top: 16px; right: 16px; z-index: 10;
            width: 36px; height: 36px; border-radius: 50%;
            border: 1px solid #444; color: #888;
            background: rgba(0,0,0,0.5); cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.2s;
        }
        #detail-modal-close:hover { background: #C93728; color: #fff; border-color: #C93728; }
        /* --- 资源切换按钮可点击性保障 --- */
        #modal-media-area { position: relative; }
        #modal-three-container,
        #modal-image-view,
        #modal-video-view {
            z-index: 10;
        }
        #modal-resource-tabs {
            z-index: 9999;
            pointer-events: auto;
        }
        #modal-resource-tabs * { pointer-events: auto; }
        #modal-resource-tabs button { cursor: pointer; }
        .vertical-layout {
            writing-mode: vertical-rl; text-orientation: upright;
            letter-spacing: 0.3em;
        }

        /* --- 共建按钮 (篆刻朱印·寿山石立体印章) --- */
        .fab-contribute {
            position: fixed; bottom: 40px; left: 190px; z-index: 5000;
            width: 76px; height: 76px;
            background:
                linear-gradient(168deg,
                    #c84a48 0%, #b83836 12%, #9e2a2b 32%,
                    #8a2223 52%, #6e1a1b 72%, #4a1012 92%);
            border-radius: 6px;
            color: #f0e6d0; display: flex; align-items: center; justify-content: center;
            box-shadow:
                0 12px 35px rgba(0,0,0,0.9),
                0 5px 14px rgba(0,0,0,0.75),
                0 24px 60px rgba(0,0,0,0.5),
                inset 0 2px 0 rgba(255,210,190,0.3),
                inset 0 -4px 8px rgba(0,0,0,0.45),
                inset 0 0 0 2px #6a1819,
                inset 0 0 0 5px rgba(240,230,208,0.5),
                0 0 30px rgba(158,42,43,0.2);
            cursor: pointer;
            pointer-events: auto;
            transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s;
            border: 2.5px solid rgba(240,230,208,0.35);
            transform: rotate(-3deg) translateY(0px);
        }
        /* 内框篆刻边线 */
        .fab-contribute::before {
            content: ''; position: absolute; inset: 6px; border-radius: 4px;
            border: 1.5px solid rgba(240,230,208,0.2);
            box-shadow: inset 0 0 12px rgba(0,0,0,0.35);
            pointer-events: none;
        }
        /* 磨损纹理·岁月侵蚀 */
        .fab-contribute::after {
            content: ''; position: absolute; inset: 0; border-radius: 6px;
            background:
                url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.28'/%3E%3C/svg%3E"),
                linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 35%, rgba(0,0,0,0.15) 100%);
            opacity: 0.75; pointer-events: none;
            mix-blend-mode: overlay;
        }
        .fab-contribute:hover {
            transform: rotate(-3deg) translateY(-5px);
            box-shadow:
                0 14px 42px rgba(0,0,0,0.88),
                0 5px 14px rgba(158,42,43,0.35),
                0 24px 60px rgba(0,0,0,0.4),
                0 0 24px rgba(158,42,43,0.18),
                inset 0 2px 0 rgba(255,210,190,0.3),
                inset 0 0 0 2px #8a2223,
                inset 0 0 0 5px rgba(240,230,208,0.6);
        }
        .fab-contribute:active {
            transform: rotate(-3deg) translateY(10px) scale(0.96);
            box-shadow:
                0 1px 4px rgba(0,0,0,0.95),
                0 0 0 1px rgba(0,0,0,0.4),
                inset 0 6px 16px rgba(0,0,0,0.6),
                inset 0 0 0 2px #5a1314,
                inset 0 0 0 4px rgba(240,230,208,0.3);
            transition: transform 0.06s ease-out, box-shadow 0.06s ease-out;
        }

        /* --- 问的 AI 按钮 --- */
        .fab-chat {
            background: #2E5E5E;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            transition: transform 0.2s, background-color 0.2s;
        }
        .fab-chat:hover {
            transform: translateY(-2px) scale(1.05);
            background-color: #3b7a7a;
            box-shadow: 0 6px 20px rgba(46, 94, 94, 0.4);
        }

        /* --- AI 聊天窗口 --- */
        #chat-window {
            position: fixed; bottom: 20px; right: calc(350px + 20px); width: 350px; height: 500px;
            background: rgba(26, 26, 26, 0.95);
            border: 1px solid var(--c-gold-dim);
            border-radius: 8px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.8);
            display: flex; flex-direction: column;
            z-index: 5001;
            --chat-shift-x: 0px;
            transform: translate3d(var(--chat-shift-x), 20px, 0); opacity: 0; pointer-events: none;
            transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }
        #chat-window.active {
            transform: translate3d(var(--chat-shift-x), 0, 0); opacity: 1; pointer-events: auto;
        }
        body.drawer-open #chat-window {
            --chat-shift-x: calc(var(--drawer-width) * -1);
        }
        .chat-msg {
            margin-bottom: 12px;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 13px;
            line-height: 1.6;
            max-width: 85%;
        }
        .chat-msg.user {
            align-self: flex-end;
            background: var(--c-gold-dim);
            color: #fff;
            border-bottom-right-radius: 0;
        }
        .chat-msg.ai {
            align-self: flex-start;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: #e0e0e0;
            border-bottom-left-radius: 0;
        }
        .chat-msg.system {
            align-self: center;
            background: transparent;
            border: none;
            color: #8B7322;
            font-size: 11px;
            text-align: center;
            padding: 4px 0;
            font-style: italic;
        }
        .typing-dot {
            display: inline-block; width: 4px; height: 4px; background: #888; border-radius: 50%;
            margin-right: 2px;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--c-gold-dim); }

        /* --- 返回按钮 (碑刻质感) --- */
        #btn-back-national {
            position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
            z-index: 50; padding: 12px 48px;
            background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
            color: #D4AF37;
            font-family: 'Noto Serif SC', serif;
            letter-spacing: 0.35em;
            border: 2px solid rgba(198,165,107,0.6);
            box-shadow: 0 4px 20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 25px rgba(198,165,107,0.15);
            cursor: pointer; display: none;
            transition: all 0.25s;
            font-weight: bold;
        }
        #btn-back-national:hover {
            background: linear-gradient(180deg, #D4AF37 0%, #B8942E 100%);
            color: #0d0d0d;
            border-color: #D4AF37;
            box-shadow: 0 6px 30px rgba(212,175,55,0.35), 0 0 40px rgba(198,165,107,0.2);
        }

        /* --- 图例提示 (铭文碑刻) --- */
        #legend-hint {
            position: fixed; bottom: 32px; left: 48px; z-index: 50;
            font-family: 'Noto Serif SC', serif;
            font-size: 13px; color: #C6A56B;
            display: flex; align-items: center; gap: 12px;
            background: rgba(5, 10, 8, 0.9);
            padding: 10px 18px;
            border: 1px solid rgba(198,165,107,0.35);
            box-shadow: inset 0 0 20px rgba(0,0,0,0.5), 0 6px 24px rgba(0,0,0,0.6);
            position: relative;
        }
        #legend-hint::before {
            content: '';
            position: absolute; inset: 3px;
            border: 0.5px solid rgba(198,165,107,0.2);
            pointer-events: none;
        }
        #legend-hint .legend-dot {
            width: 12px; height: 12px;
            background: var(--c-ochre);
            transform: rotate(45deg);
        }

        /* --- 水波四散·真实水面涟漪 --- */
        .click-ripple {
            position: fixed; pointer-events: none; z-index: 9998;
            width: 60px; height: 60px; margin-left: -30px; margin-top: -30px;
        }
        .click-ripple-wave {
            position: absolute; inset: 0;
            border-radius: 50%;
            border: 1px solid rgba(180,210,230,0.5);
            box-shadow: 0 0 3px rgba(200,225,240,0.3);
            transform: scale(0.2);
            animation: waterRippleWave 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .click-ripple-wave:nth-child(1) { animation-delay: 0ms; }
        .click-ripple-wave:nth-child(2) { animation-delay: 80ms; }
        .click-ripple-wave:nth-child(3) { animation-delay: 160ms; }
        .click-ripple-wave:nth-child(4) { animation-delay: 240ms; }
        @keyframes waterRippleWave {
            0% { transform: scale(0.2); opacity: 0.7; }
            100% { transform: scale(1.8); opacity: 0; }
        }
        .click-ripple-splash {
            position: absolute; inset: -15%;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(220,235,250,0.25) 0%, transparent 65%);
            animation: waterRippleSplash 0.35s ease-out forwards;
        }
        @keyframes waterRippleSplash {
            0% { transform: scale(0.3); opacity: 1; }
            100% { transform: scale(0.9); opacity: 0; }
        }
    </style>
</head>
<body>

<!-- 矿物材质 · 金碧山水 背景系统 -->
<div id="epic-shanshui-bg" aria-hidden="true">
    <div class="bg-base" id="bg-base-layer"></div>
    <div class="bg-noise" id="bg-noise-layer"></div>
    <div class="bg-mountain" id="bg-mountain-layer"></div>
    <div class="bg-glow" id="bg-glow-layer"></div>
    <canvas id="gold-particle-canvas"></canvas>
</div>

<!-- 文化探灯光标 -->
<div id="cursor-lantern"></div>
<div id="cursor-lantern-dot"></div>

<!-- 诗词文脉浮层 -->
<div class="poetry-container" id="poetry-container">
    <div class="poetry-line"></div>
    <div class="poetry-line"></div>
</div>

<!-- 节气徽章 (JavaScript 动态计算) -->
<div id="solar-badge" class="solar-term-badge hidden">
    <span class="term" id="term-text">立春</span>
    <span class="date" id="term-date">壬寅年</span>
</div>

<!-- 加载遮罩 -->
<div id="loading-screen">
    <div class="ink-loader mb-6"></div>
    <div class="text-center relative">
        <div class="flex items-center justify-center">
            <h2 class="text-5xl font-calligraphy text-[#D4AF37] mb-4 tracking-widest title-gradient" style="font-family: 'Ma Shan Zheng';">华夏瑰宝</h2>
            <div class="seal-mark mb-4" title="数字人文 · 珍藏">珍藏</div>
        </div>
        <div class="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#8B7322] to-transparent mb-4 opacity-50 mx-auto"></div>
        <p class="text-sm text-gray-500 font-serif tracking-[0.4em] uppercase" id="loading-text">数字人文 · 沉浸体验</p>
    </div>
    <button id="retry-btn" class="hidden mt-8 px-6 py-2 border border-[#C93728] text-[#C93728] hover:bg-[#C93728] hover:text-white transition text-xs tracking-widest font-bold" onclick="location.reload()">重新连接神州</button>
</div>

<!-- 背景层（简化） -->

<!-- 1. 顶部搜索栏：全局搜索 (保留原功能) -->
<div class="fixed top-8 left-10 z-[100] w-[340px]">
    <div class="magic-input rounded-sm px-5 py-3 flex items-center relative group holo-card lei-wen-border">
        <i class="ph ph-magnifying-glass text-xl text-[#8B7322] mr-3 group-hover:text-[#D4AF37] transition-colors"></i>
        <input type="text" id="global-search" placeholder="寻觅 · 瑰宝"
               class="w-full bg-transparent border-none focus:ring-0 text-base text-[#D4AF37] placeholder-[#555] outline-none font-serif tracking-widest"
               autocomplete="off">
        <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37] opacity-50"></div>
        <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37] opacity-50"></div>
    </div>
    <div id="search-results" class="hidden absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-[#333]"></div>
</div>

<!-- 地图容器 -->
<div id="map-container"></div>

<!-- 图例提示 -->
<div id="legend-hint" class="holo-card">
    <div class="legend-dot"></div>
    <span class="tracking-widest text-gray-400">颜色越深 · 馆藏越多</span>
</div>

<!-- 返回按钮 -->
<button id="btn-back-national" class="hidden font-bold lei-wen-border">重返神州</button>

<!-- 贡献按钮（左下角） -->
<div class="fab-contribute group fixed bottom-10 left-[190px] z-[5000] w-16 h-16 flex items-center justify-center overflow-visible" id="fab-contribute-btn">
    <div class="font-calligraphy text-2xl z-10 font-bold" style="font-family: 'Zhi Mang Xing', cursive; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">共建</div>
    <div class="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#111] text-[#D4AF37] text-xs px-3 py-2 border border-[#333] opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none tracking-widest shadow-lg">添加家乡文物</div>
</div>

<!-- 李白模型容器 -->
<div id="avatar-stand-container" class="fixed bottom-0 right-0 z-[4500] w-[350px] h-[500px] pointer-events-none transition-transform duration-300"></div>
<div id="avatar-tooltip" class="fixed z-[5000] pointer-events-none bg-black/80 text-[#D4AF37] text-xs px-3 py-1.5 rounded border border-[#D4AF37]/50 opacity-0 transition-opacity duration-200 font-serif tracking-widest" style="will-change: transform;">点击提问</div>

<!-- AI 聊天窗口 -->
<div id="chat-window" class="flex flex-col">
    <div class="p-4 border-b border-[#333] flex justify-between items-center bg-[#111]/50 rounded-t-lg">
        <h3 class="text-[#D4AF37] font-serif font-bold tracking-widest flex items-center gap-2">
            <i class="ph ph-sparkle"></i> 博物导览
        </h3>
        <button onclick="toggleChatWindow()" class="text-[#555] hover:text-[#C93728]"><i class="ph ph-x"></i></button>
    </div>
    <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div class="chat-msg ai">
            阁下安好。吾乃数字博古馆导览员。关于华夏瑰宝，若有疑问，尽可道来。<br>
            <span class="text-xs text-gray-500 mt-1 block">支持上下文：若正在查看文物，可直接问“它有什么历史？”</span>
        </div>
    </div>
    <div class="p-3 border-t border-[#333] bg-[#111]/50 rounded-b-lg">
        <div class="flex gap-2">
            <input type="text" id="chat-input" placeholder="输入问题..." class="flex-1 bg-[#222] border border-[#444] rounded px-3 py-2 text-sm text-[#e0e0e0] focus:border-[#D4AF37] outline-none font-serif">
            <button onclick="sendChatMessage()" class="bg-[#2E5E5E] hover:bg-[#3b7a7a] text-white px-3 rounded transition"><i class="ph ph-paper-plane-right"></i></button>
        </div>
    </div>
</div>

<!-- 3. 贡献模态框 (玄金风) -->
<div id="contribute-modal" class="fixed inset-0 z-[3000] hidden items-center justify-center bg-black/90 backdrop-blur-sm">
    <div class="bg-[#1a1a1a] w-[550px] p-10 relative shadow-2xl border border-[#333] transform transition-all scale-95 opacity-0 overflow-hidden" id="modal-content">
        <div class="absolute inset-2 border border-[#333] pointer-events-none"></div>
        <div class="absolute inset-0 border border-[#D4AF37]/20 pointer-events-none"></div>

        <div class="flex justify-between items-center mb-8 relative z-20">
            <h3 class="text-3xl font-bold text-[#D4AF37] font-serif tracking-widest" style="font-family: 'Ma Shan Zheng';">守护家乡记忆</h3>
            <button onclick="closeContributeModal()" class="text-[#555] hover:text-[#C93728] transition duration-200"><i class="ph ph-x text-2xl"></i></button>
        </div>

        <form onsubmit="handleContributeSubmit(event)" class="space-y-6 relative z-20">
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="text-xs font-bold text-[#555] tracking-widest uppercase">文物名称</label>
                    <input type="text" required class="w-full bg-[#111] border border-[#333] p-3 text-[#D4AF37] font-serif focus:border-[#D4AF37] outline-none transition-colors duration-200">
                </div>
                <div class="space-y-2">
                    <label class="text-xs font-bold text-[#555] tracking-widest uppercase">所属城市</label>
                    <input type="text" required class="w-full bg-[#111] border border-[#333] p-3 text-[#D4AF37] font-serif focus:border-[#D4AF37] outline-none transition-colors duration-200">
                </div>
            </div>
            <div class="space-y-2">
                <label class="text-xs font-bold text-[#555] tracking-widest uppercase">推荐理由</label>
                <textarea rows="3" required class="w-full bg-[#111] border border-[#333] p-3 text-[#D4AF37] font-serif focus:border-[#D4AF37] outline-none transition-colors duration-200 resize-none"></textarea>
            </div>
            <div class="space-y-2">
                <label class="text-xs font-bold text-[#555] tracking-widest uppercase">档案上传</label>
                <div class="group relative border border-dashed border-[#444] p-6 text-center cursor-pointer hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors duration-200">
                    <input type="file" multiple class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
                    <div class="flex flex-col items-center justify-center text-[#555] group-hover:text-[#D4AF37]">
                        <div class="flex items-center gap-6 mb-3">
                            <i class="ph ph-image text-2xl"></i>
                            <i class="ph ph-cube text-2xl"></i>
                        </div>
                        <span class="text-xs tracking-wider">拖拽或点击上传</span>
                    </div>
                </div>
            </div>
            <button type="submit" class="w-full mt-4 bg-[#9e2a2b] hover:bg-[#C93728] text-white py-3 font-serif font-bold tracking-[0.4em] shadow-lg transition-colors duration-200">提交审核</button>
        </form>
    </div>
</div>

<!-- 4. 侧边栏 (文物抽屉，与 example 一致) -->
<div id="artifact-drawer">
    <div class="absolute top-6 right-6 z-50">
        <button onclick="closeDrawer()" class="w-10 h-10 border border-[#444] text-[#888] hover:text-[#C93728] hover:border-[#C93728] transition duration-200 flex items-center justify-center rounded-sm"><i class="ph ph-x text-lg"></i></button>
    </div>

    <div id="view-gallery" class="w-full h-full flex flex-col relative overflow-hidden">
        <div class="absolute top-10 right-10 text-[240px] font-calligraphy text-[#fff] opacity-[0.02] pointer-events-none select-none leading-none z-0" style="font-family: 'Ma Shan Zheng';">礼</div>
        <div class="pt-16 px-10 pb-6 relative z-10">
            <h2 class="text-6xl font-calligraphy text-[#D4AF37] mb-2" id="gallery-city-name" style="font-family: 'Ma Shan Zheng';">城市</h2>
            <div class="flex items-center gap-3 text-[#555]">
                <div class="h-[1px] w-12 bg-[#555]"></div>
                <span class="text-xs tracking-[0.4em] font-bold">CULTURAL HERITAGE</span>
            </div>
            <p class="mt-6 text-sm text-[#888] font-serif pl-1">收录 <span id="gallery-count" class="text-[#C93728] text-xl font-bold mx-1" style="font-family: 'Georgia'">0</span> 件传世瑰宝</p>
            <div class="mt-8 flex items-center gap-2 relative border-b border-[#333] pb-2">
                <div class="flex-1 flex items-center border border-[#333] bg-[#0a0a0a]/50 px-3 py-2 rounded-sm">
                    <i class="ph ph-magnifying-glass text-[#8B7322] mr-2"></i>
                    <input type="text" id="drawer-search" placeholder="在此城寻宝..." class="flex-1 bg-transparent py-1 text-[#D4AF37] outline-none placeholder-[#333] font-serif text-sm">
                </div>
                <button type="button" id="drawer-search-btn" class="px-4 py-2 bg-[#2E5E5E] hover:bg-[#3b7a7a] text-white text-sm font-serif rounded-sm border border-[#D4AF37]/30 whitespace-nowrap transition lei-wen-border">搜索</button>
            </div>
        </div>
        <div id="gallery-grid" class="flex-1 overflow-y-auto px-10 pb-10 space-y-6 z-10"></div>
    </div>

    <div id="view-detail" class="w-full h-full flex flex-col hidden bg-[#111] relative z-20">
        <button onclick="backToGallery()" class="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 border border-[#333] text-[#888] text-xs tracking-widest hover:text-[#D4AF37] hover:border-[#D4AF37] transition duration-200"><i class="ph ph-caret-left"></i> 返回</button>
        <div id="media-display-area" class="relative w-full h-[45%] bg-[#000]">
            <div id="three-container" class="absolute inset-0 z-10"></div>
            <div id="three-badge" class="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/60 text-[#D4AF37] px-4 py-1.5 text-xs font-bold border border-[#333] backdrop-blur-sm">
                <i class="ph ph-cube-transparent text-lg"></i> 3D 全息视图
            </div>
            <div id="hero-image-container" class="absolute inset-0 z-30 hidden flex items-center justify-center">
                <img id="hero-image" onerror="this.src='data:image/svg+xml,%3Csvg width=\'300\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%231e293b\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%23D4AF37\' font-family=\'serif\' font-size=\'20\'%3E暂无影像%3C/text%3E%3C/svg%3E'" class="w-full h-full object-cover opacity-80" src="" alt="Artifact">
                <div class="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
            </div>
        </div>
        <div class="flex-1 overflow-y-auto p-10 relative">
            <div class="flex justify-between items-start mb-4">
                <h2 id="detail-title" class="text-4xl font-calligraphy text-[#D4AF37] drop-shadow-lg" style="font-family: 'Ma Shan Zheng';"></h2>
            </div>
            <div id="detail-tags" class="flex flex-wrap gap-2 mb-8"></div>
            <div class="grid grid-cols-2 gap-6 mb-10 border-y border-[#333] py-6 bg-[#161616] px-4">
                <div class="space-y-1"><span class="text-[10px] text-[#555] tracking-widest uppercase">Era / 朝代</span><div id="detail-era" class="text-[#C93728] font-bold text-lg"></div></div>
                <div class="space-y-1"><span class="text-[10px] text-[#555] tracking-widest uppercase">Material / 材质</span><div id="detail-material" class="text-[#aaa] font-bold"></div></div>
                <div class="space-y-1"><span class="text-[10px] text-[#555] tracking-widest uppercase">Size / 尺寸</span><div id="detail-size" class="text-[#666] text-sm"></div></div>
                <div class="space-y-1"><span class="text-[10px] text-[#555] tracking-widest uppercase">Collection / 现藏</span><div id="detail-museum" class="text-[#666] text-sm"></div></div>
            </div>
            <div class="grid grid-cols-1 gap-8 font-serif text-[#bbb] leading-loose">
                <section>
                    <h3 class="text-lg font-bold text-[#D4AF37] mb-4 flex items-center"><span class="w-1 h-4 bg-[#C93728] mr-3"></span> 前世传奇</h3>
                    <p id="detail-intro" class="text-justify opacity-90 text-sm"></p>
                </section>
                <section>
                    <h3 class="text-lg font-bold text-[#D4AF37] mb-4 flex items-center"><span class="w-1 h-4 bg-[#2E5E5E] mr-3"></span> 美学密码</h3>
                    <div class="bg-[#1a1a1a] p-5 border border-[#333] italic text-sm text-[#888]">
                        <p id="detail-value"></p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>

<!-- 3D 模型全屏弹窗 (玄金风) -->
<div id="model-popout-overlay" class="fixed inset-0 z-[4000] hidden flex items-center justify-center">
    <div id="model-popout-backdrop" class="absolute inset-0 bg-black/95 cursor-pointer" style="z-index:1"></div>
    <div id="model-popout-container" class="relative w-full h-full max-w-6xl max-h-[80vh] cursor-grab active:cursor-grabbing z-10" style="z-index:2"></div>
    <button type="button" id="model-popout-close-btn" class="absolute top-10 right-10 z-20 w-12 h-12 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition flex items-center justify-center text-xl" style="z-index:3"><i class="ph ph-x"></i></button>
</div>

<!-- 居中详情弹窗 (玄金风，与 example 一致) -->
<div id="detail-modal-overlay" onclick="if(event.target===this) closeDetailModal()" class="bg-black/90 backdrop-blur-sm transition-opacity duration-200 opacity-0">
    <div id="detail-modal-content" class="relative w-[1000px] max-w-[95vw] max-h-[90vh] bg-[#1a1a1a] border border-[#333] overflow-hidden shadow-2xl flex flex-col md:flex-row transform scale-95 transition-transform duration-200" onclick="event.stopPropagation()">
        <button id="detail-modal-close" onclick="closeDetailModal()" class="absolute top-6 right-6 z-50 w-10 h-10 border border-[#444] text-[#555] hover:text-[#C93728] hover:border-[#C93728] transition flex items-center justify-center rounded-sm"><i class="ph ph-x text-lg"></i></button>
        <div id="modal-media-area" class="relative w-full md:w-[60%] h-[40vh] md:h-full bg-black border-r border-[#333] min-h-[320px] group">
            <div id="modal-resource-tabs" class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3 p-1 bg-black/60 rounded border border-[#333] opacity-100 transition duration-300 hidden"></div>
            <div id="modal-three-container" class="absolute inset-0 hidden"></div>
            <div id="modal-image-view" class="absolute inset-0 flex items-center justify-center hidden">
                <img id="modal-hero-img" onerror="this.src='data:image/svg+xml,%3Csvg width=\'300\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%231e293b\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%23D4AF37\' font-family=\'serif\' font-size=\'20\'%3E暂无影像%3C/text%3E%3C/svg%3E'" class="max-w-full max-h-full object-contain" src="" alt="">
                <div id="modal-image-nav" class="hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 pointer-events-none">
                    <button class="pointer-events-auto w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition"><i class="ph ph-caret-left"></i></button>
                    <button class="pointer-events-auto w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition"><i class="ph ph-caret-right"></i></button>
                </div>
                <div id="modal-image-dots" class="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 hidden"></div>
            </div>
            <div id="modal-video-view" class="absolute inset-0 hidden bg-black flex items-center justify-center">
                <video id="modal-hero-video" class="w-full h-full hidden" controls playsinline preload="metadata"></video>
                <iframe id="modal-hero-embed" class="w-full h-full hidden" allowfullscreen></iframe>
            </div>
        </div>
        <div class="w-full md:w-[40%] overflow-y-auto bg-[#1a1a1a] p-8 relative">
            <div class="mt-8">
                <h2 id="modal-detail-title" class="text-4xl font-calligraphy text-[#D4AF37] mb-4 leading-tight" style="font-family: 'Ma Shan Zheng';"></h2>
                <div id="modal-detail-tags" class="flex flex-wrap gap-2 mb-8"></div>
                <div class="grid grid-cols-2 gap-y-6 gap-x-4 text-sm mb-10 bg-[#111] p-6 border border-[#333]">
                    <div><div class="text-[#555] text-xs uppercase tracking-widest mb-1">Era</div><div id="modal-detail-era" class="text-[#C93728] font-bold"></div></div>
                    <div><div class="text-[#555] text-xs uppercase tracking-widest mb-1">Material</div><div id="modal-detail-material" class="text-[#aaa]"></div></div>
                    <div><div class="text-[#555] text-xs uppercase tracking-widest mb-1">Size</div><div id="modal-detail-size" class="text-[#666]"></div></div>
                    <div><div class="text-[#555] text-xs uppercase tracking-widest mb-1">Museum</div><div id="modal-detail-museum" class="text-[#666]"></div></div>
                </div>
                <div class="space-y-8">
                    <div>
                        <h4 class="text-[#D4AF37] font-bold mb-2 flex items-center text-sm">前世传奇</h4>
                        <p id="modal-detail-intro" class="text-[#999] text-sm leading-7 text-justify"></p>
                    </div>
                    <div>
                        <h4 class="text-[#D4AF37] font-bold mb-2 flex items-center text-sm">美学密码</h4>
                        <p id="modal-detail-value" class="text-[#888] text-sm leading-7 italic border-l border-[#333] pl-3"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="module">
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    window.THREE = THREE;

    // --- 百度百炼（千帆）API 与问的 AI ---
    const QIANFAN_API_KEY = "sk-eaf4f44b572d4dd8b06985249cc798cf";
    const QIANFAN_MODEL = "ernie-3.5-8k"; // 可选: ernie-speed-8k, ernie-4.0-8k-latest 等
    let currentArtifactContext = null;

    async function callQianfan(prompt, systemInstruction = "") {
        const url = "https://qianfan.baidubce.com/v2/chat/completions";
        const messages = [];
        if (systemInstruction) {
            messages.push({ role: "system", content: systemInstruction });
        }
        messages.push({ role: "user", content: prompt });
        const payload = { model: QIANFAN_MODEL, messages };
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${QIANFAN_API_KEY}`
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            const text = data.choices?.[0]?.message?.content;
            if (text) return text;
            if (data.error?.message) return `请求异常：${data.error.message}`;
            return "抱歉，AI 暂时无法回应。";
        } catch (error) {
            console.error("百度百炼 API Error:", error);
            return "网络连接异常，请稍后再试。";
        }
    }

    window.toggleChatWindow = () => {
        document.getElementById('chat-window').classList.toggle('active');
        if (document.getElementById('chat-window').classList.contains('active')) {
            if (state.avatar3D) {
                state.avatar3D.isPaused = false;
                if (state.avatar3D.startRender) state.avatar3D.startRender();
            }
            setTimeout(() => document.getElementById('chat-input').focus(), 100);
        }
    };

    function addSystemMessage(text) {
        const msgContainer = document.getElementById('chat-messages');
        msgContainer.innerHTML += `<div class="chat-msg system">${text}</div>`;
        msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    window.sendChatMessage = async () => {
        const input = document.getElementById('chat-input');
        const msgContainer = document.getElementById('chat-messages');
        const text = input.value.trim();
        if (!text) return;

        msgContainer.innerHTML += `<div class="chat-msg user">${text}</div>`;
        input.value = '';
        msgContainer.scrollTop = msgContainer.scrollHeight;

        const loadingId = `loading-${Date.now()}`;
        msgContainer.innerHTML += `
            <div id="${loadingId}" class="chat-msg ai">
                <span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>
            </div>
        `;
        msgContainer.scrollTop = msgContainer.scrollHeight;

        let systemPrompt = "你是一位博学多才的中国古代文物专家和博物馆导览员。请用优雅、通俗且略带文采的中文回答用户关于历史、文物、文化的问题。";
        let finalPrompt = text;
        if (currentArtifactContext) {
            systemPrompt += `\n【重要：当前上下文】
            用户正在观看文物：【${currentArtifactContext.name}】
            - 年代：${currentArtifactContext.era}
            - 出土地：${currentArtifactContext.city}
            - 简介：${currentArtifactContext.intro}
            - 价值：${currentArtifactContext.value}
            指令：用户的问题如果包含“它”、“这个”、“历史”等指代词，必须基于上述文物信息回答。`;
        }

        const reply = await callQianfan(finalPrompt, systemPrompt);
        document.getElementById(loadingId).remove();
        msgContainer.innerHTML += `<div class="chat-msg ai">${typeof marked !== 'undefined' ? marked.parse(reply) : reply}</div>`;
        msgContainer.scrollTop = msgContainer.scrollHeight;
    };

    (function bindChatInput() {
        const chatInput = document.getElementById('chat-input');
        if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') window.sendChatMessage(); });
        else setTimeout(bindChatInput, 50);
    })();

    const MODEL_BASE = '/model/';
    const MODEL_MAP = { bronze: 'qingtongniu.glb', ceramic: 'pipa.glb', jingjurenwu: 'jingjurenwu.glb', yuhaungdadi: 'yuhaungdadi.glb', bingmayong: 'bingmayong.glb', menggubao: 'menggubao.glb', pipa: 'pipa.glb', qingtongniu: 'qingtongniu.glb' };

    function getArtifactResources(item) {
        const res = [];
        const imgs = item.images && item.images.length ? item.images : (item.img ? [item.img] : []);
        if (imgs.length) res.push({ type: 'image', urls: imgs, label: '图片' });
        if (item.video) res.push({ type: 'video', url: item.video, label: '视频' });
        if (item.modelType) res.push({ type: 'model', modelType: item.modelType, label: '3D 模型' });
        return res;
    }

    // 1. 恢复完整的非遗数量数据 (关键)
    /* 各省真实非遗数量（国家级+省级代表性项目约数，来源：文旅统计） */
    const cultureDataMap = {
        '浙江省': 258, '山东省': 213, '江苏省': 189, '广东省': 177, '河南省': 165,
        '四川省': 161, '福建省': 154, '云南省': 145, '湖南省': 137, '河北省': 131,
        '山西省': 128, '安徽省': 119, '湖北省': 116, '江西省': 111, '陕西省': 107,
        '贵州省': 99, '北京市': 144, '广西壮族自治区': 92, '辽宁省': 88,
        '内蒙古自治区': 76, '新疆维吾尔自治区': 83, '西藏自治区': 89,
        '甘肃省': 68, '青海省': 73, '黑龙江省': 49, '吉林省': 54,
        '上海市': 96, '重庆市': 98, '天津市': 67, '宁夏回族自治区': 28,
        '海南省': 32, '台湾省': 85, '香港特别行政区': 12, '澳门特别行政区': 8
    };

    const artifactDatabase = {
        '郑州市': [
            { id: 'zz_01', name: '莲鹤方壶', city: '郑州市', tags: ['春秋', '国宝', '青铜巅峰'], era: '春秋中期', material: '青铜', size: '高126cm', museum: '河南博物院', intro: '壶身满饰蟠螭纹，双耳为镂空龙形，器腹四角各有一飞龙。最精彩处在于壶盖顶端伫立一只展翅欲飞的仙鹤，神态清新自然。', desc: '1923年出土于河南新郑李家楼郑公大墓。', value: '郭沫若先生称其为“时代精神之象征”，代表了春秋时期思想解放、百家争鸣的时代风貌。', img: 'https://www.chnmus.net/webfile/ch_assets/images/index/Lotus-and-crane-rectangular-hu-2.png', images: ['https://www.chnmus.net/webfile/ch_assets/images/index/Lotus-and-crane-rectangular-hu-2.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lianhe_Fanghu.jpg/800px-Lianhe_Fanghu.jpg'], modelType: 'bronze', video: 'https://www.bilibili.com/video/BV1tm421T7F3' },
            { id: 'zz_02', name: '杜岭方鼎', city: '郑州市', tags: ['商代', '王权象征'], era: '商代早期', material: '青铜', size: '高100cm', museum: '河南博物院', intro: '体量巨大，纹饰粗犷，是目前发现最早的青铜重器之一。', desc: '1974年出土于郑州商城遗址。', value: '被誉为“中华第一鼎”，证明了郑州作为商代早期都城“毫都”的地位。', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Duling_Square_Ding_2019-12.jpg/450px-Duling_Square_Ding_2019-12.jpg', modelType: 'bronze', video: 'https://www.bilibili.com/video/BV1GJ411x7h7' }
        ],
        '洛阳市': [
            { id: 'ly_01', name: '三彩骆驼', city: '洛阳市', tags: ['唐代', '丝绸之路'], era: '盛唐', material: '铅釉陶', size: '高87cm', museum: '洛阳博物馆', intro: '骆驼昂首嘶鸣，背负丝绸，釉色华丽，生动再现了丝绸之路上商旅驼队的景象。', desc: '出土于洛阳关林唐墓。', value: '是研究中西文化交流和唐代陶瓷艺术的珍贵实物。', img: 'https://www.chnmus.net/webfile/ch_assets/images/index/首页-藏品地点-三彩骆驼-洛阳.png', modelType: 'ceramic', video: 'https://www.bilibili.com/video/BV1GJ411x7h7' },
            { id: 'ly_02', name: '卢舍那大佛', city: '洛阳市', tags: ['唐代', '石刻巅峰'], era: '唐高宗', material: '石灰岩', size: '通高17.14m', museum: '龙门石窟', intro: '面容丰腴典雅，双目宁静，呈现出一种神秘而慈悲的微笑。', desc: '据记载，大佛的形象据说是根据武则天的容貌雕刻的。', value: '被誉为“东方的蒙娜丽莎”，展现了盛唐时期海纳百川的胸怀。', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Longmen_Grottoes_Panorama_-_Fengxian_Temple_-_2014.07.jpg/600px-Longmen_Grottoes_Panorama_-_Fengxian_Temple_-_2014.07.jpg', modelType: null, video: 'https://www.bilibili.com/video/BV1Db411q7Bp' }
        ],
        '安阳市': [
            { id: 'ay_01', name: '妇好鸮尊', city: '安阳市', tags: ['商代', '战神'], era: '商代晚期', material: '青铜', size: '高46.3cm', museum: '国家博物馆', intro: '呈昂首挺胸的猫头鹰（鸮）形，纹饰繁缛，工艺精湛。', desc: '1976年出土于殷墟妇好墓。', value: '妇好是中国历史上第一位女将军，此尊是其军权的象征。', img: 'https://www.chnmus.net/webfile/ch_assets/images/index/owl-shaped-bronze-zun.png', modelType: 'bronze', video: 'https://www.bilibili.com/video/BV1xb411q7C9' },
            { id: 'ay_02', name: '后母戊鼎', city: '安阳市', tags: ['商代', '镇国之宝'], era: '商代晚期', material: '青铜', size: '重832kg', museum: '国家博物馆', intro: '造型厚重雄伟，气势恢宏，是世界迄今出土最大最重的青铜礼器。', desc: '1939年出土于安阳武官村。', value: '代表了商代青铜铸造技术的最高成就。', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Houmuwu_Ding.jpg', modelType: 'bronze', video: 'https://www.bilibili.com/video/BV1Db411q7Bp' }
        ]
    };

    function getRandomArtifacts(cityName) {
        return [{ id: `rand_${Math.random()}`, name: `${cityName}古陶罐`, city: cityName, tags: ['新石器'], era: '约前5000年', material: '红陶', size: '高20cm', museum: `${cityName}博物馆`, intro: '造型古朴，线条流畅，反映了当时先民的生活审美。', desc: '出土于当地早期人类遗址。', value: '见证了人类从游猎走向定居的文明进程。', img: 'https://via.placeholder.com/300x200/e0e0e0/888888?text=Ancient+Pottery', modelType: null, video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }];
    }

    const state = { viewMode: 'national', chart: null, threeScene: null, avatar3D: null, currentGalleryCity: '' };
    state.chart = echarts.init(document.getElementById('map-container'), null, { renderer: 'canvas', useDirtyRect: true });

    const sharedDracoLoader = new DRACOLoader();
    sharedDracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    sharedDracoLoader.preload();

    const createGLTFLoader = () => {
        const loader = new GLTFLoader();
        loader.setDRACOLoader(sharedDracoLoader);
        return loader;
    };

    const setLoadingScreenVisible = (visible) => {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) return;
        if (visible) {
            loadingScreen.style.display = 'flex';
            loadingScreen.style.opacity = '1';
        } else {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                if (loadingScreen.style.opacity === '0') {
                    loadingScreen.style.display = 'none';
                }
            }, 400);
        }
    };

    const deepDispose = (root) => {
        if (!root) return;
        root.traverse((child) => {
            if (!child.isMesh) return;
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                materials.forEach((mat) => {
                    Object.keys(mat).forEach((key) => {
                        const value = mat[key];
                        if (value && value.isTexture) value.dispose();
                    });
                    if (mat.dispose) mat.dispose();
                });
            }
        });
    };

    /* 地图配色：古玉青铜材质色系 */
    const mapColorRange = ['#0a1f1a', '#122e26', '#1a4a3e', '#1f5548', '#2a6050', '#3d6a48', '#5a6a42', '#8b6b3e'];
    const nationalOption = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(5, 8, 6, 0.97)',
            borderColor: 'rgba(198,165,107,0.5)', borderWidth: 1, padding: [18, 22],
            textStyle: { fontFamily: 'Noto Serif SC', color: '#e0d5a3' },
            extraCssText: 'box-shadow: 0 12px 40px rgba(0,0,0,0.8), 0 0 1px rgba(198,165,107,0.3), inset 0 0 30px rgba(198,165,107,0.04); border-radius: 2px; backdrop-filter: blur(8px);',
            formatter: p => `<div style="font-weight:bold;font-size:16px;margin-bottom:8px;font-family:'Noto Serif SC',serif;color:#e0d5a3;letter-spacing:0.1em;">${p.name}</div><div style="font-size:11px;color:#C6A56B;letter-spacing:0.05em;">馆藏瑰宝 · ${p.value || 0} 件</div>`
        },
        visualMap: {
            min: 0, max: 260, left: 80, bottom: 50,
            text: ['繁', '简'],
            textStyle: { color: '#C6A56B', fontFamily: 'Noto Serif SC', fontSize: 11 },
            inRange: { color: mapColorRange },
            calculable: true
        },
        geo: {
            map: 'china', roam: false, zoom: 1.2,
            animation: false,
            silent: false,
            progressive: 100,
            label: {
                show: true,
                color: 'rgba(200,184,138,0.85)',
                fontSize: 11,
                fontFamily: 'Noto Serif SC',
                fontWeight: 'bold',
                textBorderColor: 'rgba(0,0,0,0.8)',
                textBorderWidth: 3,
                textShadowColor: 'rgba(0,0,0,0.7)',
                textShadowBlur: 6
            },
                itemStyle: {
                    // 地图填充：对角线性渐变，模拟玉石色泽变化
                    areaColor: {
                        type: 'linear',
                        x: 0, y: 0, x2: 1, y2: 1,
                        colorStops: [{
                            offset: 0, color: '#143e38' // 左上：深青玉
                        }, {
                            offset: 1, color: '#09201d' // 右下：墨玉
                        }]
                    },
                    // 边框：哑光古金，细线显贵重
                    borderColor: '#C6A56B',
                    borderWidth: 0.8,
                    // 阴影：黑色外阴影，悬浮实体感
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 15,
                    shadowOffsetY: 5
            },
            emphasis: {
                disabled: false,
                itemStyle: {
                    // 选中高亮：玉石通透发光
                    areaColor: {
                        type: 'linear',
                        x: 0, y: 0, x2: 1, y2: 1,
                        colorStops: [{
                            offset: 0, color: '#1d5c52'
                        }, {
                            offset: 1, color: '#0f3a34'
                        }]
                    },
                    borderColor: '#D4AF37',
                    borderWidth: 1,
                    shadowBlur: 25,
                    shadowColor: 'rgba(0, 0, 0, 0.9)'
                },
                label: {
                    show: true, color: '#e8dcc8', fontWeight: 'bold', fontSize: 13,
                    textBorderColor: 'rgba(0,0,0,0.8)', textBorderWidth: 2,
                    textShadowColor: 'rgba(198,165,107,0.4)', textShadowBlur: 8
                }
            }
        },
        series: [{
            type: 'map',
            geoIndex: 0,
            progressive: 200,
            data: Object.keys(cultureDataMap).map(k=>({name:k, value:cultureDataMap[k]}))
        }]
    };



    // --- 新增：背景山水轻微视差 ---
    function initBackgroundParallax() {
        const layers = [
            { el: document.getElementById('bg-mountain-layer'), strength: 10 },
            { el: document.getElementById('bg-glow-layer'), strength: 6 },
            { el: document.getElementById('bg-noise-layer'), strength: 3 }
        ].filter(l => l.el);

        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        document.addEventListener('mousemove', (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            targetX = (e.clientX - cx) / cx;
            targetY = (e.clientY - cy) / cy;
        });

        const frameInterval = 1000 / 30;
        let lastFrame = 0;
        function animate(now) {
            requestAnimationFrame(animate);
            if (now - lastFrame < frameInterval) return;
            lastFrame = now;
            if (window.__mapInteracting) return;

            currentX += (targetX - currentX) * 0.05;
            currentY += (targetY - currentY) * 0.05;

            layers.forEach(({ el, strength }) => {
                if (!el) return;
                const tx = currentX * strength;
                const ty = currentY * strength * 0.5;
                el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
            });
        }
        requestAnimationFrame(animate);
    }

    async function initAvatar3D() {
        const container = document.getElementById('avatar-stand-container');
        if (!container) return;

        const scene = new THREE.Scene();
        const width = container.clientWidth;
        const height = container.clientHeight;

        // 调整相机视角，使其看起来像站在屏幕前
        const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
        camera.position.set(0, 0, 4.0); // 调整相机位置，平视中心

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" }); // 性能优化：关闭抗锯齿
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // 性能优化：限制像素比
        renderer.shadowMap.enabled = false; // 性能优化：关闭阴影
        container.appendChild(renderer.domElement);

        const avatarState = { scene, camera, renderer, isPaused: false, isAnimating: false, startRender: null };
        state.avatar3D = avatarState;

        // 不阻挡底图/按钮点击，交互通过全局捕获来判断是否点中模型
        renderer.domElement.style.pointerEvents = 'none';
        renderer.domElement.style.cursor = 'default';

        // 射线检测器
        const raycaster = new THREE.Raycaster();
        const rayMouse = new THREE.Vector2();

        // 新增：悬停状态变量，用于精确控制模型缩放
        let isHoveringModel = false;
        const tooltip = document.getElementById('avatar-tooltip');
        let model = null;
        let baseScale = 1;
        let basePosY = 0;
        let pickTarget = null;
        const lastPointer = { x: 0, y: 0, clientX: 0, clientY: 0 };

        function updatePointer(event) {
            if (window.__mapInteracting) return;
            const rect = renderer.domElement.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            rayMouse.set(x, y);
            lastPointer.x = x;
            lastPointer.y = y;
            lastPointer.clientX = event.clientX;
            lastPointer.clientY = event.clientY;
        }

        function updateHoverState(hit) {
            if (hit === isHoveringModel) return; // 状态未变不写 DOM
            isHoveringModel = hit;
            if (hit) {
                renderer.domElement.style.cursor = 'pointer';
                if (tooltip) {
                    tooltip.style.opacity = '1';
                    tooltip.style.left = (lastPointer.clientX + 15) + 'px';
                    tooltip.style.top = (lastPointer.clientY - 25) + 'px';
                }
            } else {
                renderer.domElement.style.cursor = 'default';
                if (tooltip) tooltip.style.opacity = '0';
            }
        }

        let _boundingBox = null;
        const _intersectPoint = new THREE.Vector3();
        function performRaycast() {
            if (!pickTarget) {
                updateHoverState(false);
                return false;
            }
            raycaster.setFromCamera(rayMouse, camera);
            if (!_boundingBox) _boundingBox = new THREE.Box3().setFromObject(pickTarget);
            // 用 Ray.intersectBox 判断射线与包围盒相交（Three.js 标准 API），避免遍历模型网格
            const hit = raycaster.ray.intersectBox(_boundingBox, _intersectPoint);
            const hitResult = hit !== null;
            updateHoverState(hitResult);
            return hitResult;
        }

        let _canvasRect = null;
        let _canvasRectTime = 0;
        function getCachedCanvasRect() {
            const now = performance.now();
            if (!_canvasRect || now - _canvasRectTime > 500) {
                _canvasRect = renderer.domElement.getBoundingClientRect();
                _canvasRectTime = now;
            }
            return _canvasRect;
        }
        function isPointerInsideCanvas(event) {
            const r = getCachedCanvasRect();
            return event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;
        }

        // 节流射线检测：每120ms最多一次
        let _lastRayTime = 0;
        let _pendingMoveEvent = null;
        let _rayThrottleId = 0;

        // 悬停时仅更新 tooltip 位置，用 rAF 合并避免卡顿
        let _tooltipRAF = 0;
        function scheduleTooltipPosition() {
            if (_tooltipRAF || !isHoveringModel || !tooltip) return;
            _tooltipRAF = requestAnimationFrame(() => {
                _tooltipRAF = 0;
                if (!isHoveringModel || !tooltip) return;
                tooltip.style.left = (lastPointer.clientX + 15) + 'px';
                tooltip.style.top = (lastPointer.clientY - 25) + 'px';
            });
        }
        document.addEventListener('mousemove', (event) => {
            if (window.__mapInteracting) return;
            updatePointer(event);
            if (!isPointerInsideCanvas(event)) {
                if (isHoveringModel) updateHoverState(false);
                return;
            }
            scheduleTooltipPosition();
            _pendingMoveEvent = event;
            const now = performance.now();
            if (now - _lastRayTime >= 120) {
                _lastRayTime = now;
                performRaycast();
                _pendingMoveEvent = null;
            } else if (!_rayThrottleId) {
                _rayThrottleId = setTimeout(() => {
                    _rayThrottleId = 0;
                    if (_pendingMoveEvent) {
                        _lastRayTime = performance.now();
                        updatePointer(_pendingMoveEvent);
                        performRaycast();
                        _pendingMoveEvent = null;
                    }
                }, 120 - (now - _lastRayTime));
            }
        });

        // 全局点击捕获：只有点中模型才拦截
        document.addEventListener('click', (event) => {
            if (window.__mapInteracting) return;
            if (!isPointerInsideCanvas(event)) return;
            updatePointer(event);
            const hit = performRaycast();
            if (!hit || !model) return;
            event.preventDefault();
            event.stopPropagation();
            if (event.stopImmediatePropagation) event.stopImmediatePropagation();
            toggleChatWindow();
        }, true);

        // 灯光·强烈暖金侧逆光勾勒轮廓
        const ambientLight = new THREE.AmbientLight(0x2a2a28, 0.5);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xfff0dd, 1.5);
        dirLight.position.set(2, 1.5, 4);
        scene.add(dirLight);
        const rimLight = new THREE.DirectionalLight(0xE8C547, 3.2); // 暖金侧逆光
        rimLight.position.set(-3, 2, -2.5);
        scene.add(rimLight);
        const fillLight = new THREE.DirectionalLight(0xC6A56B, 1.0);
        fillLight.position.set(1, -0.5, 2);
        scene.add(fillLight);

        const loader = createGLTFLoader();
        let mixer = null;
        const clock = new THREE.Clock();
        let mixerAccum = 0;

        try {
            setLoadingScreenVisible(true);
            // 加载李白模型
            const gltf = await loader.loadAsync('/model/李白.glb');
            model = gltf.scene;

            // 自动缩放与定位
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);

            model.position.sub(center); // 居中
            // model.position.y -= size.y * 0.5; // 不再过度下移，保持居中
            model.position.y -= size.y * 0.85; // 用户要求：大幅下移模型位置

            // 调整缩放 - 半身像特写 (稍微缩小一点，适应小容器)
            baseScale = 2.4 / maxDim;
            model.scale.setScalar(baseScale);

            // 旋转至正面 (修正朝向)
            model.rotation.y = -Math.PI / 2; // 旋转-90度以面向屏幕

            // 材质优化 (优化：关闭阴影投射和接收)
            model.traverse(c => {
                if(c.isMesh) {
                    c.castShadow = false;
                    c.receiveShadow = false;
                    // 保持原有材质特性，略微增强
                }
            });

            scene.add(model);
            pickTarget = model;
            basePosY = model.position.y;
            _boundingBox = new THREE.Box3().setFromObject(model);

            // 脚下软阴影（Drop Shadow）·稳稳站于意境空间 (Canvas 渐变)
            const shadowCanvas = document.createElement('canvas');
            shadowCanvas.width = 128; shadowCanvas.height = 128;
            const sCtx = shadowCanvas.getContext('2d');
            const grd = sCtx.createRadialGradient(64, 64, 10, 64, 64, 60);
            grd.addColorStop(0, 'rgba(0,0,0,0.8)');
            grd.addColorStop(1, 'rgba(0,0,0,0)');
            sCtx.fillStyle = grd;
            sCtx.fillRect(0, 0, 128, 128);
            const shadowTexture = new THREE.CanvasTexture(shadowCanvas);

            const shadowGeo = new THREE.PlaneGeometry(3.0, 3.0);
            const shadowMat = new THREE.MeshBasicMaterial({
                map: shadowTexture,
                transparent: true,
                opacity: 0.6,
                depthWrite: false,
                side: THREE.DoubleSide,
                blending: THREE.MultiplyBlending
            });
            const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
            const modelBox = new THREE.Box3().setFromObject(model);
            shadowMesh.rotation.x = -Math.PI / 2;
            shadowMesh.position.set(0, modelBox.min.y - 0.01, 0);
            scene.add(shadowMesh);

            renderer.compile(scene, camera);

            // 动画处理
            if (gltf.animations && gltf.animations.length) {
                mixer = new THREE.AnimationMixer(model);
                // 优先寻找 idle 或 wait 动画，否则播放第一个
                let clip = gltf.animations.find(a => /idle|wait|stand/i.test(a.name)) || gltf.animations[0];
                if (clip) {
                    const action = mixer.clipAction(clip);
                    action.play();
                }
            }

            // 交互：鼠标跟随 (让李白看鼠标) - 增加节流
            const mouse = new THREE.Vector2();
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            let lastMouseX = 0, lastMouseY = 0;
            let currentScaleMult = 1.0; // 当前缩放倍率 (动画插值用)

            document.addEventListener('mousemove', (event) => {
                // 简单的节流：只有变动超过一定阈值才更新
                if (Math.abs(event.clientX - lastMouseX) > 5 || Math.abs(event.clientY - lastMouseY) > 5) {
                    mouse.x = (event.clientX - windowHalfX) / 2;
                    mouse.y = (event.clientY - windowHalfY) / 2;
                    lastMouseX = event.clientX;
                    lastMouseY = event.clientY;
                }
            });

            const mixerFrameInterval = 1 / 30;
            function animate(now) {
                requestAnimationFrame(animate);
                if (window.__mapInteracting) return;
                const delta = clock.getDelta();
                if (mixer) {
                    mixerAccum += delta;
                    if (mixerAccum >= mixerFrameInterval) {
                        mixer.update(mixerAccum);
                        mixerAccum = 0;
                    }
                }

                // 鼠标跟随动画 (平滑插值)
                // 目标旋转角度：基于鼠标位置微调 Y 轴 (左右) 和 X 轴 (抬头低头)
                const targetRotationY = -Math.PI / 2 + (mouse.x * 0.0005); // 基础 -90 度 + 鼠标偏移
                const targetRotationX = (mouse.y * 0.0005);

                // 使用简单的线性插值 (Lerp) 平滑过渡
                model.rotation.y += (targetRotationY - model.rotation.y) * 0.05;
                model.rotation.x += (targetRotationX - model.rotation.x) * 0.05;

                // 呼吸效果 (无论有无动画都叠加一点，增加生气)
                const time = clock.elapsedTime;
                model.position.y = basePosY + Math.sin(time * 2) * 0.0003; // 轻微上下浮动

                // --- 核心修改：基于 Raycaster 的精确悬停缩放 ---
                // 只有当 isHoveringModel 为 true 时，才放大
                if (window.__mapInteracting && isHoveringModel) updateHoverState(false);
                const targetMult = 1.0; // 不再悬停放大
                currentScaleMult += (targetMult - currentScaleMult) * 0.1; // 平滑插值
                model.scale.setScalar(baseScale * currentScaleMult);

                if (!avatarState.isPaused) renderer.render(scene, camera);
            }
            avatarState.startRender = () => {
                if (avatarState.isAnimating) return;
                avatarState.isAnimating = true;
                requestAnimationFrame(animate);
            };
            avatarState.startRender();

            // 窗口大小改变时调整
            window.addEventListener('resize', () => {
                const w = container.clientWidth;
                const h = container.clientHeight;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            });

        } catch (error) {
            console.error("Failed to load avatar model:", error);
            // 失败时隐藏容器，避免空白遮挡
            container.style.display = 'none';
        } finally {
            setLoadingScreenVisible(false);
        }
    }



    // --- 新增：文化氛围系统 (诗词/节气) ---
    function initCulturalAtmosphere() {
        // 1. 节气计算 (简化版，真实项目可用 LunarCalendar 库)
        const solarTerms = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
        const now = new Date();
        const year = now.getFullYear();
        // 粗略估算：每年节气日期相对固定，这里随机展示一个临近的或者直接展示“今夕何夕”
        // 为了展示效果，我们用一个更具文化感的日期格式
        const termIndex = Math.floor((now.getMonth() * 2) + (now.getDate() > 15 ? 1 : 0));
        const currentTerm = solarTerms[termIndex % 24];

        const badge = document.getElementById('solar-badge');
        if(badge) {
            document.getElementById('term-text').innerText = currentTerm;
            // 简单的干支纪年模拟 (2025是乙巳)
            const ganzhi = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'][(year - 4) % 10] +
                           ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'][(year - 4) % 12];
            document.getElementById('term-date').innerText = `${ganzhi}年`;
            badge.classList.remove('hidden');
        }

        // 2. 诗词轮播
        const poems = [
            ["天地玄黄", "宇宙洪荒"],
            ["云腾致雨", "露结为霜"],
            ["关关雎鸠", "在河之洲"],
            ["溯洄从之", "道阻且长"],
            ["青青子衿", "悠悠我心"],
            ["呦呦鹿鸣", "食野之苹"],
            ["大漠孤烟", "长河落日"],
            ["落霞孤鹜", "秋水长天"]
        ];
        const container = document.getElementById('poetry-container');
        if (!container) return;
        const lines = container.querySelectorAll('.poetry-line');

        let poemIdx = 0;

        function showNextPoem() {
            // 淡出
            lines.forEach(l => l.classList.remove('active'));

            setTimeout(() => {
                // 切换内容
                const curPoem = poems[poemIdx];
                lines[0].innerText = curPoem[0];
                lines[1].innerText = curPoem[1];

                // 淡入
                lines.forEach((l, i) => {
                    setTimeout(() => l.classList.add('active'), i * 800); // 错落出现
                });

                poemIdx = (poemIdx + 1) % poems.length;
            }, 3000); // 等待淡出完成
        }

        // 初始启动
        setTimeout(showNextPoem, 1000);
        setInterval(showNextPoem, 12000); // 每 12 秒切换一次
    }

    // --- 视觉特效：锐利金点粒子（极小、高亮、缓升） ---
    function initVisualEffects() {
        const canvas = document.getElementById('gold-particle-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let w, h;
        const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);

        const COUNT = 200;
        const particles = [];

        function resetParticle(p, fromBottom) {
            p.x = Math.random() * w;
            p.y = fromBottom ? h + Math.random() * 20 : Math.random() * h;
            // 极细金沙：0.8px ~ 2px，不要大圆点
            p.size = 0.8 + Math.random() * 1.2;
            // 极缓慢上升
            p.vy = -(0.04 + Math.random() * 0.12);
            // 微弱水平漂移
            p.driftPhase = Math.random() * Math.PI * 2;
            p.driftSpeed = 0.12 + Math.random() * 0.25;
            p.driftAmp = 0.08 + Math.random() * 0.25;
            // 低透明度，呼吸般忽明忽暗
            p.baseAlpha = 0.25 + Math.random() * 0.35;
            p.breathPhase = Math.random() * Math.PI * 2;
            p.breathSpeed = 0.3 + Math.random() * 0.8;
            return p;
        }

        for (let i = 0; i < COUNT; i++) particles.push(resetParticle({}, false));

        let lastT = 0;
        function animate(now) {
            requestAnimationFrame(animate);
            if (now - lastT < 30) return;
            lastT = now;

            ctx.clearRect(0, 0, w, h);
            // 使用 overlay 混合模式，让粒子更自然地融入背景
            ctx.globalCompositeOperation = 'screen';

            const t = now * 0.001;

            for (const p of particles) {
                // 极缓慢上浮
                p.y += p.vy;
                p.x += Math.sin(t * p.driftSpeed + p.driftPhase) * p.driftAmp;

                if (p.y < -10) resetParticle(p, true);

                // 呼吸闪烁
                const breath = 0.7 + 0.3 * Math.sin(t * p.breathSpeed + p.breathPhase);
                const alpha = p.baseAlpha * breath;

                // 香槟古金，柔和不刺眼
                ctx.globalAlpha = alpha;
                ctx.fillStyle = '#D4AF37';
                ctx.fillRect(p.x, p.y, p.size, p.size);
            }

            ctx.globalCompositeOperation = 'source-over';
        }
        requestAnimationFrame(animate);
    }


    // --- 文化探灯光标 ---
    function initCursorLantern() {
        const lantern = document.getElementById('cursor-lantern');
        const dot = document.getElementById('cursor-lantern-dot');
        if (!lantern || !dot) return;

        let mx = window.innerWidth / 2, my = window.innerHeight / 2;
        const move = (x, y) => {
            mx = x; my = y;
            const t = `translate(${x}px,${y}px) translate(-50%,-50%)`;
            lantern.style.transform = t;
            dot.style.transform = t;
        };
        move(mx, my);

        document.addEventListener('mousemove', e => move(e.clientX, e.clientY), { passive: true });
        document.addEventListener('mouseover', e => {
            const t = e.target;
            if (t.closest && (t.closest('a, button, input, [onclick], .cursor-pointer, .fab-contribute, .artifact-card-3d, .holo-card'))) {
                lantern.classList.add('hovering');
            } else {
                lantern.classList.remove('hovering');
            }
        });
    }

    // --- 山影视差（已改为纯 CSS 120s 极慢动画，此处仅占位） ---
    function initMountainParallax() {}

    // --- 点击·水波四散逼真涟漪 ---
    function initClickOutsideEffect() {
        document.addEventListener('click', (e) => {
            const t = e.target;
            if (t.closest('#artifact-drawer, #detail-modal-overlay, #contribute-modal, #model-popout-overlay, #chat-window, .fab-contribute, #search-results, #loading-screen')) return;
            if (t.closest('a, button, input, textarea, select')) return;
            if (t.closest('.magic-input')) return;
            const r = document.createElement('div');
            r.className = 'click-ripple';
            r.style.left = e.clientX + 'px';
            r.style.top = e.clientY + 'px';
            const splash = document.createElement('div');
            splash.className = 'click-ripple-splash';
            r.appendChild(splash);
            for (let i = 0; i < 4; i++) {
                const w = document.createElement('div');
                w.className = 'click-ripple-wave';
                r.appendChild(w);
            }
            document.body.appendChild(r);
            setTimeout(() => r.remove(), 1400);
        });
    }

    let effectsInited = false;
    const initEffectsOnce = () => {
        if (effectsInited) return;
        effectsInited = true;
        initCulturalAtmosphere();
        initAvatar3D();
        initVisualEffects(); // Renamed from initGoldParticles
        initCursorLantern();
        initMountainParallax();
        initClickOutsideEffect();
    };

    const loadMapData = () => {
        const primaryUrl = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json';
        fetch(primaryUrl)
            .then(res => { if(!res.ok) throw new Error('Network response was not ok'); return res.json(); })
            .then(geoJson => {
                echarts.registerMap('china', geoJson);
                window.provMap = {};
                geoJson.features.forEach(f => { if(f.properties.level==='province') window.provMap[f.properties.name]=f.properties.adcode });
                state.chart.setOption(nationalOption);
                window.__mapChart = state.chart;
                window.__viewMode = 'national';
                window.__provCoords = {};
                geoJson.features.forEach(f => {
                    const name = f.properties?.name; if(!name) return;
                    const geom = f.geometry; if(!geom?.coordinates) return;
                    let ring = geom.type==='MultiPolygon' ? geom.coordinates[0][0] : geom.coordinates[0];
                    if(!ring || !ring.length) return;
                    const lng = ring.reduce((s,c)=>s+c[0],0)/ring.length;
                    const lat = ring.reduce((s,c)=>s+c[1],0)/ring.length;
                    window.__provCoords[name] = [lng, lat];
                });
                window.dispatchEvent(new CustomEvent('mapReady'));
                document.getElementById('loading-screen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loading-screen').style.display = 'none';
                    initEffectsOnce();
                }, 1000);
            })
            .catch(err => {
                console.error("Map data load failed:", err);
                document.getElementById('loading-text').innerText = "网络连接异常，请重试";
                document.getElementById('retry-btn').classList.remove('hidden');
            });
    };
    loadMapData();

    // 地图交互性能：拖拽/缩放期间暂停重特效
    window.__mapInteracting = false;
    let mapInteractTimer = null;
    let lastMapInteractAt = 0;
    const MAP_INTERACT_GRACE = 220;
    const setMapInteracting = (on) => {
        if (mapInteractTimer) clearTimeout(mapInteractTimer);
        if (on) {
            lastMapInteractAt = performance.now();
            window.__mapInteracting = true;
            mapInteractTimer = setTimeout(() => {
                if (performance.now() - lastMapInteractAt >= MAP_INTERACT_GRACE) {
                    window.__mapInteracting = false;
                }
            }, MAP_INTERACT_GRACE + 40);
        } else {
            window.__mapInteracting = false;
        }
    };
    if (state.chart) {
        state.chart.on('georoam', () => setMapInteracting(true));
        const zr = state.chart.getZr();
        if (zr) {
            zr.on('mousedown', () => setMapInteracting(true));
            zr.on('mouseup', () => setMapInteracting(false));
            zr.on('mousewheel', () => setMapInteracting(true));
            zr.on('globalout', () => setMapInteracting(false));
        }
    }
    const resetMapInteracting = () => setMapInteracting(false);
    window.addEventListener('mouseup', resetMapInteracting, { passive: true });
    window.addEventListener('pointerup', resetMapInteracting, { passive: true });
    window.addEventListener('pointercancel', resetMapInteracting, { passive: true });
    window.addEventListener('blur', resetMapInteracting, { passive: true });
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') resetMapInteracting();
    });
    document.addEventListener('pointerdown', (e) => {
        const mapEl = document.getElementById('map-container');
        if (mapEl && !mapEl.contains(e.target)) resetMapInteracting();
    }, { passive: true });

    state.chart.on('click', params => {
        if (!params.name) return;
        if (state.viewMode === 'national') {
            const adcode = window.provMap[params.name];
            if(adcode) loadProvince(params.name, adcode);
        } else if (state.viewMode === 'province') {
            openGallery(params.name);
            // 点击后清除高亮（selectedMode:false 已禁用选中，此处作为兜底）
            requestAnimationFrame(() => {
                if (state.chart && state.viewMode === 'province') {
                    try {
                        const opt = state.chart.getOption();
                        const data = opt?.series?.[0]?.data;
                        if (data) for (let i = 0; i < data.length; i++) state.chart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: i });
                    } catch (_) {}
                }
            });
        }
    });

    function loadProvince(name, adcode) {
        state.viewMode = 'province';
        window.__viewMode = 'province';
        window.dispatchEvent(new CustomEvent('viewModeChanged', { detail: 'province' }));
        fetch(`https://geo.datav.aliyun.com/areas_v3/bound/${adcode}_full.json`)
            .then(res => res.json())
            .then(geoJson => {
                echarts.registerMap(name, geoJson);

                // 1. 生成随机数据 (模拟各市非遗数量)
                const cityData = geoJson.features.map(f => ({
                    name: f.properties.name,
                    value: Math.floor(Math.random() * 300) + 50 // 50-350 之间的随机数
                }));

                // 2. 计算当前省份的最大值，用于动态调整 VisualMap
                const maxVal = Math.max(...cityData.map(d => d.value));

                state.chart.setOption({
                    geo: {
                        map: name, roam: false, zoom: 0.8, center: undefined,
                        itemStyle: {
                            areaColor: {
                                type: 'linear',
                                x: 0, y: 0, x2: 1, y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#143e38'
                                }, {
                                    offset: 1, color: '#09201d'
                                }]
                            },
                            borderColor: '#C6A56B',
                            borderWidth: 0.8,
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowBlur: 15,
                            shadowOffsetY: 5
                        },
                        label: { show: true, color: '#c8b88a', fontFamily: 'Noto Serif SC', fontWeight: 'bold',
                            textBorderColor: 'rgba(0,0,0,0.6)', textBorderWidth: 2 },
                        emphasis: {
                            itemStyle: {
                                areaColor: {
                                    type: 'linear',
                                    x: 0, y: 0, x2: 1, y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#1d5c52'
                                    }, {
                                        offset: 1, color: '#0f3a34'
                                    }]
                                },
                                borderColor: '#D4AF37',
                                borderWidth: 1,
                                shadowBlur: 25,
                                shadowColor: 'rgba(0, 0, 0, 0.9)'
                            },
                            label: { show: true, color: '#e8dcc8', textBorderColor: 'rgba(0,0,0,0.8)', textBorderWidth: 2,
                                textShadowColor: 'rgba(198,165,107,0.4)', textShadowBlur: 8 }
                        }
                    },
                    visualMap: {
                        min: 0, max: maxVal,
                        left: 80, bottom: 50,
                        text: ['繁', '简'],
                        textStyle: { color: '#e0d5a3', fontFamily: 'Noto Serif SC' },
                        inRange: { color: mapColorRange },
                        calculable: true
                    },
                    series: [{
                        type: 'map',
                        map: name,
                        geoIndex: 0,
                        selectedMode: false,
                        data: cityData
                    }]
                });

                const btn = document.getElementById('btn-back-national');
                btn.style.display = 'block';
                btn.animate([{ opacity: 0, transform: 'translate(-50%, 20px)' }, { opacity: 1, transform: 'translate(-50%, 0)' }], { duration: 500, fill: 'forwards' });
            });
    }

    function initTiltEffect() {
        const cards = document.querySelectorAll('.artifact-card-3d');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const cx = rect.width / 2;
                const cy = rect.height / 2;
                const rx = (y - cy) / cy * -5;
                const ry = (x - cx) / cx * 5;
                card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    const fallbackImg = "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23D4AF37' font-family='serif' font-size='20'%3E暂无影像%3C/text%3E%3C/svg%3E";

    function renderGalleryGrid(cityName, searchTerm) {
        let artifacts = artifactDatabase[cityName];
        if (!artifacts) return;
        const term = (searchTerm || '').trim().toLowerCase();
        const filtered = term ? artifacts.filter(item =>
            item.name.toLowerCase().includes(term) ||
            (item.intro && item.intro.toLowerCase().includes(term)) ||
            (item.tags && item.tags.some(t => t.toLowerCase().includes(term)))
        ) : artifacts;

        document.getElementById('gallery-count').innerText = filtered.length;
        const grid = document.getElementById('gallery-grid');
        grid.innerHTML = filtered.map((item, idx) => {
            const origIndex = artifacts.indexOf(item);
            return `
            <div class="artifact-card-3d h-32 cursor-pointer group" onclick="openDetail('${cityName}', ${origIndex})">
                <div class="artifact-card-inner w-full h-full flex p-4 relative overflow-hidden">
                    <div class="w-24 h-24 flex-shrink-0 relative border border-[#444] group-hover:border-[#D4AF37] transition-colors duration-200 bg-[#111]">
                        <img src="${item.img}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300">
                        ${item.modelType ? '<div class="absolute top-1 right-1 w-5 h-5 bg-[#C93728] text-[8px] text-white flex items-center justify-center font-bold">3D</div>' : ''}
                    </div>
                    <div class="flex-1 ml-5 flex flex-col justify-center relative z-10">
                        <h4 class="text-xl font-bold text-[#D4AF37] font-serif mb-2 group-hover:text-white transition-colors duration-200">${item.name}</h4>
                        <div class="text-xs text-[#888] line-clamp-2 leading-relaxed mb-2">${item.intro.substring(0,35)}...</div>
                        <div class="flex flex-wrap gap-1">
                            ${item.tags.map(t => `<span class="px-2 py-0.5 tag-ink text-[#D4AF37] text-[10px]">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        }).join('');
        setTimeout(initTiltEffect, 50);
    }

    function openGallery(cityName) {
        const drawer = document.getElementById('artifact-drawer');
        const galleryView = document.getElementById('view-gallery');
        const detailView = document.getElementById('view-detail');
        galleryView.classList.remove('hidden');
        detailView.classList.add('hidden');

        let artifacts = artifactDatabase[cityName];
        if (!artifacts) { artifacts = getRandomArtifacts(cityName); artifactDatabase[cityName] = artifacts; }

        document.getElementById('gallery-city-name').innerText = cityName;
        document.getElementById('drawer-search').value = '';
        state.currentGalleryCity = cityName;
        renderGalleryGrid(cityName, '');
        drawer.classList.add('active');
        document.body.classList.add('drawer-open');
    }

    let currentResources = [];
    let currentResourceIndex = 0;
    let currentImageIndex = 0;
    let imageCarouselTimer = null;

    let modelPopoutClickHandler = null;

    function openModelPopout(modelType) {
        const overlay = document.getElementById('model-popout-overlay');
        const container = document.getElementById('model-popout-container');
        const backdrop = document.getElementById('model-popout-backdrop');
        overlay.classList.remove('hidden');
        container.innerHTML = '';
        init3D(modelType, container);
        if (modelPopoutClickHandler) document.removeEventListener('click', modelPopoutClickHandler);
        modelPopoutClickHandler = (e) => {
            if (!container.contains(e.target) && e.target.id !== 'model-popout-close-btn' && !e.target.closest('#model-popout-close-btn')) {
                closeModelPopout();
            }
        };
        setTimeout(() => document.addEventListener('click', modelPopoutClickHandler), 0);
        backdrop.onclick = () => closeModelPopout();
    }

    function closeModelPopout() {
        document.getElementById('model-popout-overlay').classList.add('hidden');
        if (modelPopoutClickHandler) {
            document.removeEventListener('click', modelPopoutClickHandler);
            modelPopoutClickHandler = null;
        }
        document.getElementById('model-popout-backdrop').onclick = null;
        if (state.threeScene) state.threeScene.isPaused = true;
        if (currentResources.length > 0 && currentResourceIndex > 0) {
            currentResourceIndex = 0;
            const tabsEl = document.getElementById('modal-resource-tabs');
            tabsEl.querySelectorAll('button').forEach((b, j) => {
                b.className = `w-8 h-8 flex items-center justify-center transition border ${j === 0 ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'bg-black/50 border-[#444] text-gray-400 hover:text-white hover:border-[#D4AF37]'}`;
            });
            showResource(currentResources[0], 0);
        }
    }

    document.getElementById('model-popout-close-btn')?.addEventListener('click', (e) => { e.stopPropagation(); closeModelPopout(); });

    function showResource(resource, index) {
        const modalThree = document.getElementById('modal-three-container');
        const modalImgView = document.getElementById('modal-image-view');
        const modalVideoView = document.getElementById('modal-video-view');
        const modalImg = document.getElementById('modal-hero-img');
        const modalVideo = document.getElementById('modal-hero-video');
        const modalEmbed = document.getElementById('modal-hero-embed');
        const modalImgNav = document.getElementById('modal-image-nav');
        const modalImgDots = document.getElementById('modal-image-dots');

        if (imageCarouselTimer) { clearInterval(imageCarouselTimer); imageCarouselTimer = null; }
        modalThree.classList.add('hidden');
        modalImgView.classList.add('hidden');
        modalVideoView.classList.add('hidden');
        if (state.threeScene) state.threeScene.isPaused = true;
        // 立即停止所有视频播放，避免切换 tab 后声音继续
        if (modalVideo) { modalVideo.pause(); modalVideo.removeAttribute('src'); modalVideo.load(); }
        if (modalEmbed) { modalEmbed.src = 'about:blank'; }

        if (resource.type === 'image') {
            if (imageCarouselTimer) { clearInterval(imageCarouselTimer); imageCarouselTimer = null; }
            modalImgView.classList.remove('hidden');
            const urls = resource.urls || [];
            currentImageIndex = 0;
            modalImg.src = urls[0] || '';
            modalImgNav.classList.toggle('hidden', urls.length <= 1);
            modalImgDots.innerHTML = urls.length <= 1 ? '' : urls.map((_, i) => `<span class="w-2 h-2 rounded-full cursor-pointer ${i === 0 ? 'bg-[#8E2C22]' : 'bg-gray-400/60'}" data-i="${i}"></span>`).join('');
            modalImgDots.classList.toggle('hidden', urls.length <= 1);
            if (urls.length > 1) {
                imageCarouselTimer = setInterval(() => {
                    currentImageIndex = (currentImageIndex + 1) % urls.length;
                    modalImg.src = urls[currentImageIndex];
                    modalImgDots.querySelectorAll('span').forEach((s, i) => { s.className = `w-2 h-2 rounded-full cursor-pointer ${i === currentImageIndex ? 'bg-[#8E2C22]' : 'bg-gray-400/60'}`; });
                }, 4000);
            }
        } else if (resource.type === 'video') {
            modalVideoView.classList.remove('hidden');
            const url = resource.url || '';
            const isEmbed = /bilibili\.com|youtube\.com|youtu\.be/i.test(url);
            if (isEmbed) {
                modalVideo.classList.add('hidden');
                modalEmbed.classList.remove('hidden');
                let embedUrl = url;
                if (/bilibili\.com\/video\/(BV\w+)/i.test(url)) embedUrl = 'https://player.bilibili.com/player.html?bvid=' + url.match(/BV\w+/)[0] + '&high_quality=1';
                else if (/youtube\.com\/watch\?v=(\w+)/i.test(url)) embedUrl = 'https://www.youtube.com/embed/' + url.match(/v=(\w+)/)[1];
                else if (/youtu\.be\/(\w+)/i.test(url)) embedUrl = 'https://www.youtube.com/embed/' + url.match(/youtu\.be\/(\w+)/)[1];
                modalEmbed.src = embedUrl;
            } else {
                modalEmbed.classList.add('hidden');
                modalEmbed.src = '';
                modalVideo.classList.remove('hidden');
                modalVideo.src = url;
                modalVideo.load();
            }
        } else if (resource.type === 'model') {
            modalThree.classList.add('hidden');
            openModelPopout(resource.modelType);
        }
    }

    function activateResourceTab(i, tabsEl) {
        if (!tabsEl) tabsEl = document.getElementById('modal-resource-tabs');
        if (!tabsEl || !Array.isArray(currentResources) || currentResources.length === 0) return;
        if (i < 0 || i >= currentResources.length) return;
        currentResourceIndex = i;
        tabsEl.querySelectorAll('button[data-i]').forEach((b, j) => {
            b.className = `w-8 h-8 flex items-center justify-center transition border ${j === i ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'bg-black/50 border-[#444] text-gray-400 hover:text-white hover:border-[#D4AF37]'}`;
        });
        showResource(currentResources[i], i);
    }

    function bindResourceTabs(tabsEl) {
        if (!tabsEl) return;
        const handle = (e) => {
            const btn = e.target.closest('button[data-i]');
            if (!btn) return;
            e.preventDefault();
            e.stopPropagation();
            const i = parseInt(btn.dataset.i, 10);
            if (Number.isNaN(i)) return;
            activateResourceTab(i, tabsEl);
        };
        tabsEl.addEventListener('pointerdown', handle);
        tabsEl.addEventListener('click', handle);
    }

    function handleResourceTabEvent(e) {
        const btn = e.target.closest('#modal-resource-tabs button[data-i]');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        const i = parseInt(btn.dataset.i, 10);
        if (Number.isNaN(i)) return;
        const tabsEl = btn.parentElement;
        activateResourceTab(i, tabsEl);
    }
    document.addEventListener('pointerdown', handleResourceTabEvent, true);
    document.addEventListener('click', handleResourceTabEvent, true);

    window.switchResourceTab = (i) => {
        const index = Number(i);
        if (Number.isNaN(index)) return;
        activateResourceTab(index, document.getElementById('modal-resource-tabs'));
    };

    window.openDetail = function(cityName, index) {
        const item = artifactDatabase[cityName][index];
        const overlay = document.getElementById('detail-modal-overlay');
        const tabsEl = document.getElementById('modal-resource-tabs');

        currentArtifactContext = item;
        if (state.threeScene) {
            state.threeScene.isPaused = false;
            if (state.threeScene.startRender) state.threeScene.startRender();
        }
        if (document.getElementById('chat-window').classList.contains('active')) {
            addSystemMessage(`已连接上下文：【${item.name}】`);
        }

        document.getElementById('modal-detail-title').innerText = item.name;
        document.getElementById('modal-detail-tags').innerHTML = item.tags.map(t => `<span class="px-3 py-1 bg-[#222] border border-[#444] text-[#D4AF37] text-xs">${t}</span>`).join('');
        document.getElementById('modal-detail-era').innerText = item.era || '-';
        document.getElementById('modal-detail-material').innerText = item.material || '-';
        document.getElementById('modal-detail-size').innerText = item.size || '-';
        document.getElementById('modal-detail-museum').innerText = item.museum || '-';
        document.getElementById('modal-detail-intro').innerText = item.intro || item.desc || '-';
        document.getElementById('modal-detail-value').innerText = item.value || '-';

        currentResources = getArtifactResources(item);
        currentResourceIndex = 0;

        if (currentResources.length === 0) {
            tabsEl.classList.add('hidden');
            document.getElementById('modal-image-view').classList.remove('hidden');
            document.getElementById('modal-hero-img').src = 'https://via.placeholder.com/400x300/e6e2d3/8e8e8e?text=暂无图片';
        } else {
            tabsEl.classList.toggle('hidden', currentResources.length <= 1);
            tabsEl.innerHTML = currentResources.map((r, i) => {
                const icon = r.type === 'image' ? 'ph-image' : r.type === 'video' ? 'ph-video' : 'ph-cube';
                return `<button type="button" onclick="switchResourceTab(${i})" class="w-8 h-8 flex items-center justify-center transition border ${i === 0 ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'bg-black/50 border-[#444] text-gray-400 hover:text-white hover:border-[#D4AF37]'}" data-i="${i}" title="${r.label}"><i class="ph ${icon}"></i></button>`;
            }).join('');
            tabsEl.classList.toggle('hidden', currentResources.length <= 1);
            bindResourceTabs(tabsEl);
            showResource(currentResources[0], 0);
        }

        overlay.classList.add('active');
    };

    document.getElementById('modal-image-nav')?.addEventListener('click', (e) => {
        const res = currentResources[currentResourceIndex];
        if (!res || res.type !== 'image' || !res.urls || res.urls.length <= 1) return;
        const btn = e.target.closest('button');
        if (!btn) return;
        if (imageCarouselTimer) { clearInterval(imageCarouselTimer); imageCarouselTimer = null; }
        const dir = btn.querySelector('.ph-caret-left') ? -1 : 1;
        currentImageIndex = (currentImageIndex + dir + res.urls.length) % res.urls.length;
        document.getElementById('modal-hero-img').src = res.urls[currentImageIndex];
        document.getElementById('modal-image-dots').querySelectorAll('span').forEach((s, i) => {
            s.className = `w-2 h-2 rounded-full cursor-pointer ${i === currentImageIndex ? 'bg-[#8E2C22]' : 'bg-gray-400/60'}`;
        });
        imageCarouselTimer = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % res.urls.length;
            document.getElementById('modal-hero-img').src = res.urls[currentImageIndex];
            document.getElementById('modal-image-dots').querySelectorAll('span').forEach((s, i) => { s.className = `w-2 h-2 rounded-full cursor-pointer ${i === currentImageIndex ? 'bg-[#8E2C22]' : 'bg-gray-400/60'}`; });
        }, 4000);
    });
    document.getElementById('modal-image-dots')?.addEventListener('click', (e) => {
        const dot = e.target.closest('span[data-i]');
        if (!dot) return;
        const i = parseInt(dot.dataset.i, 10);
        const res = currentResources[currentResourceIndex];
        if (!res || res.type !== 'image' || !res.urls) return;
        if (imageCarouselTimer) { clearInterval(imageCarouselTimer); imageCarouselTimer = null; }
        currentImageIndex = i;
        document.getElementById('modal-hero-img').src = res.urls[i];
        document.getElementById('modal-image-dots').querySelectorAll('span').forEach((s, j) => {
            s.className = `w-2 h-2 rounded-full cursor-pointer ${j === i ? 'bg-[#8E2C22]' : 'bg-gray-400/60'}`;
        });
        imageCarouselTimer = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % res.urls.length;
            document.getElementById('modal-hero-img').src = res.urls[currentImageIndex];
            document.getElementById('modal-image-dots').querySelectorAll('span').forEach((s, j) => { s.className = `w-2 h-2 rounded-full cursor-pointer ${j === currentImageIndex ? 'bg-[#8E2C22]' : 'bg-gray-400/60'}`; });
        }, 4000);
    });

    window.closeDetailModal = function() {
        currentArtifactContext = null;
        if (document.getElementById('chat-window').classList.contains('active')) {
            addSystemMessage("已断开文物连接");
        }
        document.getElementById('detail-modal-overlay').classList.remove('active');
        closeModelPopout();
        if (imageCarouselTimer) { clearInterval(imageCarouselTimer); imageCarouselTimer = null; }
        const v = document.getElementById('modal-hero-video');
        if (v) { v.pause(); v.removeAttribute('src'); v.load(); }
        const emb = document.getElementById('modal-hero-embed');
        if (emb) emb.src = 'about:blank';
        if (state.threeScene) state.threeScene.isPaused = true;
    };

    window.backToGallery = function() {
        currentArtifactContext = null;
        if (document.getElementById('chat-window').classList.contains('active')) {
            addSystemMessage("已断开文物连接");
        }
        document.getElementById('view-detail').classList.add('hidden');
        document.getElementById('view-gallery').classList.remove('hidden');
        document.getElementById('view-gallery').animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
        if (state.threeScene) state.threeScene.isPaused = true;
    };

    window.closeDrawer = function() {
        currentArtifactContext = null;
        document.getElementById('artifact-drawer').classList.remove('active');
        document.body.classList.remove('drawer-open');
        window.closeDetailModal();
        if (state.threeScene) state.threeScene.isPaused = true;
        if (state.chart && state.viewMode === 'province') {
            try {
                state.chart.dispatchAction({ type: 'downplay', seriesIndex: 0 });
            } catch (_) {
                state.chart.dispatchAction({ type: 'downplay', seriesIndex: 0 });
            }
        }
    }

    async function init3D(type, containerEl) {
        const container = containerEl || document.getElementById('three-container');
        const url = MODEL_MAP[type] ? MODEL_BASE + MODEL_MAP[type] : (type.endsWith('.glb') ? MODEL_BASE + type : MODEL_BASE + 'jingjurenwu.glb');

        if (!state.threeScene) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 0.1, 100);
            camera.position.set(0, 1.5, 4);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.0;
            container.appendChild(renderer.domElement);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.minDistance = 1;
            controls.maxDistance = 8;
            controls.target.set(0, 0, 0);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); scene.add(ambientLight);
            const dirLight = new THREE.DirectionalLight(0xfff5e6, 2); dirLight.position.set(5, 5, 5); scene.add(dirLight);
            const backLight = new THREE.DirectionalLight(0xD4AF37, 1.5); backLight.position.set(-5, 5, -5); scene.add(backLight);

            state.threeScene = { scene, camera, renderer, controls, mesh: null, glowBase: null, glowBeam: null, isPaused: false, isAnimating: false, startRender: null };
            const animate = () => {
                requestAnimationFrame(animate);
                if (state.threeScene.controls) state.threeScene.controls.update();
                if (!state.threeScene.isPaused) renderer.render(scene, camera);
            };
            state.threeScene.startRender = () => {
                if (state.threeScene.isAnimating) return;
                state.threeScene.isAnimating = true;
                requestAnimationFrame(animate);
            };
            state.threeScene.startRender();
        } else {
            state.threeScene.isPaused = false;
            if (state.threeScene.renderer.domElement.parentNode !== container) {
                state.threeScene.renderer.domElement.remove();
                container.appendChild(state.threeScene.renderer.domElement);
                if (state.threeScene.controls) state.threeScene.controls.dispose();
                state.threeScene.controls = new OrbitControls(state.threeScene.camera, state.threeScene.renderer.domElement);
                state.threeScene.controls.enableDamping = true;
                state.threeScene.controls.dampingFactor = 0.05;
                state.threeScene.controls.minDistance = 1;
                state.threeScene.controls.maxDistance = 8;
                state.threeScene.controls.target.set(0, 0, 0);
            }
            state.threeScene.renderer.setSize(container.clientWidth, container.clientHeight);
            if (state.threeScene.startRender) state.threeScene.startRender();
        }

        if (state.threeScene && state.threeScene.mesh) {
            state.threeScene.scene.remove(state.threeScene.mesh);
            deepDispose(state.threeScene.mesh);
            state.threeScene.mesh = null;
            if (state.threeScene.glowBase) {
                state.threeScene.scene.remove(state.threeScene.glowBase);
                state.threeScene.glowBase.geometry.dispose();
                state.threeScene.glowBase.material.dispose();
                state.threeScene.glowBase = null;
            }
            if (state.threeScene.glowBeam) {
                state.threeScene.scene.remove(state.threeScene.glowBeam);
                state.threeScene.glowBeam.geometry.dispose();
                state.threeScene.glowBeam.material.dispose();
                state.threeScene.glowBeam = null;
            }
        }

        const loader = createGLTFLoader();
        try {
            setLoadingScreenVisible(true);
            const gltf = await loader.loadAsync(url);
            const obj = gltf.scene;
            const box = new THREE.Box3().setFromObject(obj);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            obj.position.sub(center);
            obj.scale.setScalar(1.2 / maxDim);
            obj.traverse(c => { if(c.isMesh && c.material) { c.material.metalness = 0; c.material.roughness = 0.6; } });
            state.threeScene.mesh = obj;
            state.threeScene.scene.add(obj);
            if (state.threeScene.glowBase) {
                state.threeScene.scene.remove(state.threeScene.glowBase);
                state.threeScene.glowBase.geometry.dispose();
                state.threeScene.glowBase.material.dispose();
                state.threeScene.glowBase = null;
            }
            if (state.threeScene.glowBeam) {
                state.threeScene.scene.remove(state.threeScene.glowBeam);
                state.threeScene.glowBeam.geometry.dispose();
                state.threeScene.glowBeam.material.dispose();
                state.threeScene.glowBeam = null;
            }
            const by = -size.y * 0.5 - 0.05;
            const glowGeo = new THREE.RingGeometry(0.4, 0.7, 32);
            const glowMat = new THREE.MeshBasicMaterial({
                color: 0xD4AF37, transparent: true, opacity: 0.35,
                side: THREE.DoubleSide, depthWrite: false
            });
            const glowBase = new THREE.Mesh(glowGeo, glowMat);
            glowBase.rotation.x = -Math.PI / 2;
            glowBase.position.set(0, by, 0);
            state.threeScene.scene.add(glowBase);
            state.threeScene.glowBase = glowBase;
            // 垂直向上金色光束（文物苏醒感）
            const beamGeo = new THREE.CylinderGeometry(0.06, 0.18, 0.5, 16);
            const beamMat = new THREE.MeshBasicMaterial({
                color: 0xD4AF37, transparent: true, opacity: 0.22,
                depthWrite: false, side: THREE.DoubleSide
            });
            const glowBeam = new THREE.Mesh(beamGeo, beamMat);
            glowBeam.position.set(0, by + 0.25, 0);
            state.threeScene.scene.add(glowBeam);
            state.threeScene.glowBeam = glowBeam;
            if (state.threeScene.controls) state.threeScene.controls.target.set(0, 0, 0);
            state.threeScene.renderer.compile(state.threeScene.scene, state.threeScene.camera);
        } catch (e) {
            console.error('[3D] 模型加载失败:', url, e);
        } finally {
            setLoadingScreenVisible(false);
        }
    }

    const searchInput = document.getElementById('global-search');
    const searchResults = document.getElementById('search-results');
    if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim().toLowerCase();
        if (!val) { searchResults.classList.add('hidden'); return; }
        let hits = [];
        for (let city in artifactDatabase) {
            artifactDatabase[city].forEach((item, idx) => {
                const matchName = item.name && item.name.toLowerCase().includes(val);
                const matchIntro = item.intro && item.intro.toLowerCase().includes(val);
                const matchTags = item.tags && item.tags.some(t => t.toLowerCase().includes(val));
                if (matchName || matchIntro || matchTags) hits.push({ ...item, city, idx });
            });
        }
        if (hits.length > 0) {
            searchResults.innerHTML = hits.map(h => `
                <div class="flex items-center gap-3 p-3 hover:bg-[#222] cursor-pointer transition border-b border-[#333] last:border-0" onclick="handleSearchResultClick('${h.city}', ${h.idx})">
                    <img src="${h.img}" class="w-10 h-10 object-cover opacity-80 border border-[#333]" onerror="this.src='${fallbackImg}'">
                    <div><div class="text-[#D4AF37] font-bold text-sm">${h.name}</div><div class="text-xs text-[#666]">${h.city}</div></div>
                </div>
            `).join('');
            searchResults.classList.remove('hidden');
        } else {
            searchResults.classList.add('hidden');
        }
    });
    searchInput.addEventListener('focus', () => { if (searchResults.innerHTML.trim()) searchResults.classList.remove('hidden'); });
    searchInput.addEventListener('blur', () => { setTimeout(() => searchResults.classList.add('hidden'), 180); });
    }

    window.handleSearchResultClick = function(city, index) {
        if (searchResults) searchResults.classList.add('hidden');
        if (searchInput) searchInput.value = '';
        openGallery(city);
        openDetail(city, index);
    };

    const drawerSearch = document.getElementById('drawer-search');
    const drawerSearchBtn = document.getElementById('drawer-search-btn');
    const doDrawerSearch = () => { if (state.currentGalleryCity && drawerSearch) renderGalleryGrid(state.currentGalleryCity, drawerSearch.value); };
    if (drawerSearch) drawerSearch.addEventListener('input', doDrawerSearch);
    if (drawerSearch) drawerSearch.addEventListener('keypress', (e) => { if (e.key === 'Enter') doDrawerSearch(); });
    if (drawerSearchBtn) drawerSearchBtn.addEventListener('click', doDrawerSearch);
    window.openContributeModal = () => { const modal = document.getElementById('contribute-modal'); const content = document.getElementById('modal-content'); if (modal && content) { modal.classList.remove('hidden'); modal.classList.add('flex'); modal.style.display = 'flex'; setTimeout(() => { content.classList.remove('scale-95', 'opacity-0'); content.classList.add('scale-100', 'opacity-100'); }, 10); } };
    window.closeContributeModal = () => { const modal = document.getElementById('contribute-modal'); const content = document.getElementById('modal-content'); if (modal && content) { content.classList.remove('scale-100', 'opacity-100'); content.classList.add('scale-95', 'opacity-0'); setTimeout(() => { modal.classList.add('hidden'); modal.classList.remove('flex'); modal.style.display = 'none'; }, 300); } };
    const fabBtn = document.getElementById('fab-contribute-btn');
    if (fabBtn) fabBtn.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); window.openContributeModal(); });
    window.handleContributeSubmit = (e) => { e.preventDefault(); alert('承蒙厚爱，您的贡献已记录。'); closeContributeModal(); };
    const btnBack = document.getElementById('btn-back-national');
    if (btnBack) btnBack.onclick = function() {
        state.viewMode = 'national';
        window.__viewMode = 'national';
        window.dispatchEvent(new CustomEvent('viewModeChanged', { detail: 'national' }));
        // 完全清空图表后重新设置，彻底消除上次点击省份的黄色高亮残留
        state.chart.setOption(nationalOption, true);
        this.style.display = 'none';
        window.closeDrawer();
    };
    window.addEventListener('resize', () => { state.chart.resize(); if(state.threeScene) { const c = state.threeScene.renderer.domElement.parentElement; if(c) { state.threeScene.camera.aspect = c.clientWidth/c.clientHeight; state.threeScene.camera.updateProjectionMatrix(); state.threeScene.renderer.setSize(c.clientWidth, c.clientHeight); if(state.threeScene.controls) state.threeScene.controls.update(); } } });
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const contributeModal = document.getElementById('contribute-modal');
        if (contributeModal && !contributeModal.classList.contains('hidden')) { window.closeContributeModal(); return; }
        if (!document.getElementById('model-popout-overlay').classList.contains('hidden')) closeModelPopout();
        else if (document.getElementById('detail-modal-overlay').classList.contains('active')) window.closeDetailModal();
    });
</script>
</body>
</html>
```

### File: src/henanMuseum.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>河南文化博物馆</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #111;
        }

        #overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #1a1a1a;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #ccc;
            z-index: 999;
            transition: opacity 0.5s;
        }

        h1 {
            font-weight: 300;
            letter-spacing: 4px;
            text-transform: uppercase;
            font-size: 24px;
            margin-bottom: 20px;
            color: #fff;
        }

        .btn {
            border: 1px solid rgba(255,255,255,0.3);
            padding: 12px 30px;
            cursor: pointer;
            font-size: 14px;
            letter-spacing: 2px;
            transition: all 0.3s;
            background: transparent;
            color: #fff;
        }

        .btn:hover {
            background: #fff;
            color: #000;
        }

        .tips {
            margin-top: 30px;
            font-size: 12px;
            color: #666;
            line-height: 1.6;
            text-align: center;
        }

        #ui-layer {
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: rgba(255,255,255,0.3);
            font-size: 12px;
            pointer-events: none;
            letter-spacing: 1px;
        }
    </style>

    <link href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css" rel="stylesheet">
    <script src="https://cdn.bootcdn.net/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/PointerLockControls.js"></script>

</head>
<body>

<div id="overlay">
    <h1>Henan Cultural Museum</h1>
    <button id="startBtn" class="btn">ENTER EXHIBITION</button>
    <div class="tips">
        <p>WASD 移动 · 鼠标 环视</p>
        <p>已调整：书法挂画、墙面石刻（河南传统文化楷书）</p>
    </div>
</div>

<div id="ui-layer">
    CENTRAL PLAINS CULTURE / HALL A
</div>

<script>
    const CONFIG = {
        hallWidth: 160,
        hallLength: 320,
        hallHeight: 80,

        colorWall: 0xe0e0e0,
        colorFloor: 0x2a2a2a,
        colorCeiling: 0xdddddd,
        colorStand: 0x1a1a1a,

        ambientIntensity: 0.15,
        spotIntensity: 1.8,
        fogDensity: 0.0025,
    };

    let scene, camera, renderer, controls;
    let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
    let prevTime = performance.now();
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();

    init();
    animate();

    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(CONFIG.colorWall);
        scene.fog = new THREE.FogExp2(CONFIG.colorWall, CONFIG.fogDensity);

        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, 17, 130);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        document.body.appendChild(renderer.domElement);

        buildArchitecture();
        buildExhibits();
        buildDecorations();
        setupLighting();
        setupControls();

        window.addEventListener('resize', onWindowResize);
    }

    function createCalligraphyTexture(textArray) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // 1. 背景
        ctx.fillStyle = '#fdfbf2';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 2. 边框
        ctx.strokeStyle = '#e0dcd0';
        ctx.lineWidth = 20;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // 3. 文字 (加粗，确保清晰)
        ctx.fillStyle = '#111'; // 更深的墨色
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // 字体回退机制，确保系统中有能显示中文的字体
        ctx.font = 'bold 90px "KaiTi", "STKaiti", "SimSun", "Microsoft YaHei", serif';

        const lineHeight = 120;
        const startY = 150;

        textArray.forEach((line, index) => {
            ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
        });

        // 4. 印章
        ctx.fillStyle = '#8b0000';
        const stampSize = 70;
        const stampY = startY + textArray.length * lineHeight + 60;
        ctx.fillRect(canvas.width / 2 - stampSize/2, stampY, stampSize, stampSize);

        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        // 必须设置 needsUpdate (虽然 CanvasTexture 构造函数通常会自动处理，但为了保险)
        texture.needsUpdate = true;
        return texture;
    }

    function createSingleCharCalligraphyTexture(char) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'transparent';
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#1a1a1a';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 380px "KaiTi", "STKaiti", "SimSun", "FZShuTi", "Microsoft YaHei", serif';
        ctx.fillText(char, canvas.width / 2, canvas.height / 2);

        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.needsUpdate = true;
        return texture;
    }

    function createWallCarvingTexture(lines) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        const stoneColor = '#5a5a5a';
        const carveColor = '#2a2a2a';
        const carveHighlight = '#3a3a3a';
        const paddingH = 50;
        const paddingV = 60;
        const maxWidth = canvas.width - paddingH * 2;
        const maxHeight = canvas.height - paddingV * 2;

        ctx.fillStyle = stoneColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const lineCount = lines.length;
        const lineHeight = maxHeight / lineCount;
        let fontSize = Math.min(180, Math.floor(lineHeight * 0.85));
        const kaiFont = '"LXGW WenKai", "霞鹜文楷", "KaiTi", "STKaiti", "SimSun", serif';

        ctx.font = fontSize + 'px ' + kaiFont;
        let maxTextWidth = 0;
        lines.forEach(line => {
            const w = ctx.measureText(line).width;
            if (w > maxTextWidth) maxTextWidth = w;
        });

        if (maxTextWidth > maxWidth && maxTextWidth > 0) {
            fontSize = Math.floor(fontSize * maxWidth / maxTextWidth);
        }

        ctx.font = fontSize + 'px ' + kaiFont;
        const startY = paddingV + lineHeight / 2;

        ctx.fillStyle = carveColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        lines.forEach((line, index) => {
            const y = startY + index * lineHeight;
            ctx.fillStyle = carveHighlight;
            ctx.fillText(line, canvas.width / 2 + 2, y + 2);
            ctx.fillStyle = carveColor;
            ctx.fillText(line, canvas.width / 2, y);
        });

        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.needsUpdate = true;
        return texture;
    }

    function buildArchitecture() {
        const floorGeo = new THREE.PlaneGeometry(CONFIG.hallWidth, CONFIG.hallLength);
        const floorMat = new THREE.MeshStandardMaterial({
            color: CONFIG.colorFloor,
            roughness: 0.25,
            metalness: 0.1,
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);

        const ceilGeo = new THREE.PlaneGeometry(CONFIG.hallWidth, CONFIG.hallLength);
        const ceilMat = new THREE.MeshStandardMaterial({
            color: CONFIG.colorCeiling,
            roughness: 1.0,
        });
        const ceiling = new THREE.Mesh(ceilGeo, ceilMat);
        ceiling.rotation.x = Math.PI / 2;
        ceiling.position.y = CONFIG.hallHeight;
        scene.add(ceiling);

        const wallMat = new THREE.MeshStandardMaterial({
            color: CONFIG.colorWall,
            roughness: 0.9,
        });

        const endWallGeo = new THREE.PlaneGeometry(CONFIG.hallWidth, CONFIG.hallHeight);
        const backWall = new THREE.Mesh(endWallGeo, wallMat);
        backWall.position.set(0, CONFIG.hallHeight/2, -CONFIG.hallLength/2);
        backWall.receiveShadow = true;
        scene.add(backWall);

        const frontWall = new THREE.Mesh(endWallGeo, wallMat);
        frontWall.rotation.y = Math.PI;
        frontWall.position.set(0, CONFIG.hallHeight/2, CONFIG.hallLength/2);
        scene.add(frontWall);

        const sideWallGeo = new THREE.PlaneGeometry(CONFIG.hallLength, CONFIG.hallHeight);
        const leftBase = new THREE.Mesh(sideWallGeo, wallMat);
        leftBase.rotation.y = Math.PI / 2;
        leftBase.position.set(-CONFIG.hallWidth/2 - 1, CONFIG.hallHeight/2, 0);
        scene.add(leftBase);

        const rightBase = new THREE.Mesh(sideWallGeo, wallMat);
        rightBase.rotation.y = -Math.PI / 2;
        rightBase.position.set(CONFIG.hallWidth/2 + 1, CONFIG.hallHeight/2, 0);
        scene.add(rightBase);

        const pillarWidth = 10;
        const pillarDepth = 6;
        const sectionCount = 6;
        const sectionSize = CONFIG.hallLength / sectionCount;

        const pillarMat = new THREE.MeshStandardMaterial({
            color: CONFIG.colorWall,
            roughness: 0.8,
        });

        const pillarGeo = new THREE.BoxGeometry(pillarDepth, CONFIG.hallHeight, 12);
        const beamGeo = new THREE.BoxGeometry(CONFIG.hallWidth, 8, 12);

        for(let i = 0; i <= sectionCount; i++) {
            const z = -CONFIG.hallLength/2 + (i * sectionSize);

            const pLeft = new THREE.Mesh(pillarGeo, pillarMat);
            pLeft.position.set(-CONFIG.hallWidth/2 + pillarDepth/2, CONFIG.hallHeight/2, z);
            pLeft.receiveShadow = true;
            pLeft.castShadow = true;
            scene.add(pLeft);

            const pRight = new THREE.Mesh(pillarGeo, pillarMat);
            pRight.position.set(CONFIG.hallWidth/2 - pillarDepth/2, CONFIG.hallHeight/2, z);
            pRight.receiveShadow = true;
            pRight.castShadow = true;
            scene.add(pRight);

            const beam = new THREE.Mesh(beamGeo, pillarMat);
            beam.position.set(0, CONFIG.hallHeight - 4, z);
            beam.castShadow = true;
            scene.add(beam);
        }
    }

    function buildDecorations() {
        // 1. 踢脚线
        const skirtingHeight = 2.5;
        const skirtingMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });

        const sideSkirtGeo = new THREE.BoxGeometry(1, skirtingHeight, CONFIG.hallLength);

        const leftSkirt = new THREE.Mesh(sideSkirtGeo, skirtingMat);
        leftSkirt.position.set(-CONFIG.hallWidth/2 + 0.6, skirtingHeight/2, 0);
        scene.add(leftSkirt);

        const rightSkirt = new THREE.Mesh(sideSkirtGeo, skirtingMat);
        rightSkirt.position.set(CONFIG.hallWidth/2 - 0.6, skirtingHeight/2, 0);
        scene.add(rightSkirt);

        const endSkirtGeo = new THREE.BoxGeometry(CONFIG.hallWidth, skirtingHeight, 1);
        const backSkirt = new THREE.Mesh(endSkirtGeo, skirtingMat);
        backSkirt.position.set(0, skirtingHeight/2, -CONFIG.hallLength/2 + 0.6);
        scene.add(backSkirt);

        // 2. 长椅
        const benchGeo = new THREE.BoxGeometry(40, 6, 15);
        const benchMat = new THREE.MeshStandardMaterial({
            color: 0x3d2817,
            roughness: 0.6
        });
        const legGeo = new THREE.BoxGeometry(38, 4, 13);
        const legMat = new THREE.MeshStandardMaterial({ color: 0x111111 });

        const benchZ = [-40, 40];
        benchZ.forEach(z => {
            const benchGroup = new THREE.Group();
            benchGroup.position.set(0, 5, z);

            const seat = new THREE.Mesh(benchGeo, benchMat);
            seat.castShadow = true;
            seat.receiveShadow = true;

            const base = new THREE.Mesh(legGeo, legMat);
            base.position.y = -4;

            benchGroup.add(seat);
            benchGroup.add(base);
            scene.add(benchGroup);
        });

        // 3. 墙面书法 - 位置修改
        const phrases = [
            ["一部", "河南史", "半部", "中国史"],      // 左侧
            ["伸手", "一摸", "春秋", "文化"],          // 左侧
            ["两脚", "一踩", "秦砖", "汉瓦"],          // 右侧
            ["华夏", "文明", "根在", "中原"]           // 右侧
        ];

        const frameGeo = new THREE.BoxGeometry(1, 26, 12);
        const frameMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5 });

        const artGeo = new THREE.PlaneGeometry(10, 24);

        const sectionCount = 6;
        const sectionSize = CONFIG.hallLength / sectionCount;

        // --- 核心修改：将索引调整为 3 和 4，这更靠近相机初始位置 (z=130) ---
        // 之前是 0, 1 (深处)，现在改成 3 (中间), 4 (近处)
        const artPositions = [
            { idx: 4, side: -1, textIdx: 0 }, // 左侧，近处
            { idx: 3, side: -1, textIdx: 1 }, // 左侧，稍远
            { idx: 4, side: 1,  textIdx: 2 }, // 右侧，近处
            { idx: 3, side: 1,  textIdx: 3 }, // 右侧，稍远
        ];

        artPositions.forEach(pos => {
            // 计算 Z 轴位置
            const z = -CONFIG.hallLength/2 + (pos.idx * sectionSize) + (sectionSize/2);
            const x = (CONFIG.hallWidth/2 - 0.6) * pos.side;

            // 画框
            const frame = new THREE.Mesh(frameGeo, frameMat);
            frame.position.set(x, 25, z);
            scene.add(frame);

            // 文字材质
            const textTexture = createCalligraphyTexture(phrases[pos.textIdx]);
            const artMat = new THREE.MeshBasicMaterial({
                map: textTexture,
                side: THREE.FrontSide,
                transparent: true // 防止边缘锯齿
            });

            // 画芯
            const art = new THREE.Mesh(artGeo, artMat);
            art.rotation.y = pos.side * Math.PI / 2;
            art.position.set(x - (pos.side * 0.55), 25, z);
            scene.add(art);
        });

        // 3.5 墙面石刻 - 河南传统文化（楷书刻字，贴墙）
        const carvingContent = [
            ['中原文物', '见证五千年', '中华文明'],
            ['天地之中', '华夏之源'],
            ['中原文化', '中华主根'],
            ['一片甲骨惊天下', '三商文明溯根源']
        ];

        const carvingPanelWidth = 10;
        const carvingPanelHeight = 48;
        const wallSurfaceX = CONFIG.hallWidth/2 + 1 - 0.01;
        const carvingPositions = [
            { idx: 1, side: -1, textIdx: 0 },
            { idx: 2, side: -1, textIdx: 1 },
            { idx: 5, side: -1, textIdx: 2 },
            { idx: 1, side: 1,  textIdx: 3 },
            { idx: 2, side: 1,  textIdx: 0 },
            { idx: 5, side: 1,  textIdx: 1 }
        ];

        carvingPositions.forEach(pos => {
            const z = -CONFIG.hallLength/2 + (pos.idx * sectionSize) + (sectionSize/2);
            const x = wallSurfaceX * pos.side;

            const carveTexture = createWallCarvingTexture(carvingContent[pos.textIdx]);
            const carveMat = new THREE.MeshStandardMaterial({
                map: carveTexture,
                color: 0xffffff,
                roughness: 0.8,
                metalness: 0.1
            });

            const carveGeo = new THREE.PlaneGeometry(carvingPanelWidth, carvingPanelHeight);
            const carvePlane = new THREE.Mesh(carveGeo, carveMat);
            carvePlane.rotation.y = pos.side * Math.PI / 2;
            carvePlane.position.set(x, CONFIG.hallHeight/2, z);
            scene.add(carvePlane);
        });

        // 4. 尽头主墙浮雕
        const focalGeo = new THREE.CylinderGeometry(15, 15, 2, 64);
        const focalMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const focal = new THREE.Mesh(focalGeo, focalMat);
        focal.rotation.x = Math.PI / 2;
        focal.position.set(0, 30, -CONFIG.hallLength/2 + 2);
        scene.add(focal);

        // 4.5 尽头主墙两侧石刻（贴墙）
        const backWallSurfaceZ = -CONFIG.hallLength/2 + 0.01;
        const backCarvingPositions = [
            { x: -45, textIdx: 2 },
            { x: 45, textIdx: 3 }
        ];
        backCarvingPositions.forEach(pos => {
            const carveTexture = createWallCarvingTexture(carvingContent[pos.textIdx]);
            const carveMat = new THREE.MeshStandardMaterial({
                map: carveTexture,
                color: 0xffffff,
                roughness: 0.8,
                metalness: 0.1
            });
            const carveGeo = new THREE.PlaneGeometry(10, 38);
            const carvePlane = new THREE.Mesh(carveGeo, carveMat);
            carvePlane.position.set(pos.x, CONFIG.hallHeight/2, backWallSurfaceZ);
            scene.add(carvePlane);
        });

        // 5. 圆形浮雕上的毛笔书法「静」字（置于浮雕前方，避免被遮挡）
        const jingTexture = createSingleCharCalligraphyTexture('静');
        const jingSize = 14;
        const jingGeo = new THREE.PlaneGeometry(jingSize, jingSize);
        const jingMat = new THREE.MeshBasicMaterial({
            map: jingTexture,
            side: THREE.FrontSide,
            transparent: true,
            alphaTest: 0.05
        });
        const jingPlane = new THREE.Mesh(jingGeo, jingMat);
        jingPlane.position.set(0, 30, -CONFIG.hallLength/2 + 4);
        jingPlane.renderOrder = 1;
        scene.add(jingPlane);
    }

    function buildExhibits() {
        const zPositions = [-80, 0, 80];
        const xOffset = 35;

        zPositions.forEach(z => {
            createShowcase(-xOffset, z);
            createShowcase(xOffset, z);
        });

        createShowcase(0, -120, true);
    }

    function createShowcase(x, z, isMain = false) {
        const group = new THREE.Group();
        group.position.set(x, 0, z);

        const baseSize = isMain ? 25 : 16;
        const baseHeight = 11;
        const glassHeight = isMain ? 25 : 18;

        const baseGeo = new THREE.BoxGeometry(baseSize, baseHeight, baseSize);
        const baseMat = new THREE.MeshStandardMaterial({
            color: CONFIG.colorStand,
            roughness: 0.7,
            metalness: 0.1
        });
        const base = new THREE.Mesh(baseGeo, baseMat);
        base.position.y = baseHeight / 2;
        base.castShadow = true;
        base.receiveShadow = true;
        group.add(base);

        const glassGeo = new THREE.BoxGeometry(baseSize, glassHeight, baseSize);
        const glassMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.05,
            roughness: 0.05,
            opacity: 0.15,
            transparent: true,
            transmission: 0.9,
            clearcoat: 1.0,
            clearcoatRoughness: 0.0,
            side: THREE.DoubleSide
        });
        const glass = new THREE.Mesh(glassGeo, glassMat);
        glass.position.y = baseHeight + glassHeight / 2;
        group.add(glass);

        const edges = new THREE.EdgesGeometry(glassGeo);
        const edgeMat = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.2
        });
        const glassEdges = new THREE.LineSegments(edges, edgeMat);
        glassEdges.position.copy(glass.position);
        group.add(glassEdges);

        const spotLight = new THREE.SpotLight(0xfff0dd, CONFIG.spotIntensity);
        spotLight.position.set(0, 50, 0);
        spotLight.target = base;
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.4;
        spotLight.decay = 2;
        spotLight.distance = 80;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.bias = -0.0001;
        group.add(spotLight);

        scene.add(group);
    }

    function setupLighting() {
        const ambient = new THREE.AmbientLight(0xffffff, CONFIG.ambientIntensity);
        scene.add(ambient);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
        hemiLight.position.set(0, 100, 0);
        scene.add(hemiLight);

        const wallLightPositions = [-80, 0, 80];
        wallLightPositions.forEach(z => {
            createWallWasher(-CONFIG.hallWidth/2 + 5, z, 1);
            createWallWasher(CONFIG.hallWidth/2 - 5, z, -1);
        });
    }

    function createWallWasher(x, z, dirX) {
        const light = new THREE.SpotLight(0xffffff, 1.0);
        light.position.set(x - (dirX * 20), 50, z);

        const target = new THREE.Object3D();
        target.position.set(x, 20, z);
        scene.add(target);

        light.target = target;
        light.angle = Math.PI / 5;
        light.penumbra = 1;
        light.decay = 2;
        light.distance = 100;
        light.castShadow = false;
        scene.add(light);
    }

    function setupControls() {
        controls = new THREE.PointerLockControls(camera, document.body);
        const startBtn = document.getElementById('startBtn');
        const overlay = document.getElementById('overlay');

        startBtn.addEventListener('click', () => { controls.lock(); });
        controls.addEventListener('lock', () => {
            overlay.style.opacity = 0;
            setTimeout(() => { overlay.style.display = 'none'; }, 500);
        });
        controls.addEventListener('unlock', () => {
            overlay.style.display = 'flex';
            setTimeout(() => { overlay.style.opacity = 1; }, 10);
        });
        scene.add(controls.getObject());

        const onKeyDown = (e) => {
            switch (e.code) {
                case 'ArrowUp': case 'KeyW': moveForward = true; break;
                case 'ArrowLeft': case 'KeyA': moveLeft = true; break;
                case 'ArrowDown': case 'KeyS': moveBackward = true; break;
                case 'ArrowRight': case 'KeyD': moveRight = true; break;
            }
        };
        const onKeyUp = (e) => {
            switch (e.code) {
                case 'ArrowUp': case 'KeyW': moveForward = false; break;
                case 'ArrowLeft': case 'KeyA': moveLeft = false; break;
                case 'ArrowDown': case 'KeyS': moveBackward = false; break;
                case 'ArrowRight': case 'KeyD': moveRight = false; break;
            }
        };
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        const time = performance.now();
        const delta = (time - prevTime) / 1000;

        if (controls.isLocked) {
            velocity.x -= velocity.x * 5.0 * delta;
            velocity.z -= velocity.z * 5.0 * delta;

            direction.z = Number(moveForward) - Number(moveBackward);
            direction.x = Number(moveRight) - Number(moveLeft);
            direction.normalize();

            const speed = 400.0;

            if (moveForward || moveBackward) velocity.z -= direction.z * speed * delta;
            if (moveLeft || moveRight) velocity.x -= direction.x * speed * delta;

            controls.moveRight(-velocity.x * delta);
            controls.moveForward(-velocity.z * delta);

            const pos = controls.getObject().position;
            const limitX = CONFIG.hallWidth / 2 - 10;
            const limitZ = CONFIG.hallLength / 2 - 10;
            if(pos.x > limitX) pos.x = limitX;
            if(pos.x < -limitX) pos.x = -limitX;
            if(pos.z > limitZ) pos.z = limitZ;
            if(pos.z < -limitZ) pos.z = -limitZ;
        }

        prevTime = time;
        renderer.render(scene, camera);
    }
</script>
</body>
</html>
```

### File: vite.config.js

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: '/src/AR.html',
    proxy: {
      // 代理 OSS 模型请求，绕过 CORS 限制
      '/oss-model': {
        target: 'https://heritage-flow-flow-picture.oss-cn-beijing.aliyuncs.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oss-model/, '/ar/model'),
      },
    },
  },
});

```

