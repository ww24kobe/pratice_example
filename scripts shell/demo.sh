#!/bin/bash 

# 一些脚本备注信息
# date 2020/3/19
# vue auto deploy
# echo "hello world"

# 定义变量，读取，使用，命令执行使用$(command) ,不建议使用反引号`command `
version=1.4
echo "版本是：${version} " 

web_dir="/Users/wangwei/Desktop/scripts"
echo ${web_dir}

nowDate="$(date)-$(whoami)-hhh"
echo $nowDate

echo 'this i new text' >> new.txt
echo 'new.txt is created'

# 系统变量
echo  "pid is $$"
echo "whoami is $(whoami)"
echo "home is $HOME"
echo "pwd is $PWD"
echo "shell is $SHELL"
echo "user is $USER"



# if判断
file='1.txt'
if [ -e $file ]
then
    echo "$file exist"
else
    echo "$file not exist"
fi

# if-else
# -f : 判断是否是文件
# -e : 判断文件或目录是否存在
if [ -f $file ]
then
    echo "$file is a file"
else
    echo "$file  not a file"
fi


# -d : 判断是否是目录
dir='pratice'

if [ -d $dir ]
then
    echo "$dir is a dir"
else
    echo "$dir  not a dir"
fi

# 比较 
num1=40
num2=40
if [[ $num1 -gt $num2 ]]
then
    echo "$num1 greater than $num2"
elif [  $num1 -eq $num2 ]
then
    echo "$num1 eq $num2"
else
    echo "$num1 less than $num2"
fi

# 键盘输入
youname=jame
read -p "please enter your name: " yourname
echo "yourname is $yourname"

# 键盘输入内容不可见
read -p "Input passwd:" -s Passwd
echo $Passwd > passws.txt

# -n: 不换行
echo  -n "Enter your name:"   
read  name                   
echo "hello $name,welcome to my program"   

# 退出shell执行
# exit 0

# 分支语法
read -p  "please enter y or n:" answer
case "$answer" in
    [yY] | [yY][eE][sS])
        echo "you agree"
        ;;
    [nN] | [nN][oO])
        echo "you not agree "
        ;;
    *)
        echo 'please enter y or n'
        ;;
esac

# for循环
servers="192.168.1.3 192.168.1.5 192.168.1.9"
for name in $servers
    do
        echo "deploy $name"
done

# 循环执行命令的结果
files=$(ls *.txt)
new='new'
# echo $files
for file in $files
    do
        echo "renameing $file to new-$file"
        mv $file $new-$file
done


# while读取文件内容
line=1
while read -r content
    do
        echo "$line: $content"
        ((line++))
done < "./text.txt"


# 调用函数
function sayHello () {
    echo 'hello world'
}
sayHello

# 获取函数参数
# $0：脚本名称 $1:函数第一个参数，$n:函数第n个参数，$?:脚本是否执行成功，返回0代表成功
function sayHello () {
    echo 'hello world'
    echo "\$0 is $0"
    echo "name is $1"
    echo "age is $2"
    echo "result is $?"
}
sayHello 'kobe' '24'

