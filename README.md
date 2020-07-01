# Learn Type Vue

## 说明

* 这是一个使用 `typescript`的`vue`项目，并且使用了类语法（`vue-class-component` + `vue-property-decorator` + `vuex-class`）
* 使用了`Element-ui`

## 提交信息规范

`type(scope): subject(#issue)`

| type | 解释 |
| - | - |
|feat     |新增功能                |
|fix      |修复/修改               |
|docs     |文档修改                |
|refactor |重构/代码结构变动       |
|build    |构建相关                |
|style    |样式，无关逻辑          |
|perf     |性能优化                |
|chore    |非src/test的琐碎工作    |
|test     |测试文件                |
|ci       |CI/CD文件               |
|revert   |撤销                    |

## 文件命名规则

```
 .ts: camelCase
 .d.ts: kebab-case
 .vue: camelCase | PascalCase
 .dir: camelCase | PascalCase
```

自定义组件采用统一的前缀开头，以字母c开头，例`cHeader.vue`


## 代码风格

```json
{
  "useTabs": false, // 不用tab
  "tabWidth": 2, // 缩进2
  "semi": true, // 分号结尾
  "bracketSpacing": true, // { 括号前后留空格 }
  "arrowParens": "avoid", // 箭头函数单参不要圆括号 x => {}
  "spaced-comment": "warn" // 注释符后跟一空格
}

```
