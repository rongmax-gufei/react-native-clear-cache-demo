# README
| Author        |     E-mail      |
| ------------- |:---------------:|
| gufei         | 799170694@qq.com|

# RNClearAppCacheExample
[react-native-clear-app-cache 源码](https://github.com/midas-gufei/react-native-clear-app-cache)

### 实例代码说明：
```
*   导入module import clear from 'react-native-clear-cache';
*   clear.clearAppCache(() => {
      console.log("清理缓存成功");
    });
*   clear.getAppCacheSize((value, unit) => {
       console.log("缓存大小", value);   
       console.log("缓存单位", unit); 
    });
```
