# CustomMachinery 使用教程

## 创建自定义控制器

```js
//不需要使用项目注册事件，项目将自动创建。
StartupEvents.registry("block", (event) => {
  //语法 : event.create("名称空间:方块id", "custommachinery").machine("名称空间:机器id)
  //event.create("kubejs:stone_generator", "custommachinery").machine("custommachinery:stone_generator")

  //如果方块id和机器id相同你就不必使用.machine()
  event.create("custommachinery:power_crusher", "custommachinery");

  //你可以通过使用 .renderType("type") 来指定方块的渲染类型。type 必须是以下三种之一：solid（实体），cutout（剪切）或 translucent（半透明）。默认渲染类型是 translucent（半透明）。
  //event.create("custommachinery:power_crusher", "custommachinery").renderType("solid")

  //如果你想使机器方块完全不透明（使用方块光照），你可以添加 .occlude()。但是请注意，这可能引起渲染问题。
  //event.create("custommachinery:power_crusher", "custommachinery").occlude()
});
```

## 创建控制器 GUI

**在/kubejs/data 下创建一个以你自己定义方块 id 的同名的文件夹**

```tree
├─kubejs
│  ├─data
│  │  └─custommachinery
│  │  │ └─machines
```

**在 custommachinery 文件夹下创建方块 id 同名的 json 文件**

**power_crusher.json**

```json
{
    "name": "测试机器",														   方块名字
    "appearance": {															   外观
        "block": "kubejs:machine/power_crusher_off",						   方块
        "hardness": 1,														   硬度
        "tool_type": ["minecraft:mineable/pickaxe", "forge:mineable/paxel"],   挖掘工具
        "mining_level": "minecraft:needs_stone_tool",						   开采等级
        "running": {														   运行时
            "block": "kubejs:machine/power_crusher_on"
        }
    },
    "gui": [																 机器的GUI
      {
        "texture": "custommachinery:textures/gui/base_background.png",		 机器里面的背景
        "x": 0,
        "y": 0,
        "type": "custommachinery:texture"
      },
      {
        "x": 47,															玩家背包
        "y": 80,
        "type": "custommachinery:player_inventory"
      },
      {
        "id": "input",														物品输入槽
        "x": 67,
        "y": 30,
        "type": "custommachinery:slot"
      },
      {
        "id": "input2",
        "x": 87,
        "y": 30,
        "type": "custommachinery:slot"
      },
      {
        "id": "output1",													物品输出槽
        "x": 149,
        "y": 30,
        "type": "custommachinery:slot"
      },
      {
        "id": "output2",
        "x": 169,
        "y": 30,
        "type": "custommachinery:slot"
      },
      {
        "id": "upgrade",													升级槽
        "x": 116,
        "y": 50,
        "type": "custommachinery:slot"
      },
      {
        "x": 116,															进度
        "y": 30,
        "type": "custommachinery:progress"
      },
      {
        "x": 236,															状态
        "y": 5,
        "type": "custommachinery:status"
      },
      {
        "text": "测试机器",													  文本
        "x": 7,
        "y": 5,
        "type": "custommachinery:text"
      }
    ],
    "components": [															机器的组件
      {
        "mode": "input",
        "id": "input",
        "type": "custommachinery:item"
      },
      {
        "mode": "input",
        "id": "input2",
        "type": "custommachinery:item"
      },
      {
        "mode": "output",
        "id": "output1",
        "type": "custommachinery:item"
      },
      {
        "mode": "output",
        "id": "output2",
        "type": "custommachinery:item"
      },
      {
        "mode": "input",
        "id": "upgrade",
        "type": "custommachinery:item",
        "variant": "custommachinery:upgrade",
        "capacity": 8
      },
      {
          "type": "custommachinery:redstone",								 红石信号
          "poweroutput": 15													 信号为15时暂停机器
      }
    ],
    "catalysts": []
  }
```

![image-20240328214913820](https://gitee.com/andliy/pic/raw/master/img/image-20240328214913820.png)
