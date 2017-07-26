# my-project

> my first vue project



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8888
npm run dev

# build for production with minification
npm run build
```


## 说明

- 本模板采用Vue.js和ES6语法开发，对两者不熟悉的建议先去学习一下
  1. 把页面分割成一个一个的组件，每个组件在`src/components`下面新建一个文件夹，文件夹名称表示组件名，文件夹下面包含3个文件，.vue文件用来搭建组件的结构，.scss文件用来编写组件的样式，.js文件用来写功能、操作，以及数据绑定。然后在.vue里面分别引用.scss文件和.js文件。
  2. 像数据这样的json文件，放到static文件夹下面，这样可以保证数据的引用路径一致。
  3. 引用static文件夹下面的文件的方式如下：
     - `axios.get('./static/data.json').then(function (response) {});`
     - 这个路径是webpack打包后数据文件的路径，这样在预览和打包后路径都不会出错。
  4. `src/components/CustomCom`文件夹下面是一下自定义好的组件。



## AnimateCustom

> 出入场动画容器

### 属性

| 名称      | 类型     | 默认值           | 描述                     |
| ------- | ------ | ------------- | ---------------------- |
| aniType | string | 'fade-bottom' | 动画类型                   |
| ratio   | number | 0.85          | 入场动画出发点，可为屏幕百分比，或具体像素值 |

### aniType取值说明

- custom(可以为任意值)：自定义
- fade：原地淡入
- fade-bottom：从下往上位移+淡入（默认值）
- fade-left：从左往右位移+淡入
- fade-right：从右往左位移+淡入

### 可选值示例

```html
<AnimateCustom aniType="fade-bottom" ratio="0.85">
    <h3>Animate Type: Bottom->Top and Opacity(0->1)</h3>
    <h3>Animate Start Ratio: 0.85</h3>
    <p>{{desc3}}</p>
</AnimateCustom>
```

### custom示例

```vue
<AnimateCustom aniType="custom" ratio="0.85">
    <h3>Animate Type: User Defined Animation, Scale(0.3->1) and Opacity(0->1)</h3>
    <h3>Animate Start Ratio: 0.85</h3>
    <p>{{desc6}}</p>
</AnimateCustom>
```

```sass
.animate-custom-element.custom{
    opacity: 0;
    transform: scale(0.3);
    &[data-active]{
        opacity: 1;
        transform: scale(1);
        transition: opacity 0.5s, transform 0.5s;
    }
}
```



## 注释说明

- 直接访问数据只能访问static文件夹下面的数据