# 第六章 键、花键、无键连接和销连接

![Shimano XTR M9111上的花键](https://oss.muzing.top/image/Shimano_XTR_FH-M9111.jpg)

## 6-1 键连接

### 键连接的功能、分类、结构形式及应用

#### 平键连接

**普通平键**：

按构造分类：

- A型 圆头
- B型 平头
- C型 单圆头

一般 A 型键可不标出“A”，对于 B 型或 C 型键，需将“键”标为“键B”或“键C”

**薄型平键**：

键的高度为普通平键的 60% ~ 70%

传递扭矩的能力较低

使用场景：薄壁结构、空心轴、其他径向尺寸受限的场合

**导向平键与滑键**:

被链接的毂类零件在工作过程中必须在轴上作轴向移动

导向平键：较长的平键，用螺丝固定在轴上的键槽中

滑键：当零件需滑移的距离较大时；固定在轮毂上

![圆头滑键动画](https://oss.muzing.top/image/domm_圆头滑键.gif)

#### 半圆键连接

**优点**：工艺性较好、装配方便、尤其适用于锥形轴端与轮毂的连接

缺点：轴上键槽较深，对轴的强度削弱较大

一般只用于轻载静连接中

#### 楔键连接

键的上下两面是工作面

1 : 100 的斜度

靠键的楔紧作用来传递扭矩

可以承受单向的轴向载荷，对轮毂起到单向的轴向固定作用

#### 切向键连接

一对斜度为 1 : 100 的楔键组成

![切向键](https://oss.muzing.top/image/domm_切向键.jpg)

键槽对轴的削弱较大，常用于直径大于 100 mm 的轴上

### 键的选择和键连接强度计算

键的选择：

- 类型选择
  - 结构特点
  - 使用要求
  - 工作条件
- 尺寸选择
  - 按负荷标准规格和强度要求来取定
  - 截面尺寸（键宽 $$b$$ × 键高 $$h$$）：根据键的标准选定
  - 长度 $$L$$：键长等于或略短于轮毂的长度

普通平键的主要尺寸：查表

普通平键连接的强度条件：

$$
\sigma_{bs} = \frac{2000T}{kld} = \frac{4000T}{hld} \leq [\sigma_{bs}]
$$
导向平键连接、滑键连接的强度条件：

$$
p = \frac{2000T}{kld} = \frac{4000T}{hld} = \leq [p]
$$

| 字母符号          | 含义                                     | 单位  | 备注                             |
| ----------------- | ---------------------------------------- | ----- | -------------------------------- |
| $$T$$             | 传递的扭矩                               | N · m | $$T = Fy \approx F \frac{d}{2}$$ |
| $$k$$             | 键与轮毂键槽的接触高度                   | mm    | $$k \approx 0.5 h$$              |
| $$l$$             | 键的工作长度                             | mm    | TODO                             |
| $$d$$             | 轴的直径                                 | mm    |                                  |
| $$[\sigma_{bs}]$$ | 键、轴、轮毂三者中最弱材料的许用挤压应力 | MPa   | 查表                             |
| $$[p]$$           | 键、轴、轮毂三者中最弱材料的许用压力     | MPa   | 查表                             |

TODO 半圆键连接强度计算

TODO 楔键连接简化强度计算

进行强度校核后，如果强度不够，则采用双键：

- 两个平键布置：沿周向间隔 180°
- 两个半圆键：轴的同一条母线上
- 两个楔键：沿周向相隔 90° ~ 120°
- 强度校核中只按 1.5 个键计算（考虑到两键上载荷分配的不均匀性）

增加键的长度：在轮毂允许适当加长情况下，可以增加键的长度，以提高单键连接的承载能力。一般键长不宜超过$$(1.5 \sim 1.8)d$$

## 6-2 花键连接

Spline

### 花键连接的类型、特点和应用

**优点**：

- 连接受力较为均匀
- 齿根处应力集中较小，轴与毂的强度削弱较少
- 齿数较多，总接触面积大，可承受较大的载荷
- 轴上零件与轴的对中性好
- 导向性较好
- 可用切削的方法提高加工精度及连接质量

**缺点**：齿根仍有应力集中；有时需用专门设备加工；成本较高

**适用场景**：定心精度要求高、载荷大或经常滑移的连接

**矩形花键**：

轻系列（静连接或轻载连接）和中系列（中等载荷的连接）

小径定心（外花键和内花键的小径为配合面）

定心精度高、定心稳定性好

能用磨削的方法消除热处理引起的变形

**渐开线花键**：

分度圆压力角30° 45°

齿形定心，齿受载时，齿上的径向力能起到自动定心作用，有利于各齿均匀承载

### 花键连接强度计算

静连接：

$$
\sigma_{bs} = \frac{2000T}{\psi zhld_m} \leq [\sigma_{bs}]
$$

动连接：

$$
p = \frac{2000T}{\psi zhld_m} \leq [p]
$$

| 字母符号          | 含义                              |
| ----------------- | --------------------------------- |
| $$\psi$$          | 载荷分配不均系数，见下文注解      |
| $$z$$             | 花键的齿数                        |
| $$l$$             | 齿的工作长度，mm                  |
| $$h$$             | 花键齿侧面的工作高度，见下文注解  |
| $$d_m$$           | 花键的平均直径，见下文注解        |
| $$[\sigma_{bs}]$$ | 花键连接的许用挤压应力，MPa，查表 |
| $$[p]$$           | 花键连接的需用压力，MPa，查表     |

载荷分配不均系数：与齿数多少有关，一般取0.7 ~ 0.8，齿数多时取偏小值

花键齿侧面的工作高度：矩形花键时，$$h = \frac{D-d}{2} - 2C$$ ，$$D$$ 为外花键的大径，$$d$$ 为内花键的小径，$$C$$ 为倒角尺寸

TODO

## 6-3 无键连接

凡是轴与毂的连接不用键或花键时，统称为无键连接

### 型面连接

一种把安装轮毂的那一段轴做成表面光滑而非圆形截面的柱体或非圆形截面的锥体，并在轮毂上制成相应的孔，轴与毂孔相配合而构成的连接

优点：良好的对中性、可传递较大的扭矩

缺点：（曾经）加工非圆形孔困难

常用型面曲线：摆线、等距曲线

其他截面形状：方形、正六边形、带切口的圆形

### 胀紧连接

在毂孔与轴之间装入**胀紧连接套**（简称胀套），在轴向力作用下，同时胀紧轴与毂而构成的一种静连接

![Z11胀套](https://oss.muzing.top/image/domm_胀套.jpg)

**优点**：

定心性好、拆装方便、引起的应力集中较小、承载能力强、有安全保护作用

**缺点**：受到结构尺寸的限制

[GB/T 28701-2012 胀紧联结套](https://muzing-bucket0.oss-cn-huhehaote.aliyuncs.com/documents/GBT-28701-2012.pdf)

传递扭矩时：

$$
T \leq [T]
$$

传递轴向力时：

$$
F_a \leq [F_a]
$$

传递联合作用的转矩和轴向力时：

$$
\sqrt{F^2_a + (\frac{2000T}{d}) ^2} \leq [F_a]
$$

| 字母符号  | 含义                     |
| --------- | ------------------------ |
| $$T$$     | 传递的转矩，N⋅ m         |
| $$[T]$$   | 一个胀套的额定转矩，N⋅ m |
| $$F_a$$   | 传递的轴向力，N          |
| $$[F_a]$$ | 一个胀套的额定轴向力，N  |
| $$d$$     | 胀套内径，mm             |

一个胀套不能满足要求时，可用两个以上的胀套串联使用，其总额定载荷（以转矩为例）为：

$$
[T_n] = m[T]
$$

| 字母符号  | 含义                           |
| --------- | ------------------------------ |
| $$[T_n]$$ | $$n$$ 个胀套的总额定转矩，N⋅ m |
| $$m$$     | 额定载荷系数，查表             |

由于单个胀套传递载荷的能力将随胀套数目的增加而降低，故胀套不宜过多

## 6-4 销连接

销按**用途**分类：

- 定位销：固定零件之间的相对位置

- 连接销：用于连接，可传递不大的载荷
- 安全销：作为安全装置中的过载剪断元件

销按**类型**分类：

1. 圆柱销
   - 靠过盈配合固定在销孔中
   - 经多次拆装会降低其定位精度和可靠性
   - 直径偏差有 h8 和 m6 两种
2. 圆锥销
   - 1 : 50 的锥度，在受横向力时可以自锁
   - 拆装方便，定位精度高，可多次装拆而不影响定位精度
   - 端部带螺纹的圆锥销：盲孔或拆卸困难的场合
   - 开尾圆锥销：有冲击、振动的场合
3. 槽销
   - 碾压或模锻出的三条纵向沟槽
   - 不易松脱，能承受振动和变载荷
   - 安装槽销的孔不需要铰制，加工方便
   - 可多次拆装
4. 销轴
   - 用于零件的铰接处，构成铰链连接
   - 销轴通常用开口销锁定
5. 开口销
   - 装配时将尾部分开，以防脱出
   - 还常用于螺纹连接的放松装置中

**选用设计**：

1. 定位销
   - 不做强度校核计算
   - 直径按结构确定
   - 销装入每一被连接件内的长度为销直径的 1 ~ 2倍
   - 数目一般不少于两个
2. 连接销
   - 类型按工作要求选定
   - 尺寸可根据连接的结构特点按经验或规范确定
   - 必要时再按剪切和挤压强度条件进行校核计算
3. 安全销
   - 销的直径应按过载时被剪断的条件确定

销的**材料**：

- 35钢、45钢（开口销为低碳钢）
- 许用应力 $$[\tau]$$ = 80 MPa
- 许用挤压应力 $$[\sigma_{bs}]$$ ：查表