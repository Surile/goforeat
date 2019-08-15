### 为何要进行升级？ 

google应用市场在8月后不再支持非64位应用

---

### 升级步骤

1. 查看项目，[rn-diff-purge](https://github.com/react-native-community/rn-diff-purge);或者直接点击 [此处](https://react-native-community.github.io/upgrade-helper/)
2. 输入自己当前的rn版本和将要升级的版本，登出每个文件的diff
3. 将自己的本地文件替换成网页上新增的内容，注意ios那些依赖文件可以不加，可以通过手动在build setting里link binary或者使用pod install
4. 若升级代码后，在android studio升级会提示更新到gradle最新版，**请不要点😂**
5. 若要升级到androidx，则需要对依赖引用进行替换，详细替换规则请参考[此处](https://developer.android.com/jetpack/androidx/migrate)
6. 打包后android apk体积会明显增大，因为32位和64.so文件都被打在包里，如果要缩小包的体积，请参考google 的 bundles 分拆app 减少打包体积。 [传送门](https://blog.csdn.net/wuzi_csdn/article/details/88824438)

---
