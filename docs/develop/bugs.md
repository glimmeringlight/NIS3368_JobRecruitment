# 已知问题

## 部署问题

### 静态文件在`DEBUG=False`下存在加载错误

**问题已定位**。

在`DEBUG=TRUE`下，静态文件由django自行导航，因此不会产生该错误。然而，`DEBUG=FALSE`下需要自行设置路由。因此，只需要在`settings.py`增加`STATIC_ROOT='static'`并且将静态文件移入`/statics/`文件夹下即可。部署前，执行
```bash
python manage.py collectstatic
```
问题本能得以解决。

然而由于初期开发时用户头像一并储存在`/static`目录下，而显然其不能算静态文件：会随着用户上传新头像而改变。因此，本bug悬而未决。