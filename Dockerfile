# 表示继承什么环境 就会拥有什么环境
FROM nginx

# LABEL单纯只是标识一下 没其他意思
LABEL name = "vue-front"
LABEL version = '2.0'

#把当前容器的所有页面拷贝到镜像的nginx指定文件夹里
COPY ./dist /usr/share/nginx/html
COPY ./vue-front.conf /etc/nginx/conf.d


#EXPOSE向外暴露一个端口
EXPOSE 80
