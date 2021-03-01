# 原生小程序Less写法vscode版本
# 1, Ctrl+Shift+X 打开扩展 - 搜索 easy Less 并安装
# 2, Ctrl+ 逗号 打开设置 - 搜索 easy Less config 并选择 点在setings.json中编辑 把下面配置粘贴进去（注意配置项间隔的逗号不要漏了）
# "less.compile": {
#       // "compress":  true,  // 是否删除多余空白字符
#       // "sourceMap": true,  // 是否创建文件目录树，true的话会自动生成一个 .css.map 文件
#        "outExt": ".wxss" // 输出文件的后缀,默认为.css
# }
# 3, 在你的wxml同级目录下新建一个 文件名.less 书写less语法的css并保存，同级目录下就会自动生成一个 文件名.wxss的文件
# ！！！备注：样式开发完成可删除多余的dist文件(不删除可能造成项目本地环境调试卡顿)