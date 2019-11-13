# 构建
yarn build

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git config --global user.name  "zhangxin0214"
git config --global user.email  "zhangxin910214@163.com"
git remote add origin git@github.com:zhangxin0214/docs.git
# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push origin master

cd -