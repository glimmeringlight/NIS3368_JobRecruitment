# 启动项目

## 基础环境依赖

项目基于`django4.2.5`框架进行开发，因而需要确保运行环境中的`python>=3.8`。

## 数据库配置

### MySQL

项目开发中使用`mysql>=5.7`作为数据库存储用户数据。首先，请登录数据库管理系统创建一个数据库供项目使用，其中，数据库的名字可以是任意的：
```sql
create database jobrecruitment DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
```
而后，在`JobRecruitment/`下创建`local_settings.py`文件，用于存放自定义配置：
```python
# local_settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'jobrecruitment',  # 数据库名字
        'USER': '',  # 用户名
        'PASSWORD': '',  # 用户密码
        'HOST': '127.0.0.1',  # MySQL ip
        'PORT': '3306',  # 端口号
        # 'TEST': {
        #     'NAME': 'django_db_test'  # 用于单元测试的数据库
        # }
    }
}
```
:::warning
这里存放在`local_settings.py`是为了保证隐私安全，`.gitignore`已经将该文件忽略，不会上传至git。
:::

### 其它数据库

如果使用的不是MySQL，该项目也就不依赖`pymysql`，可不下载；同时，请删除`/JobRecruitment/init.py`中的**所有**代码：

```diff
- import pymysql
- pymysql.install_as_MySQLdb()
```

而后，再根据不同的数据库配置`local_settings.py`。



## 邮件服务配置

为保证网站安全性，在部分敏感操作界面均设计了邮件验证码。为了保证这部分功能可用，需要进行邮件服务配置。在`/Jobrecruitment/local_settings.py`中配置：

```python
# /Jobrecruitment/local_settings.py

EMAIL_HOST = ""  # 服务器，例如QQ邮箱：smtp.qq.com
EMAIL_PORT = 25  # 一般情况下都为25
EMAIL_HOST_USER = "user@example.com"  # 账号
EMAIL_HOST_PASSWORD = ""  # 您的授权码
EMAIL_USE_TLS = True
EMAIL_FROM = "user@example.com"  # 邮箱来自（这里是和账号一样的）
EMAIL_TITLE = '邮箱激活'  # 邮件标题
```






## 快速启动环境

首先，为项目安装需要的依赖包，运行：
```bash
pip install -r ./requirements.txt
```

::: tip
如果`pip install`过程中提示部分包找不到指定版本，优先考虑更换镜像源；或者，从`requirements.txt`中移除对于版本的要求也可。
:::

而后，执行下面的命令完成数据库的迁移：

```bash
python manage.py makemigrations
python manage.py migrate
```

:::tip

如果后台管理员需要直接控制数据，不必在数据库管理系统中管理，可以新建超级用户并通过`/admin/`访问后台界面：

```bash
python manage.py createsuperuser
```

:::

最后，运行下面的命令在`8000`端口启动项目：

```bash
python manage.py runserver 8000
```

